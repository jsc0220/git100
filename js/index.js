//轮播
$(function(){
	//签约仪式的轮播
	$(".ca_btn").click(function(e){
		clearInterval(timer1);
			//执行你的操作
			
		if($(e.target).attr("id")=="ca_next"){//是下一张
			let fir=$(".slider_box>li:first-child");
			fir.css("margin-left","-220px");
			setTimeout(function(){
				fir.appendTo($(".slider_max>.slider_box")).css("margin-left","0");
			},1000)
		}else if($(e.target).attr("id")=="ca_prev"){//上一张
			let las=$(".slider_box>li:last-child");//定义最后一张图片
			las.insertBefore($(".slider_box>li:first-child")).css("margin-left","-220px");//让最后一张图片插入到长盒子第一张图片的前面，并让其左移动220px
			las.animate({
				"marginLeft":"0px"//动画，最后一张图片插入之后左移动变为0
			},1)
		}
	})
	
	timer1=setInterval(function(){
		let fir=$(".slider_box>li:first-child");
			fir.css("margin-left","-220px");
			setTimeout(function(){
				fir.appendTo($(".slider_max>.slider_box")).css("margin-left","0");
			},1)
	},2000)
	
	//团队介绍的轮播
	$(".td_btn").click(function(e){
		clearInterval(timer2);
//		if(!$(e.target).is(":animated")){
			//执行你的操作
			
		if($(e.target).attr("id")=="td_next"){//是下一张
			let fir=$(".td_slider_box li:first-child");//第一张图片
			fir.css("margin-left","-220px");//让第一张图片向左移动220px
			setTimeout(function(){
				fir.appendTo($(".td_slider_box")).css("margin-left","0");//把第一张压入到长盒子里，并设置它左边距为0
			},1000)
		}
		else if($(e.target).attr("id")=="td_prev"){//上一张
			let las=$(".td_slider_box>li:last-child");//定义最后一张图片
			las.insertBefore($(".td_slider_max>.td_slider_box>li:first-child")).css("margin-left","-220px");//让最后一张图片插入到长盒子第一张图片的前面，并让其左移动220px
			las.animate({
				"marginLeft":"0px"//动画，最后一张图片插入之后左移动变为0
			},1)
//		}
	}
	})
	
	timer2=setInterval(function(){
		let fir=$(".td_slider_box>li:first-child");
			fir.css("margin-left","-220px");
			setTimeout(function(){
				fir.appendTo($(".td_slider_max>.td_slider_box")).css("margin-left","0");
			},1000)
	},2000)
	
	//
	$(".right").click(function(e){
		console.log(1);
//		e.stopPropagation();
		$(".footer_h").css("opacity","0");
	})
	
})