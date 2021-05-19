const firebase = require("./firebase-connect");

module.exports = {
    _updateData : function(req, callback){
        let user =  "Deepak";//req.user;
        let email = "deepakkufdhbhdjmari@gmail.com" //req.username;

        firebase.database().ref("users/"+ user+"/").update({
            email : email
        });
        callback("successfull");
        
    }
}