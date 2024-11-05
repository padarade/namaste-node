// const URI =
// "mongodb+srv://padarade09:GXksc2LqqFCVcr9L@mongolearn.ffgev.mongodb.net/"

// Go to mongodb website
// Create a free M0 cluster
// create a user
// Get the connection string
// install mongo db compass

const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://padarade09:GXksc2LqqFCVcr9L@mongolearn.ffgev.mongodb.net/";
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  //Insert a data
  const data = {
    firstname: "Dayawan1",
    lastname: "Avhad",
    city: "Pune",
    phoneno: "9192928222",
  };

  //   const insertResult = await collection.insertMany([
  //     data
  //   ]);
  //   console.log("Inserted documents =>", insertResult);

  // Read
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  const countResult = await collection.countDocuments({});
  console.log("Count of Dcouments of user", countResult);

  //   find all the documents with a filter of firstname :Pallavi
  const result = await collection.find({ firstname: "Pallavi" }).toArray();
  console.log("Found Pallavi =>", result);
  return "done."; 
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
