

// admin sidebar js

$(document).ready(function () {
	$(".astc-icon").click(function () {
		$(".sidebar-wrapper").toggleClass("d-block");
		$("body").toggleClass("no-scroll");
	});
});

// client company nav buttons js

$(document).ready(function(){
  $("#pills-clients-tab").click(function(){
    $(".client-nav-buttons").show();
    $(".company-nav-buttons").hide();
  });
  $("#pills-company-tab").click(function(){
    $(".client-nav-buttons").hide();
    $(".company-nav-buttons").show();
  });
});

$(document).ready(function(){
  $("#pills-invoice-tab").click(function(){
    $(".invoice-nav-buttons").show();
    $(".funds-nav-buttons").hide();
  });
  $("#pills-funds-tab").click(function(){
    $(".invoice-nav-buttons").hide();
    $(".funds-nav-buttons").show();
  });
  $("#pills-statement-tab").click(function(){
    $(".invoice-nav-buttons").hide();
    $(".funds-nav-buttons").hide();
  });
});