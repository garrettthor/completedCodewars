/*
Color Ghost

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

var Ghost = function() {
    Ghost.color = ''
    let randomizer = Math.ceil(Math.random() * 4)
    if (randomizer === 1) {
        Ghost.color = 'white'
    } else if (randomizer === 2) {
        Ghost.color = 'yellow'
    } else if (randomizer === 3) {
        Ghost.color = 'purple'
    } else if (randomizer === 4) {
        Ghost.color = 'red'
    }
};

new Ghost