const firebaseConfig = {
      apiKey: "AIzaSyBlW3JMT9xZwvxXSsCM64ilUFYzLtln2J8",
      authDomain: "st-fairy-school-7e406.firebaseapp.com",
      databaseURL: "https://st-fairy-school-7e406-default-rtdb.firebaseio.com",
      projectId: "st-fairy-school-7e406",
      storageBucket: "st-fairy-school-7e406.appspot.com",
      messagingSenderId: "100042977722",
      appId: "1:100042977722:web:3e80dabb9a170ff0206d83"
    };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code



//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}