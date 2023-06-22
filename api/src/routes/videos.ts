import { Schema, model } from 'mongoose';

const videSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },

    url: {
      type: String,
      required: true,
      trim: true,
      unique: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model('video', videSchema);
