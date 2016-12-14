(function() {
    'use strict';
    // defer bg images and detect retina
    var retina;

    if (window.matchMedia('(-webkit-min-device-pixel-ratio: 2)').matches || window.matchMedia('(min-resolution: 192dpi)').matches) {

        retina = true;
    }

    if (retina) {

        document.body.classList.add('retina');

    } else {

        document.body.classList.add('noretina');
    }
})();
