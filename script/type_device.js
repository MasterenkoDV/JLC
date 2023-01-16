// Reloading the page when resizing
window.addEventListener('resize', function () { 
    'use strict';
    window.location.reload(); 
});

// Device definition
const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i");
const device_orientation = window.matchMedia("(orientation: portrait)");

if (devices.test(navigator.userAgent)) {
    // Mobile device
    const script = document.createElement('script');
    script.src = './script/min_screen_structure.js';
    document.head.appendChild(script);
    // PC device
    } else {
        const script = document.createElement('script');
        script.src = './script/max_screen_structure.js';
        document.head.appendChild(script);
    }
    