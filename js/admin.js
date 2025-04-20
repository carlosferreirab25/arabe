// Função para criar um produto individual
function criarProduto(id, nome, descricao, preco, imagem, categoria) {
    return {
        id: id,
        nome: nome,
        descricao: descricao,
        preco: preco,
        imagem: imagem,
        categoria: categoria
    };
}

// Função para adicionar um novo produto à lista
function adicionarProduto(produto) {
    produtos.push(produto);
    salvarProdutosLocalStorage();
}

// Função para remover um produto da lista
function removerProduto(id) {
    const index = produtos.findIndex(produto => produto.id === id);
    if (index !== -1) {
        produtos.splice(index, 1);
        salvarProdutosLocalStorage();
    }
}

// Função para atualizar um produto existente
function atualizarProduto(id, novosDados) {
    const index = produtos.findIndex(produto => produto.id === id);
    if (index !== -1) {
        produtos[index] = { ...produtos[index], ...novosDados };
        salvarProdutosLocalStorage();
    }
}

// Função para salvar produtos no localStorage
function salvarProdutosLocalStorage() {
    localStorage.setItem('produtos', JSON.stringify(produtos));
}

// Função para carregar produtos do localStorage
function carregarProdutosLocalStorage() {
    const produtosSalvos = localStorage.getItem('produtos');
    if (produtosSalvos) {
        return JSON.parse(produtosSalvos);
    }
    return null;
}

// Função para atualizar o número de WhatsApp em todo o site
function atualizarNumeroWhatsApp(novoNumero) {
    // Atualizar a variável global
    whatsappNumber = novoNumero;
    
    // Atualizar links de WhatsApp nos produtos
    const produtosContainer = document.querySelector('.product-grid') || document.querySelector('.products-container');
    if (produtosContainer) {
        const produtosExibidos = produtosContainer.querySelectorAll('.product-card');
        produtosExibidos.forEach(card => {
            const produtoId = parseInt(card.dataset.id);
            const produto = produtos.find(p => p.id === produtoId);
            if (produto) {
                const botaoWhatsApp = card.querySelector('.whatsapp-btn');
                if (botaoWhatsApp) {
                    botaoWhatsApp.href = criarLinkWhatsApp(produto);
                }
            }
        });
    }
    
    // Atualizar links de WhatsApp no rodapé e cabeçalho
    const linksWhatsApp = document.querySelectorAll('a.whatsapp-btn');
    linksWhatsApp.forEach(link => {
        if (!link.closest('.product-card')) {
            link.href = `https://wa.me/${novoNumero}`;
        }
    });
    
    // Atualizar textos com número de WhatsApp
    const textoWhatsApp = document.querySelectorAll('.footer-contact p');
    textoWhatsApp.forEach(texto => {
        if (texto.innerHTML.includes('WhatsApp')) {
            const numeroFormatado = formatarNumeroTelefone(novoNumero);
            texto.innerHTML = `<i class="fab fa-whatsapp"></i> ${numeroFormatado}`;
        }
    });
    
    // Salvar o novo número no localStorage
    localStorage.setItem('whatsappNumber', novoNumero);
    
    console.log(`Número de WhatsApp atualizado para: ${novoNumero}`);
}

// Função para formatar número de telefone
function formatarNumeroTelefone(numero) {
    // Remove qualquer caractere não numérico
    const apenasNumeros = numero.replace(/\D/g, '');
    
    // Verifica se é um número brasileiro (começando com 55)
    if (apenasNumeros.startsWith('55')) {
        // Formato: (XX) XXXXX-XXXX
        const ddd = apenasNumeros.substring(2, 4);
        const parte1 = apenasNumeros.substring(4, 9);
        const parte2 = apenasNumeros.substring(9, 13);
        return `(${ddd}) ${parte1}-${parte2}`;
    } else {
        // Se não for um número brasileiro, retorna como está
        return numero;
    }
}

