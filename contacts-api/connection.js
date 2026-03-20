
require('dotenv').config();

const { MongoClient } = require('./node_quickstart/node_modules/mongodb/mongodb');

async function main() {
    /**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */
    const uri = process.env.MONGO_URI;

    const client = new MongoClient(uri);

    await client.connect();

    await listDatabases(client);

    try {
    await client.connect();

    await listDatabases(client);
 
    } catch (e) {
        console.error(e);
    }

    finally {
    await client.close();
    }

}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}

