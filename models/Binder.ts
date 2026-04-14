import mongoose from 'mongoose';
import CardSchema from './Card.ts';

const BinderSchema = new mongoose.Schema({
  pokemon_name: { type: String, unique: true, required: true },
  cards: [{ type: CardSchema }],
});

const Binder = mongoose.model('Binder', BinderSchema);

//Export the model
export { Binder, BinderSchema };
