import mongoose, { Document, Schema } from 'mongoose';

export interface ICar extends Document {
  id: string;
  name: string;
  modelCode: string;
  category: 'sedan' | 'suv' | 'coupe' | 'convertible' | 'wagon' | 'hatchback';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  specs: {
    engine: string;
    power: string;
    acceleration: string;
    topSpeed: string;
    fuelEconomy: string;
    transmission: string;
    drivetrain: string;
  };
  features: string[];
  images: string[];
  colors: Array<{
    name: string;
    hex: string;
    price?: number;
  }>;
  packages: Array<{
    name: string;
    description: string;
    price: number;
    features: string[];
  }>;
  isNew: boolean;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CarSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  modelCode: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ['sedan', 'suv', 'coupe', 'convertible', 'wagon', 'hatchback']
  },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  rating: { type: Number, required: true, min: 0, max: 5 },
  reviewCount: { type: Number, required: true, default: 0 },
  description: { type: String, required: true },
  specs: {
    engine: { type: String, required: true },
    power: { type: String, required: true },
    acceleration: { type: String, required: true },
    topSpeed: { type: String, required: true },
    fuelEconomy: { type: String, required: true },
    transmission: { type: String, required: true },
    drivetrain: { type: String, required: true }
  },
  features: [{ type: String }],
  images: [{ type: String }],
  colors: [{
    name: { type: String, required: true },
    hex: { type: String, required: true },
    price: { type: Number }
  }],
  packages: [{
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    features: [{ type: String }]
  }],
  isNew: { type: Boolean, default: true },
  isAvailable: { type: Boolean, default: true }
}, {
  timestamps: true
});

// Indexes for better query performance
CarSchema.index({ category: 1 });
CarSchema.index({ price: 1 });
CarSchema.index({ rating: -1 });
CarSchema.index({ isAvailable: 1 });

export default mongoose.model<ICar>('Car', CarSchema);
