window.onload = function() {


//Pre-Setup
    //set positions of tiles in grid
    for (i=1; i<=4; i++) {
        
        for (o=1; o<=4; o++) {
            document.getElementById("a" + i + o).style.gridRow = i;
            document.getElementById("a" + i + o).style.gridColumn = o;
        }
        
    }











    //  START  //
    //  START  //
    //  START  //



    
    //starting tiles (2 tiles)
        //90% chance to be 2, 10% to be 4
        //random 1-4 for coordinates
    function createTile(x,y) {
        var newTileValue = 0;
        newTileValue = Math.random() * 10;
        newTileValue = Math.floor(newTileValue);
        if (newTileValue < 9) {
            newTileValue = 2;
        }
        else {
            newTileValue = 4;
        }
        console.log("netTileValue is: " + newTileValue);

        var newTileX = 0;
        newTileX = Math.random() * (5 - 1) + 1;
        newTileX = Math.floor(newTileX);
        console.log("netTileX is: " + newTileX);

        var newTileY = 0;
        newTileY = Math.random() * (5 - 1) + 1;
        newTileY = Math.floor(newTileY);
        console.log("netTileY is: " + newTileY);
        // document

    }

    createTile();

    document.getElementById("a001").innerHTML = 1024;
    //document.getElementById("01").style.backgroundColor = "#eee4da"; //color for number 2


    // let x = document.getElementById("a001");
    // if (x.innerHTML = 1024) {
    //     document.getElementById("a001").style.color = "#11e4da";
    // }






    //Save For Later
    
    //this is how to animate
    //document.getElementById("a11").style.animation = "tileDown1 0.2s forwards linear"; 




















    //IDK why I did this LOL
    for (as=2; as<=9999; as *= 2) {
        console.log(as);
        if (document.getElementById("a001").innerHTML == as) {
            console.log("u gjet " + as);
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