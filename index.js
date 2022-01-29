const robot = document.querySelector('.robot');
let number = 0;

function moveRobot() {
    //add code here
    number += 50;
    console.log(number);
    robot.style.left = number + 'px';
}

function moveRight() {
    //add code here
    number -= 50;
    console.log(number);
    robot.style.left = number + 'px';
}

function moveTop() {
    //add code here
    number += 50;
    console.log(number);
    robot.style.top = number + 'px';
}

function moveBottom() {
    //add code here
    number -= 50;
    console.log(number);
    robot.style.top = number + 'px';
}
