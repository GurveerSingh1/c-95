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
    
  function getData() 

  {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
  
        console.log("Room Names - " + Room_names);
  
         row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
  
         document.getElementById("output").innerHTML += row;
  
       
        });});}
        
  getData();
  
  function addRoom()
  
  {
        room_name=document.getElementById("room_name").value;
  
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
                                                                   
        localStorage.setItem("room_name" , room_name);
        
        window.location="kwitter_page.html";
  }
  
  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name" , name);
        window.location="kwitter_page.html";
  
  }