$(document).ready(function(){ 
    var p=0;
    
// Main//
// Filling the list by mouse click
    $('#button').click(function(){

      var datum =$('#datepicker').val();
     
       if ($('input').val() !== '') {
       	var toAdd=$('input[name=checkListItem]').val();
        console.log("datum je",datum);
       $(".list").append('<div class="item">'  +toAdd  +'<input class="check" type="checkbox" ></input>' + "<br> " + datum +  '</div>');
        p+=1;}
        $('input').val('');
    return false;
        });
    
    $('form').submit(function () {
// Filling the list by pressing enter on the form

if ($('input').val() !== '') {
  var datum =$('#datepicker').val();
    	var toAdd=$('input[name=checkListItem]').val();
     
       $(".list").append('<div class="item">'  +toAdd  +'<input class="check" type="checkbox" ></input>' + "<br> " + datum +  '</div>');
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

$( "#datepicker" ).datepicker();
$( "#datepicker" ).datepicker("option", "dateFormat", "dd.mm.yy.");

});
    