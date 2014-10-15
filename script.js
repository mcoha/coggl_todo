$(document).ready(function(){ 
    var p=0;
    
// Glavna funckija//
// Klik miša
    $('#button').click(function(){

      var datum =$('#datepicker').val();
     
       if ($('input').val() !== '') {
       	var toAdd=$('input[name=checkListItem]').val();
        console.log("datum je",datum);
       $(".list").append('<div class="item">' + toAdd + datum +'<input class="check" type="checkbox" ></input>'+  '</div>');
        p+=1;}
        $('input').val('');
    return false;
        });
    
    $('form').submit(function () {
// Enter na formu

if ($('input').val() !== '') {
  var datum =$('#datepicker').val();
    	var toAdd=$('input[name=checkListItem]').val();
     
        $(".list").append('<div class="item">' + toAdd + "   " +datum +'<input class="check" type="checkbox" ></input>'+ '</div>');
        p+=1;
        
        }
      $('input').val('');
    return false;
});

    
    
    

    
    
//brisanje svega
    $(document).on('click','#button2',function(){ 

       for (i=0;i<p;i++){$('.item').remove();}

    });

  //brisanje onog kliknutoga
  
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
    