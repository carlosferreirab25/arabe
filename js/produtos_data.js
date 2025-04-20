// Dados dos produtos coletados do site original
const produtosOriginais = [
    {
        id: 1,
        nome: "Combo Pasta Asad Isabelle – 200g + Pasta Angel Isabelle Extra Concentrada 200g",
        descricao: "Kit com duas pastas hidratantes de alta qualidade",
        preco: 359.80,
        precoOriginal: 599.90,
        desconto: "40%",
        imagem: "images/produtos/combo_pasta_asad_isabelle.jpeg",
        categorias: ["hidratantes", "femininos", "masculinos"]
    },
    {
        id: 2,
        nome: "Delilah Blanc Eau de Parfum Maison Alhambra – 100ml – Feminino",
        descricao: "Fragrância feminina sofisticada com notas florais",
        preco: 299.90,
        precoOriginal: 499.90,
        desconto: "40%",
        imagem: "images/produtos/delilah_blanc_parfum.jpeg",
        categorias: ["perfumes", "femininos", "perfumes-arabes"]
    },
    {
        id: 3,
        nome: "Nautica Voyage Eau de Toilettte – 100ml – Masculino",
        descricao: "Fragrância masculina refrescante com notas aquáticas",
        preco: 199.90,
        precoOriginal: 299.90,
        desconto: "33%",
        imagem: "images/produtos/nautica_voyage_toilette.jpeg",
        categorias: ["perfumes", "masculinos", "perfumes-arabes"]
    },
    {
        id: 4,
        nome: "Pasta Angel Isabelle Extra Concentrada – 200g",
        descricao: "Pasta hidratante extra concentrada para cuidados com a pele",
        preco: 199.90,
        precoOriginal: 299.90,
        desconto: "33%",
        imagem: "images/produtos/pasta_angel_isabelle.jpeg",
        categorias: ["hidratantes", "femininos", "masculinos"]
    },
    {
        id: 5,
        nome: "9 AM Afnan Eau de Parfum – 100ml ou Fracionado 5ml – Masculino",
        descricao: "Fragrância masculina sofisticada para o dia",
        preco: 59.90,
        precoOriginal: 389.90,
        desconto: "9%",
        imagem: "images/produtos/9am_afnan_parfum.jpeg",
        categorias: ["perfumes-arabes", "femininos", "masculinos", "perfumes-fracionados"]
    },
    {
        id: 6,
        nome: "9 PM Afnan Eau de Parfum – 100ml ou Fracionado 5ml – Masculino",
        descricao: "Fragrância masculina sofisticada para a noite",
        preco: 49.90,
        precoOriginal: 379.90,
        desconto: "24%",
        imagem: "images/produtos/9pm_afnan_parfum.jpeg",
        categorias: ["perfumes-arabes", "masculinos", "perfumes-fracionados"]
    },
    {
        id: 7,
        nome: "Affection Lattafa Eau de Parfum – 100ml – Feminino",
        descricao: "Fragrância feminina árabe com notas florais e amadeiradas",
        preco: 399.90,
        precoOriginal: 399.90,
        desconto: "0%",
        imagem: "images/produtos/affection_lattafa_100ml.png",
        categorias: ["perfumes-arabes", "femininos"]
    },
    {
        id: 8,
        nome: "Affection Lattafa Eau de Parfum – 20ml – Feminino",
        descricao: "Versão compacta da fragrância feminina árabe Affection",
        preco: 119.90,
        precoOriginal: 199.90,
        desconto: "40%",
        imagem: "images/produtos/affection_lattafa_20ml.jpeg",
        categorias: ["perfumes-arabes", "femininos"]
    },
    {
        id: 9,
        nome: "Afnan 9 PM Rebel Eau de Parfum – 100ml ou Fracionado 5ml – Masculino",
        descricao: "Versão rebelde da fragrância 9 PM com notas intensas",
        preco: 59.90,
        precoOriginal: 499.90,
        desconto: "17%",
        imagem: "images/produtos/afnan_9pm_rebel.jpeg",
        categorias: ["perfumes-arabes", "masculinos", "perfumes-fracionados"]
    },
    {
        id: 10,
        nome: "Al Noble Wazeer Lataffa Eau de Parfum – 100ml ou Fracionado 5ml – Masculino",
        descricao: "Fragrância árabe masculina premium com notas amadeiradas",
        preco: 49.90,
        precoOriginal: 439.90,
        desconto: "27%",
        imagem: "images/produtos/al_noble_wazeer_lataffa.jpeg",
        categorias: ["perfumes-arabes", "masculinos", "perfumes-fracionados"]
    },
    {
        id: 11,
        nome: "Al Wataniah Bareeq Eau de Parfum – 100ml ou Fracionado 5ml – Masculino",
        descricao: "Fragrância árabe masculina sofisticada com notas orientais",
        preco: 39.90,
        precoOriginal: 269.90,
        desconto: "33%",
        imagem: "images/produtos/al_wataniah_bareeq.jpeg",
        categorias: ["produtos", "perfumes-arabes", "masculinos", "perfumes-fracionados"]
    },
    {
        id: 12,
        nome: "Alive Now Maison Alhambra Eau de Parfum – 100ml – Feminino",
        descricao: "Fragrância feminina vibrante com notas florais e frutadas",
        preco: 269.90,
        precoOriginal: 349.90,
        desconto: "23%",
        imagem: "images/produtos/alive_now_maison_alhambra.jpeg",
        categorias: ["produtos", "perfumes-arabes", "femininos"]
    },
    {
        id: 13,
        nome: "Baroque Rouge Extrait Maison Alhambra Eau de Parfum – 100 ml ou Fracionado 5ml – Feminino",
        descricao: "Fragrância feminina luxuosa com notas intensas e sofisticadas",
        preco: 39.90,
        precoOriginal: 349.90,
        desconto: "30%",
        imagem: "images/produtos/baroque_rouge_extrait.jpeg",
        categorias: ["produtos", "perfumes-arabes", "perfumes-fracionados", "femininos"]
    },
    {
        id: 14,
        nome: "Body Splash Dream Brand Coconut Passion – 250 ml",
        descricao: "Body splash refrescante com aroma de coco e frutas tropicais",
        preco: 119.90,
        precoOriginal: 119.90,
        desconto: "0%",
        imagem: "images/produtos/body_splash_coconut.jpeg",
        categorias: ["produtos", "perfumes", "femininos"]
    },
    {
        id: 15,
        nome: "Borouj Amorous Eau de Parfum – 80 ml – Feminino",
        descricao: "Fragrância árabe feminina sofisticada com notas florais e amadeiradas",
        preco: 459.90,
        precoOriginal: 539.90,
        desconto: "15%",
        imagem: "images/produtos/borouj_amorous.jpeg",
        categorias: ["produtos", "perfumes-arabes", "femininos"]
    }
];

