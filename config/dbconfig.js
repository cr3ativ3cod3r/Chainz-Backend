const mongoose = require("mongoose");

const connectdb = async () => {
    try {
        await mongoose.connect(
            "mongodb://localhost:27017/test"
        );

        mongoose.connection.once('open', () => {
            console.log("Connected to mongo database");
        });
        
    } catch (error) {
        console.log(error);
        process.exit(1); //exit with code 1
    }
}


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://adminuser:mavuthedb@devcluster.abmn55a.mongodb.net/?retryWrites=true&w=majority&appName=devcluster";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


module.exports = connectdb;