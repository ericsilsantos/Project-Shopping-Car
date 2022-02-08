const saveCartItems = (cart) => {
  localStorage.setItem('cart', cart);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
