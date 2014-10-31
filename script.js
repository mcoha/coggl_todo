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
    