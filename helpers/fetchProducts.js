const fetchProducts = async () => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${'computador'}`;
  try {
    const resultado = await fetch(url);
    const arrayData = await resultado.json();
    return arrayData.results;
  } catch (error) {
    console.log(`Houve um erro:${error}`);
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
