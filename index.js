/* Javascript */
$('.editor').trumbowyg({
    svgPath: '/nombreRepo/icons.svg'
    // svgPath: '/icons/icons.svg', // path of icons.svg
    // Habitualmente, se indica la ruta del SVG en este parámetro, pero
    // en codepen, simplemente pegaremos el contenido del SVG en la parte
    // del código HTML
});

$('.editor').trumbowyg('html'); // Obtienes el HTML generado