$('#player').on('change', function() {
  rockPaper();
});



 function rockPaper(){
  var computerScore = 0;
  var playerScore = 0;
  var player = $("#player").val();
  

   var result = ['rock','paper','scissors'];
   var computer = result[Math.floor(Math.random()*3)];
    console.log(computer);

    var final = function(player, computer){
    if(player == 'rock'){
        if(computer == "scissors"){   
            playerScore++    
            return("player wins")
        }if(computer == "rock"){
            return("Draw");
        }if(computer=='paper'){ 
            computerScore++        
            return("computer wins");
        }    
    }if(player == 'scissors'){
        if(computer=='scissors'){
            return("Draw")
        }if(computer=="rock"){   
            computerScore++     
            return('computer wins')
        }if(computer=='paper'){  
             playerScore++ 
            return('Player wins')
        }
    }if(player=='paper'){
        if(computer=='paper'){
            return("Draw")
        }if(computer=='scissors'){
            computerScore++
            return("computer wins!") 
        }if(computer=="rock"){ 
            playerScore++       
            return('Player Wins!')
        }
    }
    
  }
  //   console.log(final(player, computer))

  $('.winner').text(final(player, computer));
  $('.winner').css('display', 'block')
  $('.score').text('Player1 ' + playerScore);
  $('.score').css('display', 'block')  
  $('.computerScore').text('Computer '+ computerScore);
  $('.computerScore').css('display', 'block')
}
 
