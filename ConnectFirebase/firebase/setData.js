const firebase = require("./firebase-connect");

module.exports = {
    saveData : function(req,callback){
        
        let user = req.user;

        firebase.database().ref("users/"+ user).set({
            email : req.username,
            password : req.password,
        });
        callback(null,{"statuscode":200, "message": "successfully"});
    }
}