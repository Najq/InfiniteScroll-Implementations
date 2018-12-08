var max=20;
window.onload = function(){
	init();
}

function init(){
var loadMore = function (){
 for(var i=max-20;i<max;i++){
	 $('.inner').append("<p> Record "+i+"</p>");
 }
 max +=20;
}

$('.on').scroll(function(){
	 var top = $('.on').scrollTop();
	 $('.top').html("top: "+top+"diff: "+($('.inner').height() - $('.on').height()));
	 if(top >= ($('.inner').height() - $('.on').height())){
		 $('.top').append(" bottom");
		 loadMore();
	 }
	
});

loadMore();
}