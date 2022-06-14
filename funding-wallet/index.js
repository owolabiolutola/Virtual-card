// post Funding


function amountdisplay(){
    
    let amount =  document.getElementById('Amount').value
    let currentAmount = document.getElementById('display').innerText
    
    document.getElementById('display').innerText = parseInt(currentAmount) ? parseInt(currentAmount) + parseInt(amount) : parseInt(amount)
       
}

    document.getElementById('funding').addEventListener('submit', FundButton)
    function  FundButton(ev) {
  ev.preventDefault();

    amountdisplay()

    let body=  {
      card: {
        amount: document.getElementById('Amount').value
        }  ,
        
    

  };
  
  axios.post('https://cardman.herokuapp.com/cards/fund/cardId',body).then((response) => {
              console.log(response.data)
          }).catch((e) => {
              console.error(e)
          })

         
        
          
  };



