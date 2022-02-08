const saveCartItems = (name, cart) => {
  localStorage.setItem(name, cart);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
