import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },  // ✅ hinzufügen!
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Post', PostSchema);