// Função para criar um modal de edição de produto
function criarModalEdicaoProduto(produto = null) {
    // Remover modal existente, se houver
    const modalExistente = document.getElementById('modal-editar-produto');
    if (modalExistente) {
        modalExistente.remove();
    }
    
    // Criar o modal
    const modal = document.createElement('div');
    modal.id = 'modal-editar-produto';
    modal.className = 'modal';
    modal.style.display = 'block';
    
    // Conteúdo do modal
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${produto ? 'Editar Produto' : 'Adicionar Novo Produto'}</h2>
            <form id="form-produto">
                <div class="form-group">
                    <label for="nome">Nome do Produto</label>
                    <input type="text" id="nome" name="nome" value="${produto ? produto.nome : ''}" required>
                </div>
                <div class="form-group">
                    <label for="descricao">Descrição</label>
                    <textarea id="descricao" name="descricao" required>${produto ? produto.descricao : ''}</textarea>
                </div>
                <div class="form-group">
                    <label for="preco">Preço (R$)</label>
                    <input type="number" id="preco" name="preco" step="0.01" value="${produto ? produto.preco : ''}" required>
                </div>
                <div class="form-group">
                    <label for="imagem">URL da Imagem</label>
                    <input type="text" id="imagem" name="imagem" value="${produto ? produto.imagem : ''}" required>
                </div>
                <div class="form-group">
                    <label for="categoria">Categoria</label>
                    <select id="categoria" name="categoria" required>
                        <option value="masculino" ${produto && produto.categoria === 'masculino' ? 'selected' : ''}>Masculino</option>
                        <option value="feminino" ${produto && produto.categoria === 'feminino' ? 'selected' : ''}>Feminino</option>
                        <option value="unissex" ${produto && produto.categoria === 'unissex' ? 'selected' : ''}>Unissex</option>
                    </select>
                </div>
                <button type="submit" class="btn">${produto ? 'Atualizar Produto' : 'Adicionar Produto'}</button>
            </form>
        </div>
    `;
    
    // Adicionar o modal ao corpo do documento
    document.body.appendChild(modal);
    
    // Adicionar estilos CSS para o modal
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0,0,0,0.4);
        }
        
        .modal-content {
            background-color: white;
            margin: 10% auto;
            padding: 20px;
            border-radius: 8px;
            width: 80%;
            max-width: 600px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
        }
        
        .close:hover {
            color: black;
        }
    `;
    document.head.appendChild(style);
    
    // Adicionar evento de fechamento do modal
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Fechar o modal ao clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Adicionar evento de envio do formulário
    const form = modal.querySelector('#form-produto');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const novosDados = {
            nome: form.nome.value,
            descricao: form.descricao.value,
            preco: parseFloat(form.preco.value),
            imagem: form.imagem.value,
            categoria: form.categoria.value
        };
        
        if (produto) {
            // Atualizar produto existente
            atualizarProduto(produto.id, novosDados);
        } else {
            // Adicionar novo produto
            const novoId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) + 1 : 1;
            const novoProduto = criarProduto(
                novoId,
                novosDados.nome,
                novosDados.descricao,
                novosDados.preco,
                novosDados.imagem,
                novosDados.categoria
            );
            adicionarProduto(novoProduto);
        }
        
        // Recarregar a página para mostrar as alterações
        window.location.reload();
    });
}

// Função para criar modal de configurações
function criarModalConfiguracoes() {
    // Remover modal existente, se houver
    const modalExistente = document.getElementById('modal-configuracoes');
    if (modalExistente) {
        modalExistente.remove();
    }
    
    // Criar o modal
    const modal = document.createElement('div');
    modal.id = 'modal-configuracoes';
    modal.className = 'modal';
    modal.style.display = 'block';
    
    // Conteúdo do modal
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Configurações do Site</h2>
            <form id="form-configuracoes">
                <div class="form-group">
                    <label for="whatsapp">Número de WhatsApp (com código do país)</label>
                    <input type="text" id="whatsapp" name="whatsapp" value="${whatsappNumber}" required>
                    <small>Exemplo: 5511998871656 (55 = Brasil, 11 = DDD, 998871656 = número)</small>
                </div>
                <button type="submit" class="btn">Salvar Configurações</button>
            </form>
        </div>
    `;
    
    // Adicionar o modal ao corpo do documento
    document.body.appendChild(modal);
    
    // Adicionar estilos CSS para o modal (se ainda não existirem)
    if (!document.querySelector('style')) {
        const style = document.createElement('style');
        style.textContent = `
            .modal {
                display: none;
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: auto;
                background-color: rgba(0,0,0,0.4);
            }
            
            .modal-content {
                background-color: white;
                margin: 10% auto;
                padding: 20px;
                border-radius: 8px;
                width: 80%;
                max-width: 600px;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }
            
            .close {
                color: #aaa;
                float: right;
                font-size: 28px;
                font-weight: bold;
                cursor: pointer;
            }
            
            .close:hover {
                color: black;
            }
            
            small {
                display: block;
                margin-top: 5px;
                color: #666;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Adicionar evento de fechamento do modal
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Fechar o modal ao clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Adicionar evento de envio do formulário
    const form = modal.querySelector('#form-configuracoes');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const novoWhatsapp = form.whatsapp.value.trim();
        atualizarNumeroWhatsApp(novoWhatsapp);
        
        modal.style.display = 'none';
        
        // Mostrar mensagem de sucesso
        alert('Configurações salvas com sucesso!');
    });
}

