const getSavedCartItems = (cart) => {
  localStorage.getItem(cart);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
