require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it("Testa se fetchItem é uma função", () => {
    expect(typeof fetchItem).toBe('function');
  });
  it("Testa se a função fetchItem com o argumento 'MLB1615760527' é chamada uma fetch", async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it("Testa se fetch foi chamada com a url esperada", async () => {
    const url = "https://api.mercadolibre.com/items/MLB1615760527";
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it("Testa se a função fetchItem('MLB1615760527') retorna uma estrutura de dados igual ao objeto computadorSearch", async () => {
    const retorno = await fetchItem('MLB1615760527');
    expect(retorno).toMatchObject(item);
  });

  it("Testa se ao chamar a função fetchItem sem paramentro, retorna o erro 'You must provide an url'", async () => {
    const fail = await fetchItem();
    expect(fail).toEqual(new Error('You must provide an url'));
  });
  // fail('Teste vazio');
});
