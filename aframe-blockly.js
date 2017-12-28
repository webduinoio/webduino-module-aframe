+(function(window, webduino) {
    'use strict';
    window.getAFrame = function(eleId) {
        return new webduino.module.aframe(eleId);
    };
    window.getEntity = function(entityType, color, pos, scale) {
        return new webduino.module.entity(entityType, color, pos, scale);
    };
}(window, window.webduino));