window.onload = function() {

    document.getElementById("a001").innerHTML = 1024;
    //document.getElementById("01").style.backgroundColor = "#eee4da"; //color for number 2


    let x = document.getElementById("a001");
    if (x.innerHTML = 1024) {
        document.getElementById("a001").style.color = "#11e4da";
    }


    //set positions of tiles in grid
    for (i=1; i<=16; i++) {
        document.getElementById("a0" + i).style.backgroundColor = "#333";
        
        if (i <=4 ) {
            document.getElementById("a0" + i).style.gridColumn = i;
            document.getElementById("a0" + i).style.gridRow = 1;
        }

        if (i>4 && i <=8) {
            document.getElementById("a0" + i).style.gridColumn = i-4;
            document.getElementById("a0" + i).style.gridRow = 2;
        }

        if (i > 8 && i <=12) {
            document.getElementById("a0" + i).style.gridColumn = i-8;
            document.getElementById("a0" + i).style.gridRow = 3;
        }

        if (i > 12) {
            document.getElementById("a0" + i).style.gridColumn = i-12;
            document.getElementById("a0" + i).style.gridRow = 4;
        }
        
    }







    // Function test to be asigned to keyboard "Up" key
    // 37 left - 38 up - 39 right - 40 down
    function goup() {
        var temp = document.getElementById("a01").style.gridRow;
        var posx = temp.charAt(0);
        if (posx < 4)
        {
            posx ++;
        }
        
        document.getElementById("a01").style.gridRow = posx;
        document.getElementById("a01").style.gridColumn = 1;
        document.getElementById("a01").style.backgroundColor = "#ccc";
    }

    
    document.addEventListener("keypress", checkKey);

    function checkKey(up) {
        var key = up.which || up.keyCode;
        if (key === 38) goup();
    }







}
