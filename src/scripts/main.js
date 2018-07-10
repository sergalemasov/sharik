import { Ball } from './ball';

let scene;
let ballDiv;
let ball;
let x = 400;
let y = 300;
let tb = 0;
let lb = 0;
let rb = 800;
let bb = 600;


function main() {
    registerDomElements();
    ball = new Ball(x, y);
    ballDiv.style.top = `${y}px`;
    ballDiv.style.left = `${x}px`;
    tick(action);
}

function registerDomElements() {
    scene = document.getElementsByClassName('scene')[0];
    ballDiv = document.getElementsByClassName('ball')[0];
}

function action() {
    const params = ball.getChangingParams();

    switch (params.top) {
        case '-':
            y--;
            break;
        case '+':
            y++
            break;
    }

    switch (params.left) {
        case '-':
            x--;
            break;
        case '+':
            x++;
            break;
    }

    ballDiv.style.top = `${y}px`;
    ballDiv.style.left = `${x}px`;
    ball.setCoords(x, y);

    const boundaries = ball.getBoundaries();

    if (boundaries.t === tb && boundaries.l === lb) {
        ball.onTopLeftCorner();
    } else if (boundaries.t === tb && boundaries.r === rb) {
        ball.onTopRightCorner();
    } else if (boundaries.b === bb && boundaries.l === lb) {
        ball.onBottomLeftCorner();
    } else if (boundaries.b === bb && boundaries.r === rb) {
        ball.onBottomRightCorner();
    } else if (boundaries.t === tb) {
        ball.onTopBorder();
    } else if (boundaries.b === bb) {
        ball.onBottomBorder();
    } else if (boundaries.r === rb) {
        ball.onRightBorder();
    } else if (boundaries.l === lb) {
        ball.onLeftBorder();
    }
}

function tick(cb) {
    cb();
    requestAnimationFrame(() => {
        tick(cb);
    });
}

window.onload = main;

