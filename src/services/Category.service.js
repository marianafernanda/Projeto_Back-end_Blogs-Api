const { Category } = require('../models');

const getAll = async () => {
  const categories = await Category.findAll();
  console.log(categories);
  console.log('qualquer');
  return categories;
};

const createCategory = async ({ name }) => {
  const category = await Category.create({ name });
  return category;
};

module.exports = {
  createCategory,
  getAll,
};