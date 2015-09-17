$('#player').on('change', function() {
  rockPaper();
});
$('.rock').on('click', function(){
  rockPaper('rock');
});
$('.scissors').on('click', function(){
  rockPaper('scissors');
})
$('.paper').on('click', function(){
  rockPaper('paper');
})



 function rockPaper(player){
  // var player = $("#player").val();
  
  var computerScore = 0;
  var playerScore = 0;
 for(var i=0; i<=5;i++){
  var result = ['rock','paper','scissors'];
  var computer = result[Math.floor(Math.random()*3)];
    console.log(computer);
  
    var final = function(player, computer){
    if(player == 'rock'){
        if(computer == "scissors"){   
            playerScore++    
            return("Player Wins!")
        }if(computer == "rock"){
            return("Draw");
        }if(computer=='paper'){ 
            computerScore++        
            return("Computer Wins!");
        }    
    }if(player == 'scissors'){
        if(computer=='scissors'){
            return("Draw")
        }if(computer=="rock"){   
            computerScore++     
            return('Computer Wins!')
        }if(computer=='paper'){  
             playerScore++ 
            return('Player Wins!')
        }
    }if(player=='paper'){
        if(computer=='paper'){
            return("Draw")
        }if(computer=='scissors'){
            computerScore++
            return("Computer Wins!") 
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
}
