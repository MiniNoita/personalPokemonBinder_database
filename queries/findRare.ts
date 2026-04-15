import '../src/connect.ts'; //makes sure, you connect to the database
import mongoose from 'mongoose';
import { Binder } from '../models/Binder.ts'; //this is the model

//Do I have any Rare cards? (Needs to have the "Rare" in the card_type)

async function findRare() {
  await Binder.aggregate([
    { $unwind: '$cards' },
    {
      $match: { 'cards.card_type': { $regex: /rare/i } }, //this regex says that there is the word rare inside the card_type
    },
    {
      $group: {
        _id: '$pokemon_name',
        totalCards: { $sum: 1 },
        allCards: { $push: '$cards' },
      },
    },
  ])
    .then((cards) => {
      let allCards = 0;
      cards.forEach((pokemon) => {
        console.log(
          `You have "${pokemon.totalCards}" cards with card type including "Rare" for Pokemon ${pokemon._id}`,
        );

        console.log(pokemon);

        pokemon.allCards.forEach((card: any) => {
          allCards += 1;
        });
      });

      console.log(
        `\n You have total of "${allCards}" cards including "Rare" in the card type!\n`,
      );
    })
    .catch((err) => {
      throw err;
    });

  mongoose.disconnect();
}

findRare();
