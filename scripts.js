var c = document.getElementById("c");
var ctx = c.getContext("2d");

// making the canvas full screen
function resizeCanvas() {
    c.height = window.innerHeight;
    c.width = window.innerWidth;
    columns = c.width/font_size;
    drops = [];
    for(var x = 0; x < columns; x++)
        drops[x] = 1; 
}

resizeCanvas();

// add event listener to window object to resize canvas when the window size changes
window.addEventListener('resize', function() {
    resizeCanvas();
});

var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
matrix = matrix.split("");

var font_size = 10;
var columns = c.width/font_size;
var drops = [];

for(var x = 0; x < columns; x++)
    drops[x] = 1; 

function draw()
{

    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#1ca152"
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 35);
