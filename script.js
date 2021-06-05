document.addEventListener('DOMContentLoaded', ()=> {
    var characters = ["Iron Man", "Captain America", "Thor", "Hulk", "Hawkeye", "Black Widow"];
    var slide_index = 0;
    var abort = false;
    var ids = ["iron-man", "captain-america", "thor", "hulk", "hawkeye", "black-widow"]

    // function writeText(text, index) {
    //     console.log(abort);
    //     if (index < text.length) {
    //         document.getElementById("heroes").innerHTML = text.substring(0, index+1);
    //         if (abort === true) {
    //             return;
    //         }
    //         setTimeout(function(){writeText(text, (index+1))}, 500);
    //     }
    //     else {
    //         return;
    //     }
    // }

    function textAnimation(i, character) {
        document.getElementById(ids[i]).classList.toggle("toggle-on");
        if (character == "Iron Man") {
            document.getElementById("gif").src = "https://media1.tenor.com/images/54603c681d37cecb2973e7974dea7f43/tenor.gif?itemid=16430080";
            document.getElementById("numbertext").innerHTML = "1 / 6"
            document.getElementById("heroes").innerHTML = character;
        } else if (character == "Captain America") {
            document.getElementById("gif").src = "https://media3.giphy.com/media/kRkJXYahXjSE0/200.gif";
            document.getElementById("numbertext").innerHTML = "2 / 6"
            document.getElementById("heroes").innerHTML = character;
        } else if (character == "Thor") {
            document.getElementById("gif").src = "https://thumbs.gfycat.com/HairyVelvetyHornbill-size_restricted.gif";
            document.getElementById("numbertext").innerHTML = "3 / 6"
            document.getElementById("heroes").innerHTML = character;
        } else if (character == "Hulk") {
            document.getElementById("gif").src = "https://giffiles.alphacoders.com/140/140313.gif";
            document.getElementById("numbertext").innerHTML = "4 / 6"
            document.getElementById("heroes").innerHTML = character;
        } else if (character == "Hawkeye") {
            document.getElementById("gif").src = "https://thumbs.gfycat.com/MelodicPhysicalAmethystinepython-max-1mb.gif";
            document.getElementById("numbertext").innerHTML = "5 / 6"
            document.getElementById("heroes").innerHTML = character;
        } else if (character == "Black Widow") {
            document.getElementById("gif").src = "https://allears.net/wp-content/uploads/2021/04/black-widow-trailer-gif.gif";
            document.getElementById("numbertext").innerHTML = "6 / 6"
            document.getElementById("heroes").innerHTML = character;
        }
        // writeText(character,0);
    }

    document.getElementById("prev").addEventListener("click", subSlides);
    document.getElementById("next").addEventListener("click", plusSlides);

    function plusSlides() {
        document.getElementById(ids[slide_index]).classList.remove("toggle-on");
        slide_index += 1;
        if (slide_index >= characters.length) {
            slide_index = 0;
        }
        textAnimation(slide_index, characters[slide_index]);
    }

    document.getElementById("iron-man").addEventListener("click", function() {
        document.getElementById(ids[slide_index]).classList.remove("toggle-on");
        slide_index = 0;
        textAnimation(slide_index, characters[slide_index]);
    })
    document.getElementById("captain-america").addEventListener("click", function() {
        document.getElementById(ids[slide_index]).classList.remove("toggle-on");
        slide_index = 1;
        textAnimation(slide_index, characters[slide_index]);
    })
    document.getElementById("thor").addEventListener("click", function() {
        document.getElementById(ids[slide_index]).classList.remove("toggle-on");
        slide_index = 2;
        textAnimation(slide_index, characters[slide_index]);
    })
    document.getElementById("hulk").addEventListener("click", function() {
        document.getElementById(ids[slide_index]).classList.remove("toggle-on");
        slide_index = 3;
        textAnimation(slide_index, characters[slide_index]);
    })
    document.getElementById("hawkeye").addEventListener("click", function() {
        document.getElementById(ids[slide_index]).classList.remove("toggle-on");
        slide_index = 4;
        textAnimation(slide_index, characters[slide_index]);
    })
    document.getElementById("black-widow").addEventListener("click", function() {
        document.getElementById(ids[slide_index]).classList.remove("toggle-on");
        slide_index = 5;
        textAnimation(slide_index, characters[slide_index]);
    })

    function subSlides() {
        document.getElementById(ids[slide_index]).classList.remove("toggle-on");
        slide_index -= 1;
        if (slide_index <= -1) {
            slide_index = characters.length - 1;
        }
        textAnimation(slide_index, characters[slide_index]);
    }

    textAnimation(slide_index, characters[slide_index]);

});
