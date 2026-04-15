import '../src/connect.ts'; //makes sure, you connect to the database
import mongoose from 'mongoose';
import { Binder } from '../models/Binder.ts'; //this is the model

//What Pokemon's do I have saved into the database? (Early draft when each card needs to be added versus not fetched from API. This also means the pokemon name only)

async function findAllPokemon() {
  await Binder.find({})
    .then((pokemons) => {
      console.log('You have cards for these Pokemons:');
      pokemons.forEach((pokemon) => {
        console.log(`- ${pokemon.pokemon_name}`);
      });
    })
    .catch((err) => {
      throw err;
    });

  mongoose.disconnect();
}

findAllPokemon();
