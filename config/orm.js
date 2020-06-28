const connection = require("./connection");

let conn = null;
async function waitForConnection() {
    conn = await connection;
}
waitForConnection();

module.exports = {
    selectAll: async function() {

    },
    insertOne: async function(data) {
        
    },
    updateOne: async function(data) {
        
    }
}