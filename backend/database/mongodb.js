const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri);

async function NewMongoConnection() {
    try {
        await client.connect();
        const conn = client.db("customers");
        return conn;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    NewMongoConnection
};