import '../src/connect.ts'; //makes sure, you connect to the database
import mongoose from 'mongoose';
import { Binder } from '../models/Binder.ts'; //this is the model

//How many different cards do I have in binder of each Pokemon and how many cards do I have in binder all together (duplicates aka count)? (card needs to have "in_binder": true)

async function findCards() {
  await Binder.aggregate([
    { $unwind: '$cards' },
    { $match: { 'cards.in_binder': true } },
    {
      $group: {
        _id: '$pokemon_name', //the Pokemon you have wished cards from
        totalCards: { $sum: 1 }, //how many cards you have in binder
        allCards: { $push: '$cards' }, // Put the full card objects into a new array
      },
    },
  ])
    .then((cards) => {
      let difCardCount = 0;

      let allCards = 0;

      cards.forEach((pokemon) => {
        difCardCount += pokemon.totalCards;

        console.log(
          `--- You have ${pokemon.totalCards} card(s) in your binder for Pokemon "${pokemon._id}" ---`,
        );
        console.log(pokemon);

        pokemon.allCards.forEach((card: any) => {
          allCards += card.card_count;
        });
      });

      console.log(
        `\nYou have total of ${difCardCount} different cards in your Binder\n and ${allCards} sum of cards in Binder \n`,
      );
    })
    .catch((err) => {
      throw err;
    });

  mongoose.disconnect();
}

findCards();
