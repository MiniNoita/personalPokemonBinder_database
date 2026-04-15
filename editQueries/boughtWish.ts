import '../src/connect.ts'; //makes sure, you connect to the database
import mongoose from 'mongoose';
import { Binder } from '../models/Binder.ts'; //this is the model

//I had wishlisted "Hop's Zacian ex", set and number "JTGen_186/159" card and I bought it. Now I want it to show in Binder (in_wishlist: false, in_binder: true, count: 1)

async function boughtWishedCard(
  pokemon: string,
  card_name: string,
  set_n_number: string,
) {
  const result = await Binder.updateOne(
    {
      pokemon_name: pokemon,
      'cards.pokemon_name': card_name,
      'cards.set_and_cardnum': set_n_number,
      'cards.in_wishlist': true,
    },
    {
      $inc: { 'cards.$.card_count': +1 },
      $set: { 'cards.$.in_wishlist': false, 'cards.$.in_binder': true },
    },
  ).catch((err) => {
    throw err;
  });

  console.log(result);
  console.log(
    `You bought a new card for Pokemon "${pokemon}"! \n Card bought: ${card_name}, ${set_n_number}`,
  );
  mongoose.disconnect();
}

boughtWishedCard('Zacian', "Hop's Zacian ex", 'JTGen_186/159');
