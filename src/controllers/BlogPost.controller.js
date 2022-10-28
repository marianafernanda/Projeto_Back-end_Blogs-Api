const BlogPostService = require('../services/BlogPost.service');

const getAll = async (_req, res) => {
  const posts = await BlogPostService.getAll();
  return res.status(200).json(posts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const post = await BlogPostService.getById(id);

  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(post);
};

module.exports = {
  getAll,
  getById,
};