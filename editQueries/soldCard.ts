import '../src/connect.ts'; //makes sure, you connect to the database
import mongoose from 'mongoose';
import { Binder } from '../models/Binder.ts'; //this is the model

//I sold two of my cards both being "Rockruff", set and number "109/196".

async function soldCard(
  pokemon: string,
  set_n_number: string,
  quantity: number,
) {
  const result = await Binder.updateOne(
    {
      pokemon_name: pokemon,
      'cards.set_and_cardnum': set_n_number,
    },
    {
      $inc: { 'cards.$.card_count': -quantity },
    },
  )

    .catch((err) => {
      throw err;
    });

  console.log(result);
  console.log(
    `You got rid off "${quantity}" card(s) of Pokemon "${pokemon}". \n The card(s) u got rid off was with set and card number "${set_n_number}"`,
  );
  mongoose.disconnect();
}

soldCard('Rockruff', '109/196', 2);
