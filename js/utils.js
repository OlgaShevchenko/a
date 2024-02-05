$(document).ready(function(){	
	
	$('.logos_slider').bxSlider({
		minSlides: 1,
		maxSlides: 5,
		slideWidth: 240,
		shrinkItems: true,
		controls: false
	});	
		
	$("#faq_block .q").click(function(){			
		$(this).toggleClass('active');	
		$(this).next('.a').slideToggle();				
	});	
	
	

	$(".scroll_link").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);		
	});
				

	$('.reply_slider').bxSlider({
		adaptiveHeight: true,
		controls: false
	});					

	$(".gallery").colorbox({ maxWidth:'90%', maxHeight:'90%' });	
	
	var size = $( window ).width();	
	if(size > 991){	
		
		
	}
	if(size > 768){	
		$('.col-eq').colequalizer();
		$(window).scroll(function(){
        if ($(this).scrollTop() > 10) {            
			$('header .menu_block').fadeOut();
        } else {          
			$('header .menu_block').fadeIn();
        }
        });
	}
	if(size < 768){	
		$("#header .menu_block .menu_trigger").click(function(){					
				$('#header .menu_block .menu').slideToggle();	
				$('#header .menu_block .menu_trigger i').toggleClass('hid');		
			});	
		$("#header .menu_block .menu a").click(function(){					
			$('#header .menu_block .menu').slideUp();	
			$('#header .menu_block .menu_trigger i').toggleClass('hid');		
		});	
	}	
});		
