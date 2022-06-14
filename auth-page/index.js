 
   
   // post login
if ( document.getElementById('login')){
   document.getElementById('login').addEventListener('submit', loginButton)
 function loginButton(ev) {
     ev.preventDefault();
 
     let body=  {
      user : {
        username: document.getElementById('Email').value,
        password: document.getElementById('Password').value,
  
      }   
  };
  
 
   
 axios.post('https://cardman.herokuapp.com/auth/login', body).then((response) => {
             console.log(response.data)
            let token = response.data.payload

            localStorage.setItem("token", token);
         }).catch((e) => {
             console.error(e)
         })
         
 };
};
 
  // post Signup
 if(document.getElementById('Signup')){
  document.getElementById('Signup').addEventListener('submit', signupButton)

  function signupButton(ev) {
    ev.preventDefault();

  let body=  {
    user : {
      username: document.getElementById('Email').value,
      password: document.getElementById('Password').value,

    }      
};


  
axios.post('https://cardman.herokuapp.com/auth/signup',body).then((response) => {
            console.log(response.data)
        }).catch((e) => {
            console.error(e)
        })
        
};   
};


  