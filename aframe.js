+(function(factory) {
    if (typeof exports === 'undefined') {
        factory(webduino || {});
    } else {
        module.exports = factory;
    }
}(function(scope) {
    'use strict';
    var self;
    var proto;
    var Module = scope.Module;

    function loadJS(filePath) {
        var req = new XMLHttpRequest();
        req.open("GET", filePath, false); // 'false': synchronous.
        req.send(null);

        var headElement = document.getElementsByTagName("head")[0];
        var newScriptElement = document.createElement("script");
        newScriptElement.type = "text/javascript";
        newScriptElement.text = req.responseText;
        headElement.appendChild(newScriptElement);
    }


    var vr = '<a-scene id="scene">' +
        //'    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>' +
        //'    <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>' +
        //'    <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>' +
        //'    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>' +
        '    <a-sky color="#ECECEC"></a-sky>' +
        '  </a-scene>';

    function aframe(eleId) {
        self = this;
        Module.call(this);
        loadJS('https://aframe.io/releases/0.7.0/aframe.min.js');
        document.getElementById(eleId).innerHTML = vr;
        self.sceneEl = document.querySelector('a-scene');
        self.entities = {};
        self.objCount = 0;
    }

    aframe.prototype = proto = Object.create(Module.prototype, {
        constructor: {
            value: aframe
        }
    });

    proto.addEntity = function(entity) {
        var boxEl = entity.ele();
        self.sceneEl.appendChild(boxEl);
        self.entities[boxEl.getAttribute('id')] = boxEl;
    }

    scope.module.aframe = aframe;
}));









+
(function(factory) {
    if (typeof exports === 'undefined') {
        factory(webduino || {});
    } else {
        module.exports = factory;
    }
}(function(scope) {
    'use strict';
    var self;
    var proto;
    var objCount = 0;
    var Module = scope.Module;

    function entity(entityType, color, pos, scale) {
        self = this;
        Module.call(this);
        var boxEl = document.createElement(entityType);
        boxEl.setAttribute('material', color);
        boxEl.setAttribute('position', pos);
        boxEl.setAttribute('scale', scale);
        boxEl.setAttribute('id', 'entity' + (++objCount));
        self.boxEl = boxEl;
    }

    entity.prototype = proto = Object.create(Module.prototype, {
        constructor: {
            value: entity
        }
    });

    proto.pos = function(x, y, z) {
        self.boxEl.setAttribute('position', { 'x': x, 'y': y, 'z': z });
    }

    proto.ele = function() {
        return self.boxEl;
    }

    scope.module.entity = entity;
}));