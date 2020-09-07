

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      document.getElementById("container_block").style.display = "none"
      document.getElementById("container_block1").style.display = "block"
      var user = firebase.auth().currentUser;
  
      if(user != null){
        alert("Congrats!! You have logged in! ");
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
        document.getElementById("container_block1").style.display = "block"
         
        
         
      }
  
    } else {
      // No user is signed in.
      
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
      document.getElementById("container_block1").style.display = "none"
    }
  });
  



  function RegisterUser() {
    alert('User Register successfully');
      var userName=document.getElementById('user').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
     alert('User Register successfully');
     var id=firebase.auth().currentUser.uid;
     firebase.database().ref('Users/'+id).set({
      userName:user

     

     });
 
 
 
    }).catch(function(error){
 
     var errorcode=error.code;
     var errormsg=error.message;
 
    });
   }






  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
      
  
  
      // ...
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
  }
  