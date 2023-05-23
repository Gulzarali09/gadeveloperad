var firebaseConfig = {
    apiKey: "AIzaSyCE31nMDttmQsv4ENcFWnOY7Q_yTlE5LGo",
    authDomain: "gadevelopers-7dffb.firebaseapp.com",
    databaseURL: "https://gadevelopers-7dffb-default-rtdb.firebaseio.com",
    projectId: "gadevelopers-7dffb",
    storageBucket: "gadevelopers-7dffb.appspot.com",
    messagingSenderId: "141186588044",
    appId: "1:141186588044:web:121484aefa413450238aa9"
  };
  firebase.initializeApp(firebaseConfig);
  
function send(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}