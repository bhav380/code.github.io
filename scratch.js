var ball = document.getElementById('ball');


function moveDown() {

    var coordinates = ball.getBoundingClientRect();
    var inc = coordinates.top;


    var interval = setInterval(down, 50);


    function down() {


        inc += 4;
        ball.style.top = inc + "px";

        var coordinates = ball.getBoundingClientRect();

        if (coordinates.top >= window.innerHeight - 100) {
            clearInterval(interval);
        }

       
    }


    
}


