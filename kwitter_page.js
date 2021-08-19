user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyD38RqJZbUXs-BVsumxecRDeKN-Y39eJUw",
      authDomain: "kwitter-32c89.firebaseapp.com",
      databaseURL: "https://kwitter-32c89-default-rtdb.firebaseio.com",
      projectId: "kwitter-32c89",
      storageBucket: "kwitter-32c89.appspot.com",
      messagingSenderId: "536233241279",
      appId: "1:536233241279:web:eebf27632c0393f2b1b40a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code 


//End code
      } });  }); }
getData();


function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({

               name:user_name,
               message:msg,
               like:0

      });
      document.getElementById("msg").value="";
}

