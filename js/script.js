const lojaItens = [
  {
    id: 0,
    nome:'Air Jordan',
    img: './img/sneakers/air-jordan1.png',
    valor: '$619.99',
    icone: './img/button-bag.svg',
    quantidade: 0
  },   

  {
    id: 1,
    nome:'Air Jordan',
    img: './img/sneakers/air-jordan2.png',
    valor: '$619.99',
    icone: './img/button-bag.svg',
    quantidade: 0
  },
  {
    id: 2,
    nome:'Air Jordan',
    img: './img/sneakers/air-jordan3.png',
    valor: '$619.99',
    icone: './img/button-bag.svg',
    quantidade: 0
  },
  {
    id: 3,
    nome:'Air Jordan',
    img: './img/sneakers/air-jordan4.png',
    valor: '$619.99',
    icone: './img/button-bag.svg',
    quantidade: 0
  },
  {
    id: 4,
    nome:'Air Jordan',
    img: './img/sneakers/air-jordan5.png',
    valor: '$619.99',
    icone: './img/button-bag.svg',
    quantidade: 0
  },
  {
    id: 5,
    nome:'Air Jordan',
    img: './img/sneakers/air-jordan6.png',
    valor: '$619.99',
    icone: './img/button-bag.svg',
    quantidade: 0
  },
  {
    id: 6,
    nome:'Air Jordan',
    img: './img/sneakers/air-jordan7.png',
    valor: '$619.99',
    icone: './img/button-bag.svg',
    quantidade: 0
  },
  {
    id: 7,
    nome:'Air Jordan',
    img: './img/sneakers/air-jordan8.png',
    valor: '$619.99',
    icone: './img/button-bag.svg',
    quantidade: 0
  },
];

const containerProdutos = document.querySelector('#produtos');

function iniciarLoja() {

  lojaItens.map((item) => {
    containerProdutos.innerHTML += `
      <div class="produto">
       <div class="produto-imagem">
        <img src=${item.img}>
       </div>
        <p>${item.nome}</p>
        <div class="produto-descricao">
        <p>${item.valor}</p>
        <a key="${item.id}" href="#">
        <img src=${item.icone}>
        </a>
        </div>
      </div>
    `;
  });
};

iniciarLoja();


const containerCarrinho = document.querySelector('#carrinho');
const links = document.querySelectorAll('.produto a');
const imagens = document.querySelectorAll('.produto-imagem img')
const path = document.querySelector('.bag svg path');

function iniciarCarrinho(event){
    event.preventDefault();
    let key = Number(this.getAttribute('key'));
    lojaItens[key].quantidade++;  
    path.classList.add('ativo');
    atualizarCarrinho();
};
  
    links.forEach((link) =>{
      link.addEventListener('click', iniciarCarrinho);
    });


function atualizarCarrinho(){
  containerCarrinho.innerHTML = ''

  lojaItens.map((item) => {
    if(item.quantidade > 0){
    containerCarrinho.classList.add('ativo')  
    containerCarrinho.innerHTML += `
      <div class="carrinho">
        <div class="carrinho-img">
        <img src=${item.img}>
        </div>
        <div class="carrinho-descricao">
        <p>quantidade: ${item.quantidade}</p>
        <p>${item.valor}</p>
        </div>
      </div>
    `;
    }
  });
};
