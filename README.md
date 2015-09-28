Tic Tac Toe game

This tic tac toe game is played by two players. It has a vague superhero theme inspired by the font found on Google fonts.

Technology used:

HTML, CSS, Javascript, JQuery

Approach taken: Looked at the problem as a whole, consulted with teachers, peers and the internet to formulate an approach. 

I planned on using Bootstrap to make designing the site quicker, but ended up scraping that and writing HTML/CSS instead to have more control over the layout. 

In order to make the game interactive, I used Javascript and JQuery so I could use CSS selectors to select DOM elements.I hard coded each box, click and added text once the box was clicked using jQuery .text method. Then spent a lot of time trying to refactor the code and get rid of all the repetitive code.

I tried wrapping it in one game object but it is easier for me to separate out the functions and then call them using callback functions, since Javascript is asynchronous.

Most proud of my refactoring! Which allowed me to eliminate hard coding of each square, with an event listener on each square. Instead I found jQuery methods .each() and .eq() to loop through and obtain the index values I needed, deleting over 200 lines of code.

Link to Game as hosted on Github pages:



