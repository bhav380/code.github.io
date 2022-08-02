var ball = document.getElementById('ball');


function moveDown() {
    var coordinates = ball.getBoundingClientRect();

    inc = 2;

    while (coordinates.top < window.innerHeight) {
        var interval = setInterval(function() {
            ball.style.marginTop = inc + "px";

        }, 500);

        inc += 2;
    }

}