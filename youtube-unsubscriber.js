var i = 0;

var myVar = setInterval(myTimer, 3000);

function myTimer() {

    var els = document.getElementById("grid-container").getElementsByClassName("ytd-expanded-shelf-contents-renderer");

    if (i < els.length) {

        els[i].querySelector("[aria-label^='Hủy đăng ký']").click();

        setTimeout(function () {

            var unSubBtn = document.getElementById("confirm-button").querySelector("[aria-label^='Hủy đăng ký']").click();

        }, 2000);


    }

    i++;

    console.log(i + " Channels Unsubscribed\n");

    console.log(els.length + " remaining");

}
