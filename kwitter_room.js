
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDRdBg7-z5I4OGTp6SjQnDsDoEoYC7abXE",
      authDomain: "class-test-7cb73.firebaseapp.com",
      projectId: "class-test-7cb73",
      storageBucket: "class-test-7cb73.appspot.com",
      messagingSenderId: "701283057440",
      appId: "1:701283057440:web:ae840f67861fb7a875e145"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
