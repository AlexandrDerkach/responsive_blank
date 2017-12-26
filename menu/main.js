var doc = document
	, $doc = $(document)
	, ths = $(this);
var windowWidth = $(window).width();
$(document).ready(function () {
	(function () {
		var touchMenu = $('.touch_menu')
			, navbarTop = $('.navbar_top')
			, socialList = $('.social_list')
			, touchMenuInner = $('.touch_menu_inner_cont')
			, touchFirstChild = $('div.touch_menu_inner_cont>i:first-child')
			, touchSecondChild = $('div.touch_menu_inner_cont>i:nth-child(2)')
			, touchThirdChild = $('div.touch_menu_inner_cont>i:last-child')
			, mainHeader = $('.main_header');
		touchMenu.on('click', function (e) {
			e.preventDefault();
			ths.slideToggle(0, function () {
				navbarTop.toggleClass('flex').css('display', '');
				socialList.toggleClass('flex').css('display', '');
				touchFirstChild.toggleClass('rotatorClass');
				touchSecondChild.toggleClass('none');
				touchThirdChild.toggleClass('rotatorReversClass');
			})
		})
		mainHeader.mouseleave(function () {
			navbarTop.removeClass('flex');
			socialList.removeClass('flex');
			touchFirstChild.removeClass('rotatorClass');
			touchSecondChild.removeClass('none');
			touchThirdChild.removeClass('rotatorReversClass');
		})
	}());
})