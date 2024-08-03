$(function(){
    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 800, function(){
          window.location.hash = gato;
        });
      }
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  });

$(document).ready(function(){
    $('#enviarCorreo').click(function(){
      alert('El correo fue enviado correctamente...');
    });
    $('#agregarFavoritos').click(function(){
      alert('Felicidades, esta sección fue agregada correctamente a tus favoritos...');
    });
    $('.card').on('dblclick', function() {
      $(this).find('.card-body').toggle();
    });
    $('#INGREDIENTES').on('dblclick', function() {
    $(this).css('color', 'red');
    });
});

