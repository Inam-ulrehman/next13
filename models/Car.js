import mongoose from 'mongoose'

const CarSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: [true, 'Please provide make'],
      minLength: 1,
      maxLength: 100,
      lowercase: true,
      trim: true,
    },
    model: {
      type: String,
      required: [true, 'Please provide model'],
      minLength: 1,
      maxLength: 100,
      lowercase: true,
      trim: true,
    },
    type: {
      type: String,
      required: [true, 'Please provide type'],
      minLength: 3,
      maxLength: 100,
      lowercase: true,
      trim: true,
    },
    color: {
      type: String,
      minLength: 3,
      maxLength: 100,
      lowercase: true,
      trim: true,
    },
    year: {
      type: Number,
      required: [true, 'Please provide year'],
      min: 1,
      max: new Date().getFullYear(),
    },
    price: {
      type: Number,
      required: [true, 'Please provide price'],
      min: 1,
      max: 100,
    },
    image: {
      type: [],
      required: [true, 'Please provide image'],
    },

    description: {
      type: String,
      required: [true, 'Please provide description'],
      maxLength: 100,
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
)

export default mongoose.models.Car || mongoose.model('Car', CarSchema)
