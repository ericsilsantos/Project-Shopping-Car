require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it("Testa se fetchProducts é uma função", () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it("Testa se a função fetchProducts com o argumento 'Computador' é chamada uma fetch", async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it("Testa se fetch foi chamada com a url esperada", async () => {
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=computador";
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it("Testa se a função fetchProducts('computador') retorna uma estrutura de dados igual ao objeto computadorSearch", async () => {
    const response = await fetchProducts('computador');
    expect(response).toMatchObject(computadorSearch);
  });

  it("Testa se ao chamar a função fetchProducts sem paramentro, retorna o erro 'You must provide an url'", async () => {
    const fail = await fetchProducts();
    expect(fail).toEqual(new Error('You must provide an url'));
  });
  // fail('Teste vazio');
});
