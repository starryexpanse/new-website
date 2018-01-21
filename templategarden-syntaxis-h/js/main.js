
function main() {

(function () {
   'use strict';

	// Hide .navbar first
	$(".navbar").hide();
	
	Math.clamp = function(number, min, max) {
		return Math.max(min, Math.min(number, max));
	}
	
	// Fade in .navbar, rotate intro image
	$(function () {
		var offset = 0;
		
		var c = $('.intro-button');
		var ri = $('.rotate-img');
		var ri3D = $('.rotate-img-3D');
		
		var state = 0;

		ri3D.mouseover(function () {
		  	var st = $(window).scrollTop();
		  	offset += 22;
		  	//console.log(st);
		    if(st < 230) {
				var rotationStr = "rotate(" + ((st + offset)/1.5) + "deg)";
				//var rotationStr3D = ri3D.css("transform") + " rotate(" + ((st + offset)/1.5) + "deg)";
				//console.log("mouseover");
				ri.css({
				  "transition": "transform 0.3s ease",
				  "-webkit-transform": rotationStr,
				  "-moz-transform": rotationStr,
				  "transform": rotationStr
				});
				ri3D.css({
				  "transition": "transform 0.3s ease",
				  "-webkit-transform": rotationStr,
				  "-moz-transform": rotationStr,
				  "transform": rotationStr
				});
			}
			//console.log("mouseover");
		});
		ri3D.mouseout(function () {
		    var st = $(window).scrollTop();
		    offset -= 22;
		    //console.log(st)
		    if(st < 230) {
				var rotationStr = "rotate(" + ((st + offset)/1.5) + "deg)";
				//var rotationStr3D = ri3D.css("transform") + " rotate(" + ((st + offset)/1.5) + "deg)";
				//console.log("mouseout");
				ri.css({
				  "transition": "transform 0.3s ease",
				  "-webkit-transform": rotationStr,
				  "-moz-transform": rotationStr,
				  "transform": rotationStr
				});
				ri3D.css({
				  "transition": "transform 0.3s ease",
				  "-webkit-transform": rotationStr,
				  "-moz-transform": rotationStr,
				  "transform": rotationStr
				});
			}
			//console.log("mouseout");
		});

		$(window).scroll(function () {
		    var st = $(window).scrollTop();
		    var rTop = ri.offset().top - st;
		    
            // set distance user needs to scroll before we fadeIn navbar
			if($(this).scrollTop() > 200) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
			
			//var n = -7
			var top = $('.intro-body').height() / 2.68;
			
			//console.log(st + " : " + top);
			
			//if(rTop > n) { // Rotate intro image
			if($(window).scrollTop() < top) { // Rotate intro image
				//var newLoc = $(window).scrollTop();
				//var diff = scrollLoc - newLoc;
				//rotation -= diff, scrollLoc = newLoc;
				
				state = 0;
				
				var rotation = Math.clamp(st, 0, 360);
				
				//console.log(rotation + offset);
				
				var rotationStr = "rotate(" + (rotation + offset) / (top / 180) + "deg)";
				ri.css({
				  "transition": "none",
				  "-webkit-transform": rotationStr,
				  "-moz-transform": rotationStr,
				  "transform": rotationStr,
				  "opacity": 1
				});
				ri3D.css({
				  "transition": "none",
				  "opacity": Math.clamp($(window).scrollTop()/100, 0, 1).toString(),
				  "-webkit-transform": rotationStr,
				  "-moz-transform": rotationStr,
				  "transform": rotationStr,
				  "position": "absolute",
				  "top": "0",
				  "transform-origin": "center"
				});
				c.attr("href", "#about");
			}
			//else if($(window).scrollTop() < 600 && rTop <= n) { // Scale intro image
			else if($(window).scrollTop() < 600 && $(window).scrollTop() >= top) { // Scale intro image
				//var newLoc = $(window).scrollTop();
				//var diff = scrollLoc - newLoc;
				//rotation -= diff, scrollLoc = newLoc;
				var cssArr = {};
				
				state = 1;
				
				rotation = 180;
				
				var max = 550;
				var fScale = 0.5;
				
				//((600-600.56)*-1)/1000
				//(($(window).scrollTop()-(max + fScale))*-1)/1000
				
				var scale = Math.clamp(((($(window).scrollTop()-550)-(max))*-1)/900, fScale, 1);
				
				var tStr = "rotate(" + rotation + "deg) scale(" + scale + ")";
				cssArr["-webkit-transform"] = tStr,
				cssArr["-moz-transform"] = tStr,
				cssArr["transform"] = tStr,
				cssArr["position"] = "fixed",
				cssArr["top"] = "-103px",
				//cssArr["top"] = (top / -2.28).toString() + "px",
				cssArr["transform-origin"] = "bottom";
				
				ri.css("opacity", 0.0);
				
				c.attr("href", "#page-top");
				
				
				ri3D.css(cssArr);
				
				//console.log($(window).scrollTop() + " : " + scale);
			}
			else if($(window).scrollTop() > top && state < 2) { // Set intro image
				//var newLoc = $(window).scrollTop();
				//var diff = scrollLoc - newLoc;
				//rotation -= diff, scrollLoc = newLoc;
				var cssArr = {};
				
				state = 2;
				
				rotation = 180;
				
				var max = 550;
				var fScale = 0.5;
				
				//((600-600.56)*-1)/1000
				//(($(window).scrollTop()-(max + fScale))*-1)/1000
				
				var scale = 0.553333;
				
				var tStr = "rotate(" + rotation + "deg) scale(" + scale + ")";
				cssArr["-webkit-transform"] = tStr,
				cssArr["-moz-transform"] = tStr,
				cssArr["transform"] = tStr,
				cssArr["position"] = "fixed",
				cssArr["top"] = "-103px",
				//cssArr["top"] = (top / -2.28).toString() + "px",
				cssArr["transform-origin"] = "bottom";
				
				ri.css("opacity", 0.0);
				ri3D.css("opacity", 1.0);
				
				c.attr("href", "#page-top");
				
				
				ri3D.css(cssArr);
				
				//console.log("blah");
			}
			//console.log(rTop);
			//console.log(offset);
			//console.log(st);
		});

	
	});
	
	// Preloader */
	  	$(window).load(function() {

   	// will first fade out the loading animation 
    	$("#status").fadeOut("slow"); 

    	// will fade out the whole DIV that covers the website. 
    	$("#preloader").delay(500).fadeOut("slow").remove();      

  	}) 

   // Page scroll
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {
  	    $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});

  	// Gallery Isotope Filter
    $(window).load(function() {
        var $container = $('.gallery-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
	

  // jQuery Parallax
  function initParallax() {
    $('#intro').parallax("100%", 0.3);
    $('#services').parallax("100%", 0.3);
    $('#aboutimg').parallax("100%", 0.3);	
    $('#testimonials').parallax("100%", 0.1);

  }
  initParallax();

  	// Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

}());


}
main();