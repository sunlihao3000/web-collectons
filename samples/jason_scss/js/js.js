function removeQuotes(string) {
    if (typeof string === 'string' || string instanceof String) {
        string = string.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, '');
    }
    return string;
}

function getBreakpoint() {
    var style = null;
    if ( window.getComputedStyle && window.getComputedStyle(document.body, '::before') ) {
        style = window.getComputedStyle(document.body, '::before');
        style = style.content;
    }
    return JSON.parse( removeQuotes(style) );

    var color_bg = null;
    if ( window.getComputedStyle && window.getComputedStyle(document.body, '::after') ) {
        color_bg = window.getComputedStyle(document.body, '::after');
        color_bg = color_bg.content;
    }
    return JSON.parse( removeQuotes(color_bg) );

}

function setSource() {
  var label = getBreakpoint();
  var image = document.getElementsByTagName('img');
  for (var i = 0; i < image.length; i++) {
    var source = image[i].getAttribute('data-' + label.current);
    image[i].src = source;
  }

  var color = document.getElementById("test");
}

document.addEventListener("DOMContentLoaded", setSource);
window.onresize = setSource;