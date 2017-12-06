
window.onload = function (){
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };

    window.addEventListener('message', receiveMessage);

    function receiveMessage(event) {

        if (event.origin !== 'https://kunden2.cx9.de')
            return;

        /* if (event.data !== 'scroll')
         return;
         */
        // var temp = parseInt(event.data) + 500;
        //console.log(event.data);

        interact.interactionCompleted(event.data);
    }

};

var interact =
{
    currentSite:null,
    previousSite:null,
    interactionCompleted : function(value)

    {
        console.log("Got Message");

        interact.previousSite=interact.currentSite;
        interact.currentSite=value.page;

        if (value.goStart==1){
            // window.location = "http://preview.aznur-rent.eu";
            //window.location = "http://aznur-rent.de";
            window.location = "http://naverstaem.ru/portfolio/aznur";

        }else {

            console.log ("Current: "+interact.currentSite+" Prev Site: "+interact.previousSite);
            if (interact.currentSite==1 && interact.previousSite>1) {

                window.location = "http://naverstaem.ru/portfolio/aznur";
                // window.location = "http://preview.aznur-rent.eu";

                //window.location.href = "http://preview.aznur-rent.eu/#reload";

            }else if(interact.currentSite>1) {
                value= value.height +150;
                $(".view-id-slideshow_start").remove();
                $("#booking_start").css("position","relative");
                $("#booking_start").css("top","0");
                $("#booking_start").css("background-color","#bb1816");
                $("#booking_start").css("height",value+"px");
                $("#booking_start").css("margin-top","-10px");
                $("#booking_start iframe").css("height",value+"px");
                $("#booking_start iframe").attr("scrolling","no");
                var new_height=value+570;
                $("#mainContent").css("height",value+"px");
            }
            //	});
        }
    }
};

