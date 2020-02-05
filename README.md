# Clicky-Game

[Clicky-Game](https://powerful-everglades-22681.herokuapp.com/) 

**Object**

*The Application [Clicky-Game](https://powerful-everglades-22681.herokuapp.com/) hosted on Heroku is created has a react application. The application render different images to the screen. Each image listens for click events. The application keep track of the user's score. The user's score is incremented when clicking on an image for the first time. The user's score is reset to 0 if they user click the same image more than once. Every time an image is clicked, the images shuffle and render in a random order. Once the user's score is reset after an incorrect guess, the game restarts.*



`Default  Page`

<a href="#"><img src="https://github.com/fpinder/Clicky-Game/blob/master/src/images/backgroundRead.jpg" alt="Home Page"></a>


*[Dog Images](https://pupster.netlify.com/) are from the  Pupster Website* 


**_Technology used_**

*This app uses React (also known as React.js or ReactJS), Components, Functional components, Class-based components, Virtual DOM, and JSX*



**Character Component** *`Character.js` The onClick function is a callback to check if the image has been clicked or not* 

**Container Component:** *`Container.js` *main container for each Character component*

**Navbar Component** *`Navbar.js` *Display the score  and  high score*

**Container Component:** *`ClickyGame.js` *stores the class value to assign to navMessage based on a good or bad click; used to shuffle the array of images when the DOM loads, and when an image is clicked, and tracks scores*
 


#
Lincense by <a href="https://creativecommons.org/licenses/by/3.0/" rel="nofollow">CC-BY</a>
