var available_backgrounds =
[
    'img/bg1.jpg',
    'img/bg2.jpg',
    'img/bg3.jpg',
    'img/bg4.jpg',
    'img/bg5.jpg',
    'img/bg6.jpg',
    'black',
    'white',
];
var current_background_index = 0;

function switch_background(index) {
	var len = available_backgrounds.length;
    var index = parseInt(index);
    var bg = 0;
    if (!isNaN(index) && index >= 0 && index < len) {
        current_background_index = index;
        bg = available_backgrounds[index];
    } else {
        bg = available_backgrounds[++current_background_index % len];
    }
    if (bg.endswith(".jpg") || bg.endswith(".png")) { // endswith is an self-define function, import util.js first.
        bg = "url('" + bg + "')";
    }
	$("body").css({"background":bg});
}
