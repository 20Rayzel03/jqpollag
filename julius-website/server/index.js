import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use('/posts', postRoutes);

mongoose
  .connect('mongodb://127.0.0.1:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ MongoDB verbunden');
    app.listen(PORT, () => console.log(`🚀 Server läuft auf http://localhost:${PORT}`));
  })
  .catch((err) => console.error('❌ Fehler bei MongoDB:', err));