// Adicionar botão de administração no rodapé (apenas para fins de demonstração)
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se já existe um botão de administração
    if (!document.querySelector('.admin-button')) {
        // Criar botão de administração
        const adminButton = document.createElement('div');
        adminButton.className = 'admin-button';
        adminButton.innerHTML = '<i class="fas fa-cog"></i>';
        adminButton.title = 'Administração';
        
        // Estilizar o botão
        adminButton.style.position = 'fixed';
        adminButton.style.bottom = '20px';
        adminButton.style.right = '20px';
        adminButton.style.width = '50px';
        adminButton.style.height = '50px';
        adminButton.style.borderRadius = '50%';
        adminButton.style.backgroundColor = '#5e5e5e';
        adminButton.style.color = 'white';
        adminButton.style.display = 'flex';
        adminButton.style.justifyContent = 'center';
        adminButton.style.alignItems = 'center';
        adminButton.style.cursor = 'pointer';
        adminButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        adminButton.style.zIndex = '999';
        
        // Adicionar o botão ao corpo do documento
        document.body.appendChild(adminButton);
        
        // Criar menu de administração
        const adminMenu = document.createElement('div');
        adminMenu.className = 'admin-menu';
        adminMenu.innerHTML = `
            <div class="admin-menu-item" id="btn-adicionar-produto">Adicionar Produto</div>
            <div class="admin-menu-item" id="btn-configuracoes">Configurações</div>
        `;
        
        // Estilizar o menu
        adminMenu.style.position = 'fixed';
        adminMenu.style.bottom = '80px';
        adminMenu.style.right = '20px';
        adminMenu.style.backgroundColor = 'white';
        adminMenu.style.borderRadius = '8px';
        adminMenu.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        adminMenu.style.display = 'none';
        adminMenu.style.zIndex = '998';
        
        // Estilizar os itens do menu
        const style = document.createElement('style');
        style.textContent = `
            .admin-menu-item {
                padding: 12px 20px;
                cursor: pointer;
                transition: background-color 0.3s;
                white-space: nowrap;
            }
            
            .admin-menu-item:hover {
                background-color: #f5f5f5;
            }
            
            .admin-menu-item:first-child {
                border-radius: 8px 8px 0 0;
            }
            
            .admin-menu-item:last-child {
                border-radius: 0 0 8px 8px;
            }
        `;
        document.head.appendChild(style);
        
        // Adicionar o menu ao corpo do documento
        document.body.appendChild(adminMenu);
        
        // Adicionar evento de clique ao botão de administração
        adminButton.addEventListener('click', () => {
            adminMenu.style.display = adminMenu.style.display === 'none' ? 'block' : 'none';
        });
        
        // Adicionar eventos aos itens do menu
        document.getElementById('btn-adicionar-produto').addEventListener('click', () => {
            adminMenu.style.display = 'none';
            criarModalEdicaoProduto();
        });
        
        document.getElementById('btn-configuracoes').addEventListener('click', () => {
            adminMenu.style.display = 'none';
            criarModalConfiguracoes();
        });
        
        // Fechar o menu ao clicar fora dele
        document.addEventListener('click', (event) => {
            if (!adminButton.contains(event.target) && !adminMenu.contains(event.target)) {
                adminMenu.style.display = 'none';
            }
        });
    }
    
    // Carregar produtos do localStorage, se disponíveis
    const produtosSalvos = carregarProdutosLocalStorage();
    if (produtosSalvos) {
        produtos = produtosSalvos;
    }
    
    // Carregar número de WhatsApp do localStorage, se disponível
    const whatsappSalvo = localStorage.getItem('whatsappNumber');
    if (whatsappSalvo) {
        whatsappNumber = whatsappSalvo;
    }
});
