const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  pokemon_name: { type: String, required: true },
  set_and_cardnum: { type: String, unique: true, required: true },
  card_type: { type: String, required: true }, //common, holo, revers holo, ex etc.
  evolution_stage: { type: String },
  elemental_type: { type: String },
  in_binder: { type: Boolean, required: true },
  in_wishlist: { type: Boolean, required: true },
  card_count: { type: Number, min: 0 },
  img_url: { type: String },
});

module.exports = CardSchema;
