$(document).ready(function(e) {
	$('#responsiveTabs').responsiveTabs({
		startCollapsed: 'accordion'
	});
	$('#responsiveTabs2').responsiveTabs({
		startCollapsed: 'accordion'
	});
	
	window.sr = ScrollReveal();
	sr.reveal('.reveal');
	
$('.responsive').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('#ex1').slider({
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

var calculate = function() {
	//$('#calculate').html(r.getValue()+','+g.getValue()+','+b.getValue()+')')
	months = g.getValue();
	users = b.getValue();
	final_value = 0;
	tar1_val = 0;
	tar2_val = 0;
	tar3_val = 0;
	
	tar2_nodisc_val = 0;
	tar2_nodisc_val = 0;
	tar3_nodisc_val = 0;
	
	
	if (months == 0 && users == 0){
		tar1_val = 1000;
		tar2_val = 2500;
		tar3_val = 4500;
	} else if (months == 6 && users == 0){
		tar1_val = 4800;
		tar2_val = 12000;
		tar3_val = 21600;
	} else if (months == 12 && users == 0){
		tar1_val = 7800;
		tar2_val = 19500;
		tar3_val = 35100;


	}else if (months == 0 && users == 10){
		tar1_val = 2500;
		tar2_val = 4750;
		tar3_val = 7250;
	} else if (months == 6 && users == 10){
		tar1_val = 12000;
		tar2_val = 22800;
		tar3_val = 34800;
	} else if (months == 12 && users == 10){
		tar1_val = 19500;
		tar2_val = 37050;
		tar3_val = 56550;


	}else if (months == 0 && users == 20){
		tar1_val = 5500;
		tar2_val = 9250;
		tar3_val = 12750;
	} else if (months == 6 && users == 20){
		tar1_val = 26400;
		tar2_val = 43290;
		tar3_val = 61200;
	} else if (months == 12 && users == 20){
		tar1_val = 42900;
		tar2_val = 72150;
		tar3_val = 99450;

	}else if (months == 0 && users == 30){
		tar1_val = 8500;
		tar2_val = 13750;
		tar3_val = 18250;
	} else if (months == 6 && users == 30){
		tar1_val = 40800;
		tar2_val = 66000;
		tar3_val = 87600;
	} else if (months == 12 && users == 30){
		tar1_val = 66300;
		tar2_val = 107250;
		tar3_val = 142350;

	}else if (months == 0 && users == 40){
		tar1_val = 11500;
		tar2_val = 18250;
		tar3_val = 23750;
	} else if (months == 6 && users == 40){
		tar1_val = 55200;
		tar2_val = 87600;
		tar3_val = 114000;
	} else if (months == 12 && users == 40){
		tar1_val = 89700;
		tar2_val = 142350;
		tar3_val = 185250;

	}else if (months == 0 && users == 50){
		tar1_val = 14500;
		tar2_val = 22750;
		tar3_val = 29250;
	} else if (months == 6 && users == 50){
		tar1_val = 69600;
		tar2_val = 109200;
		tar3_val = 140400;
	} else if (months == 12 && users == 50){
		tar1_val = 113100;
		tar2_val = 177450;
		tar3_val = 228150;

		
		
	} else {
		$("#val1").html("# руб");
		$("#val2").html("# руб");
		$("#val3").html("# руб");
	}
	
	if (months == 6){
		$("#val1").html("<span class='oldprice'>"+
		(tar1_val/0.8)
		+" руб</span><br />"+tar1_val+" руб");
		$("#val2").html("<span class='oldprice'>"+
		(tar2_val/0.8)
		+" руб</span><br />"+tar2_val+" руб");
		$("#val3").html("<span class='oldprice'>"+
		(tar3_val/0.8)
		+" руб</span><br />"+tar3_val+" руб");
	} else if (months == 12){
		$("#val1").html("<span class='oldprice'>"+
		(tar1_val/0.65)
		+" руб</span><br />"+tar1_val+" руб");
		$("#val2").html("<span class='oldprice'>"+
		(tar2_val/0.65)
		+" руб</span><br />"+tar2_val+" руб");
		$("#val3").html("<span class='oldprice'>"+
		(tar3_val/0.65)
		+" руб</span><br />"+tar3_val+" руб");
	} else {
		$("#val1").html(tar1_val+" руб");
		$("#val2").html(tar2_val+" руб");
		$("#val3").html(tar3_val+" руб");
	}
	

	
	
	
	if (users == 60) {
		$('#calculate > div').stop().slideUp(300);
		$('#calculate .special').stop().slideDown(300);
	} else {
		$('#calculate > div').stop().slideDown(300);
		$('#calculate .special').stop().slideUp(300);
	}
	
};


var g = $('#G').slider()
		.on('change', calculate)
		.data('slider');
var b = $('#B').slider()
		.on('change', calculate)
		.data('slider');

});

