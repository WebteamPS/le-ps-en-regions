// Function for animate map
$('.showSingle, .itemShow').on('click', function () {
    $(this).attr('class', 'active').siblings().removeAttr('class', 'active');
    $('.targetInfo').hide();
    $('#info' + $(this).attr('target')).show(function(){
    	$(this).animate({opacity: 1});
    });
});
$('.showSingle, .itemShow').first().click();

//http://jsfiddle.net/x7xqb/1/
//https://martinwolf.org/2014/12/11/adding-and-removing-classes-from-svg-elements-with-jquery/

// GO TO
$('a[href^="#"]').click(function(){
  var the_id = $(this).attr("href");

  $('html, body').animate({
    scrollTop:$(the_id).offset().top
  }, 'slow');
  return false;
});

//https://github.com/pguso/jquery-plugin-circliful
$('#graphBretagne').circliful();
$('#graphBourgogne').circliful();
$('#graphAquitaine').circliful();
$('#graphCentre').circliful();
$('#graphLanguedoc').circliful();

function supportsSvg() {
  var div = document.createElement('div');
  div.innerHTML = '<svg/>';
  return (div.firstChild && div.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';
};