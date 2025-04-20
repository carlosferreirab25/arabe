// Dados dos produtos (simulando um banco de dados)
const produtos = [
    {
        id: 1,
        nome: "Perfume Árabe Masculino Luxo",
        descricao: "Fragrância intensa e marcante com notas amadeiradas e especiarias",
        preco: 189.90,
        imagem: "images/perfume-arabe-masculino-1.jpg",
        categoria: "masculino"
    },
    {
        id: 2,
        nome: "Perfume Árabe Feminino Floral",
        descricao: "Fragrância delicada com notas florais e toques de baunilha",
        preco: 179.90,
        imagem: "images/perfume-arabe-feminino-1.jpg",
        categoria: "feminino"
    },
    {
        id: 3,
        nome: "Perfume Árabe Unissex Premium",
        descricao: "Fragrância versátil com notas cítricas e amadeiradas",
        preco: 199.90,
        imagem: "images/perfume-arabe-unissex-1.jpg",
        categoria: "unissex"
    },
    {
        id: 4,
        nome: "Perfume Árabe Masculino Oud",
        descricao: "Fragrância exótica com notas de oud e especiarias orientais",
        preco: 219.90,
        imagem: "images/perfume-arabe-masculino-2.jpg",
        categoria: "masculino"
    },
    {
        id: 5,
        nome: "Perfume Árabe Feminino Oriental",
        descricao: "Fragrância sofisticada com notas orientais e âmbar",
        preco: 209.90,
        imagem: "images/perfume-arabe-feminino-2.jpg",
        categoria: "feminino"
    },
    {
        id: 6,
        nome: "Perfume Árabe Unissex Intenso",
        descricao: "Fragrância marcante com notas de sândalo e almíscar",
        preco: 229.90,
        imagem: "images/perfume-arabe-unissex-2.jpg",
        categoria: "unissex"
    }
];

// Número de WhatsApp do vendedor
const whatsappNumber = "5511998871656";

// Função para formatar preço em reais
function formatarPreco(preco) {
    return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função para calcular parcelas
function calcularParcelas(preco, parcelas = 6) {
    return (preco / parcelas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função para criar link do WhatsApp
function criarLinkWhatsApp(produto) {
    const mensagem = `Tenho interesse neste produto: ${produto.nome}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
}

// Função para criar card de produto
function criarCardProduto(produto) {
    return `
        <div class="product-card" data-id="${produto.id}">
            <div class="product-image">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="product-info">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <div class="product-price">${formatarPreco(produto.preco)}</div>
                <div class="product-installment">ou 6x de ${calcularParcelas(produto.preco)} sem juros</div>
                <a href="${criarLinkWhatsApp(produto)}" class="whatsapp-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Comprar pelo WhatsApp
                </a>
            </div>
        </div>
    `;
}

// Função para exibir produtos em destaque na página inicial
function exibirProdutosDestaque() {
    const produtosDestaque = produtos.slice(0, 3); // Pega os 3 primeiros produtos
    const produtosContainer = document.querySelector('.product-grid');
    
    if (produtosContainer) {
        produtosContainer.innerHTML = produtosDestaque.map(produto => criarCardProduto(produto)).join('');
    }
}

// Função para exibir todos os produtos na página de produtos
function exibirTodosProdutos() {
    const produtosContainer = document.querySelector('.products-container');
    
    if (produtosContainer) {
        produtosContainer.innerHTML = produtos.map(produto => criarCardProduto(produto)).join('');
    }
}

// Função para exibir produtos por categoria
function exibirProdutosPorCategoria(categoria) {
    const produtosFiltrados = produtos.filter(produto => produto.categoria === categoria);
    const produtosContainer = document.querySelector('.products-container');
    
    if (produtosContainer) {
        produtosContainer.innerHTML = produtosFiltrados.map(produto => criarCardProduto(produto)).join('');
    }
}

// Função para alternar o menu mobile
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Exibir produtos em destaque na página inicial
    exibirProdutosDestaque();
    
    // Verificar qual página está sendo exibida e carregar os produtos apropriados
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('produtos.html')) {
        exibirTodosProdutos();
    } else if (currentPage.includes('masculinos.html')) {
        exibirProdutosPorCategoria('masculino');
    } else if (currentPage.includes('femininos.html')) {
        exibirProdutosPorCategoria('feminino');
    } else if (currentPage.includes('unissex.html')) {
        exibirProdutosPorCategoria('unissex');
    }
    
    // Adicionar evento de clique ao ícone do menu mobile
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    if (mobileMenuIcon) {
        mobileMenuIcon.addEventListener('click', toggleMobileMenu);
    }
});

// Função para atualizar o número de WhatsApp
function atualizarNumeroWhatsApp(novoNumero) {
    whatsappNumber = novoNumero;
    // Recarregar os produtos para atualizar os links
    exibirProdutosDestaque();
    
    const currentPage = window.location.pathname;
    if (currentPage.includes('produtos.html')) {
        exibirTodosProdutos();
    } else if (currentPage.includes('masculinos.html')) {
        exibirProdutosPorCategoria('masculino');
    } else if (currentPage.includes('femininos.html')) {
        exibirProdutosPorCategoria('feminino');
    } else if (currentPage.includes('unissex.html')) {
        exibirProdutosPorCategoria('unissex');
    }
}
