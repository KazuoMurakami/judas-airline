/* essa pagina é o backend do servidor onde é gerado o api e onde é inicializado o backend do mongoDB*/

import Fastify from "fastify";
import { MongoClient, ServerApiVersion } from "mongodb";

// pega a coenxao do banco
const uri =
  "mongodb+srv://Kazuo:LQLlfTRxrfyOPIx3@clusterjudas.ms0x75s.mongodb.net/?retryWrites=true&w=majority&appName=ClusterJudas";

// inicializa o servidor
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// entra no db chamado sample airbnb
const dbName = "sample_airbnb";

// entra no banco
const db = client.db(dbName);

// fastify é um framework para inicialização de api igual express
const fastify = Fastify({
  logger: true,
});

const country = [
  {
    id: 1,
    country: "Canada",
    city: "Toronto",
    price: 4000.0,
    url: "/imgCity/toronto.jpg",
  },
  {
    id: 2,
    country: "Grecia",
    city: "Míconos",
    price: 3000.0,
    url: "/imgCity/grecia.jpeg",
  },
  {
    id: 3,
    country: "Alemanha",
    city: "Colonia",
    price: 2000.0,
    url: "/imgCity/alemanha.jpg",
  },
  {
    id: 4,
    country: "Reino Unido",
    city: "Londres",
    price: 4500.0,
    url: "/imgCity/reinoUnido.png",
  },
  {
    id: 5,
    country: "Brazil",
    city: "Rio de janeiro",
    price: 1500.0,
    url: "/imgCity/rio.jpg",
  },
  {
    id: 6,
    country: "Italia",
    city: "Roma",
    price: 4500.0,
    url: "/imgCity/italia.jpeg",
  },
  {
    id: 7,
    country: "França",
    city: "Paris",
    price: 6500.0,
    url: "/imgCity/franca.jpg",
  },
  {
    id: 8,
    country: "México",
    city: "Cidade do México",
    price: 4000.0,
    url: "/imgCity/mexico.jpg",
  },
  {
    id: 9,
    country: "Estados Unidos",
    city: "Nova York",
    price: 7000.0,
    url: "/imgCity/estados-unidos.jpg",
  },
  {
    id: 10,
    country: "Austrália",
    city: "Sydney",
    price: 6800.0,
    url: "/imgCity/australia.jpg",
  },
  {
    id: 11,
    country: "Argentina",
    city: "Buenos Aires",
    price: 3000.0,
    url: "/imgCity/argentina.jpg",
  },
  {
    id: 12,
    country: "África do Sul",
    city: "Cidade do Cabo",
    price: 4200.0,
    url: "/imgCity/africa.jpg",
  },
];
// declara os paises da pagina de voo

// Declare a route
fastify.get("/", async function handler(request, reply) {
  const cursor = db.collection("listingsAndReviews").find({}).limit(2);
  const result = await cursor.toArray();
  reply.send(result);
});

// run mongoDB

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log(error);
  }
}
run().catch(console.dir);

// Run the server!
try {
  await fastify.listen({ port: 5555 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
