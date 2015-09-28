//Tic Tac Toe Game

//jQuery DOM selectors

allBox= $('.box');
resultBox = $('#result-box');
scoreBox = $('#score-box')
startButton = $('button');

board = [	0,0,0,
            0,0,0,
            0,0,0       ];

//START THE GAME

startButton.on('click', function(){
	playerOneName = prompt("First player, please enter your name");
	if (playerOneName != null) {
    	$('#player-one-name').text("Get ready to make the first move " + playerOneName );
	}

	playerTwoName = prompt("Second player, please enter your name");
	if (playerTwoName != null) {
    	$('#player-two-name').text("Against " + playerTwoName);
	}
	whoseTurn();
});

var whoseTurn = function() {

	allBox.each(
	  function(index){
	    $( this ).bind ( "click", function(){
	            console.log(index); 
	            boxClicked = index;
	    })
	  } 
	)     
	
	turnNumber = 1;

	allBox.one('click', function(){
	
    if (turnNumber % 2 == 1) {
		    board[boxClicked] = 'x';
       		allBox.eq(boxClicked).text('x'); 
   			turnNumber +=1;
	}  
	  else if (turnNumber % 2 == 0) {
 	  		board[boxClicked] = "o";
   			allBox.eq(boxClicked).text('o');
   			turnNumber +=1;
   			determineWinner();
 		}     
		whoseTurn +=1;
	    determineWinner(); 
	}) 
				
}; //end whoseTurn


function determineWinner() {

	playerOneWinCount= 0;
	playerTwoWinCount= 0;

	if 	(
		(board[0]==="x" && board[1]==="x" && board[2]==="x") ||
		(board[3]==="x" && board[4]==="x" && board[5]==="x") ||
		(board[6]==="x" && board[7]==="x" && board[8]==="x") ||//horizontal wins
		(board[0]==="x" && board[3]==="x" && board[6]==="x") ||
		(board[1]==="x" && board[4]==="x" && board[7]==="x") ||
		(board[2]==="x" && board[5]==="x" && board[8]==="x") ||//vertical wins
		(board[0]==="x" && board[4]==="x" && board[8]==="x") ||
		(board[2]==="x" && board[4]==="x" && board[6]==="x")
		)//diagonal wins
	 {
		console.log(playerOneName + " is the winner!");
		playerOneWinCount +=1;
		alert(playerOneName + " is the winner!");
	 }
	else if 	(
		(board[0]==="o" && board[1]==="o" && board[2]==="o") ||
		(board[3]==="o" && board[4]==="o" && board[5]==="o") ||
		(board[6]==="o" && board[7]==="o" && board[8]==="o") ||//horizontal wins
		(board[0]==="o" && board[3]==="o" && board[6]==="o") ||
		(board[1]==="o" && board[4]==="o" && board[7]==="o") ||
		(board[2]==="o" && board[5]==="o" && board[8]==="o") ||//vertical wins
		(board[0]==="o" && board[4]==="o" && board[8]==="o") ||
		(board[2]==="o" && board[4]==="o" && board[6]==="o")
		)//diagonal wins
	{console.log("Player 2 is the winner");
		playerTwoWinCount +=1;
		alert(playerTwoName + " is the winner!")
	} else if {console.log("Currently it is tied")}
	
	reportResults();
}; // determineWinner()

function reportResults() {
		scoreBox.text(playerOneName + " : " + playerOneWinCount + " and " + playerTwoName + " : " + playerTwoWinCount);

}; //reportResults()



