# The Game

This is a turn-based dice game, written in Javascript, HTML5 and CSS3.


# Rules Of the Game

- The player with the active turn rolls the dice.
- If the rolled number is not 1 then it gets added to a running current score.
- If the number is 1, the current score becomes 0 and the turn passes over to the other player.
- After each non-1 turn, the active player can decide to **hold**, whereby the current running total for that player gets added to the global total for that player
- First player to reach a global score of 100 or more wins. 

## Learnings from the Game

- Basic DOM Manipulation APIs such as querySelector and getElementById
- Basic Math functions such as **Math.floor()** and  **Math.random()**
	- To generate a random number between max and min the following syntax can be used:  
		```let random = Math.floor(Math.random()*(max-min+1) + min); ```
	- Use of Dry principles to eliminate code duplicacy. 
	- HTML5 and CSS3
