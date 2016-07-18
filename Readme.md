[SURGE!](http://tiy-joshuarivers-escape-the-room.surge.sh)

Learning Objectives

* Demonstrate an understanding of Classes & instances of them
* Demonstrate Prototypal Inheritance
* Demonstrate how to properly use test driven development with Mocha & Chai
* Marry DOM events with creating instances of Objects

## Normal Mode

First and foremost, please have fun with this. This encapsulates all of the things you have worked with so far and possibly some new things you'll learn as you push yourself. Remember to break this down into small tasks and commit often.

* Create a Game

  * Must contain Classes
  * You must have tests for any classes you write, and they need to pass.
  * Must have some type of logic built into it, even it that is just that there is a random winner each time.
  * Must have a nice design around it
  * Must be deployed to Surge and completely working

* Need Direction? - Follow the following template:

  * Different Types of Players
  * Different Types of Enemies
  * Each player/enemy instance will start with an amount of points (health, life, etc)
  * When a bad guy attacks a good guy, the good guy's points go down
  * When a good guy attacks a bad guy, the bad guy's points go down
  * When the player/enemy hits 0, show something visually that they have been defeated and who the winner is
  * Use lodash _.random() or a different method to make sure there is a different outcome each time the game is played

## Hard (Bonus) Mode

* Add Konami code to your game for a quick way to win!

## Deliverables

* Submit the Github URL for you project
* Deploy to Surge.sh

## Sample Games

* [Shootin' Vermin](http://rdanieldesign.github.io/TurnGame/)
* [Human Vs Plants](http://ppark482.github.io/Human-Vs-Plants/)