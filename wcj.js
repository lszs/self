document.addEventListener('touchmove', function (event) {
        event.preventDefault();
}, false);


var c=0;
var gao=$(window).height();
var shuliang=$("#container .box").length;
$("body").swipeUp(function(){
	c++;
	if(c==shuliang){
		c=shuliang-1;
		return;
	}
	$("#container .box").eq(c).find('.ani').hide().removeClass('animated');
	setTimeout(function(){
		$("#container .box").eq(c).find('.ani').show().addClass('animated');
	},1000)
	var t=c*-gao;
	$("#container").css('margin-top',t);
})
$("body").swipeDown(function(){
	c--;
	if(c==-1){
		c=0;
		return;
	}
	$("#container .box").eq(c).find('.ani').hide().removeClass('animated');
	setTimeout(function(){
		$("#container .box").eq(c).find('.ani').show().addClass('animated');
	},1000)
	var t=c*-gao;
	$("#container").css('margin-top',t);
})


