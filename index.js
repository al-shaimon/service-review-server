const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Simple Node Server Running');
});

app.use(cors());
app.use(express.json());

const users = [
  
];

const uri =
  'mongodb+srv://process.env.MONGO_USER:process.env.MONGO_PASSWORD@cluster0.zeydczn.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const userCollection = client.db('simpleNode').collection('users');

    app.get( '/users', async(req, res) =>{
      const cursor = userCollection.find({});
      const users = await cursor.toArray();
      res.send(users);
    })

    app.post('/users', async(req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      console.log(result);
      user._id = result.insertedId;
      res.send(user);
    });
  } finally {
  }
}

run().catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Simple Node server running on port ${port}`);
});
