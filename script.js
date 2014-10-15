$(document).ready(function(){ 
    var p=0;
    
// Glavna funckija//
// Klik miša
    $('#button').click(function(){
     
       if ($('input').val() !== '') {
        console.log("datum je : ",datum);
       	var toAdd=$('input[name=checkListItem]').val();
     
       $(".list").append('<div class="item">' + toAdd +'<input class="check" type="checkbox" ></input>'+ '</div>');
        p+=1;}
        $('input').val('');
    return false;
        });
    
    $('form').submit(function () {
// Enter na formu
if ($('input').val() !== '') {
    	var toAdd=$('input[name=checkListItem]').val();
     
        $(".list").append('<div class="item">' + toAdd +'<input class="check" type="checkbox" ></input>'+ '</div>');
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
var datum = $( "#datepicker" ).datepicker().value("getDate" );
$( "#datepicker" ).datepicker("option", "dateFormat", "dd.mm.yy");
});
    