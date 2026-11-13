// Em produção (mesmo domínio para API e front) use PUBLIC_URL_BASE vazio: imagens ficam em /images/...
const BASE_URL = process.env.PUBLIC_URL_BASE !== undefined
  ? process.env.PUBLIC_URL_BASE : 'http://localhost:3001';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('products', [
    {
      name: 'Skol Lata 250ml',
      price: 2.2,
      url_image: `${BASE_URL}/images/skol_lata_350ml.jpg`,
    },
    {
      name: 'Heineken 600ml',
      price: 7.5,
      url_image: `${BASE_URL}/images/heineken_600ml.jpg`,
    },
    {
      name: 'Antarctica Pilsen 300ml',
      price: 2.49,
      url_image: `${BASE_URL}/images/antarctica_pilsen_300ml.jpg`,
    },
    {
      name: 'Brahma 600ml',
      price: 7.5,
      url_image: `${BASE_URL}/images/brahma_600ml.jpg`,
    },
    {
      name: 'Skol 269ml',
      price: 2.19,
      url_image: `${BASE_URL}/images/skol_269ml.jpg`,
    },
    {
      name: 'Skol Beats Senses 313ml',
      price: 4.49,
      url_image: `${BASE_URL}/images/skol_beats_senses_313ml.jpg`,
    },
    {
      name: 'Becks 330ml',
      price: 4.99,
      url_image: `${BASE_URL}/images/becks_330ml.jpg`,
    },
    {
      name: 'Brahma Duplo Malte 350ml',
      price: 2.79,
      url_image: `${BASE_URL}/images/brahma_duplo_malte_350ml.jpg`,
    },
    {
      name: 'Becks 600ml',
      price: 8.89,
      url_image: `${BASE_URL}/images/becks_600ml.jpg`,
    },
    {
      name: 'Skol Beats Senses 269ml',
      price: 3.57,
      url_image: `${BASE_URL}/images/skol_beats_senses_269ml.jpg`,
    },
    {
      name: 'Stella Artois 275ml',
      price: 3.49,
      url_image: `${BASE_URL}/images/stella_artois_275ml.jpg`,
    },
  ]),

  down: async (queryInterface, _Sequelize) => queryInterface.bulkDelete('products', null, {}),
};
