// Script para integrar os produtos coletados do site original
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se os produtos originais estão disponíveis
    if (typeof produtosOriginais !== 'undefined') {
        console.log('Integrando produtos originais:', produtosOriginais.length);
        
        // Para cada produto original
        produtosOriginais.forEach(produtoOriginal => {
            // Verificar se o produto já existe no array de produtos
            const produtoExistente = produtos.find(p => p.nome === produtoOriginal.nome);
            
            if (!produtoExistente) {
                // Determinar a categoria com base nas categorias do produto original
                let categoria = 'unissex';
                if (produtoOriginal.categorias.includes('femininos')) {
                    categoria = 'feminino';
                } else if (produtoOriginal.categorias.includes('masculinos')) {
                    categoria = 'masculino';
                }
                
                // Criar novo produto no formato esperado pelo site
                const novoProduto = {
                    id: produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) + 1 : 1,
                    nome: produtoOriginal.nome,
                    descricao: produtoOriginal.descricao,
                    preco: produtoOriginal.preco,
                    imagem: produtoOriginal.imagem,
                    categoria: categoria
                };
                
                // Adicionar ao array de produtos
                produtos.push(novoProduto);
                console.log('Produto adicionado:', novoProduto.nome);
            }
        });
        
        // Recarregar os produtos na página atual
        const currentPage = window.location.pathname;
        
        if (currentPage.includes('index.html') || currentPage.endsWith('/')) {
            exibirProdutosDestaque();
        } else if (currentPage.includes('produtos.html')) {
            exibirTodosProdutos();
        } else if (currentPage.includes('masculinos.html')) {
            exibirProdutosPorCategoria('masculino');
        } else if (currentPage.includes('femininos.html')) {
            exibirProdutosPorCategoria('feminino');
        } else if (currentPage.includes('unissex.html')) {
            exibirProdutosPorCategoria('unissex');
        }
    }
});
