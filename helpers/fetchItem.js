const fetchItem = async (item) => {
  const url = `https://api.mercadolibre.com/items/${item}`;
  try {
    const resultado = await fetch(url);
    const resulItem = await resultado.json();
    return resulItem;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
