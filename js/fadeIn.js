function show(){
	//可视区域
	var clients = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
	var showId = document.getElementById('showId');
	var showId2 = document.getElementById('showId2');
	var showId3 = document.getElementById('showId3');
	var showId4 = document.getElementById('showId4');
	//获得元素距页面顶端的高度
	var divTop = showId.getBoundingClientRect().top;
	var divTop2=showId2.getBoundingClientRect().top;
	var divTop3=showId3.getBoundingClientRect().top;
	var divTop4=showId4.getBoundingClientRect().top;
	console.log(divTop);
	if(divTop<=clients){
		showId.classList.add('fadeInLeft');
	}
	if(divTop2<=clients){
			showId2.classList.add("fadeIntop");
		}
	if(divTop3<=clients){
		showId3.classList.add("fadeInright");
	}
	if(divTop4<=clients){
		showId4.classList.add("fadeInBottom");
	}
}
show();
window.onscroll=show;
