/**
 * Auth.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        "id": {
            "type": "integer",
            "autoIncrement": true,
            "primaryKey": true,
            "unique": true
        },
        "login": {
            "type" : "string"
        },
        "password": {
            "type": "string"
        },
        "role": {
            "type": "string"
        },
        "createdAt": {
            "type": "datetime"
        },
        "updatedAt": {
            "type": "datetime"
        }
    }
};

