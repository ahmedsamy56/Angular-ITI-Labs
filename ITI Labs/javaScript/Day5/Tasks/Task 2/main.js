var current = 1;
var flag = false;

function ClearColoers() {
    document.getElementById('circle1').className = 'circle';
    document.getElementById('circle2').className = 'circle';
    document.getElementById('circle3').className = 'circle';
}

function MyAction() {
    if (flag) return;

    ClearColoers();

    if (current === 1) {
        document.getElementById('circle1').className += ' red';
    } else if (current === 2) {
        document.getElementById('circle2').className += ' yellow';
    } else if (current === 3) {
        document.getElementById('circle3').className += ' green';
    }

    current++;
    if (current > 3){
        current = 1;   
    }
}

function mouseHover(id) {
    var element = document.getElementById(id);

    element.onmouseenter = function() {
        if (element.className.indexOf('red') !== -1 || element.className.indexOf('yellow') !== -1 ||
            element.className.indexOf('green') !== -1) {
            flag = true;
        }
    };
    element.onmouseleave = function() {
        flag = false;
    };
}

mouseHover('circle1');
mouseHover('circle2');
mouseHover('circle3');

var timer = setInterval(MyAction, 1000);
