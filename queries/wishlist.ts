import '../src/connect.ts'; //makes sure, you connect to the database
import mongoose from 'mongoose';
import { Binder } from '../models/Binder.ts'; //this is the model

//What cards I have wished, how many are there? (card needs to have "in_wishlist":true)

async function wishlist() {
  await Binder.aggregate([
    { $unwind: '$cards' },
    { $match: { 'cards.in_wishlist': true } },
    {
      $group: {
        _id: '$pokemon_name', //the Pokemon you have wished cards from
        totalCards: { $sum: 1 }, //how many cards you have wished
        allCards: { $push: '$cards' }, // Put the full card objects into a new array
      },
    },
  ])
    .then((cards) => {
      let allWishedCards = 0;

      cards.forEach((pokemon) => {
        allWishedCards += pokemon.totalCards;

        console.log(
          `You have wished "${pokemon.totalCards}" card(s) of this Pokemon "${pokemon._id}" `,
        );
        console.log(pokemon);
      });
      console.log(`\nYou have wished total of "${allWishedCards}" cards!\n`);
    })
    .catch((err) => {
      throw err;
    });

  mongoose.disconnect();
}

wishlist();
