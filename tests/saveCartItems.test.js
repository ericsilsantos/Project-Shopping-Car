const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('Testa se ao executar saveCartItems o localStoragem.setItem é chamado', () => {
    saveCartItems('cartItems', '<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('Testa se o saveCartItems é executado com doi paramentros', () => {
    saveCartItems('cartItems', '<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
  // fail('Teste vazio');
});
