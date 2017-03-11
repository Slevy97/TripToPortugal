$(document).ready(
function(){
var wind = $(window);
var buttons = $(".nav");
var title = $(".title");
var load = $(".load");
var buttonsall = $(".navcontainer");
var windh;
var windw;
windh = wind.height();
windw = wind.width();
var titleh = title.height();
var buttonsw = buttons.width();
load.margin({top: titleh,left: buttonsw});
buttonsall.css({
	height: windh
});
wind.resize(
	function()
	{
var wind = $(window);
var buttons = $(".nav");
var title = $(".title");
var load = $(".load");
var windh;
var windw;
windh = wind.height();
windw = wind.width();
var titleh = title.height();
var buttonsw = buttons.width();
load.margin({top: titleh,left: buttonsw});
buttonsall.css({
	height: windh
});
}
);
});