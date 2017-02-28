"use strict";

function rollover(x)
    {
        
        x.src = "/jspractice/image/1.jpg";

    }
        
function mouseaway(my_image)
    {

        my_image.src = "/jspractice/image/2.jpg";

    }


function catch_click(e)
{
    
    
    if (!e) var e = window.event;

    var right_click = (e.which ? (e.which == 3) : (e.button == 2));

    if (right_click)
    {
        alert('Right clicking on this page is not allowed.');
        return false;
    }
}

document.onmousedown = catch_click;
if (document.captureEvents) document.captureEvents(Event.MOUSEDOWN);