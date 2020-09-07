var firebaseConfig = {
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
  
  //Reference for form collection(3)
  let formMessage = firebase.database().ref('register');
  
  //listen for submit event//(1)
  document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);
    function formSubmit(e) {
        e.preventDefault();
        // Get Values from the DOM
        let name = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        let password = document.querySelector('#password').value;
        let bio = document.querySelector('#bio').value;
        let job = document.querySelector('#job').value;
        let interest = document.querySelector('#interest').value;
      
        //send message values
        sendMessage(name, email, password, bio, job, interest);
      
        //Show Alert Message(5)
        document.querySelector('.alert').style.display = 'block';
      
        //Hide Alert Message After Seven Seconds(6)
        setTimeout(function() {
          document.querySelector('.alert').style.display = 'none';
        }, 7000);

        document.getElementById('registrationform').reset();
    }
    
    //Send Message to Firebase(4)
    
    function sendMessage(name, email, password, bio, job, interest) {
      let newFormMessage = formMessage.push();
      newFormMessage.set({
        name: name,
        email: email,
        password: password,
        bio: bio,
        job: job,
        Interest: interest
      });
    }