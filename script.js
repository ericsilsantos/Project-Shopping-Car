// const { fetchProducts } = require("./helpers/fetchProducts");

// const saveCartItems = require("./helpers/saveCartItems");

// const { fetchItem } = require("./helpers/fetchItem");
const catalogo = document.querySelector('.items');
const carrinho = document.querySelector('.cart__items');
const btnClearCart = document.querySelector('.empty-cart');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

// function getSkuFromProductItem(item) {
  //   return item.querySelector('span.item__sku').innerText;
  // }
const somarTotal = async () => {
  let total = 0.0;
  const totalPrice = document.querySelector('.total-price');
  const itensCarrinho = document.querySelectorAll('.cart__item');
  itensCarrinho.forEach((item) => {
    total += parseFloat(item.innerText.split('$')[1]);
  });
  totalPrice.innerText = `${total}`;
};

function cartItemClickListener(event) {
  event.target.remove();
  saveCartItems(carrinho.innerHTML);
  somarTotal();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const loadingApi = () => {
  catalogo.appendChild(createCustomElement('p', 'loading', 'Carregando...'));
};

const loadedApi = () => {
  const loading = document.querySelector('.loading');
  loading.remove();
};

const addNoCarrinho = async (item) => {
  const itemSelect = await fetchItem(item);
  const objeto = { 
    sku: itemSelect.id, 
    name: itemSelect.title, 
    salePrice: itemSelect.price };
  carrinho.appendChild(createCartItemElement(objeto));
  saveCartItems(carrinho.innerHTML);
  somarTotal();
};

const preencherHtml = async () => {
  loadingApi();
  const products = await fetchProducts('computador');
  loadedApi();
  products.results.forEach((product) => {
    const objeto = { sku: product.id, name: product.title, image: product.thumbnail };
    const item = createProductItemElement(objeto);
    item.querySelector('.item__add')
      .addEventListener('click', () => addNoCarrinho(objeto.sku));
    catalogo.appendChild(item);
  });
};

btnClearCart.addEventListener('click', () => {
  carrinho.innerHTML = '';
  saveCartItems(carrinho.innerHTML);
  somarTotal();
});

window.onload = () => {
  preencherHtml();
  if (localStorage.getItem('cart')) {
    carrinho.innerHTML = localStorage.getItem('cart');
    const itensCarrinho = document.querySelectorAll('li');
    itensCarrinho.forEach((item) => item.addEventListener('click', cartItemClickListener));
  }
  somarTotal();
 };
