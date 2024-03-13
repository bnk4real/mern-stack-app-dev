const conn = require('../database/mongodb');
const cl = 'customercl';

async function findData() {
    try {
        // Get the database connection
        const db = await conn.NewMongoConnection();
        // collection name
        const collection = db.collection(cl);
        // inquiry data
        const result = await collection.find({}).toArray().catch((error) => {
            console.error(error);
        });
        // logging
        console.log(result);
        // return resp
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = {
    findData
};