import mongoose, { Schema } from 'mongoose';

// Define movie schema
var movieSchema = new Schema({
  title: String,
  poster: String,
  genre: String,
});

// Export Mongoose model
export default mongoose.model('Movie', movieSchema);
