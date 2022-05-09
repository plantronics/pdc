//  - - debug toggle switch animation - -
$(document).ready(function() {
	$('.onoffbtn').on('click', function(){
	  if($(this).children().is(':checked')){
	    $(this).addClass('active');
	  }
	  else{
	    $(this).removeClass('active')
	  }
	});
});

//  - - debug show/hide debug table - -
$(document).on("change", "#log", function(){
        if($("#log:checked").length > 0 ) {
			  $("#debug-table").fadeIn(1000);
			}
			else {
			  $("#debug-table").fadeOut(1000);
			}
		});

//  - - show coachtips - -
$(document).on("click", "#coachmark", function(){
        if($(".coachmark-arrows").is(':hidden')) {
					$(".coachmark-arrows").fadeIn(1000);
				} else {
			  $(".coachmark-arrows").fadeOut(1000);
			}

		});

//  - - show info dialog - -
$(document).on("click", "#info", function(){
			  $("#info-dialog").fadeIn(1000);
		});

//  - - hide info dialog - -
$(document).on("click", "#close", function(){
			  $("#info-dialog").fadeOut(1000);
		});

//  - - toggle deviceName toggle - -
/*
$(document).on("click", ".headset-name", function(){
			  $(".headset-name").hide();
			  $(".headset-name-zero").show();
		});
$(document).on("click", ".headset-name-zero", function(){
			  $(".headset-name").show();
			  $(".headset-name-zero").hide();
		});
*/

$(document).ready(function () {
    $(window).resize(function () {
        $('.coachmark-arrows').fadeOut(1000);
        $('#debug-table').fadeOut(1000);
	      $('.onoffbtn').removeClass('active')
    });

/*	
$(function(){
	$('.headset-name-zero').click(function(){
		e1 = $('.poly-spin');
        e1.addClass('propellerSpin');
        e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            e1.removeClass('propellerSpin');
        });
	});
});
*/

});
