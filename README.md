# (Personal) Pokemon Binder database \ MongoDB

I love Pokemon, I collect cards but specific cards. So this was good concept for school project I need to make using MongoDB!

## How to get this database running and set up everything

I do have instruction inside "insctruction.ts" file. Following it, you should be able to insert data into the MongoDB and run queries. I'm also going to guide you how to set up everything!

First you will need to download [Docker Desktop](https://www.docker.com/products/docker-desktop/) and [MongoDB Compass](https://www.mongodb.com/try/download/terraform-provider).

Next fork the repository. After you have done that open it up in vscode and open the terminal with `CRTL + J`. After that do this command `npm i`. 

For you to be able to use mongoDB database you need to create your .env file. After you have created that file copy paste this into it:
```
MONGO_ROOT_USERNAME=root
MONGO_ROOT_PASSWORD=password
MONGODB_URL=mongodb://root:password@localhost:27017/pokemon_binder?authSource=admin
```
NOTE: remember to change your username and password! Don't put them anywhere else than to this file so they keep safe. 

Now get your docker running. In command line go to the docker folder and start docker with command `docker compose up -d`. Also remember to put it down after you are done with `docker compose down`. 

Go to MongoDB Compass, make a new connection, put the url `mongodb://root:password@localhost:27017/pokemon_binder?authSource=admin` into the URI spot (there should be url `mongodb://localhost:27017` as default). And name it "Pokemon" for example. Save and connect. Now you can move into the queries. Follow the "instruction.ts" file! 

### ToDo
- Make this use some API to get the cards (PokeWallet API, TCGdex, PokeApi)
- Make own username and password for docker (not root and admin)
