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

MONGO_ROOT_USERNAME=root
MONGO_ROOT_PASSWORD=password
MONGODB_URL=mongodb://root:password@localhost:27017/pokemon_binder?authSource=admin

NOTE: remember to change your username and password! Don't put them anywhere else than to this file so they keep safe. 

PS: This is an early draft so I'm using root and password here. Going to look into making own users later

4. Download Mongo Compass. We will be using that! Once you have that installed, open it. We will need it later.

5. Next you want to connect to your docker! Remember to open the docker app always!

After that in terminal go to docker folder "cd docker" and then use command "docker-compose up -d". Remember to close the docker after use with "docker compose down" (inside the docker folder)

6. You can test your connection is working by going back to the main folder (if you are still in docker folder) by typing just "cd .."

Just look at what folder you are in, you should be in "personalPokemonBinder_database" folder.

Whenever you are in the right spot, type in "npx ts-node src/connect.ts" or "node src/connect.ts". In command line should now be "Connected to MongoDB!", to stop the code from running, press shift + C. 

Nice! The connecting to MongoDB works!

7. Now comes the MongoDB Compass! Open it up and make new connection. Copy and paste the same url u have in the env. file in MONGODB_URL so in this case "mongodb://root:password@localhost:27017/pokemon_binder?authSource=admin".

Also name the connection "pokemon_binder". Then click "save and connect". When we start to add data in, we can see the data in there and also manage it from there.

////////////////////////////////

--------- Adding data ---------

///////////////////////////////

*/
