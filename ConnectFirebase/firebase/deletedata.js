const firebase = require("./firebase-connect");

module.exports = {
    _deletedata : function(callback){
        let user =  "AniketPathak";//req.user; 

        firebase.database().ref("users/"+ user).remove();
        callback("successfull");
        
    }
}

