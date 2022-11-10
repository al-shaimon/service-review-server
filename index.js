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

const services = [
  [
    {
      "_id": "636a8a7494736d9d78dcc55e",
      "title": "PORTRAIT",
      "price": "200",
      "time": "Up to 2 Hours",
      "quantity": "10 Images",
      "outfit": "2 Outfit Changes",
      "edit-img": "2 Edited Photo",
      "quality": "Hi-res images on cd",
      "review": [
        {
          "name": "VINCENT WOOD",
          "img": "https://i.ibb.co/LRFxb8z/pexels-andrea-piacquadio-733872.jpg",
          "details": "He is a great and hardworking guy. I am so proud of i have him as my asistant. He helped me so much. Also i am so proud of i have him as my asistant. He helped me so much.",
          "rating": "5"
        },
        {
          "name": "GARY MORGAN",
          "img": "https://i.ibb.co/Yj7qHyZ/pexels-daniel-xavier-1239291.jpg",
          "details": "He was a great co-worker and a friend. I would’t be where i am without his support.",
          "rating": "4"
        },
        {
          "name": "Ms. Nargis Begum",
          "img": "https://i.ibb.co/2jx8dNB/pexels-andrea-piacquadio-712513.jpg",
          "details": "He was a great co-worker. He helped me so much.",
          "rating": "5"
        }
      ]
    },
    {
      "_id": "636a8a7494736d9d78dcc560",
      "title": "WEDDING",
      "price": "700",
      "time": "Up to 6 Hours",
      "quantity": "100 Images",
      "outfit": "10 Outfit Changes",
      "edit-img": "100 Edited Photo",
      "quality": "Hi-res images on cd",
      "review": [
        {
          "name": "VINCENT WOOD",
          "img": "https://i.ibb.co/LRFxb8z/pexels-andrea-piacquadio-733872.jpg",
          "details": "He is a great and hardworking guy. I am so proud of i have him as my asistant. He helped me so much. Also i am so proud of i have him as my asistant. He helped me so much.",
          "rating": "5"
        },
        {
          "name": "GARY MORGAN",
          "img": "https://i.ibb.co/Yj7qHyZ/pexels-daniel-xavier-1239291.jpg",
          "details": "He was a great co-worker and a friend. I would’t be where i am without his support.",
          "rating": "4"
        },
        {
          "name": "Ms. Nargis Begum",
          "img": "https://i.ibb.co/2jx8dNB/pexels-andrea-piacquadio-712513.jpg",
          "details": "He was a great co-worker. He helped me so much.",
          "rating": "4"
        }
      ]
    },
    {
      "_id": "636a8a7494736d9d78dcc561",
      "title": "TRAVEL PHOTO",
      "price": "500",
      "time": "Up to 2 Hours",
      "quantity": "20 Images",
      "outfit": "4 Outfit Changes",
      "edit-img": "10 Edited Photo",
      "quality": "Hi-res images on cd",
      "review": [
        {
          "name": "VINCENT WOOD",
          "img": "https://i.ibb.co/LRFxb8z/pexels-andrea-piacquadio-733872.jpg",
          "details": "He is a great and hardworking guy. I am so proud of i have him as my asistant. He helped me so much. Also i am so proud of i have him as my asistant. He helped me so much.",
          "rating": "4"
        },
        {
          "name": "GARY MORGAN",
          "img": "https://i.ibb.co/Yj7qHyZ/pexels-daniel-xavier-1239291.jpg",
          "details": "He was a great co-worker and a friend. I would’t be where i am without his support.",
          "rating": "4"
        },
        {
          "name": "Ms. Nargis Begum",
          "img": "https://i.ibb.co/2jx8dNB/pexels-andrea-piacquadio-712513.jpg",
          "details": "He was a great co-worker. He helped me so much.",
          "rating": "5"
        },
        {
          "name": "JASON WILSON",
          "details": "He is ok. I don’t really know him. He looks nice.",
          "img": "https://i.ibb.co/H4mB2h1/pexels-stefan-stefancik-91227.jpg",
          "rating": "4"
        }
      ]
    },
    {
      "_id": "636a8a7494736d9d78dcc562",
      "title": "ANIMALS PHOTO",
      "price": "800",
      "time": "Up to 2 Hours",
      "quantity": "50 Images",
      "outfit": "0 Outfit Changes",
      "edit-img": "10 Edited Photo",
      "quality": "Hi-res images on cd",
      "review": [
        {
          "name": "VINCENT WOOD",
          "img": "https://i.ibb.co/LRFxb8z/pexels-andrea-piacquadio-733872.jpg",
          "details": "He is a great and hardworking guy. I am so proud of i have him as my asistant. He helped me so much. Also i am so proud of i have him as my asistant. He helped me so much.",
          "rating": "5"
        },
        {
          "name": "GARY MORGAN",
          "img": "https://i.ibb.co/Yj7qHyZ/pexels-daniel-xavier-1239291.jpg",
          "details": "He was a great co-worker and a friend. I would’t be where i am without his support.",
          "rating": "3"
        },
        {
          "name": "Ms. Nargis Begum",
          "img": "https://i.ibb.co/2jx8dNB/pexels-andrea-piacquadio-712513.jpg",
          "details": "He was a great co-worker. He helped me so much.",
          "rating": "4"
        }
      ]
    },
    {
      "_id": "636a8a7494736d9d78dcc563",
      "title": "FASHION",
      "price": "700",
      "time": "Up to 4 Hours",
      "quantity": "60 Images",
      "outfit": "15 Outfit Changes",
      "edit-img": "60 Edited Photo",
      "quality": "Hi-res images on cd",
      "review": [
        {
          "name": "VINCENT WOOD",
          "img": "https://i.ibb.co/LRFxb8z/pexels-andrea-piacquadio-733872.jpg",
          "details": "He is a great and hardworking guy. I am so proud of i have him as my asistant. He helped me so much. Also i am so proud of i have him as my asistant. He helped me so much.",
          "rating": "5"
        },
        {
          "name": "GARY MORGAN",
          "img": "https://i.ibb.co/Yj7qHyZ/pexels-daniel-xavier-1239291.jpg",
          "details": "He was a great co-worker and a friend. I would’t be where i am without his support.",
          "rating": "5"
        },
        {
          "name": "Ms. Nargis Begum",
          "img": "https://i.ibb.co/2jx8dNB/pexels-andrea-piacquadio-712513.jpg",
          "details": "He was a great co-worker. He helped me so much.",
          "rating": "4"
        }
      ]
    },
    {
      "_id": "636b856794736d9d782dcb89",
      "title": "GROUP SHOTS",
      "price": "400",
      "time": "Up to 4 Hours",
      "quantity": "30 Images",
      "outfit": "4 Outfit Changes",
      "edit-img": "10 Edited Photo",
      "quality": "Hi-res images on cd",
      "review": [
        {
          "name": "VINCENT WOOD",
          "img": "https://i.ibb.co/LRFxb8z/pexels-andrea-piacquadio-733872.jpg",
          "details": "He is a great and hardworking guy. I am so proud of i have him as my asistant. He helped me so much. Also i am so proud of i have him as my asistant. He helped me so much.",
          "rating": "5"
        },
        {
          "name": "GARY MORGAN",
          "img": "https://i.ibb.co/Yj7qHyZ/pexels-daniel-xavier-1239291.jpg",
          "details": "He was a great co-worker and a friend. I would’t be where i am without his support.",
          "rating": "4"
        },
        {
          "name": "Ms. Nargis Begum",
          "img": "https://i.ibb.co/2jx8dNB/pexels-andrea-piacquadio-712513.jpg",
          "details": "He was a great co-worker. He helped me so much.",
          "rating": "5"
        },
        {
          "name": "JASON WILSON",
          "details": "He is ok. I don’t really know him. He looks nice.",
          "img": "https://i.ibb.co/H4mB2h1/pexels-stefan-stefancik-91227.jpg",
          "rating": "4"
        }
      ]
    }
  ]
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
    const userCollection = client.db('simpleNode').collection('services');

    app.get( '/services', async(req, res) =>{
      const cursor = userCollection.find({});
      const services = await cursor.toArray();
      res.send(services);
    })

    app.post('/services', async(req, res) => {
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
