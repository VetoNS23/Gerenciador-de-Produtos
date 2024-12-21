const cartCount = document.getElementById('cart-count');

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartCount.textContent = cart.length;
}

function adicionarAoCarrinho(produtoNome) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const produto = { nome: produtoNome };
  cart.push(produto);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`Produto adicionado ao carrinho: ${produtoNome}`);
}

updateCartCount();

  