import {MongoClient} from "mongodb";
import dotenv from 'dotenv';
dotenv.config({ path: 'src/db-credentials.env' });

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@restaurant-app-database.itrrdlz.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri);