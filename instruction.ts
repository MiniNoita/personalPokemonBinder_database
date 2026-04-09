/*

Hi, hello! And welcome to first draft of my Pokemon Binder in MongoDB!

If you missed the setup from my GitHub Repository README, no worries, I will quide you!

/////////////////////////

--------- SETUP ---------

/////////////////////////

0. First you need to download Docker and Node.js!

1. Fork the github repository! (Hurray! You have already done that! probably)

2. Open terminal with ctrl + j (for windows users) and do: npm i

3. IMPORTANT! Next create the .env file inside the src folder and put this inside it:

MONGO_ROOT_USERNAME=your_username
MONGO_ROOT_PASSWORD=your_password
MONGODB_URI=mongodb://your_username:your_password@localhost:27017/pokemon_binder

NOTE: remember to change your username and password! Don't put them anywhere else than to this file so they keep safe. 

4. Next you want to connect to your docker! Remember to open the docker app always! 

After that in terminal go to docker folder "cd docker" and then use command "docker-compose up -d". Remember to close the docker after use with "docker compose down" (inside the docker folder) 

5. You can test your connection is working by going back to the main folder (if you are still in docker folder) by typing just "cd .."

Just look at what folder you are in, you should be in "personalPokemonBinder_database" folder.

Whenever you are in the right spot, type in "npx ts-node src/connect.ts" or "node src/connect.ts". In command line should now be "Connected to MongoDB!", to stop the code from running, press shift + C. 

Nice! The connecting to MongoDB works!
*/
