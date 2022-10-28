const CategoryService = require('../services/Category.service');

const getAll = async (req, res) => {
  try {
    const categories = await CategoryService.getAll();
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }
    
    const category = await CategoryService.createCategory({ name });
    return res.status(201).json(category);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createCategory,
  getAll,
};