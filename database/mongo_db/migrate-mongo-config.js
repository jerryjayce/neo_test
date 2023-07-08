// In this file you can configure migrate-mongo
const mongo_config = require('./config');

const config = {
    mongodb: {
        // TODO Change (or review) the url to your MongoDB:
        url: mongo_config.MONGO_DB_URI,

        // TODO Change this to your database name:
        databaseName: mongo_config.MONGO_DB_NAME,

        options: {
            useNewUrlParser: true, // removes a deprecation warning when connecting
            useUnifiedTopology: true // removes a deprecating warning when connecting
            //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
            //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
        }
    },

    // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
    migrationsDir: "migrations",

    // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
    changelogCollectionName: "changelog",

    // The file extension to create migrations and search for in migration dir
    migrationFileExtension: ".js",

    // Enable the algorithm to create a checksum of the file contents and use that in the comparison to determine
    // if the file should be run.  Requires that scripts are coded to be run multiple times.
    useFileHash: false,

    // Don't change this, unless you know what you're doing
    moduleSystem: "commonjs"
};

module.exports = config;


//docs

/*
Creating a new migration script
To create a new database migration script, just run the migrate-mongo create [description] command.

    For example:

    $ migrate-mongo create blacklist_the_beatles
Created: migrations/20160608155948-blacklist_the_beatles.js
A new migration file is created in the 'migrations' directory:







Migrate up
This command will apply all pending migrations

$ migrate-mongo up
MIGRATED UP: 20160608155948-blacklist_the_beatles.js

*/
