const db = require("../config/db")

const gettAllProjects = (callback)=>{
    const query = "select * FROM projects ORDER By created_at DESC"
    db.query(query, (err, results) =>{
        callback(err,results);
    })
}

const getProjectById =(id, callback) =>{
    const query = "select * From projects WHERE id =?";
    db.query(query,[id],(err,results)=>{
        callback(err,results[0])
    })
}

module.exports = {
    gettAllProjects,
    getProjectById
};
