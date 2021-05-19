const firebase = require("./firebase-connect");

module.exports = {
    getdata : function(callback){
        firebase.database().ref("users/").once("value").then(function(snapshot){
            callback(snapshot.val());
        })
    }
}