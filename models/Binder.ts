const mongoose = require('mongoose');
const CardSchema = require('./Card');

const BinderSchema = new mongoose.Schema({
  pokemon_name: { type: String, unique: true, required: true },
  cards: [{ type: CardSchema }],
});

const Binder = mongoose.model('Binder', BinderSchema);

//Export the model
module.exports = Binder;
