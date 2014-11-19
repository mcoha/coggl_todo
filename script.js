$(document).ready(function(){ 
    var p=0;
    
// Main//
// Filling the list by mouse click
    $('#button').click(function(){
       var color = random();
   console.log("color je", color, " temp je", temp);
   while (temp===color) {color = random();}
   temp=color;
      var datum =$('#datepicker').val();
     
       if ($('input').val() !== '') {
       	var toAdd=$('input[name=checkListItem]').val();
        console.log("datum je",datum);
       $(".list").append('<div class="item" draggable="true" style="background-color:'+ color + '">'  +toAdd  +'<input class="check" type="checkbox" ></input>' + "<br> " + datum +  '</div>');
        p+=1;}
        $('input').val('');
    return false;
        });
    
    $('form').submit(function () {
// Filling the list by pressing enter on the form

if ($('input').val() !== '') {
  var color = random();
   console.log("color je", color, " temp je", temp);
   while (temp===color) {color = random();}
   temp=color;
  var datum =$('#datepicker').val();
    	var toAdd=$('input[name=checkListItem]').val();
     
       $(".list").append('<div class="item" draggable="true" style="background-color:'+ color + '">'  +toAdd  +'<input class="check" type="checkbox" ></input>' + "<br> " + datum +  '</div>');
        p+=1;
        
        }
      $('input').val('');
    return false;
});

    
    
    

    
    
//Delete all
    $(document).on('click','#button2',function(){ 

       for (i=0;i<p;i++){$('.item').remove();}

    });

  //Deleting the items with the selected checkboxes
  
function cleanup() {

    $('.item > .check ').each( function(idx, el) {

        if( $(el).prop('checked') ) {

            $(el).parent().detach();

        }

    });

}
$('#button3').click(function() {
    cleanup();

});


  // datepicker setup
$(function() {
	$("#datepicker").datepicker({minDate: 0});
	$( "#datepicker" ).datepicker("option", "dateFormat", "dd.mm.yy.");
});


 // Function for randomising the color of the list item
 var temp="white";
 function random() {
 randic=Math.floor((Math.random() * 5) + 1); 
switch (randic) {

  case 1 : return "#757670";
           break;
  case 2 : return "#F24A4A";
           break;
  case 3 : return "#CCCCFF";
           break;
  case 4 : return "#4C7895";
           break;
  case 5 : return "#EAAFE3";
           break;

}

}

// Sortable list
$(function() {

    $( ".list" ).sortable();

    $( ".list" ).disableSelection();

  });


});
 
 
 // This function gets cookie with a given name
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');
 
/*
The functions below will create a header with csrftoken
*/
 
function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
function sameOrigin(url) {
    // test that a given url is a same-origin URL
    // url could be relative or scheme relative or absolute
    var host = document.location.host; // host + port
    var protocol = document.location.protocol;
    var sr_origin = '//' + host;
    var origin = protocol + sr_origin;
    // Allow absolute or scheme relative URLs to same origin
    return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
        (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
        // or any other URL that isn't scheme relative or absolute i.e relative.
        !(/^(\/\/|http:|https:).*/.test(url));
}
 
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
            // Send the token to same-origin, relative URLs only.
            // Send the token only if the method warrants CSRF protection
            // Using the CSRFToken value acquired earlier
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

// Submit post on submit
$('#post-form').on('submit', function(event){
    event.preventDefault();
    console.log("form submitted!")  // sanity check
    create_post();
});

// AJAX for posting
function create_post() {
    console.log("create post is working!") // sanity check
    console.log($('#post-text').val())
};