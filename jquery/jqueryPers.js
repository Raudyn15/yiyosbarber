$(document).ready(function() {
    // Cuando se haga clic en la imagen mostrarlo en popup
    $('.imagen').click(function() {
        // Obtener la ruta de la imagen
        var imgUrl = $(this).attr('src');
        
        // Mostrar el popup con la imagen
        $('.popup-img').attr('src', imgUrl);
        $('.popup-overlay').fadeIn();
    });

    // Cuando se haga clic en el overlay del popup, se cerrará
    $('.popup-overlay').click(function() {
        $(this).fadeOut();
    });
});