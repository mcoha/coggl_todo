$(document).ready(function(){ 
    var p=0;
    
// Main//
// Filling the list by mouse click
    $('#button').click(function(){
       var color = random();
      var datum =$('#datepicker').val();
     
       if ($('input').val() !== '') {
       	var toAdd=$('input[name=checkListItem]').val();
        console.log("datum je",datum);
       $(".list").append('<div class="item" style="background-color:'+ color + '">'  +toAdd  +'<input class="check" type="checkbox" ></input>' + "<br> " + datum +  '</div>');
        p+=1;}
        $('input').val('');
    return false;
        });
    
    $('form').submit(function () {
// Filling the list by pressing enter on the form

if ($('input').val() !== '') {
  var color = random();
  var datum =$('#datepicker').val();
    	var toAdd=$('input[name=checkListItem]').val();
     
       $(".list").append('<div class="item" style="background-color:'+ color + '">'  +toAdd  +'<input class="check" type="checkbox" ></input>' + "<br> " + datum +  '</div>');
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
$( "#datepicker" ).datepicker();
$( "#datepicker" ).datepicker("option", "dateFormat", "dd.mm.yy.");

 // Function for randomising the color of the list item
function random() {

 randic=Math.floor((Math.random() * 5) + 1); 
switch (randic) {

  case 1 : return "#757670";
           break;
  case 2 : return "red";
           break;
  case 3 : return "blue";
           break;
  case 4 : return "yellow";
           break;
  case 5 : return "orange";
           break;

}

}

});
    