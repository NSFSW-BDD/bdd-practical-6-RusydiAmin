const pool = require('../services/db');

var userModel = {
    selectAllUsers: (callback) => {
        const SQLSTATEMENT = `
            SELECT * FROM user;
            `;

        pool.query(SQLSTATEMENT, callback);
    },

    selectUserById: (data, callback) => {
        const SQLSTATEMENT = `
            SELECT * FROM user
            WHERE userid = ?;
            `;
        const VALUES = [data.userid];

        pool.query(SQLSTATEMENT, VALUES, callback);
        
    },

    insertNewUser: (data, callback) => {
        const SQLSTATEMENT = `
            INSERT INTO user (username, email, role, password)
            VALUES (?,?,?,?);
            `;
        const VALUES = [data.username, data.email, data.role, data.password];

        pool.query(SQLSTATEMENT, VALUES, callback);
    },

    updateUserById : (data, callback) => {
        const SQLSTATEMENT = `
            UPDATE user
            SET username=?, email=?, password=?
            WHERE userid=?;
            `;
        const VALUES = [data.username, data.email, data.password, data.userid];

        pool.query(SQLSTATEMENT, VALUES, callback);
    },

    deleteUserById : (data, callback) => {
        const SQLSTATEMENT = `
            DELETE FROM user
            WHERE userid = ?;
            `;
        const VALUES = [data.userid];

        pool.query(SQLSTATEMENT, VALUES, callback);
    },

    // authetication
    loginUser: (data, callback) => {
        const SQLSTATEMENT = `
            SELECT * FROM user
            WHERE email=?
            AND password=?;
            `;
        const VALUES = [data.email, data.password];

        pool.query(SQLSTATEMENT, VALUES, callback);
    }
}

module.exports = userModel;