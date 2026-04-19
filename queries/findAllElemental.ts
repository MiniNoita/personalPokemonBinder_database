import '../src/connect.ts'; //makes sure, you connect to the database
import mongoose from 'mongoose';
import { Binder } from '../models/Binder.ts'; //this is the model

// What elemental types do i have? ("elemental_type")

async function findElemental() {
  const pokemons = await Binder.find();
  pokemons.forEach((pokemon) => {
    console.log(
      `Pokemon "${pokemon.pokemon_name}" has cards that are this/these types:`,
    );

    const elementals = [
      ...new Set(pokemon.cards.map((card) => card.elemental_type)),
    ];

    console.log(elementals);
  });

  mongoose.disconnect();
}

findElemental();
