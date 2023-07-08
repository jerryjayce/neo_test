import { db } from "../connectToCluster";


export const up = async (): Promise<void> => {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script

    // await db.createCollection("user");

    await db.collection("user").updateOne({},
        {
            $set: {
                validator: {
                    $jsonSchema: {
                        bsonType: "object",
                        title: "User entry Validation",
                        required: [
                            "first_name",
                            "last_name",
                            "email",
                            "phone",
                            "password",
                            "role"
                        ],
                        properties: {
                            first_name: {
                                bsonType: "string",
                                description: "must be a string and is required"
                            },
                            last_name: {
                                bsonType: "string",
                                description: "must be a string and is required"
                            },
                            email: {
                                bsonType: "string",
                                description: "must be a string and is required"
                            },
                            phone: {
                                bsonType: "int",
                                description: "must be a string and is required",
                                minLength: 11,
                                maxLength: 14
                            },
                            created_at: {
                                bsonType: "date",
                                description: "must be a valid date"
                                // default: { $date: new Date() }
                            },
                            updated_at: {
                                bsonType: "date",
                                description: "must be a valid date"
                                // default: { $date: new Date() }
                            }
                        }
                    }
                }
            }
        },
        {
            upsert: true
        }
    );

};

export const down = async () => {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
};

export const view_validators = async (collection: string): Promise<object> => {
    const result = await db.collection(collection).findOne({}, {
        fields: {
            validator: 1
        }
    });
    for (const el in result.validator) {
        console.log(result.validator[el]);
    }

    return result.validator;
};


//change directory into database/mongo_db then run the following
//    `migrate-mongo up`     runs migration


// "additionalProperties": false,
// When you specify additionalProperties: false in your JSON schema, MongoDB rejects documents
// that contain fields not included in your schema's properties object.
//Because all objects contain an automatically-generated _id field, when you set
// additionalProperties: false, you must include the _id field in your properties object. If you don't, all documents are rejected.
