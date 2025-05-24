import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

router.post('/', async (req, res) => {
  const { title, desc, content } = req.body;  // ✅ "desc" hinzufügen

  try {
    const newPost = new Post({ title, desc, content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: 'Fehler beim Erstellen des Beitrags', details: err });
  }
});

export default router;
