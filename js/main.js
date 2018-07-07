var wh = $(window).width();
$('.sec_menu').width(wh);


// 二级菜单
$('.fir_item').hover(function() {
	var athis = $(this);
	delay = setTimeout(function(){
		athis.children('.sec_menu').slideDown('300');
	},300)
}, function() {
	clearTimeout(delay);
	var athis = $(this);
	athis.children('.sec_menu').slideUp('300');
});
