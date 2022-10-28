const BlogPostService = require('../services/BlogPost.service');

const getAll = async (_req, res) => {
  const posts = await BlogPostService.getAll();
  return res.status(200).json(posts);
};

module.exports = {
  getAll,
};