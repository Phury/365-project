$( document ).ready(function() {
	var nbImages = 7; /* update this value when new images are added */
	
	function pad(num, size){ return ('000000000' + num).substr(-size); }

	function range(start, stop, step){
		if (typeof stop=='undefined'){
			// one param defined
			stop = start;
			start = 0;
		};
		if (typeof step=='undefined'){
			step = 1;
		};
		if ((step>0 && start>=stop) || (step<0 && start<=stop)){
			return [];
		};
		var result = [];
		for (var i=start; step>0 ? i<stop : i>stop; i+=step){
			result.push(i);
		};
		return result;
	};
	
	/* generate the gallery */
	var container = $('#content');
	for(var i=nbImages;i>0;i--) { container.append('<div class="row"><img data-wow-delay="0.2s" class="wow fadeInUp" src="img/'+pad(i,3)+'.JPG"/></div>'); }
	
	/* animation effects */
	new WOW().init();
});