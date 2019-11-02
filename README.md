This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Clicky Game

## How to play
Clicky Game is a memory game.  The user will click on images one at a time.  If the image has not been previously clicked, the score will increase by 1.  The goal is to click all 12 images without repeating.  Each time an image is clicked, the images will shuffle.  If an image is clicked a second time, the user  will be notified the choice was incorrect at the top of the browser and the game resets.  Clicky game will save the top score in the browser window. 

## Requirements

1. The application should render different images (of your choice) to the screen. Each image should listen for click events.

2. The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

3. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

4. Once the user's score is reset after an incorrect guess, the game should restart.

## Technologies
React.js
Bootstrap