// Função para exportar os dados para o script principal
function obterProdutosOriginais() {
    return produtosOriginais;
}

// Adicionar produtos originais ao array de produtos existente
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se a variável produtos existe (definida em script.js)
    if (typeof produtos !== 'undefined') {
        // Adicionar produtos originais ao array de produtos
        produtosOriginais.forEach(produto => {
            // Verificar se o produto já existe no array
            const produtoExistente = produtos.find(p => p.nome === produto.nome);
            if (!produtoExistente) {
                produtos.push(produto);
            }
        });
        
        // Salvar produtos atualizados no localStorage
        if (typeof salvarProdutosLocalStorage === 'function') {
            salvarProdutosLocalStorage();
        }
        
        // Recarregar produtos na página, se a função existir
        if (typeof exibirProdutosDestaque === 'function' && window.location.pathname.includes('index.html')) {
            exibirProdutosDestaque();
        } else if (typeof exibirTodosProdutos === 'function' && window.location.pathname.includes('produtos.html')) {
            exibirTodosProdutos();
        } else if (typeof exibirProdutosPorCategoria === 'function') {
            if (window.location.pathname.includes('masculinos.html')) {
                exibirProdutosPorCategoria('masculino');
            } else if (window.location.pathname.includes('femininos.html')) {
                exibirProdutosPorCategoria('feminino');
            } else if (window.location.pathname.includes('unissex.html')) {
                exibirProdutosPorCategoria('unissex');
            }
        }
    }
});
