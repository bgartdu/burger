const connection = require("./connection");

let conn = null;
async function waitForConnection() {
    conn = await connection;
}
waitForConnection();

module.exports = {
    selectAll: async function(table) {

    },
    insertOne: async function(table, data) {
        
    },
    updateOne: async function(table, data) {
        
    }
}