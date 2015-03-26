
;(function() {

'use strict';
    
    var curImage = 0;

    function timeout() {
        setTimeout(function () {
            nextImage();
            timeout();
        }, 9000);
    }
    
    timeout();


    var p;
    var items = document.getElementById("container");
    var nodelist = items.getElementsByTagName("div").length;  
    var numImages = nodelist;

    function nextImage() {
        var e;

        // remove showMe class from current image
        p = document.getElementById("container").children[curImage];

    /*    console.log(p);
        e = document.getElementById("slideimg" + curImage);
    */
        removeClass(p, "showMe fadeIn");
        
        // compute next image
        curImage++;
        if (curImage > numImages - 1) {
            curImage = 0;
        }
        
        // add showMe class to next image
        //e = document.getElementById("slideimg" + curImage);
        p = document.getElementById("container").children[curImage];
        addClass(p, "showMe fadeIn");

    }
        
    function addClass(elem, name) {
        var c = elem.className;
        // if not blank, add a space separator
        if (c) {
            c += " "
        }; 
        c += name;
        elem.className = c;
    }

    function removeClass(elem, name) {
        var c = elem.className;
        elem.className = c.replace(name, "").replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");  // remove name and extra blanks
    }

})();
