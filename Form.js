// Your web app's Firebase configuration
var firebaseConfig = {
    //firebase config stuff
    apiKey: "AIzaSyA0hTaMVG7oFH-AUYU_W9R1TeW7_GSvlI4",
    authDomain: "codewarts-946f2.firebaseapp.com",
    databaseURL: "https://codewarts-946f2.firebaseio.com",
    projectId: "codewarts-946f2",
    storageBucket: "codewarts-946f2.appspot.com",
    messagingSenderId: "322646567170",
    appId: "1:322646567170:web:7e6d50b7761540edad3a1b",
    measurementId: "G-8YJBCD8HST"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      
        const auth = firebase.auth();
        
        
        function signUp(){
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            
            alert("Signed Up");
        }
        
        
        
        function signIn(){
            var user=document.getElementById("user");
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.signInWithEmailAndPassword(user.value, email.value, password.value);
            promise.catch(e => alert(e.message));
            
            
            
            
        }
        
        
        function signOut(){
            
            auth.signOut();
            alert("Signed Out");
            
        }
        
        
        
        auth.onAuthStateChanged(function(user){
            
            if(user){
                
                var email = user.email;
                alert("Active User " + email);
                
                //Take user to a different or home page
    
                //is signed in
                
            }else{
                
                alert("No Active User");
                //no user is signed in
            }
            
            
            
        });
    