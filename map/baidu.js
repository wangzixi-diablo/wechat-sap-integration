window.TILE_VERSION = {
    "ditu": {
        "normal": {
            "version": "088",
            "updateDate": "20171222"
        },
        "satellite": {
            "version": "009",
            "updateDate": "20171222"
        },
        "normalTraffic": {
            "version": "081",
            "updateDate": "20171222"
        },
        "satelliteTraffic": {
            "version": "083",
            "updateDate": "20171222"
        },
        "mapJS": {
            "version": "104",
            "updateDate": "20171222"
        },
        "satelliteStreet": {
            "version": "083",
            "updateDate": "20171222"
        },
        "panoClick": {
            "version": "1033",
            "updateDate": "20171221"
        },
        "panoUdt": {
            "version": "20171221",
            "updateDate": "20171221"
        },
        "panoSwfAPI": {
            "version": "20150123",
            "updateDate": "20150123"
        },
        "panoSwfPlace": {
            "version": "20141112",
            "updateDate": "20141112"
        },
        "earthVector": {
            "version": "001",
            "updateDate": "20171222"
        }
    },
    "webapp": {
        "high_normal": {
            "version": "001",
            "updateDate": "20171222"
        },
        "lower_normal": {
            "version": "002",
            "updateDate": "20171222"
        }
    },
    "api_for_mobile": {
        "vector": {
            "version": "002",
            "updateDate": "20171222"
        },
        "vectorIcon": {
            "version": "002",
            "updateDate": "20171222"
        }
    }
};
window.BMAP_AUTHENTIC_KEY = "";
(function() {
    var b2, a8 = b2 = a8 || {
        version: "1.3.4"
    };
    a8.guid = "$BAIDU$";
    window[a8.guid] = window[a8.guid] || {};
    a8.object = a8.object || {};
    a8.extend = a8.object.extend = function(cM, T) {
        for (var cL in T) {
            if (T.hasOwnProperty(cL)) {
                cM[cL] = T[cL]
            }
        }
        return cM
    }
    ;
    a8.dom = a8.dom || {};
    a8.dom.g = function(T) {
        if ("string" == typeof T || T instanceof String) {
            return document.getElementById(T)
        } else {
            if (T && T.nodeName && (T.nodeType == 1 || T.nodeType == 9)) {
                return T
            }
        }
        return null
    }
    ;
    a8.g = a8.G = a8.dom.g;
    a8.dom.hide = function(T) {
        T = a8.dom.g(T);
        T.style.display = "none";
        return T
    }
    ;
    a8.hide = a8.dom.hide;
    a8.lang = a8.lang || {};
    a8.lang.isString = function(T) {
        return "[object String]" == Object.prototype.toString.call(T)
    }
    ;
    a8.isString = a8.lang.isString;
    a8.dom._g = function(T) {
        if (a8.lang.isString(T)) {
            return document.getElementById(T)
        }
        return T
    }
    ;
    a8._g = a8.dom._g;
    a8.dom.contains = function(T, cL) {
        var cM = a8.dom._g;
        T = cM(T);
        cL = cM(cL);
        return T.contains ? T != cL && T.contains(cL) : !!(T.compareDocumentPosition(cL) & 16)
    }
    ;
    a8.browser = a8.browser || {};
    if (/msie (\d+\.\d)/i.test(navigator.userAgent)) {
        a8.browser.ie = a8.ie = document.documentMode || +RegExp["\x241"]
    }
    a8.dom._NAME_ATTRS = (function() {
        var T = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            rowspan: "rowSpan",
            valign: "vAlign",
            usemap: "useMap",
            frameborder: "frameBorder"
        };
        if (a8.browser.ie < 8) {
            T["for"] = "htmlFor";
            T["class"] = "className"
        } else {
            T.htmlFor = "for";
            T.className = "class"
        }
        return T
    })();
    a8.dom.setAttr = function(cL, T, cM) {
        cL = a8.dom.g(cL);
        if ("style" == T) {
            cL.style.cssText = cM
        } else {
            T = a8.dom._NAME_ATTRS[T] || T;
            cL.setAttribute(T, cM)
        }
        return cL
    }
    ;
    a8.setAttr = a8.dom.setAttr;
    a8.dom.setAttrs = function(cM, T) {
        cM = a8.dom.g(cM);
        for (var cL in T) {
            a8.dom.setAttr(cM, cL, T[cL])
        }
        return cM
    }
    ;
    a8.setAttrs = a8.dom.setAttrs;
    a8.string = a8.string || {};
    (function() {
        var T = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)","g");
        a8.string.trim = function(cL) {
            return String(cL).replace(T, "")
        }
    })();
    a8.trim = a8.string.trim;
    a8.string.format = function(cM, T) {
        cM = String(cM);
        var cL = Array.prototype.slice.call(arguments, 1)
          , cN = Object.prototype.toString;
        if (cL.length) {
            cL = cL.length == 1 ? (T !== null && (/\[object Array\]|\[object Object\]/.test(cN.call(T))) ? T : cL) : cL;
            return cM.replace(/#\{(.+?)\}/g, function(cO, cQ) {
                var cP = cL[cQ];
                if ("[object Function]" == cN.call(cP)) {
                    cP = cP(cQ)
                }
                return ( "undefined" == typeof cP ? "" : cP)
            })
        }
        return cM
    }
    ;
    a8.format = a8.string.format;
    a8.dom.removeClass = function(cP, cQ) {
        cP = a8.dom.g(cP);
        var cN = cP.className.split(/\s+/), cR = cQ.split(/\s+/), cL, T = cR.length, cM, cO = 0;
        for (; cO < T; ++cO) {
            for (cM = 0,
            cL = cN.length; cM < cL; ++cM) {
                if (cN[cM] == cR[cO]) {
                    cN.splice(cM, 1);
                    break
                }
            }
        }
        cP.className = cN.join(" ");
        return cP
    }
    ;
    a8.removeClass = a8.dom.removeClass;
    a8.dom.insertHTML = function(cN, T, cM) {
        cN = a8.dom.g(cN);
        var cL, cO;
        if (cN.insertAdjacentHTML) {
            cN.insertAdjacentHTML(T, cM)
        } else {
            cL = cN.ownerDocument.createRange();
            T = T.toUpperCase();
            if (T == "AFTERBEGIN" || T == "BEFOREEND") {
                cL.selectNodeContents(cN);
                cL.collapse(T == "AFTERBEGIN")
            } else {
                cO = T == "BEFOREBEGIN";
                cL[cO ? "setStartBefore" : "setEndAfter"](cN);
                cL.collapse(cO)
            }
            cL.insertNode(cL.createContextualFragment(cM))
        }
        return cN
    }
    ;
    a8.insertHTML = a8.dom.insertHTML;
    a8.dom.show = function(T) {
        T = a8.dom.g(T);
        T.style.display = "";
        return T
    }
    ;
    a8.show = a8.dom.show;
    a8.dom.getDocument = function(T) {
        T = a8.dom.g(T);
        return T.nodeType == 9 ? T : T.ownerDocument || T.document
    }
    ;
    a8.dom.addClass = function(cP, cQ) {
        cP = a8.dom.g(cP);
        var cL = cQ.split(/\s+/)
          , T = cP.className
          , cO = " " + T + " "
          , cN = 0
          , cM = cL.length;
        for (; cN < cM; cN++) {
            if (cO.indexOf(" " + cL[cN] + " ") < 0) {
                T += " " + cL[cN]
            }
        }
        cP.className = T;
        return cP
    }
    ;
    a8.addClass = a8.dom.addClass;
    a8.dom._styleFixer = a8.dom._styleFixer || {};
    a8.dom._styleFilter = a8.dom._styleFilter || [];
    a8.dom._styleFilter.filter = function(cL, cO, cP) {
        for (var T = 0, cN = a8.dom._styleFilter, cM; cM = cN[T]; T++) {
            if (cM = cM[cP]) {
                cO = cM(cL, cO)
            }
        }
        return cO
    }
    ;
    a8.string.toCamelCase = function(T) {
        if (T.indexOf("-") < 0 && T.indexOf("_") < 0) {
            return T
        }
        return T.replace(/[-_][^-_]/g, function(cL) {
            return cL.charAt(1).toUpperCase()
        })
    }
    ;
    a8.dom.getStyle = function(cM, cL) {
        var cP = a8.dom;
        cM = cP.g(cM);
        cL = a8.string.toCamelCase(cL);
        var cO = cM.style[cL];
        if (!cO) {
            var T = cP._styleFixer[cL]
              , cN = cM.currentStyle || (a8.browser.ie ? cM.style : getComputedStyle(cM, null ));
            cO = T && T.get ? T.get(cM, cN) : cN[T || cL]
        }
        if (T = cP._styleFilter) {
            cO = T.filter(cL, cO, "get")
        }
        return cO
    }
    ;
    a8.getStyle = a8.dom.getStyle;
    if (/opera\/(\d+\.\d)/i.test(navigator.userAgent)) {
        a8.browser.opera = +RegExp["\x241"]
    }
    a8.browser.isWebkit = /webkit/i.test(navigator.userAgent);
    a8.browser.isGecko = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    a8.browser.isStrict = document.compatMode == "CSS1Compat";
    a8.dom.getPosition = function(T) {
        T = a8.dom.g(T);
        var cT = a8.dom.getDocument(T), cN = a8.browser, cQ = a8.dom.getStyle, cM = cN.isGecko > 0 && cT.getBoxObjectFor && cQ(T, "position") == "absolute" && (T.style.top === "" || T.style.left === ""), cR = {
            left: 0,
            top: 0
        }, cP = (cN.ie && !cN.isStrict) ? cT.body : cT.documentElement, cU, cL;
        if (T == cP) {
            return cR
        }
        if (T.getBoundingClientRect) {
            cL = T.getBoundingClientRect();
            cR.left = Math.floor(cL.left) + Math.max(cT.documentElement.scrollLeft, cT.body.scrollLeft);
            cR.top = Math.floor(cL.top) + Math.max(cT.documentElement.scrollTop, cT.body.scrollTop);
            cR.left -= cT.documentElement.clientLeft;
            cR.top -= cT.documentElement.clientTop;
            var cS = cT.body
              , cV = parseInt(cQ(cS, "borderLeftWidth"))
              , cO = parseInt(cQ(cS, "borderTopWidth"));
            if (cN.ie && !cN.isStrict) {
                cR.left -= isNaN(cV) ? 2 : cV;
                cR.top -= isNaN(cO) ? 2 : cO
            }
        } else {
            cU = T;
            do {
                cR.left += cU.offsetLeft;
                cR.top += cU.offsetTop;
                if (cN.isWebkit > 0 && cQ(cU, "position") == "fixed") {
                    cR.left += cT.body.scrollLeft;
                    cR.top += cT.body.scrollTop;
                    break
                }
                cU = cU.offsetParent
            } while (cU && cU != T);if (cN.opera > 0 || (cN.isWebkit > 0 && cQ(T, "position") == "absolute")) {
                cR.top -= cT.body.offsetTop
            }
            cU = T.offsetParent;
            while (cU && cU != cT.body) {
                cR.left -= cU.scrollLeft;
                if (!cN.opera || cU.tagName != "TR") {
                    cR.top -= cU.scrollTop
                }
                cU = cU.offsetParent
            }
        }
        return cR
    }
    ;
    if (/firefox\/(\d+\.\d)/i.test(navigator.userAgent)) {
        a8.browser.firefox = +RegExp["\x241"]
    }
    (function() {
        var T = navigator.userAgent;
        if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(T) && !/chrome/i.test(T)) {
            a8.browser.safari = +(RegExp["\x241"] || RegExp["\x242"])
        }
    })();
    if (/chrome\/(\d+\.\d)/i.test(navigator.userAgent)) {
        a8.browser.chrome = +RegExp["\x241"]
    }
    a8.array = a8.array || {};
    a8.array.each = function(cP, cN) {
        var cM, cO, cL, T = cP.length;
        if ("function" == typeof cN) {
            for (cL = 0; cL < T; cL++) {
                cO = cP[cL];
                cM = cN.call(cP, cO, cL);
                if (cM === false) {
                    break
                }
            }
        }
        return cP
    }
    ;
    a8.each = a8.array.each;
    a8.lang.guid = function() {
        return "TANGRAM__" + (window[a8.guid]._counter++).toString(36)
    }
    ;
    window[a8.guid]._counter = window[a8.guid]._counter || 1;
    window[a8.guid]._instances = window[a8.guid]._instances || {};
    a8.lang.isFunction = function(T) {
        return "[object Function]" == Object.prototype.toString.call(T)
    }
    ;
    a8.lang.Class = function(T) {
        this.guid = T || a8.lang.guid();
        window[a8.guid]._instances[this.guid] = this
    }
    ;
    window[a8.guid]._instances = window[a8.guid]._instances || {};
    a8.lang.Class.prototype.dispose = function() {
        delete window[a8.guid]._instances[this.guid];
        for (var T in this) {
            if (!a8.lang.isFunction(this[T])) {
                delete this[T]
            }
        }
        this.disposed = true
    }
    ;
    a8.lang.Class.prototype.toString = function() {
        return "[object " + (this._className || "Object") + "]"
    }
    ;
    a8.lang.Event = function(T, cL) {
        this.type = T;
        this.returnValue = true;
        this.target = cL || null ;
        this.currentTarget = null
    }
    ;
    a8.lang.Class.prototype.addEventListener = function(cN, cM, cL) {
        if (!a8.lang.isFunction(cM)) {
            return
        }
        !this.__listeners && (this.__listeners = {});
        var T = this.__listeners, cO;
        if (typeof cL == "string" && cL) {
            if (/[^\w\-]/.test(cL)) {
                throw ("nonstandard key:" + cL)
            } else {
                cM.hashCode = cL;
                cO = cL
            }
        }
        cN.indexOf("on") != 0 && (cN = "on" + cN);
        typeof T[cN] != "object" && (T[cN] = {});
        cO = cO || a8.lang.guid();
        cM.hashCode = cO;
        T[cN][cO] = cM
    }
    ;
    a8.lang.Class.prototype.removeEventListener = function(cM, cL) {
        if (a8.lang.isFunction(cL)) {
            cL = cL.hashCode
        } else {
            if (!a8.lang.isString(cL)) {
                return
            }
        }
        !this.__listeners && (this.__listeners = {});
        cM.indexOf("on") != 0 && (cM = "on" + cM);
        var T = this.__listeners;
        if (!T[cM]) {
            return
        }
        T[cM][cL] && delete T[cM][cL]
    }
    ;
    a8.lang.Class.prototype.dispatchEvent = function(cN, T) {
        if (a8.lang.isString(cN)) {
            cN = new a8.lang.Event(cN)
        }
        if( cN.type === "onclick"){
            debugger;
        }
        !this.__listeners && (this.__listeners = {});
        T = T || {};
        for (var cM in T) {
            cN[cM] = T[cM]
        }
        var cM, cL = this.__listeners, cO = cN.type;
        cN.target = cN.target || this;
        cN.currentTarget = this;
        cO.indexOf("on") != 0 && (cO = "on" + cO);
        a8.lang.isFunction(this[cO]) && this[cO].apply(this, arguments);
        if (typeof cL[cO] == "object") {
            for (cM in cL[cO]) {
                cL[cO][cM].apply(this, arguments)
            }
        }
        return cN.returnValue
    }
    ;
    a8.lang.inherits = function(cQ, cO, cN) {
        var cM, cP, T = cQ.prototype, cL = new Function();
        cL.prototype = cO.prototype;
        cP = cQ.prototype = new cL();
        for (cM in T) {
            cP[cM] = T[cM]
        }
        cQ.prototype.constructor = cQ;
        cQ.superClass = cO.prototype;
        if ("string" == typeof cN) {
            cP._className = cN
        }
    }
    ;
    a8.inherits = a8.lang.inherits;
    a8.lang.instance = function(T) {
        return window[a8.guid]._instances[T] || null
    }
    ;
    a8.platform = a8.platform || {};
    a8.platform.isMacintosh = /macintosh/i.test(navigator.userAgent);
    a8.platform.isWindows = /windows/i.test(navigator.userAgent);
    a8.platform.isX11 = /x11/i.test(navigator.userAgent);
    a8.platform.isAndroid = /android/i.test(navigator.userAgent);
    a8.platform.isIpad = /ipad/i.test(navigator.userAgent);
    a8.platform.isIphone = /iphone/i.test(navigator.userAgent);
    a8.lang.Event.prototype.inherit = function(cM) {
        var cL = this;
        this.domEvent = cM = window.event || cM;
        cL.clientX = cM.clientX || cM.pageX;
        cL.clientY = cM.clientY || cM.pageY;
        cL.offsetX = cM.offsetX || cM.layerX;
        cL.offsetY = cM.offsetY || cM.layerY;
        cL.screenX = cM.screenX;
        cL.screenY = cM.screenY;
        cL.ctrlKey = cM.ctrlKey || cM.metaKey;
        cL.shiftKey = cM.shiftKey;
        cL.altKey = cM.altKey;
        if (cM.touches) {
            cL.touches = [];
            for (var T = 0; T < cM.touches.length; T++) {
                cL.touches.push({
                    clientX: cM.touches[T].clientX,
                    clientY: cM.touches[T].clientY,
                    screenX: cM.touches[T].screenX,
                    screenY: cM.touches[T].screenY,
                    pageX: cM.touches[T].pageX,
                    pageY: cM.touches[T].pageY,
                    target: cM.touches[T].target,
                    identifier: cM.touches[T].identifier
                })
            }
        }
        if (cM.changedTouches) {
            cL.changedTouches = [];
            for (var T = 0; T < cM.changedTouches.length; T++) {
                cL.changedTouches.push({
                    clientX: cM.changedTouches[T].clientX,
                    clientY: cM.changedTouches[T].clientY,
                    screenX: cM.changedTouches[T].screenX,
                    screenY: cM.changedTouches[T].screenY,
                    pageX: cM.changedTouches[T].pageX,
                    pageY: cM.changedTouches[T].pageY,
                    target: cM.changedTouches[T].target,
                    identifier: cM.changedTouches[T].identifier
                })
            }
        }
        if (cM.targetTouches) {
            cL.targetTouches = [];
            for (var T = 0; T < cM.targetTouches.length; T++) {
                cL.targetTouches.push({
                    clientX: cM.targetTouches[T].clientX,
                    clientY: cM.targetTouches[T].clientY,
                    screenX: cM.targetTouches[T].screenX,
                    screenY: cM.targetTouches[T].screenY,
                    pageX: cM.targetTouches[T].pageX,
                    pageY: cM.targetTouches[T].pageY,
                    target: cM.targetTouches[T].target,
                    identifier: cM.targetTouches[T].identifier
                })
            }
        }
        cL.rotation = cM.rotation;
        cL.scale = cM.scale;
        return cL
    }
    ;
    a8.lang.decontrol = function(cL) {
        var T = window[a8.guid];
        T._instances && (delete T._instances[cL])
    }
    ;
    a8.event = {};
    a8.on = a8.event.on = function(cM, cL, T) {
        if (!(cM = a8.g(cM))) {
            return cM
        }
        cL = cL.replace(/^on/, "");
        if (cM.addEventListener) {
            cM.addEventListener(cL, T, false)
        } else {
            if (cM.attachEvent) {
                cM.attachEvent("on" + cL, T)
            }
        }
        return cM
    }
    ;
    a8.un = a8.event.un = function(cM, cL, T) {
        if (!(cM = a8.g(cM))) {
            return cM
        }
        cL = cL.replace(/^on/, "");
        if (cM.removeEventListener) {
            cM.removeEventListener(cL, T, false)
        } else {
            if (cM.detachEvent) {
                cM.detachEvent("on" + cL, T)
            }
        }
        return cM
    }
    ;
    a8.dom.hasClass = function(cM, cL) {
        if (!cM || !cM.className || typeof cM.className != "string") {
            return false
        }
        var T = -1;
        try {
            T = cM.className == cL || cM.className.search(new RegExp("(\\s|^)" + cL + "(\\s|$)"))
        } catch (cN) {
            return false
        }
        return T > -1
    }
    ;
    window.BMap = window.BMap || {};
    window.BMap.version = "1.3";
    window.BMap._register = [];
    window.BMap.register = function(T) {
        this._register.push(T)
    }
    ;
    window.BMap.apiLoad = window.BMap.apiLoad || function() {}
    ;
    var bJ = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = null ;
    function bz(cN, cP) {
        cN = a8.g(cN);
        if (!cN) {
            return
        }
        var cO = this;
        a8.lang.Class.call(cO);
        cO.config = {
            clickInterval: 200,
            enableDragging: true,
            enableKeyboard: false,
            enableDblclickZoom: true,
            enableContinuousZoom: false,
            enableWheelZoom: false,
            enableMouseDown: true,
            enablePinchToZoom: true,
            enableAutoResize: true,
            fps: 25,
            zoomerDuration: 240,
            actionDuration: 450,
            defaultCursor: cc.defaultCursor,
            draggingCursor: cc.draggingCursor,
            isOverviewMap: false,
            minZoom: 1,
            maxZoom: 18,
            mapType: BMAP_NORMAL_MAP,
            restrictBounds: false,
            drawer: BMAP_SYS_DRAWER,
            enableInertialDragging: false,
            drawMargin: 500,
            enableHighResolution: false
        };
        a8.extend(cO.config, cP || {});
        if (cO.highResolutionEnabled()) {
            var cR = document.querySelector("meta[name=viewport]");
            cR.content = "initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5, user-scalable=no, target-densitydpi=high-dpi"
        }
        cO.container = cN;
        cO._setStyle(cN);
        cN.unselectable = "on";
        cN.innerHTML = "";
        cN.appendChild(cO.render());
        var cL = cO.getSize();
        cO.width = cL.width;
        cO.height = cL.height;
        cO.offsetX = 0;
        cO.offsetY = 0;
        cO.platform = cN.firstChild;
        cO.maskLayer = cO.platform.firstChild;
        cO.maskLayer.style.width = cO.width + "px";
        cO.maskLayer.style.height = cO.height + "px";
        cO._panes = {};
        cO.centerPoint = new cd(0,0);
        cO.mercatorCenter = new cd(0,0);
        cO.zoomLevel = 1;
        cO.lastLevel = 0;
        cO.defaultZoomLevel = null ;
        cO.defaultCenter = null ;
        cO.currentCity = "";
        cO.cityCode = "";
        cO._hotspots = {};
        cO.currentOperation = 0;
        cP = cP || {};
        var cQ = cO.mapType = cO.config.mapType;
        cO.projection = cQ.getProjection();
        if (cQ === BMAP_PERSPECTIVE_MAP) {
            _addStat(5002)
        }
        if (cQ === BMAP_SATELLITE_MAP || cQ === BMAP_HYBRID_MAP) {
            _addStat(5003)
        }
        var T = cO.config;
        T.userMinZoom = cP.minZoom;
        T.userMaxZoom = cP.maxZoom;
        cO._checkZoom();
        cO.temp = {
            operating: false,
            arrow: 0,
            lastDomMoveTime: 0,
            lastLoadTileTime: 0,
            lastMovingTime: 0,
            canKeyboard: false,
            registerIndex: -1,
            curSpots: []
        };
        cO.platform.style.cursor = cO.config.defaultCursor;
        for (var cM = 0; cM < BMap._register.length; cM++) {
            BMap._register[cM](cO)
        }
        cO.temp.registerIndex = cM;
        cO._bind();
        cA.load("map", function() {
            cO._draw()
        });
        if (bO()) {
            cA.load("oppc", function() {
                cO._asyncRegister()
            })
        }
        if (aA()) {
            cA.load("opmb", function() {
                cO._asyncRegister()
            })
        }
        cN = null
    }
    a8.lang.inherits(bz, a8.lang.Class, "Map");
    a8.extend(bz.prototype, {
        render: function() {
            var T = aa("div");
            var cN = T.style;
            cN.overflow = "visible";
            cN.position = "absolute";
            cN.zIndex = "0";
            cN.top = cN.left = "0px";
            var cL = aa("div", {
                "class": "BMap_mask"
            });
            var cM = cL.style;
            cM.position = "absolute";
            cM.top = cM.left = "0px";
            cM.zIndex = "9";
            cM.overflow = "hidden";
            cM.WebkitUserSelect = "none";
            T.appendChild(cL);
            return T
        },
        _setStyle: function(cL) {
            var T = cL.style;
            T.overflow = "hidden";
            if (aJ(cL).position != "absolute") {
                T.position = "relative";
                T.zIndex = 0
            }
            T.backgroundColor = "#F3F1EC";
            T.color = "#000";
            T.textAlign = "left"
        },
        _bind: function() {
            var T = this;
            T._watchSize = function() {
                var cL = T.getSize();
                if (T.width != cL.width || T.height != cL.height) {
                    var cN = new aH(T.width,T.height);
                    var cO = new bg("onbeforeresize");
                    cO.size = cN;
                    T.dispatchEvent(cO);
                    T._updateCenterPoint((cL.width - T.width) / 2, (cL.height - T.height) / 2);
                    T.maskLayer.style.width = (T.width = cL.width) + "px";
                    T.maskLayer.style.height = (T.height = cL.height) + "px";
                    var cM = new bg("onresize");
                    cM.size = cL;
                    T.dispatchEvent(cM)
                }
            }
            ;
            if (T.config.enableAutoResize) {
                T.temp.autoResizeTimer = setInterval(T._watchSize, 80)
            }
        },
        _updateCenterPoint: function(cN, cL, cR, cQ) {
            var cO = this.getMapType().getZoomUnits(this.getZoom());
            var cS = this.projection;
            var cP = true;
            if (cR && cd.isInRange(cR)) {
                this.centerPoint = new cd(cR.lng,cR.lat);
                cP = false
            }
            var cM = (cR && cQ) ? cS.lngLatToMercator(cR, this.currentCity) : this.mercatorCenter;
            if (cM) {
                this.mercatorCenter = new cd(cM.lng + cN * cO,cM.lat - cL * cO);
                var T = cS.mercatorToLngLat(this.mercatorCenter, this.currentCity);
                if (T && cP) {
                    this.centerPoint = T
                }
            }
        },
        zoomTo: function(cN, cL) {
            if (!aK(cN)) {
                return
            }
            cN = this._getProperZoom(cN).zoom;
            if (cN == this.zoomLevel) {
                return
            }
            this.lastLevel = this.zoomLevel;
            this.zoomLevel = cN;
            var cM;
            if (cL) {
                cM = cL
            } else {
                if (this.getInfoWindow()) {
                    cM = this.getInfoWindow().getPosition()
                }
            }
            if (cM) {
                var T = this.pointToPixel(cM, this.lastLevel);
                this._updateCenterPoint(this.width / 2 - T.x, this.height / 2 - T.y, this.pixelToPoint(T, this.lastLevel), true)
            }
            this.dispatchEvent(new bg("onzoomstart"));
            this.dispatchEvent(new bg("onzoomstartcode"))
        },
        setZoom: function(T) {
            this.zoomTo(T)
        },
        zoomIn: function(T) {
            this.zoomTo(this.zoomLevel + 1, T)
        },
        zoomOut: function(T) {
            this.zoomTo(this.zoomLevel - 1, T)
        },
        panTo: function(T, cL) {
            if (!(T instanceof cd)) {
                return
            }
            this.mercatorCenter = this.projection.lngLatToMercator(T, this.currentCity);
            if (cd.isInRange(T)) {
                this.centerPoint = new cd(T.lng,T.lat)
            } else {
                this.centerPoint = this.projection.mercatorToLngLat(this.mercatorCenter, this.currentCity)
            }
        },
        panBy: function(cL, T) {
            cL = Math.round(cL) || 0;
            T = Math.round(T) || 0;
            this._updateCenterPoint(-cL, -T)
        },
        addControl: function(T) {
            if (T && H(T._i)) {
                T._i(this);
                this.dispatchEvent(new bg("onaddcontrol",T))
            }
        },
        removeControl: function(T) {
            if (T && H(T.remove)) {
                T.remove();
                this.dispatchEvent(new bg("onremovecontrol",T))
            }
        },
        addContextMenu: function(T) {
            if (T && H(T.initialize)) {
                T.initialize(this);
                this.dispatchEvent(new bg("onaddcontextmenu",T))
            }
        },
        removeContextMenu: function(T) {
            if (T && H(T.remove)) {
                this.dispatchEvent(new bg("onremovecontextmenu",T));
                T.remove()
            }
        },
        addOverlay: function(T) {
            if (T && H(T._i)) {
                T._i(this);
                this.dispatchEvent(new bg("onaddoverlay",T))
            }
        },
        removeOverlay: function(T) {
            if (T && H(T.remove)) {
                T.remove();
                this.dispatchEvent(new bg("onremoveoverlay",T))
            }
        },
        clearOverlays: function() {
            this.dispatchEvent(new bg("onclearoverlays"))
        },
        addTileLayer: function(T) {
            if (T) {
                this.dispatchEvent(new bg("onaddtilelayer",T))
            }
        },
        removeTileLayer: function(T) {
            if (T) {
                this.dispatchEvent(new bg("onremovetilelayer",T))
            }
        },
        setMapType: function(cL) {
            if (this.mapType === cL) {
                return
            }
            var cM = new bg("onsetmaptype");
            var T = this.mapType;
            cM.preMapType = T;
            this.mapType = this.config.mapType = cL;
            this.projection = this.mapType.getProjection();
            this._updateCenterPoint(0, 0, this.getCenter(), true);
            this._checkZoom();
            var cN = this._getProperZoom(this.getZoom()).zoom;
            this.zoomTo(cN);
            this.dispatchEvent(cM);
            var cM = new bg("onmaptypechange");
            cM.zoomLevel = cN;
            cM.mapType = cL;
            this.dispatchEvent(cM);
            if (cL === BMAP_SATELLITE_MAP || cL === BMAP_HYBRID_MAP) {
                _addStat(5003)
            }
        },
        setCenter: function(T) {
            var cM = this;
            if (T instanceof cd) {
                cM.panTo(T, {
                    noAnimation: true
                })
            } else {
                if (b3(T)) {
                    var cL = this._getLocal();
                    cL.setSearchCompleteCallback(function(cN) {
                        if (cL.getStatus() == 0 && cL._json.result.type == 2) {
                            cM.setCenter(cN.getPoi(0).point);
                            if (BMAP_PERSPECTIVE_MAP.getCityName(T)) {
                                cM.setCurrentCity(T)
                            }
                        }
                    });
                    cL.search(T)
                }
            }
        },
        centerAndZoom: function(T, cM) {
            var cL = this;
            if (b3(T)) {
                var cP = cL._getLocal();
                cP.setSearchCompleteCallback(function(cQ) {
                    if (cP.getStatus() == 0 && cP._json.result.type == 2) {
                        var cS = cQ.getPoi(0).point;
                        var cR = cM || S.getBestLevel(cP._json.content.level, cL);
                        cL.centerAndZoom(cS, cR);
                        if (BMAP_PERSPECTIVE_MAP.getCityName(T)) {
                            cL.setCurrentCity(T)
                        }
                    }
                });
                cP.search(T);
                return
            }
            if (!(T instanceof cd) || !cM) {
                return
            }
            cM = cL._getProperZoom(cM).zoom;
            cL.lastLevel = cL.zoomLevel || cM;
            cL.zoomLevel = cM;
            cL.centerPoint = new cd(T.lng,T.lat);
            cL.mercatorCenter = cL.projection.lngLatToMercator(cL.centerPoint, cL.currentCity);
            cL.defaultZoomLevel = cL.defaultZoomLevel || cL.zoomLevel;
            cL.defaultCenter = cL.defaultCenter || cL.centerPoint;
            var cO = new bg("onload");
            var cN = new bg("onloadcode");
            cO.point = new cd(T.lng,T.lat);
            cO.pixel = cL.pointToPixel(cL.centerPoint, cL.zoomLevel);
            cO.zoom = cM;
            if (!cL.loaded) {
                cL.loaded = true;
                cL.dispatchEvent(cO)
            }
            cL.dispatchEvent(cN);
            cL.dispatchEvent(new bg("onmoveend"));
            if (cL.lastLevel != cL.zoomLevel) {
                cL.dispatchEvent(new bg("onzoomend"))
            }
        },
        _getLocal: function() {
            if (!this.temp.local) {
                this.temp.local = new a4(1)
            }
            return this.temp.local
        },
        reset: function() {
            this.centerAndZoom(this.defaultCenter, this.defaultZoomLevel, true)
        },
        enableDragging: function() {
            this.config.enableDragging = true
        },
        disableDragging: function() {
            this.config.enableDragging = false
        },
        enableInertialDragging: function() {
            this.config.enableInertialDragging = true
        },
        disableInertialDragging: function() {
            this.config.enableInertialDragging = false
        },
        enableScrollWheelZoom: function() {
            this.config.enableWheelZoom = true
        },
        disableScrollWheelZoom: function() {
            this.config.enableWheelZoom = false
        },
        enableContinuousZoom: function() {
            this.config.enableContinuousZoom = true
        },
        disableContinuousZoom: function() {
            this.config.enableContinuousZoom = false
        },
        enableDoubleClickZoom: function() {
            this.config.enableDblclickZoom = true
        },
        disableDoubleClickZoom: function() {
            this.config.enableDblclickZoom = false
        },
        enableKeyboard: function() {
            this.config.enableKeyboard = true
        },
        disableKeyboard: function() {
            this.config.enableKeyboard = false
        },
        enablePinchToZoom: function() {
            this.config.enablePinchToZoom = true
        },
        disablePinchToZoom: function() {
            this.config.enablePinchToZoom = false
        },
        enableAutoResize: function() {
            this.config.enableAutoResize = true;
            this._watchSize();
            if (!this.temp.autoResizeTimer) {
                this.temp.autoResizeTimer = setInterval(this._watchSize, 80)
            }
        },
        disableAutoResize: function() {
            this.config.enableAutoResize = false;
            if (this.temp.autoResizeTimer) {
                clearInterval(this.temp.autoResizeTimer);
                this.temp.autoResizeTimer = null
            }
        },
        getSize: function() {
            return new aH(this.container.clientWidth,this.container.clientHeight)
        },
        getCenter: function() {
            return this.centerPoint
        },
        getZoom: function() {
            return this.zoomLevel
        },
        checkResize: function() {
            this._watchSize()
        },
        _getProperZoom: function(cM) {
            var cL = this.config.minZoom
              , T = this.config.maxZoom
              , cN = false;
            if (cM < cL) {
                cN = true;
                cM = cL
            }
            if (cM > T) {
                cN = true;
                cM = T
            }
            return {
                zoom: cM,
                exceeded: cN
            }
        },
        getContainer: function() {
            return this.container
        },
        pointToPixel: function(T, cL) {
            cL = cL || this.getZoom();
            return this.projection.pointToPixel(T, cL, this.mercatorCenter, this.getSize(), this.currentCity)
        },
        pixelToPoint: function(T, cL) {
            cL = cL || this.getZoom();
            return this.projection.pixelToPoint(T, cL, this.mercatorCenter, this.getSize(), this.currentCity)
        },
        pointToOverlayPixel: function(T, cM) {
            if (!T) {
                return
            }
            var cN = new cd(T.lng,T.lat);
            var cL = this.pointToPixel(cN, cM);
            cL.x -= this.offsetX;
            cL.y -= this.offsetY;
            return cL
        },
        overlayPixelToPoint: function(T, cM) {
            if (!T) {
                return
            }
            var cL = new bu(T.x,T.y);
            cL.x += this.offsetX;
            cL.y += this.offsetY;
            return this.pixelToPoint(cL, cM)
        },
        getBounds: function() {
            if (!this.isLoaded()) {
                return new bN()
            }
            var cL = arguments[0] || {}
              , cN = cL.margins || [0, 0, 0, 0]
              , T = cL.zoom || null
              , cO = this.pixelToPoint({
                x: cN[3],
                y: this.height - cN[2]
            }, T)
              , cM = this.pixelToPoint({
                x: this.width - cN[1],
                y: cN[0]
            }, T);
            return new bN(cO,cM)
        },
        isLoaded: function() {
            return !!this.loaded
        },
        _getBestLevel: function(cL, cM) {
            var cP = this.getMapType();
            var cR = cM.margins || [10, 10, 10, 10]
              , cO = cM.zoomFactor || 0
              , cS = cR[1] + cR[3]
              , cQ = cR[0] + cR[2]
              , T = cP.getMinZoom()
              , cU = cP.getMaxZoom();
            for (var cN = cU; cN >= T; cN--) {
                var cT = this.getMapType().getZoomUnits(cN);
                if (cL.toSpan().lng / cT < this.width - cS && cL.toSpan().lat / cT < this.height - cQ) {
                    break
                }
            }
            cN += cO;
            if (cN < T) {
                cN = T
            }
            if (cN > cU) {
                cN = cU
            }
            return cN
        },
        getViewport: function(cT, cL) {
            var cX = {
                center: this.getCenter(),
                zoom: this.getZoom()
            };
            if (!cT || !cT instanceof bN && cT.length == 0 || cT instanceof bN && cT.isEmpty()) {
                return cX
            }
            var cV = [];
            if (cT instanceof bN) {
                cV.push(cT.getNorthEast());
                cV.push(cT.getSouthWest())
            } else {
                cV = cT.slice(0)
            }
            cL = cL || {};
            var cP = [];
            for (var cQ = 0, cO = cV.length; cQ < cO; cQ++) {
                cP.push(this.projection.lngLatToMercator(cV[cQ], this.currentCity))
            }
            var cM = new bN();
            for (var cQ = cP.length - 1; cQ >= 0; cQ--) {
                cM.extend(cP[cQ])
            }
            if (cM.isEmpty()) {
                return cX
            }
            var T = cM.getCenter();
            var cW = this._getBestLevel(cM, cL);
            if (cL.margins) {
                var cS = cL.margins
                  , cR = (cS[1] - cS[3]) / 2
                  , cU = (cS[0] - cS[2]) / 2
                  , cN = this.getMapType().getZoomUnits(cW);
                T.lng = T.lng + cN * cR;
                T.lat = T.lat + cN * cU
            }
            T = this.projection.mercatorToLngLat(T, this.currentCity);
            return {
                center: T,
                zoom: cW
            }
        },
        setViewport: function(cL, cO) {
            var T;
            if (cL && cL.center) {
                T = cL
            } else {
                T = this.getViewport(cL, cO)
            }
            cO = cO || {};
            var cM = cO.delay || 200;
            if (T.zoom == this.zoomLevel && cO.enableAnimation != false) {
                var cN = this;
                setTimeout(function() {
                    cN.panTo(T.center, {
                        duration: 210
                    })
                }, cM)
            } else {
                this.centerAndZoom(T.center, T.zoom)
            }
        },
        getPanes: function() {
            return this._panes
        },
        getInfoWindow: function() {
            if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
                return this.temp.infoWin
            }
            return null
        },
        getDistance: function(cM, T) {
            if (!cM || !T) {
                return
            }
            var cL = 0;
            cL = ba.getDistanceByLL(cM, T);
            return cL
        },
        getOverlays: function() {
            var cN = []
              , cO = this._overlays
              , cM = this._customOverlays;
            if (cO) {
                for (var cL in cO) {
                    if (cO[cL]instanceof Y) {
                        cN.push(cO[cL])
                    }
                }
            }
            if (cM) {
                for (var cL = 0, T = cM.length; cL < T; cL++) {
                    cN.push(cM[cL])
                }
            }
            return cN
        },
        getMapType: function() {
            return this.mapType
        },
        _asyncRegister: function() {
            for (var T = this.temp.registerIndex; T < BMap._register.length; T++) {
                BMap._register[T](this)
            }
            this.temp.registerIndex = T
        },
        setCurrentCity: function(T) {
            this.currentCity = BMAP_PERSPECTIVE_MAP.getCityName(T);
            this.cityCode = BMAP_PERSPECTIVE_MAP.getCityCode(this.currentCity)
        },
        setDefaultCursor: function(T) {
            if (a8.browser.firefox && T.indexOf("url") == 0) {
                T = T += ", -moz-grab"
            }
            this.config.defaultCursor = T;
            if (this.platform) {
                this.platform.style.cursor = this.config.defaultCursor
            }
        },
        getDefaultCursor: function() {
            return this.config.defaultCursor
        },
        setDraggingCursor: function(T) {
            if (a8.browser.firefox && T.indexOf("url") == 0) {
                T = T += ", -moz-grabbing"
            }
            this.config.draggingCursor = T
        },
        getDraggingCursor: function() {
            return this.config.draggingCursor
        },
        highResolutionEnabled: function() {
            return this.config.enableHighResolution && window.devicePixelRatio > 1
        },
        addHotspot: function(cL) {
            if (cL instanceof cm) {
                this._hotspots[cL.guid] = cL;
                cL.initialize(this)
            }
            var T = this;
            cA.load("hotspot", function() {
                T._asyncRegister()
            })
        },
        removeHotspot: function(T) {
            if (this._hotspots[T.guid]) {
                delete this._hotspots[T.guid]
            }
        },
        clearHotspots: function() {
            this._hotspots = {}
        },
        _checkZoom: function() {
            var cL = this.mapType.getMinZoom();
            var cM = this.mapType.getMaxZoom();
            var T = this.config;
            T.minZoom = T.userMinZoom || cL;
            T.maxZoom = T.userMaxZoom || cM;
            if (T.minZoom < cL) {
                T.minZoom = cL
            }
            if (T.maxZoom > cM) {
                T.maxZoom = cM
            }
        },
        setMinZoom: function(T) {
            if (T > this.config.maxZoom) {
                T = this.config.maxZoom
            }
            this.config.userMinZoom = T;
            this._updateZoom()
        },
        setMaxZoom: function(T) {
            if (T < this.config.minZoom) {
                T = this.config.minZoom
            }
            this.config.userMaxZoom = T;
            this._updateZoom()
        },
        _updateZoom: function() {
            this._checkZoom();
            var T = this.config;
            if (this.zoomLevel < T.minZoom) {
                this.setZoom(T.minZoom)
            } else {
                if (this.zoomLevel > T.maxZoom) {
                    this.setZoom(T.maxZoom)
                }
            }
            var cL = new bg("onzoomspanchange");
            cL.minZoom = T.minZoom;
            cL.maxZoom = T.maxZoom;
            this.dispatchEvent(cL)
        }
    });
    window.BMAP_API_VERSION = "1.3";
    window.BMAP_COORD_LNGLAT = 0;
    window.BMAP_COORD_MERCATOR = 1;
    window.BMAP_SYS_DRAWER = 0;
    window.BMAP_SVG_DRAWER = 1;
    window.BMAP_VML_DRAWER = 2;
    window.BMAP_CANVAS_DRAWER = 3;
    window._addStat = function(cP, cO) {
        if (!cP) {
            return
        }
        cO = cO || {};
        var cN = "";
        for (var cL in cO) {
            cN = cN + "&" + cL + "=" + encodeURIComponent(cO[cL])
        }
        var cQ = function(cR) {
            if (!cR) {
                return
            }
            _addStat._sending = true;
            setTimeout(function() {
                _addStat._img.src = cc.imgPath + "blank.gif?" + cR.src
            }, 50)
        };
        var T = function() {
            var cR = _addStat._reqQueue.shift();
            if (cR) {
                cQ(cR)
            }
        };
        var cM = (Math.random() * 100000000).toFixed(0);
        if (_addStat._sending) {
            _addStat._reqQueue.push({
                src: "t=" + cM + "&code=" + cP + cN
            })
        } else {
            cQ({
                src: "t=" + cM + "&code=" + cP + cN
            })
        }
        if (!_addStat._binded) {
            a8.on(_addStat._img, "load", function() {
                _addStat._sending = false;
                T()
            });
            a8.on(_addStat._img, "error", function() {
                _addStat._sending = false;
                T()
            });
            _addStat._binded = true
        }
    }
    ;
    window._addStat._reqQueue = [];
    window._addStat._img = new Image();
    _addStat(5000, {
        v: BMap.version
    });
    function g(cN) {
        var T = {
            duration: 1000,
            fps: 30,
            delay: 0,
            transition: aw.linear,
            onStop: function() {}
        };
        this._anis = [];
        if (cN) {
            for (var cL in cN) {
                T[cL] = cN[cL]
            }
        }
        this._opts = T;
        if (aK(T.delay)) {
            var cM = this;
            setTimeout(function() {
                cM.start()
            }, T.delay)
        } else {
            if (T.delay != g.INFINITE) {
                this.start()
            }
        }
    }
    g.INFINITE = "INFINITE";
    g.prototype.start = function() {
        this._beginTime = aE();
        this._endTime = this._beginTime + this._opts.duration;
        this._launch()
    }
    ;
    g.prototype.add = function(T) {
        this._anis.push(T)
    }
    ;
    g.prototype._launch = function() {
        var cM = this;
        var T = aE();
        if (T >= cM._endTime) {
            if (H(cM._opts.render)) {
                cM._opts.render(cM._opts.transition(1))
            }
            if (H(cM._opts.finish)) {
                cM._opts.finish()
            }
            if (cM._anis.length > 0) {
                var cL = cM._anis[0];
                cL._anis = [].concat(cM._anis.slice(1));
                cL.start()
            }
            return
        }
        cM.schedule = cM._opts.transition((T - cM._beginTime) / cM._opts.duration);
        if (H(cM._opts.render)) {
            cM._opts.render(cM.schedule)
        }
        if (!cM.terminative) {
            cM._timer = setTimeout(function() {
                cM._launch()
            }, 1000 / cM._opts.fps)
        }
    }
    ;
    g.prototype.stop = function(cL) {
        this.terminative = true;
        for (var T = 0; T < this._anis.length; T++) {
            this._anis[T].stop();
            this._anis[T] = null
        }
        this._anis.length = 0;
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = null
        }
        this._opts.onStop(this.schedule);
        if (cL) {
            this._endTime = this._beginTime;
            this._launch()
        }
    }
    ;
    g.prototype.cancel = function() {
        if (this._timer) {
            clearTimeout(this._timer)
        }
        this._endTime = this._beginTime;
        this.schedule = 0
    }
    ;
    g.prototype.setFinishCallback = function(T) {
        if (this._anis.length > 0) {
            this._anis[this._anis.length - 1]._opts.finish = T
        } else {
            this._opts.finish = T
        }
    }
    ;
    var aw = {
        linear: function(T) {
            return T
        },
        reverse: function(T) {
            return 1 - T
        },
        easeInQuad: function(T) {
            return T * T
        },
        easeInCubic: function(T) {
            return Math.pow(T, 3)
        },
        easeOutQuad: function(T) {
            return -(T * (T - 2))
        },
        easeOutCubic: function(T) {
            return Math.pow((T - 1), 3) + 1
        },
        easeInOutQuad: function(T) {
            if (T < 0.5) {
                return T * T * 2
            } else {
                return -2 * (T - 2) * T - 1
            }
            return
        },
        easeInOutCubic: function(T) {
            if (T < 0.5) {
                return Math.pow(T, 3) * 4
            } else {
                return Math.pow(T - 1, 3) * 4 + 1
            }
        },
        easeInOutSine: function(T) {
            return (1 - Math.cos(Math.PI * T)) / 2
        }
    };
    aw["ease-in"] = aw.easeInQuad;
    aw["ease-out"] = aw.easeOutQuad;
    var l = !!(window.location.protocol == "https:");
    var w = l ? "https://sapi.map.baidu.com/" : "http://api.map.baidu.com/";
    var cc = {
        imgPath: w + "images/",
        cityNames: {
            "\u5317\u4eac": "bj",
            "\u4e0a\u6d77": "sh",
            "\u6df1\u5733": "sz",
            "\u5e7f\u5dde": "gz"
        },
        fontFamily: "arial,sans-serif"
    };
    if (a8.browser.firefox) {
        a8.extend(cc, {
            distCursor: "url(" + cc.imgPath + "ruler.cur),crosshair",
            defaultCursor: "-moz-grab",
            draggingCursor: "-moz-grabbing"
        });
        if (a8.platform.isWindows) {
            cc.fontFamily = "arial,simsun,sans-serif"
        }
    } else {
        if (a8.browser.chrome || a8.browser.safari) {
            a8.extend(cc, {
                distCursor: "url(" + cc.imgPath + "ruler.cur) 2 6,crosshair",
                defaultCursor: "url(" + cc.imgPath + "openhand.cur) 8 8,default",
                draggingCursor: "url(" + cc.imgPath + "closedhand.cur) 8 8,move"
            })
        } else {
            a8.extend(cc, {
                distCursor: "url(" + cc.imgPath + "ruler.cur),crosshair",
                defaultCursor: "url(" + cc.imgPath + "openhand.cur),default",
                draggingCursor: "url(" + cc.imgPath + "closedhand.cur),move"
            })
        }
    }
    function av(cM, cL, T) {
        this.id = cM;
        this.bounds = cL;
        this.content = T
    }
    var bn = {
        undo: 1,
        redo: 2,
        zoom: 4,
        drag: 8,
        move: 16,
        mousewheel: 32,
        toolbarOperation: 64,
        stdMapCtrlDrag: 128,
        dblclick: 256
    };
    function bI(cM, T) {
        var cL = cM.style;
        cL.left = T[0] + "px";
        cL.top = T[1] + "px"
    }
    function cw(T) {
        if (a8.browser.ie > 0) {
            T.unselectable = "on"
        } else {
            T.style.MozUserSelect = "none"
        }
    }
    function x(T) {
        return T && T.parentNode && T.parentNode.nodeType != 11
    }
    function at(cL, T) {
        a8.dom.insertHTML(cL, "beforeEnd", T);
        return cL.lastChild
    }
    function bY(T) {
        var cL = {
            left: 0,
            top: 0
        };
        while (T && T.offsetParent) {
            cL.left += T.offsetLeft;
            cL.top += T.offsetTop;
            T = T.offsetParent
        }
        return cL
    }
    function aP(T) {
        var T = window.event || T;
        T.stopPropagation ? T.stopPropagation() : T.cancelBubble = true
    }
    function cC(T) {
        var T = window.event || T;
        T.preventDefault ? T.preventDefault() : T.returnValue = false;
        return false
    }
    function co(T) {
        aP(T);
        return cC(T)
    }
    function cG() {
        var T = document.documentElement
          , cL = document.body;
        if (T && (T.scrollTop || T.scrollLeft)) {
            return [T.scrollTop, T.scrollLeft]
        } else {
            if (cL) {
                return [cL.scrollTop, cL.scrollLeft]
            } else {
                return [0, 0]
            }
        }
    }
    function ct(cL, T) {
        if (!cL || !T) {
            return
        }
        return Math.round(Math.sqrt(Math.pow(cL.x - T.x, 2) + Math.pow(cL.y - T.y, 2)))
    }
    function O(T, cM) {
        var cL = [];
        cM = cM || function(cO) {
            return cO
        }
        ;
        for (var cN in T) {
            cL.push(cN + "=" + cM(T[cN]))
        }
        return cL.join("&")
    }
    function aa(cL, T, cM) {
        var cN = document.createElement(cL);
        if (cM) {
            cN = document.createElementNS(cM, cL)
        }
        return a8.dom.setAttrs(cN, T || {})
    }
    function aJ(T) {
        if (T.currentStyle) {
            return T.currentStyle
        } else {
            if (T.ownerDocument && T.ownerDocument.defaultView) {
                return T.ownerDocument.defaultView.getComputedStyle(T, null )
            }
        }
    }
    function H(T) {
        return typeof T == "function"
    }
    function aK(T) {
        return typeof T == "number"
    }
    function b3(T) {
        return typeof T == "string"
    }
    function ch(T) {
        return typeof T != "undefined"
    }
    function cJ(T) {
        return typeof T == "object"
    }
    function aY(T) {
        return "[object Array]" == Object.prototype.toString.call(T)
    }
    var cf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function bV(cN) {
        var cL = "";
        var cU, cS, cQ = "";
        var cT, cR, cP, cO = "";
        var cM = 0;
        var T = /[^A-Za-z0-9\+\/\=]/g;
        if (!cN || T.exec(cN)) {
            return cN
        }
        cN = cN.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do {
            cT = cf.indexOf(cN.charAt(cM++));
            cR = cf.indexOf(cN.charAt(cM++));
            cP = cf.indexOf(cN.charAt(cM++));
            cO = cf.indexOf(cN.charAt(cM++));
            cU = (cT << 2) | (cR >> 4);
            cS = ((cR & 15) << 4) | (cP >> 2);
            cQ = ((cP & 3) << 6) | cO;
            cL = cL + String.fromCharCode(cU);
            if (cP != 64) {
                cL = cL + String.fromCharCode(cS)
            }
            if (cO != 64) {
                cL = cL + String.fromCharCode(cQ)
            }
            cU = cS = cQ = "";
            cT = cR = cP = cO = ""
        } while (cM < cN.length);return cL
    }
    var bg = a8.lang.Event;
    function aA() {
        return !!(a8.platform.isIphone || a8.platform.isIpad || a8.platform.isAndroid)
    }
    function bO() {
        return !!(a8.platform.isWindows || a8.platform.isMacintosh || a8.platform.isX11)
    }
    function aE() {
        return (new Date).getTime()
    }
    var cx = {
        request: function(cL) {
            var T = aa("script", {
                src: cL,
                type: "text/javascript",
                charset: "utf-8"
            });
            if (T.addEventListener) {
                T.addEventListener("load", function(cN) {
                    var cM = cN.target;
                    cM.parentNode.removeChild(cM)
                }, false)
            } else {
                if (T.attachEvent) {
                    T.attachEvent("onreadystatechange", function(cN) {
                        var cM = window.event.srcElement;
                        if (cM && (cM.readyState == "loaded" || cM.readyState == "complete")) {
                            cM.parentNode.removeChild(cM)
                        }
                    })
                }
            }
            setTimeout(function() {
                document.getElementsByTagName("head")[0].appendChild(T);
                T = null
            }, 1)
        }
    };
    function cA() {}
    a8.object.extend(cA, {
        Request: {
            INITIAL: -1,
            WAITING: 0,
            COMPLETED: 1
        },
        Dependency: {
            control: [],
            marker: [],
            poly: ["marker"],
            infowindow: ["marker"],
            menu: [],
            oppc: [],
            opmb: [],
            scommon: [],
            local: ["scommon"],
            route: ["scommon"],
            othersearch: ["scommon"],
            autocomplete: ["scommon"],
            buslinesearch: ["route"],
            hotspot: []
        },
        preLoaded: {},
        Config: {
            _baseUrl: w + "getmodules?v=1.3",
            _timeout: 5000
        },
        delayFlag: false,
        Module: {
            _modules: {},
            _arrMdls: []
        },
        load: function(cL, cN) {
            var T = this.current(cL);
            if (T._status == this.Request.COMPLETED) {
                return
            } else {
                if (T._status == this.Request.INITIAL) {
                    this.combine(cL);
                    this.pushUniqueMdl(cL);
                    var cM = this;
                    if (cM.delayFlag == false) {
                        cM.delayFlag = true;
                        window.setTimeout(function() {
                            var cO = cM.Config._baseUrl + "&mod=" + cM.Module._arrMdls.join(",");
                            cx.request(cO);
                            cM.Module._arrMdls.length = 0;
                            cM.delayFlag = false
                        }, 1)
                    }
                    T._status = this.Request.WAITING
                }
                T._callbacks.push(cN)
            }
        },
        combine: function(T) {
            if (T && this.Dependency[T]) {
                var cM = this.Dependency[T];
                for (var cL = 0; cL < cM.length; cL++) {
                    this.combine(cM[cL]);
                    if (!this.Module._modules[cM[cL]]) {
                        this.pushUniqueMdl(cM[cL])
                    }
                }
            }
        },
        pushUniqueMdl: function(cL) {
            for (var T = 0; T < this.Module._arrMdls.length; T++) {
                if (this.Module._arrMdls[T] == cL) {
                    return
                }
            }
            this.Module._arrMdls.push(cL)
        },
        run: function(cM, cO) {
            var cL = this.current(cM);
            try {
                eval(cO)
            } catch (cP) {
                return
            }
            cL._status = this.Request.COMPLETED;
            for (var cN = 0, T = cL._callbacks.length; cN < T; cN++) {
                cL._callbacks[cN]()
            }
            cL._callbacks.length = 0
        },
        check: function(cL, cM) {
            var T = this;
            T.timeout = setTimeout(function() {
                var cN = T.Module._modules[cL]._status;
                if (cN != T.Request.COMPLETED) {
                    T.remove(cL);
                    T.load(cL, cM)
                } else {
                    clearTimeout(T.timeout)
                }
            }, T.Config._timeout)
        },
        current: function(cL) {
            var T;
            if (!this.Module._modules[cL]) {
                this.Module._modules[cL] = {};
                this.Module._modules[cL]._status = this.Request.INITIAL;
                this.Module._modules[cL]._callbacks = []
            }
            T = this.Module._modules[cL];
            return T
        },
        remove: function(cL) {
            var T = this.current(cL);
            delete T
        }
    });
    window._jsload = function(T, cL) {
        cA.run(T, cL)
    }
    ;
    function bu(T, cL) {
        this.x = T || 0;
        this.y = cL || 0
    }
    bu.prototype.equals = function(T) {
        return T && T.x == this.x && T.y == this.y
    }
    ;
    function aH(cL, T) {
        this.width = cL || 0;
        this.height = T || 0
    }
    aH.prototype.equals = function(T) {
        return T && this.width == T.width && this.height == T.height
    }
    ;
    function cm(T, cL) {
        if (!T) {
            return
        }
        this._position = T;
        this.guid = "spot" + (cm.guid++);
        cL = cL || {};
        this._text = cL.text || "";
        this._offsets = cL.offsets ? cL.offsets.slice(0) : [5, 5, 5, 5];
        this._userData = cL.userData || null ;
        this._minZoom = cL.minZoom || null ;
        this._maxZoom = cL.maxZoom || null
    }
    cm.guid = 0;
    a8.extend(cm.prototype, {
        initialize: function(T) {
            if (this._minZoom == null ) {
                this._minZoom = T.config.minZoom
            }
            if (this._maxZoom == null ) {
                this._maxZoom = T.config.maxZoom
            }
        },
        setPosition: function(T) {
            if (T instanceof cd) {
                this._position = T
            }
        },
        getPosition: function() {
            return this._position
        },
        setText: function(T) {
            this._text = T
        },
        getText: function() {
            return this._text
        },
        setUserData: function(T) {
            this._userData = T
        },
        getUserData: function() {
            return this._userData
        }
    });
    function cp() {
        this._map = null ;
        this._container;
        this._type = "control";
        this.blockInfoWindow = true;
        this._visible = true
    }
    a8.lang.inherits(cp, a8.lang.Class, "Control");
    a8.extend(cp.prototype, {
        initialize: function(T) {
            this._map = T;
            if (this._container) {
                T.container.appendChild(this._container);
                return this._container
            }
            return
        },
        _i: function(T) {
            if (!this._container && this.initialize && H(this.initialize)) {
                this._container = this.initialize(T)
            }
            this._opts = this._opts || {
                printable: false
            };
            this._setStyle();
            this._setPosition();
            if (this._container) {
                this._container._jsobj = this
            }
        },
        _setStyle: function() {
            var cL = this._container;
            if (cL) {
                var T = cL.style;
                T.position = "absolute";
                T.zIndex = this._cZIndex || "10";
                T.MozUserSelect = "none";
                T.WebkitTextSizeAdjust = "none";
                if (!this._opts.printable) {
                    a8.dom.addClass(cL, "BMap_noprint")
                }
                a8.on(cL, "contextmenu", co)
            }
        },
        remove: function() {
            this._map = null ;
            if (!this._container) {
                return
            }
            this._container.parentNode && this._container.parentNode.removeChild(this._container);
            this._container._jsobj = null ;
            this._container = null
        },
        _render: function() {
            this._container = at(this._map.container, "<div unselectable='on'></div>");
            if (this._visible == false) {
                a8.dom.hide(this._container)
            }
            return this._container
        },
        _setPosition: function() {
            this.setAnchor(this._opts.anchor)
        },
        setAnchor: function(cN) {
            if (this.anchorFixed || !aK(cN) || isNaN(cN) || cN < BMAP_ANCHOR_TOP_LEFT || cN > BMAP_ANCHOR_BOTTOM_RIGHT) {
                cN = this.defaultAnchor
            }
            this._opts = this._opts || {
                printable: false
            };
            this._opts.offset = this._opts.offset || this.defaultOffset;
            var cM = this._opts.anchor;
            this._opts.anchor = cN;
            if (!this._container) {
                return
            }
            var cP = this._container;
            var T = this._opts.offset.width;
            var cO = this._opts.offset.height;
            cP.style.left = cP.style.top = cP.style.right = cP.style.bottom = "auto";
            switch (cN) {
            case BMAP_ANCHOR_TOP_LEFT:
                cP.style.top = cO + "px";
                cP.style.left = T + "px";
                break;
            case BMAP_ANCHOR_TOP_RIGHT:
                cP.style.top = cO + "px";
                cP.style.right = T + "px";
                break;
            case BMAP_ANCHOR_BOTTOM_LEFT:
                cP.style.bottom = cO + "px";
                cP.style.left = T + "px";
                break;
            case BMAP_ANCHOR_BOTTOM_RIGHT:
                cP.style.bottom = cO + "px";
                cP.style.right = T + "px";
                break;
            default:
                break
            }
            var cL = ["TL", "TR", "BL", "BR"];
            a8.dom.removeClass(this._container, "anchor" + cL[cM]);
            a8.dom.addClass(this._container, "anchor" + cL[cN])
        },
        getAnchor: function() {
            return this._opts.anchor
        },
        setOffset: function(T) {
            if (!(T instanceof aH)) {
                return
            }
            this._opts = this._opts || {
                printable: false
            };
            this._opts.offset = new aH(T.width,T.height);
            if (!this._container) {
                return
            }
            this.setAnchor(this._opts.anchor)
        },
        getOffset: function() {
            return this._opts.offset
        },
        getDom: function() {
            return this._container
        },
        show: function() {
            if (this._visible == true) {
                return
            }
            this._visible = true;
            if (this._container) {
                a8.dom.show(this._container)
            }
        },
        hide: function() {
            if (this._visible == false) {
                return
            }
            this._visible = false;
            if (this._container) {
                a8.dom.hide(this._container)
            }
        },
        isPrintable: function() {
            return !!this._opts.printable
        },
        isVisible: function() {
            if (!this._container && !this._map) {
                return false
            }
            return !!this._visible
        }
    });
    window.BMAP_ANCHOR_TOP_LEFT = 0;
    window.BMAP_ANCHOR_TOP_RIGHT = 1;
    window.BMAP_ANCHOR_BOTTOM_LEFT = 2;
    window.BMAP_ANCHOR_BOTTOM_RIGHT = 3;
    window.BMAP_NAVIGATION_CONTROL_LARGE = 0;
    window.BMAP_NAVIGATION_CONTROL_SMALL = 1;
    window.BMAP_NAVIGATION_CONTROL_PAN = 2;
    window.BMAP_NAVIGATION_CONTROL_ZOOM = 3;
    function K(T) {
        cp.call(this);
        T = T || {};
        this._opts = {
            printable: false,
            showZoomInfo: true
        };
        a8.object.extend(this._opts, T);
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new aH(10,10);
        this.setAnchor(T.anchor);
        this.setType(T.type);
        this._asyncLoadCode()
    }
    a8.lang.inherits(K, cp, "NavigationControl");
    a8.extend(K.prototype, {
        initialize: function(T) {
            this._map = T;
            return this._container
        },
        setType: function(T) {
            if (aK(T) && T >= BMAP_NAVIGATION_CONTROL_LARGE && T <= BMAP_NAVIGATION_CONTROL_ZOOM) {
                this._opts.type = T
            } else {
                this._opts.type = BMAP_NAVIGATION_CONTROL_LARGE
            }
        },
        getType: function() {
            return this._opts.type
        },
        _asyncLoadCode: function() {
            var T = this;
            cA.load("control", function() {
                T._asyncDraw()
            })
        }
    });
    function am(T) {
        cp.call(this);
        T = T || {};
        this._opts = {
            printable: false
        };
        a8.object.extend(this._opts, T);
        this._copyrightCollection = [];
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new aH(5,2);
        this.setAnchor(T.anchor);
        this._canShow = true;
        this.blockInfoWindow = false;
        this._asyncLoadCode()
    }
    a8.lang.inherits(am, cp, "CopyrightControl");
    a8.object.extend(am.prototype, {
        initialize: function(T) {
            this._map = T;
            return this._container
        },
        addCopyright: function(cM) {
            if (!cM || !aK(cM.id) || isNaN(cM.id)) {
                return
            }
            var T = {
                bounds: null ,
                content: ""
            };
            for (var cL in cM) {
                T[cL] = cM[cL]
            }
            var cN = this.getCopyright(cM.id);
            if (cN) {
                for (var cO in T) {
                    cN[cO] = T[cO]
                }
            } else {
                this._copyrightCollection.push(T)
            }
        },
        getCopyright: function(cM) {
            for (var cL = 0, T = this._copyrightCollection.length; cL < T; cL++) {
                if (this._copyrightCollection[cL].id == cM) {
                    return this._copyrightCollection[cL]
                }
            }
        },
        getCopyrightCollection: function() {
            return this._copyrightCollection
        },
        removeCopyright: function(cM) {
            for (var cL = 0, T = this._copyrightCollection.length; cL < T; cL++) {
                if (this._copyrightCollection[cL].id == cM) {
                    r = this._copyrightCollection.splice(cL, 1);
                    cL--;
                    T = this._copyrightCollection.length
                }
            }
        },
        _asyncLoadCode: function() {
            var T = this;
            cA.load("control", function() {
                T._asyncDraw()
            })
        }
    });
    function cK(T) {
        cp.call(this);
        T = T || {};
        this._opts = {
            printable: false
        };
        this._opts = a8.extend(a8.extend(this._opts, {
            size: new aH(150,150),
            padding: 5,
            isOpen: false,
            zoomInterval: 4
        }), T);
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
        this.defaultOffset = new aH(0,0);
        this._btnWidth = 13;
        this._btnHeight = 13;
        this.setAnchor(T.anchor);
        this.setSize(this._opts.size);
        this._asyncLoadCode()
    }
    a8.lang.inherits(cK, cp, "OverviewMapControl");
    a8.extend(cK.prototype, {
        initialize: function(T) {
            this._map = T;
            return this._container
        },
        setAnchor: function(T) {
            cp.prototype.setAnchor.call(this, T)
        },
        changeView: function() {
            this.changeView._running = true;
            this._opts.isOpen = !this._opts.isOpen;
            if (!this._container) {
                this.changeView._running = false
            }
        },
        setSize: function(T) {
            if (!(T instanceof aH)) {
                T = new aH(150,150)
            }
            T.width = T.width > 0 ? T.width : 150;
            T.height = T.height > 0 ? T.height : 150;
            this._opts.size = T
        },
        getSize: function() {
            return this._opts.size
        },
        isOpen: function() {
            return this._opts.isOpen
        },
        _asyncLoadCode: function() {
            var T = this;
            cA.load("control", function() {
                T._asyncDraw()
            })
        }
    });
    function bK(T) {
        cp.call(this);
        T = T || {};
        this._opts = {
            printable: false
        };
        this._opts = a8.object.extend(a8.object.extend(this._opts, {
            color: "black",
            unit: "metric"
        }), T);
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new aH(81,18);
        this.setAnchor(T.anchor);
        this._units = {
            metric: {
                name: "metric",
                conv: 1,
                incon: 1000,
                u1: "\u7c73",
                u2: "\u516c\u91cc"
            },
            us: {
                name: "us",
                conv: 3.2808,
                incon: 5280,
                u1: "\u82f1\u5c3a",
                u2: "\u82f1\u91cc"
            }
        };
        if (!this._units[this._opts.unit]) {
            this._opts.unit = "metric"
        }
        this._scaleText = null ;
        this._numberArray = {};
        this._asyncLoadCode()
    }
    window.BMAP_UNIT_METRIC = "metric";
    window.BMAP_UNIT_IMPERIAL = "us";
    a8.lang.inherits(bK, cp, "ScaleControl");
    a8.object.extend(bK.prototype, {
        initialize: function(T) {
            this._map = T;
            return this._container
        },
        setColor: function(T) {
            this._opts.color = T + ""
        },
        getColor: function() {
            return this._opts.color
        },
        setUnit: function(T) {
            this._opts.unit = this._units[T] && this._units[T].name || this._opts.unit
        },
        getUnit: function() {
            return this._opts.unit
        },
        _asyncLoadCode: function() {
            var T = this;
            cA.load("control", function() {
                T._asyncDraw()
            })
        }
    });
    window.BMAP_MAPTYPE_CONTROL_HORIZONTAL = 0;
    window.BMAP_MAPTYPE_CONTROL_DROPDOWN = 1;
    function aL(T) {
        cp.call(this);
        T = T || {};
        this._opts = {
            printable: false,
            mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP, BMAP_PERSPECTIVE_MAP],
            type: BMAP_MAPTYPE_CONTROL_HORIZONTAL
        };
        this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
        this.defaultOffset = new aH(10,10);
        this.setAnchor(T.anchor);
        this._opts = a8.extend(a8.extend(this._opts, {
            offset: this.defaultOffset,
            enableSwitch: true
        }), T);
        if (aY(T.mapTypes)) {
            this._opts.mapTypes = T.mapTypes.slice(0)
        }
        this._asyncLoadCode()
    }
    a8.lang.inherits(aL, cp, "MapTypeControl");
    a8.object.extend(aL.prototype, {
        initialize: function(T) {
            this._map = T;
            return this._container
        },
        _asyncLoadCode: function() {
            var T = this;
            cA.load("control", function() {
                T._asyncDraw()
            })
        }
    });
    function cz(cL) {
        a8.lang.Class.call(this);
        this._opts = {
            container: null ,
            cursor: "default"
        };
        this._opts = a8.extend(this._opts, cL);
        this._type = "contextmenu";
        this._map = null ;
        this._container;
        this._shadow;
        this._left = 0;
        this._top = 0;
        this._items = [];
        this._rItems = [];
        this._dividers = [];
        this.curPixel = null ;
        this.curPoint = null ;
        this._isOpen = false;
        var T = this;
        cA.load("menu", function() {
            T._draw()
        })
    }
    a8.lang.inherits(cz, a8.lang.Class, "ContextMenu");
    a8.object.extend(cz.prototype, {
        initialize: function(cL, T) {
            this._map = cL;
            this._overlay = T || null
        },
        remove: function() {
            this._map = this._overlay = null
        },
        addItem: function(cM) {
            if (!cM || cM._type != "menuitem" || cM._text == "" || cM._width <= 0) {
                return
            }
            for (var cL = 0, T = this._items.length; cL < T; cL++) {
                if (this._items[cL] === cM) {
                    return
                }
            }
            this._items.push(cM);
            this._rItems.push(cM)
        },
        removeItem: function(cM) {
            if (!cM || cM._type != "menuitem") {
                return
            }
            for (var cL = 0, T = this._items.length; cL < T; cL++) {
                if (this._items[cL] === cM) {
                    this._items[cL].remove();
                    this._items.splice(cL, 1);
                    T--
                }
            }
            for (var cL = 0, T = this._rItems.length; cL < T; cL++) {
                if (this._rItems[cL] === cM) {
                    this._rItems[cL].remove();
                    this._rItems.splice(cL, 1);
                    T--
                }
            }
        },
        addSeparator: function() {
            this._items.push({
                _type: "divider",
                _dIndex: this._dividers.length
            });
            this._dividers.push({
                dom: null
            })
        },
        removeSeparator: function(cL) {
            if (!this._dividers[cL]) {
                return
            }
            for (var cM = 0, T = this._items.length; cM < T; cM++) {
                if (this._items[cM] && this._items[cM]._type == "divider" && this._items[cM]._dIndex == cL) {
                    this._items.splice(cM, 1);
                    T--
                }
                if (this._items[cM] && this._items[cM]._type == "divider" && this._items[cM]._dIndex > cL) {
                    this._items[cM]._dIndex--
                }
            }
            this._dividers.splice(cL, 1)
        },
        getDom: function() {
            return this._container
        },
        show: function() {
            if (this._isOpen == true) {
                return
            }
            this._isOpen = true
        },
        hide: function() {
            if (this._isOpen == false) {
                return
            }
            this._isOpen = false
        },
        setCursor: function(T) {
            if (!T) {
                return
            }
            this._opts.cursor = T
        },
        getItem: function(T) {
            return this._rItems[T]
        }
    });
    function be(cM, cN, cL) {
        if (!cM || !H(cN)) {
            return
        }
        a8.lang.Class.call(this);
        this._opts = {
            width: 100,
            id: ""
        };
        cL = cL || {};
        this._opts.width = (cL.width * 1) ? cL.width : 100;
        this._opts.id = cL.id ? cL.id : "";
        this._text = cM + "";
        this._callback = cN;
        this._map = null ;
        this._type = "menuitem";
        this._contextmenu = null ;
        this._container = null ;
        this._enabled = true;
        var T = this;
        cA.load("menu", function() {
            T._draw()
        })
    }
    a8.lang.inherits(be, a8.lang.Class, "MenuItem");
    a8.object.extend(be.prototype, {
        initialize: function(T, cL) {
            this._map = T;
            this._contextmenu = cL
        },
        remove: function() {
            this._contextmenu = null ;
            this._map = null
        },
        setText: function(T) {
            if (!T) {
                return
            }
            this._text = T + ""
        },
        getDom: function() {
            return this._container
        },
        enable: function() {
            this._enabled = true
        },
        disable: function() {
            this._enabled = false
        }
    });
    function bN(T, cL) {
        if (T && !cL) {
            cL = T
        }
        this._sw = this._ne = null ;
        this._swLng = this._swLat = null ;
        this._neLng = this._neLat = null ;
        if (T) {
            this._sw = new cd(T.lng,T.lat);
            this._ne = new cd(cL.lng,cL.lat);
            this._swLng = T.lng;
            this._swLat = T.lat;
            this._neLng = cL.lng;
            this._neLat = cL.lat
        }
    }
    a8.object.extend(bN.prototype, {
        isEmpty: function() {
            return !this._sw || !this._ne
        },
        equals: function(T) {
            if (!(T instanceof bN) || this.isEmpty()) {
                return false
            }
            return this.getSouthWest().equals(T.getSouthWest()) && this.getNorthEast().equals(T.getNorthEast())
        },
        getSouthWest: function() {
            return this._sw
        },
        getNorthEast: function() {
            return this._ne
        },
        containsBounds: function(T) {
            if (!(T instanceof bN) || this.isEmpty() || T.isEmpty()) {
                return false
            }
            return ( T._swLng > this._swLng && T._neLng < this._neLng && T._swLat > this._swLat && T._neLat < this._neLat)
        },
        getCenter: function() {
            if (this.isEmpty()) {
                return null
            }
            return new cd((this._swLng + this._neLng) / 2,(this._swLat + this._neLat) / 2)
        },
        intersects: function(cM) {
            if (!(cM instanceof bN)) {
                return null
            }
            if (Math.max(cM._swLng, cM._neLng) < Math.min(this._swLng, this._neLng) || Math.min(cM._swLng, cM._neLng) > Math.max(this._swLng, this._neLng) || Math.max(cM._swLat, cM._neLat) < Math.min(this._swLat, this._neLat) || Math.min(cM._swLat, cM._neLat) > Math.max(this._swLat, this._neLat)) {
                return null
            }
            var cO = Math.max(this._swLng, cM._swLng);
            var cL = Math.min(this._neLng, cM._neLng);
            var cN = Math.max(this._swLat, cM._swLat);
            var T = Math.min(this._neLat, cM._neLat);
            return new bN(new cd(cO,cN),new cd(cL,T))
        },
        containsPoint: function(T) {
            if (!(T instanceof cd) || this.isEmpty()) {
                return false
            }
            return ( T.lng >= this._swLng && T.lng <= this._neLng && T.lat >= this._swLat && T.lat <= this._neLat)
        },
        extend: function(T) {
            if (!(T instanceof cd)) {
                return
            }
            var cL = T.lng
              , cM = T.lat;
            if (!this._sw) {
                this._sw = new cd(0,0)
            }
            if (!this._ne) {
                this._ne = new cd(0,0)
            }
            if (!this._swLng || this._swLng > cL) {
                this._sw.lng = this._swLng = cL
            }
            if (!this._neLng || this._neLng < cL) {
                this._ne.lng = this._neLng = cL
            }
            if (!this._swLat || this._swLat > cM) {
                this._sw.lat = this._swLat = cM
            }
            if (!this._neLat || this._neLat < cM) {
                this._ne.lat = this._neLat = cM
            }
        },
        toSpan: function() {
            if (this.isEmpty()) {
                return new cd(0,0)
            }
            return new cd(Math.abs(this._neLng - this._swLng),Math.abs(this._neLat - this._swLat))
        }
    });
    function cd(T, cL) {
        if (isNaN(T)) {
            T = bV(T);
            T = isNaN(T) ? 0 : T
        }
        if (b3(T)) {
            T = parseFloat(T)
        }
        if (isNaN(cL)) {
            cL = bV(cL);
            cL = isNaN(cL) ? 0 : cL
        }
        if (b3(cL)) {
            cL = parseFloat(cL)
        }
        this.lng = T;
        this.lat = cL
    }
    cd.isInRange = function(T) {
        return T && T.lng <= 180 && T.lng >= -180 && T.lat <= 74 && T.lat >= -74
    }
    ;
    cd.prototype.equals = function(T) {
        return T && this.lat == T.lat && this.lng == T.lng
    }
    ;
    function bd() {}
    bd.prototype.lngLatToPoint = function() {
        throw "lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0"
    }
    ;
    bd.prototype.pointToLngLat = function() {
        throw "pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0"
    }
    ;
    function b6() {}
    a8.extend(b6, {
        num: {
            bj: {
                num: Math.sin(Math.PI / 4),
                num2: Math.sin(Math.PI / 6)
            },
            gz: {
                num: Math.sin(Math.PI / 4),
                num2: Math.sin(Math.PI / 4)
            },
            sz: {
                num: Math.sin(Math.PI / 4),
                num2: Math.sin(Math.PI / 4)
            },
            sh: {
                num: Math.sin(Math.PI / 4),
                num2: Math.sin(Math.PI / 4)
            }
        },
        correct_pts: {
            bj: [{
                j: 116.305687,
                w: 39.990912,
                utm_x: 12947230.73,
                utm_y: 4836903.65,
                x: 630412,
                y: 547340
            }, {
                j: 116.381837,
                w: 40.000198,
                utm_x: 12955707.8,
                utm_y: 4838247.62,
                x: 667412,
                y: 561832
            }, {
                j: 116.430651,
                w: 39.995216,
                utm_x: 12961141.81,
                utm_y: 4837526.55,
                x: 686556,
                y: 573372
            }, {
                j: 116.474111,
                w: 39.976323,
                utm_x: 12965979.81,
                utm_y: 4834792.55,
                x: 697152,
                y: 586816
            }, {
                j: 116.280328,
                w: 39.953159,
                utm_x: 12944407.75,
                utm_y: 4831441.53,
                x: 603272,
                y: 549976
            }, {
                j: 116.316117,
                w: 39.952496,
                utm_x: 12948391.8,
                utm_y: 4831345.64,
                x: 618504,
                y: 557872
            }, {
                j: 116.350477,
                w: 39.938107,
                utm_x: 12952216.78,
                utm_y: 4829264.65,
                x: 627044,
                y: 568220
            }, {
                j: 116.432025,
                w: 39.947158,
                utm_x: 12961294.76,
                utm_y: 4830573.59,
                x: 666280,
                y: 584016
            }, {
                j: 116.46873,
                w: 39.949516,
                utm_x: 12965380.79,
                utm_y: 4830914.63,
                x: 683328,
                y: 591444
            }, {
                j: 116.280077,
                w: 39.913823,
                utm_x: 12944379.8,
                utm_y: 4825753.62,
                x: 586150,
                y: 558552
            }, {
                j: 116.308625,
                w: 39.91374,
                utm_x: 12947557.79,
                utm_y: 4825741.62,
                x: 598648,
                y: 564732
            }, {
                j: 116.369853,
                w: 39.912979,
                utm_x: 12954373.73,
                utm_y: 4825631.62,
                x: 624561,
                y: 578039
            }, {
                j: 116.433552,
                w: 39.914694,
                utm_x: 12961464.75,
                utm_y: 4825879.53,
                x: 652972,
                y: 591348
            }, {
                j: 116.457034,
                w: 39.914273,
                utm_x: 12964078.78,
                utm_y: 4825818.67,
                x: 663028,
                y: 596444
            }, {
                j: 116.490927,
                w: 39.914127,
                utm_x: 12967851.77,
                utm_y: 4825797.57,
                x: 677968,
                y: 604188
            }, {
                j: 116.483839,
                w: 39.877198,
                utm_x: 12967062.73,
                utm_y: 4820460.67,
                x: 658596,
                y: 610312
            }, {
                j: 116.405777,
                w: 39.864461,
                utm_x: 12958372.82,
                utm_y: 4818620.62,
                x: 619256,
                y: 596088
            }, {
                j: 116.35345,
                w: 39.859774,
                utm_x: 12952547.74,
                utm_y: 4817943.6,
                x: 594633,
                y: 585851
            }, {
                j: 116.403818,
                w: 39.9141,
                utm_x: 12958154.74,
                utm_y: 4825793.66,
                x: 639699,
                y: 585226
            }, {
                j: 116.318111,
                w: 39.891101,
                utm_x: 12948613.78,
                utm_y: 4822469.56,
                x: 592856,
                y: 571480
            }, {
                j: 116.413047,
                w: 39.907238,
                utm_x: 12959182.12,
                utm_y: 4824801.76,
                x: 640680,
                y: 588704
            }, {
                j: 116.390843,
                w: 39.906113,
                utm_x: 12956710.35,
                utm_y: 4824639.16,
                x: 630620,
                y: 584108
            }, {
                j: 116.446527,
                w: 39.899438,
                utm_x: 12962909.14,
                utm_y: 4823674.4,
                x: 651752,
                y: 597416
            }, {
                j: 116.388665,
                w: 39.95527,
                utm_x: 12956467.9,
                utm_y: 4831746.87,
                x: 650656,
                y: 572800
            }, {
                j: 116.398343,
                w: 39.939704,
                utm_x: 12957545.26,
                utm_y: 4829495.6,
                x: 648036,
                y: 578452
            }, {
                j: 116.355101,
                w: 39.973581,
                utm_x: 12952731.53,
                utm_y: 4834395.82,
                x: 643268,
                y: 560944
            }, {
                j: 116.380727,
                w: 39.88464,
                utm_x: 12955584.23,
                utm_y: 4821535.94,
                x: 616920,
                y: 586496
            }, {
                j: 116.360843,
                w: 39.946452,
                utm_x: 12953370.73,
                utm_y: 4830471.48,
                x: 635293,
                y: 568765
            }, {
                j: 116.340955,
                w: 39.973421,
                utm_x: 12951156.79,
                utm_y: 4834372.67,
                x: 638420,
                y: 558632
            }, {
                j: 116.322585,
                w: 40.023941,
                utm_x: 12949111.83,
                utm_y: 4841684.79,
                x: 652135,
                y: 543802
            }, {
                j: 116.356486,
                w: 39.883341,
                utm_x: 12952885.71,
                utm_y: 4821348.24,
                x: 606050,
                y: 581443
            }, {
                j: 116.339592,
                w: 39.992259,
                utm_x: 12951005.06,
                utm_y: 4837098.59,
                x: 645664,
                y: 554400
            }, {
                j: 116.3778,
                w: 39.86392,
                utm_x: 12955258.4,
                utm_y: 4818542.48,
                x: 606848,
                y: 590328
            }, {
                j: 116.377354,
                w: 39.964124,
                utm_x: 12955208.75,
                utm_y: 4833027.64,
                x: 649911,
                y: 568581
            }, {
                j: 116.361837,
                w: 39.963897,
                utm_x: 12953481.39,
                utm_y: 4832994.8,
                x: 643286,
                y: 565175
            }, {
                j: 116.441397,
                w: 39.939403,
                utm_x: 12962338.06,
                utm_y: 4829452.07,
                x: 666772,
                y: 587728
            }, {
                j: 116.359176,
                w: 40.006631,
                utm_x: 12953185.16,
                utm_y: 4839178.78,
                x: 660440,
                y: 555411
            }],
            sz: [{
                w: 22.498861,
                utm_x: 12677279.029193671,
                utm_y: 2555027.9501714734,
                j: 113.880696,
                y: 1104472,
                x: 947240
            }, {
                w: 22.500706,
                utm_x: 12683920.978881944,
                utm_y: 2555248.973138607,
                j: 113.940361,
                y: 1122320,
                x: 974864
            }, {
                w: 22.576848,
                utm_x: 12675897.984563945,
                utm_y: 2564373.058056766,
                j: 113.86829,
                y: 1074048,
                x: 979136
            }, {
                w: 22.55689,
                utm_x: 12680064.05051775,
                utm_y: 2561981.0013635466,
                j: 113.905714,
                y: 1092484,
                x: 986240
            }, {
                w: 22.58066,
                utm_x: 12678671.98513852,
                utm_y: 2564829.983373251,
                j: 113.893209,
                y: 1080528,
                x: 992088
            }, {
                w: 22.595751,
                utm_x: 12678298.949465925,
                utm_y: 2566638.9913895614,
                j: 113.889858,
                y: 1074484,
                x: 997960
            }, {
                w: 22.557499,
                utm_x: 12684523.001238672,
                utm_y: 2562053.9875916084,
                j: 113.945769,
                y: 1104696,
                x: 1004564
            }, {
                w: 22.648419,
                utm_x: 12676422.97299485,
                utm_y: 2572954.0513219936,
                j: 113.873006,
                y: 1051384,
                x: 1015916
            }, {
                w: 22.562664,
                utm_x: 12690460.958807131,
                utm_y: 2562673.0054078405,
                j: 113.99911,
                y: 1119860,
                x: 1030228
            }, {
                w: 22.646618,
                utm_x: 12683008.037804369,
                utm_y: 2572738.0652955617,
                j: 113.93216,
                y: 1070324,
                x: 1041496
            }, {
                w: 22.571091,
                utm_x: 12695789.992135335,
                utm_y: 2563683.019582462,
                j: 114.046981,
                y: 1131924,
                x: 1055628
            }, {
                w: 22.704467,
                utm_x: 12682276.994753957,
                utm_y: 2579677.075645295,
                j: 113.925593,
                y: 1048536,
                x: 1066348
            }, {
                w: 22.547152,
                utm_x: 12702917.96800879,
                utm_y: 2560813.9850610085,
                j: 114.111012,
                y: 1160352,
                x: 1072596
            }, {
                w: 22.546192,
                utm_x: 12704502.952164687,
                utm_y: 2560698.9417545213,
                j: 114.12525,
                y: 1165256,
                x: 1078452
            }, {
                w: 22.5714,
                utm_x: 12702350.00978689,
                utm_y: 2563720.0558210905,
                j: 114.10591,
                y: 1150556,
                x: 1081960
            }, {
                w: 22.555004,
                utm_x: 12704883.001041513,
                utm_y: 2561754.9738317807,
                j: 114.128664,
                y: 1163304,
                x: 1084172
            }, {
                w: 22.551925,
                utm_x: 12706255.028694374,
                utm_y: 2561385.978019464,
                j: 114.140989,
                y: 1168216,
                x: 1088116
            }, {
                w: 22.693756,
                utm_x: 12690318.02302569,
                utm_y: 2578392.0635360866,
                j: 113.997826,
                y: 1075100,
                x: 1092860
            }, {
                w: 22.573769,
                utm_x: 12705731.042149788,
                utm_y: 2564004.003107545,
                j: 114.136282,
                y: 1159404,
                x: 1096572
            }, {
                w: 22.583238,
                utm_x: 12706369.021093281,
                utm_y: 2565139.002548978,
                j: 114.142013,
                y: 1157896,
                x: 1103632
            }, {
                w: 22.605844,
                utm_x: 12704694.980375737,
                utm_y: 2567848.984570506,
                j: 114.126975,
                y: 1145540,
                x: 1107972
            }, {
                w: 22.637228,
                utm_x: 12702545.043656897,
                utm_y: 2571612.010208761,
                j: 114.107662,
                y: 1128764,
                x: 1114460
            }, {
                w: 22.62496,
                utm_x: 12707132.013185183,
                utm_y: 2570140.9407190788,
                j: 114.148867,
                y: 1145732,
                x: 1127028
            }, {
                w: 22.644524,
                utm_x: 12707016.01701364,
                utm_y: 2572486.9446672536,
                j: 114.147825,
                y: 1138800,
                x: 1135876
            }, {
                w: 22.640188,
                utm_x: 12711515.0431873,
                utm_y: 2571966.966986786,
                j: 114.18824,
                y: 1152692,
                x: 1151836
            }, {
                w: 22.59807,
                utm_x: 12720011.039168343,
                utm_y: 2566916.995355996,
                j: 114.26456,
                y: 1191212,
                x: 1165180
            }, {
                w: 22.668221,
                utm_x: 12714081.987256048,
                utm_y: 2575329.007304823,
                j: 114.211299,
                y: 1150576,
                x: 1175404
            }, {
                w: 22.702591,
                utm_x: 12717292.031020584,
                utm_y: 2579452.0022288463,
                j: 114.240135,
                y: 1148204,
                x: 1204600
            }, {
                w: 22.731786,
                utm_x: 12717795.9798388,
                utm_y: 2582955.0308636553,
                j: 114.244662,
                y: 1139532,
                x: 1220540
            }, {
                w: 22.727494,
                utm_x: 12720675.957721734,
                utm_y: 2582439.9980541077,
                j: 114.270533,
                y: 1148992,
                x: 1230084
            }, {
                w: 22.716335,
                utm_x: 12725500.040345404,
                utm_y: 2581101.0132384477,
                j: 114.313868,
                y: 1166316,
                x: 1244102
            }],
            gz: [{
                j: 113.335098,
                w: 23.147289,
                utm_x: 12616542.68,
                utm_y: 2632892.7,
                x: 1129109,
                y: 1073920
            }, {
                j: 113.320932,
                w: 23.146956,
                utm_x: 12614965.71,
                utm_y: 2632852.62,
                x: 1125620,
                y: 1071640
            }, {
                j: 113.321435,
                w: 23.140119,
                utm_x: 12615021.7,
                utm_y: 2632029.65,
                x: 1124032,
                y: 1072882
            }, {
                j: 113.321471,
                w: 23.119165,
                utm_x: 12615025.71,
                utm_y: 2629507.68,
                x: 1118932,
                y: 1076530
            }, {
                j: 113.340201,
                w: 23.118616,
                utm_x: 12617110.75,
                utm_y: 2629441.61,
                x: 1123238,
                y: 1079667
            }, {
                j: 113.358068,
                w: 23.116323,
                utm_x: 12619099.71,
                utm_y: 2629165.66,
                x: 1126968,
                y: 1083116
            }, {
                j: 113.357529,
                w: 23.131271,
                utm_x: 12619039.71,
                utm_y: 2630964.68,
                x: 1130508,
                y: 1080440
            }, {
                j: 113.365811,
                w: 23.150595,
                utm_x: 12619961.67,
                utm_y: 2633290.66,
                x: 1137205,
                y: 1078567
            }, {
                j: 113.294145,
                w: 23.118467,
                utm_x: 12611983.76,
                utm_y: 2629423.68,
                x: 1112245,
                y: 1072043
            }, {
                j: 113.28615,
                w: 23.121525,
                utm_x: 12611093.75,
                utm_y: 2629791.7,
                x: 1110993,
                y: 1070197
            }, {
                j: 113.307152,
                w: 23.055497,
                utm_x: 12613431.71,
                utm_y: 2621847.21,
                x: 1100144,
                y: 1085123
            }, {
                j: 113.333445,
                w: 23.052687,
                utm_x: 12616358.66,
                utm_y: 2621509.2,
                x: 1105784,
                y: 1089948
            }, {
                j: 113.347476,
                w: 23.048755,
                utm_x: 12617920.6,
                utm_y: 2621036.24,
                x: 1108099,
                y: 1093064
            }, {
                j: 113.385774,
                w: 23.036574,
                utm_x: 12622183.96,
                utm_y: 2619571.12,
                x: 1113850,
                y: 1101834
            }, {
                j: 113.364185,
                w: 22.89798,
                utm_x: 12619780.66,
                utm_y: 2602910.64,
                x: 1073186,
                y: 1123374
            }, {
                j: 113.404577,
                w: 22.906481,
                utm_x: 12624277.13,
                utm_y: 2603932.06,
                x: 1084888,
                y: 1128692
            }, {
                j: 113.430856,
                w: 22.913156,
                utm_x: 12627202.52,
                utm_y: 2604734.12,
                x: 1092892,
                y: 1131761
            }, {
                j: 113.384554,
                w: 22.933021,
                utm_x: 12622048.15,
                utm_y: 2607121.32,
                x: 1086975,
                y: 1120403
            }, {
                j: 113.263566,
                w: 23.146333,
                utm_x: 12608579.68,
                utm_y: 2632777.63,
                x: 1111742,
                y: 1062098
            }, {
                j: 113.239213,
                w: 23.152996,
                utm_x: 12605868.69,
                utm_y: 2633579.69,
                x: 1107616,
                y: 1056740
            }, {
                j: 113.253865,
                w: 23.131628,
                utm_x: 12607499.76,
                utm_y: 2631007.65,
                x: 1105912,
                y: 1062966
            }, {
                j: 113.240767,
                w: 23.088434,
                utm_x: 12606041.68,
                utm_y: 2625809.7,
                x: 1092270,
                y: 1068184
            }, {
                j: 113.279628,
                w: 23.088284,
                utm_x: 12610367.72,
                utm_y: 2625791.65,
                x: 1101412,
                y: 1074883
            }, {
                j: 113.462271,
                w: 23.107058,
                utm_x: 12630699.66,
                utm_y: 2628050.7,
                x: 1148752,
                y: 1101736
            }, {
                j: 113.401618,
                w: 23.052957,
                utm_x: 12623947.73,
                utm_y: 2621541.68,
                x: 1121925,
                y: 1101535
            }, {
                j: 113.422504,
                w: 23.05905,
                utm_x: 12626272.77,
                utm_y: 2622274.61,
                x: 1128470,
                y: 1104049
            }, {
                j: 113.362506,
                w: 23.107149,
                utm_x: 12619593.75,
                utm_y: 2628061.65,
                x: 1125835,
                y: 1085505
            }, {
                j: 113.419629,
                w: 23.143176,
                utm_x: 12625952.73,
                utm_y: 2632397.61,
                x: 1148133,
                y: 1089052
            }, {
                j: 113.23315,
                w: 23.062251,
                utm_x: 12605193.75,
                utm_y: 2622659.67,
                x: 1084184,
                y: 1071368
            }, {
                j: 113.314525,
                w: 23.101412,
                utm_x: 12614252.48,
                utm_y: 2627371.29,
                x: 1113011,
                y: 1078426
            }, {
                j: 113.307947,
                w: 23.131369,
                utm_x: 12613520.21,
                utm_y: 2630976.47,
                x: 1118622,
                y: 1072198
            }],
            sh: [{
                j: 121.524411,
                w: 31.245875,
                utm_x: 13528182.75,
                utm_y: 3642354.51,
                x: 1086581,
                y: 1065728
            }, {
                j: 121.419229,
                w: 31.244887,
                utm_x: 13516473.81,
                utm_y: 3642226.51,
                x: 1032616,
                y: 1029148
            }, {
                j: 121.405637,
                w: 31.237871,
                utm_x: 13514960.74,
                utm_y: 3641317.54,
                x: 1022724,
                y: 1027244
            }, {
                j: 121.415348,
                w: 31.222879,
                utm_x: 13516041.78,
                utm_y: 3639375.47,
                x: 1018548,
                y: 1036980
            }, {
                j: 121.422561,
                w: 31.224261,
                utm_x: 13516844.73,
                utm_y: 3639554.48,
                x: 1022976,
                y: 1038908
            }, {
                j: 121.412581,
                w: 31.204148,
                utm_x: 13515733.75,
                utm_y: 3636949.48,
                x: 1006568,
                y: 1043696
            }, {
                j: 121.443025,
                w: 31.206202,
                utm_x: 13519122.8,
                utm_y: 3637215.49,
                x: 1022656,
                y: 1053704
            }, {
                j: 121.524061,
                w: 31.246917,
                utm_x: 13528143.79,
                utm_y: 3642489.52,
                x: 1082052,
                y: 1064124
            }, {
                j: 121.529343,
                w: 31.217769,
                utm_x: 13528731.78,
                utm_y: 3638713.59,
                x: 1072696,
                y: 1079064
            }, {
                j: 121.530268,
                w: 31.210341,
                utm_x: 13528834.75,
                utm_y: 3637751.53,
                x: 1068748,
                y: 1082416
            }, {
                j: 121.511601,
                w: 31.227303,
                utm_x: 13526756.73,
                utm_y: 3639948.53,
                x: 1069276,
                y: 1068716
            }, {
                j: 121.4966,
                w: 31.243614,
                utm_x: 13525086.81,
                utm_y: 3642061.58,
                x: 1071220,
                y: 1056805
            }, {
                j: 121.485021,
                w: 31.26138,
                utm_x: 13523797.82,
                utm_y: 3644363.54,
                x: 1075708,
                y: 1045540
            }, {
                j: 121.465114,
                w: 31.278803,
                utm_x: 13521581.76,
                utm_y: 3646621.48,
                x: 1073740,
                y: 1031268
            }, {
                j: 121.454784,
                w: 31.266566,
                utm_x: 13520431.82,
                utm_y: 3645035.58,
                x: 1063591,
                y: 1033191
            }, {
                j: 121.46851,
                w: 31.24951,
                utm_x: 13521959.81,
                utm_y: 3642825.48,
                x: 1060200,
                y: 1044520
            }, {
                j: 121.446384,
                w: 31.248422,
                utm_x: 13519496.73,
                utm_y: 3642684.51,
                x: 1048784,
                y: 1037750
            }, {
                j: 121.509499,
                w: 31.246469,
                utm_x: 13526522.73,
                utm_y: 3642431.47,
                x: 1079309,
                y: 1060105
            }, {
                j: 121.481643,
                w: 31.283943,
                utm_x: 13523421.78,
                utm_y: 3647287.68,
                x: 1087096,
                y: 1035304
            }, {
                j: 121.508054,
                w: 31.280609,
                utm_x: 13526361.87,
                utm_y: 3646855.56,
                x: 1098432,
                y: 1045648
            }, {
                j: 121.493854,
                w: 31.19121,
                utm_x: 13524781.12,
                utm_y: 3635274.07,
                x: 1039624,
                y: 1077288
            }, {
                j: 121.500079,
                w: 31.185541,
                utm_x: 13525474.09,
                utm_y: 3634540.04,
                x: 1039960,
                y: 1081640
            }, {
                j: 121.484482,
                w: 31.202846,
                utm_x: 13523737.82,
                utm_y: 3636780.87,
                x: 1041388,
                y: 1069232
            }, {
                j: 121.480877,
                w: 31.189587,
                utm_x: 13523336.51,
                utm_y: 3635063.92,
                x: 1032484,
                y: 1073640
            }, {
                j: 121.502652,
                w: 31.195209,
                utm_x: 13525760.52,
                utm_y: 3635791.9,
                x: 1046384,
                y: 1078728
            }]
        },
        getLnglatIndex: function(cN, cR, cQ) {
            var cM = 0;
            var cL = 0;
            var cS = 10000000
              , cP = 1000000000;
            for (var cO = 0; cO < this.correct_pts[cN].length; cO++) {
                var T = this.getDis(this.correct_pts[cN][cO].x, this.correct_pts[cN][cO].y, cR, cQ);
                if (T < cP) {
                    if (T < cS) {
                        cP = cS;
                        cS = T;
                        cL = cM;
                        cM = cO
                    } else {
                        sedMinDis = T;
                        cL = cO
                    }
                }
            }
            return {
                lt: cM,
                rb: cL
            }
        },
        getOMapIndex_mm: function(cN, cS, cR) {
            var cM = 0;
            var cL = 0;
            var cQ = 1294723000
              , cP = 1294723000;
            for (var cO = 0; cO < this.correct_pts[cN].length; cO++) {
                var T = this.getDis(this.correct_pts[cN][cO].utm_x, this.correct_pts[cN][cO].utm_y, cS, cR);
                if (T < cP) {
                    if (T < cQ) {
                        cP = cQ;
                        cQ = T;
                        cL = cM;
                        cM = cO
                    } else {
                        sedMinDis = T;
                        cL = cO
                    }
                }
            }
            return {
                lt: cM,
                rb: cL
            }
        },
        getDis: function(T, cN, cL, cM) {
            return Math.abs(T - cL) + Math.abs(cN - cM)
        },
        toMap: function(cN, T, cO) {
            var cL = (T - cO) * this.num[cN].num;
            var cM = (T + cO) * this.num[cN].num * this.num[cN].num2;
            return {
                x: cL,
                y: cM
            }
        },
        fromMap: function(cN, T, cO) {
            cO = cO / this.num[cN].num2;
            var cL = (T + cO) / (this.num[cN].num * 2);
            var cM = (cO - T) / (this.num[cN].num * 2);
            return {
                x: cL,
                y: cM
            }
        },
        getDgPix_mm: function(cO, cT, cP) {
            var cS = this.fromMap(cO, this.correct_pts[cO][cT].x, this.correct_pts[cO][cT].y);
            var cQ = this.fromMap(cO, this.correct_pts[cO][cP].x, this.correct_pts[cO][cP].y);
            var cY = cS.x
              , cL = cS.y;
            var cX = cQ.x
              , T = cQ.y;
            var cV = this.correct_pts[cO][cT].utm_x
              , cN = this.correct_pts[cO][cT].utm_y;
            var cR = this.correct_pts[cO][cP].utm_x
              , cM = this.correct_pts[cO][cP].utm_y;
            var cW = Math.abs((cR - cV) * 100000 / (cX - cY));
            var cU = Math.abs((cM - cN) * 100000 / (T - cL));
            return {
                j: cW,
                w: cU,
                x: 100000 / cW,
                y: 100000 / cU
            }
        },
        getPx_mm: function(c1, cX, cW, cO, cN) {
            var cM = this.correct_pts[c1][cO];
            var T = this.correct_pts[c1][cO];
            var cU = this.getDgPix_mm(c1, cO, cN);
            var cQ = this.fromMap(c1, cM.x, cM.y);
            var cP = T.utm_x
              , c3 = T.utm_y;
            var c2 = cX
              , cV = cW;
            var c0 = cQ.x;
            var cL = cQ.y;
            var cS = c2 - cP
              , cZ = cV - c3;
            var cT = cS * cU.x + c0;
            var cR = -cZ * cU.y + cL;
            var cY = this.toMap(c1, cT, cR);
            return cY
        },
        getJw_mm: function(cZ, cU, cT, cP, cO) {
            var cS = this.correct_pts[cZ][cP];
            var cL = this.correct_pts[cZ][cP];
            var cV = this.getDgPix_mm(cZ, cP, cO);
            var cX = this.fromMap(cZ, cU, cT);
            var cN = this.fromMap(cZ, cS.x, cS.y);
            var cQ = cL.utm_x
              , c0 = cL.utm_y;
            var cY = cN.x;
            var cM = cN.y;
            var c1 = cX.x - cY
              , cW = cM - cX.y;
            var cR = c1 / cV.x + cQ;
            var T = cW / cV.y + c0;
            return {
                lng: cR,
                lat: T
            }
        },
        getOMap_pts: function(cL, T) {
            return this.getOMap_index(cL, T.lng, T.lat, T.lt, T.rb)
        },
        getMapJw_pts: function(cL, T) {
            return this.getMapJw_index(cL, T.lng, 9998336 - T.lat, T.lt, T.rb)
        },
        getOMap_index: function(cQ, cP, cO, T, cN) {
            if (!T || !cN) {
                var cL = this.getOMapIndex_mm(cQ, cP, cO)
            } else {
                var cL = {
                    lt: T,
                    rb: cN
                }
            }
            var cM = this.getPx_mm(cQ, cP, cO, cL.lt, cL.rb);
            return {
                x: Math.floor(cM.x),
                y: 9998336 - Math.floor(cM.y),
                lt: cL.lt,
                rb: cL.rb
            }
        },
        getMapJw_index: function(cP, cM, cQ, cL, cO) {
            if (!cL || !cO) {
                var cN = this.getLnglatIndex(cP, cM, cQ)
            } else {
                var cN = {
                    lt: cL,
                    rb: cO
                }
            }
            var T = this.getJw_mm(cP, cM, cQ, cN.lt, cN.rb);
            return {
                lng: T.lng,
                lat: T.lat,
                lt: cN.lt,
                rb: cN.rb
            }
        }
    });
    function ba() {}
    ba.prototype = new bd();
    a8.extend(ba, {
        EARTHRADIUS: 6370996.81,
        MCBAND: [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        LLBAND: [75, 60, 45, 30, 15, 0],
        MC2LL: [[1.410526172116255e-8, 0.00000898305509648872, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 17337981.2], [-7.435856389565537e-9, 0.000008983055097726239, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86], [-3.030883460898826e-8, 0.00000898305509983578, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [-1.981981304930552e-8, 0.000008983055099779535, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437e-9, 0.000008983055096812155, 0.00006995724062, 23.10934304144901, -0.00023663490511, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878e-9, 0.000008983055095805407, -3.068298e-8, 7.47137025468032, -0.00000353937994, -0.02145144861037, -0.00001234426596, 0.00010322952773, -0.00000323890364, 826088.5]],
        LL2MC: [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [0.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-0.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-0.0003218135878613132, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
        getDistanceByMC: function(cP, cN) {
            if (!cP || !cN) {
                return 0
            }
            var cL, cO, T, cM;
            cP = this.convertMC2LL(cP);
            if (!cP) {
                return 0
            }
            cL = this.toRadians(cP.lng);
            cO = this.toRadians(cP.lat);
            cN = this.convertMC2LL(cN);
            if (!cN) {
                return 0
            }
            T = this.toRadians(cN.lng);
            cM = this.toRadians(cN.lat);
            return this.getDistance(cL, T, cO, cM)
        },
        getDistanceByLL: function(cP, cN) {
            if (!cP || !cN) {
                return 0
            }
            cP.lng = this.getLoop(cP.lng, -180, 180);
            cP.lat = this.getRange(cP.lat, -74, 74);
            cN.lng = this.getLoop(cN.lng, -180, 180);
            cN.lat = this.getRange(cN.lat, -74, 74);
            var cL, T, cO, cM;
            cL = this.toRadians(cP.lng);
            cO = this.toRadians(cP.lat);
            T = this.toRadians(cN.lng);
            cM = this.toRadians(cN.lat);
            return this.getDistance(cL, T, cO, cM)
        },
        convertMC2LL: function(cL) {
            var cM, cO;
            cM = new cd(Math.abs(cL.lng),Math.abs(cL.lat));
            for (var cN = 0; cN < this.MCBAND.length; cN++) {
                if (cM.lat >= this.MCBAND[cN]) {
                    cO = this.MC2LL[cN];
                    break
                }
            }
            var T = this.convertor(cL, cO);
            var cL = new cd(T.lng.toFixed(6),T.lat.toFixed(6));
            return cL
        },
        convertLL2MC: function(T) {
            var cL, cN;
            T.lng = this.getLoop(T.lng, -180, 180);
            T.lat = this.getRange(T.lat, -74, 74);
            cL = new cd(T.lng,T.lat);
            for (var cM = 0; cM < this.LLBAND.length; cM++) {
                if (cL.lat >= this.LLBAND[cM]) {
                    cN = this.LL2MC[cM];
                    break
                }
            }
            if (!cN) {
                for (var cM = this.LLBAND.length - 1; cM >= 0; cM--) {
                    if (cL.lat <= -this.LLBAND[cM]) {
                        cN = this.LL2MC[cM];
                        break
                    }
                }
            }
            var cO = this.convertor(T, cN);
            var T = new cd(cO.lng.toFixed(2),cO.lat.toFixed(2));
            return T
        },
        convertor: function(cM, cN) {
            if (!cM || !cN) {
                return
            }
            var T = cN[0] + cN[1] * Math.abs(cM.lng);
            var cL = Math.abs(cM.lat) / cN[9];
            var cO = cN[2] + cN[3] * cL + cN[4] * cL * cL + cN[5] * cL * cL * cL + cN[6] * cL * cL * cL * cL + cN[7] * cL * cL * cL * cL * cL + cN[8] * cL * cL * cL * cL * cL * cL;
            T *= (cM.lng < 0 ? -1 : 1);
            cO *= (cM.lat < 0 ? -1 : 1);
            return new cd(T,cO)
        },
        getDistance: function(cL, T, cN, cM) {
            return this.EARTHRADIUS * Math.acos((Math.sin(cN) * Math.sin(cM) + Math.cos(cN) * Math.cos(cM) * Math.cos(T - cL)))
        },
        toRadians: function(T) {
            return Math.PI * T / 180
        },
        toDegrees: function(T) {
            return (180 * T) / Math.PI
        },
        getRange: function(cM, cL, T) {
            if (cL != null ) {
                cM = Math.max(cM, cL)
            }
            if (T != null ) {
                cM = Math.min(cM, T)
            }
            return cM
        },
        getLoop: function(cM, cL, T) {
            while (cM > T) {
                cM -= T - cL
            }
            while (cM < cL) {
                cM += T - cL
            }
            return cM
        }
    });
    a8.extend(ba.prototype, {
        lngLatToMercator: function(T) {
            return ba.convertLL2MC(T)
        },
        lngLatToPoint: function(T) {
            var cL = ba.convertLL2MC(T);
            return new bu(cL.lng,cL.lat)
        },
        mercatorToLngLat: function(T) {
            return ba.convertMC2LL(T)
        },
        pointToLngLat: function(T) {
            var cL = new cd(T.x,T.y);
            return ba.convertMC2LL(cL)
        },
        pointToPixel: function(cL, cP, cO, cN, cQ) {
            if (!cL) {
                return
            }
            cL = this.lngLatToMercator(cL, cQ);
            var cM = this.getZoomUnits(cP);
            var T = Math.round((cL.lng - cO.lng) / cM + cN.width / 2);
            var cR = Math.round((cO.lat - cL.lat) / cM + cN.height / 2);
            return new bu(T,cR)
        },
        pixelToPoint: function(T, cS, cO, cM, cL) {
            if (!T) {
                return
            }
            var cR = this.getZoomUnits(cS);
            var cP = cO.lng + cR * (T.x - cM.width / 2);
            var cN = cO.lat - cR * (T.y - cM.height / 2);
            var cQ = new cd(cP,cN);
            return this.mercatorToLngLat(cQ, cL)
        },
        getZoomUnits: function(T) {
            return Math.pow(2, (18 - T))
        }
    });
    function cE() {}
    cE.prototype = new ba();
    a8.extend(cE.prototype, {
        lngLatToMercator: function(cL, T) {
            return this._convert2DTo3D(T, ba.convertLL2MC(cL))
        },
        mercatorToLngLat: function(cL, T) {
            return ba.convertMC2LL(this._convert3DTo2D(T, cL))
        },
        lngLatToPoint: function(cM, T) {
            var cL = this._convert2DTo3D(T, ba.convertLL2MC(cM));
            return new bu(cL.lng,cL.lat)
        },
        pointToLngLat: function(cL, T) {
            var cM = new cd(cL.x,cL.y);
            return ba.convertMC2LL(this._convert3DTo2D(T, cM))
        },
        _convert2DTo3D: function(cM, T) {
            var cL = b6.getOMap_pts(cM || "bj", T);
            return new cd(cL.x,cL.y)
        },
        _convert3DTo2D: function(cM, T) {
            var cL = b6.getMapJw_pts(cM || "bj", T);
            return new cd(cL.lng,cL.lat)
        },
        getZoomUnits: function(T) {
            return Math.pow(2, (20 - T))
        }
    });
    function bG() {
        this._type = "overlay"
    }
    a8.lang.inherits(bG, a8.lang.Class, "Overlay");
    bG.getZIndex = function(T) {
        T = T * 1;
        if (!T) {
            return 0
        }
        return (T * -100000) << 1
    }
    ;
    a8.extend(bG.prototype, {
        _i: function(T) {
            if (!this.domElement && H(this.initialize)) {
                this.domElement = this.initialize(T);
                if (this.domElement) {
                    this.domElement.style.WebkitUserSelect = "none"
                }
            }
            this.draw()
        },
        initialize: function(T) {
            throw "initialize\u65b9\u6cd5\u672a\u5b9e\u73b0"
        },
        draw: function() {
            throw "draw\u65b9\u6cd5\u672a\u5b9e\u73b0"
        },
        remove: function() {
            if (this.domElement && this.domElement.parentNode) {
                this.domElement.parentNode.removeChild(this.domElement)
            }
            this.domElement = null ;
            this.dispatchEvent(new bg("onremove"))
        },
        hide: function() {
            if (this.domElement) {
                a8.dom.hide(this.domElement)
            }
        },
        show: function() {
            if (this.domElement) {
                a8.dom.show(this.domElement)
            }
        },
        isVisible: function() {
            if (!this.domElement) {
                return false
            }
            if (this.domElement.style.display == "none" || this.domElement.style.visibility == "hidden") {
                return false
            }
            return true
        }
    });
    BMap.register(function(cM) {
        var T = cM.temp;
        T.overlayDiv = cM.overlayDiv = cL(cM.platform, 200);
        cM._panes.floatPane = cL(T.overlayDiv, 800);
        cM._panes.markerMouseTarget = cL(T.overlayDiv, 700);
        cM._panes.floatShadow = cL(T.overlayDiv, 600);
        cM._panes.labelPane = cL(T.overlayDiv, 500);
        cM._panes.markerPane = cL(T.overlayDiv, 400);
        cM._panes.markerShadow = cL(T.overlayDiv, 300);
        cM._panes.mapPane = cL(T.overlayDiv, 200);
        function cL(cN, cQ) {
            var cP = aa("div")
              , cO = cP.style;
            cO.position = "absolute";
            cO.top = cO.left = cO.width = cO.height = "0";
            cO.zIndex = cQ;
            cN.appendChild(cP);
            return cP
        }
    });
    function Y() {
        a8.lang.Class.call(this);
        bG.call(this);
        this.map = null ;
        this._visible = true;
        this.infoWindow = null ;
        this._dblclickTime = 0
    }
    a8.lang.inherits(Y, bG, "OverlayInternal");
    a8.extend(Y.prototype, {
        initialize: function(T) {
            this.map = T;
            a8.lang.Class.call(this, this.guid);
            return null
        },
        getMap: function() {
            return this.map
        },
        draw: function() {},
        remove: function() {
            this.map = null ;
            a8.lang.decontrol(this.guid);
            bG.prototype.remove.call(this)
        },
        hide: function() {
            if (this._visible == false) {
                return
            }
            this._visible = false
        },
        show: function() {
            if (this._visible == true) {
                return
            }
            this._visible = true
        },
        isVisible: function() {
            if (!this.domElement) {
                return false
            }
            return !!this._visible
        },
        getContainer: function() {
            return this.domElement
        },
        setConfig: function(cL) {
            cL = cL || {};
            for (var T in cL) {
                this._config[T] = cL[T]
            }
        },
        setZIndex: function(T) {
            this.zIndex = T
        },
        enableMassClear: function() {
            this._config.enableMassClear = true
        },
        disableMassClear: function() {
            this._config.enableMassClear = false
        },
        addContextMenu: function(T) {
            this._menu = T
        },
        removeContextMenu: function(T) {
            this._menu = null
        }
    });
    function cs() {
        this.map = null ;
        this._overlays = {};
        this._customOverlays = []
    }
    BMap.register(function(cL) {
        var T = new cs();
        T.map = cL;
        cL._overlays = T._overlays;
        cL._customOverlays = T._customOverlays;
        cL.addEventListener("load", function(cM) {
            T.draw(cM)
        });
        cL.addEventListener("moveend", function(cM) {
            T.draw(cM)
        });
        if (a8.browser.ie && a8.browser.ie < 8 || document.compatMode == "BackCompat") {
            cL.addEventListener("zoomend", function(cM) {
                setTimeout(function() {
                    T.draw(cM)
                }, 20)
            })
        } else {
            cL.addEventListener("zoomend", function(cM) {
                T.draw(cM)
            })
        }
        cL.addEventListener("maptypechange", function(cM) {
            T.draw(cM)
        });
        cL.addEventListener("addoverlay", function(cQ) {
            var cN = cQ.target;
            if (cN instanceof Y) {
                if (!T._overlays[cN.guid]) {
                    T._overlays[cN.guid] = cN
                }
            } else {
                var cP = false;
                for (var cO = 0, cM = T._customOverlays.length; cO < cM; cO++) {
                    if (T._customOverlays[cO] === cN) {
                        cP = true;
                        break
                    }
                }
                if (!cP) {
                    T._customOverlays.push(cN)
                }
            }
        });
        cL.addEventListener("removeoverlay", function(cP) {
            var cN = cP.target;
            if (cN instanceof Y) {
                delete T._overlays[cN.guid]
            } else {
                for (var cO = 0, cM = T._customOverlays.length; cO < cM; cO++) {
                    if (T._customOverlays[cO] === cN) {
                        T._customOverlays.splice(cO, 1);
                        break
                    }
                }
            }
        });
        cL.addEventListener("clearoverlays", function(cP) {
            this.closeInfoWindow();
            for (var cO in T._overlays) {
                if (T._overlays[cO]._config.enableMassClear) {
                    T._overlays[cO].remove();
                    delete T._overlays[cO]
                }
            }
            for (var cN = 0, cM = T._customOverlays.length; cN < cM; cN++) {
                if (T._customOverlays[cN].enableMassClear != false) {
                    T._customOverlays[cN].remove();
                    T._customOverlays[cN] = null ;
                    T._customOverlays.splice(cN, 1);
                    cN--;
                    cM--
                }
            }
        });
        cL.addEventListener("infowindowopen", function(cN) {
            var cM = this.infoWindow;
            if (cM) {
                a8.dom.hide(cM.popDom);
                a8.dom.hide(cM.shadowDom)
            }
        });
        cL.addEventListener("movestart", function() {
            if (this.getInfoWindow()) {
                this.getInfoWindow()._setOverflow()
            }
        });
        cL.addEventListener("moveend", function() {
            if (this.getInfoWindow()) {
                this.getInfoWindow()._resetOverflow()
            }
        })
    });
    cs.prototype.draw = function(cM) {
        for (var cL in this._overlays) {
            this._overlays[cL].draw()
        }
        a8.array.each(this._customOverlays, function(cN) {
            cN.draw()
        });
        if (this.map.temp.infoWin) {
            this.map.temp.infoWin.setPosition()
        }
        if (BMap.DrawerSelector) {
            var T = BMap.DrawerSelector.getDrawer(this.map);
            T.setPalette()
        }
    }
    ;
    function cF(T) {
        Y.call(this);
        this._config = {
            strokeColor: "#3a6bdb",
            strokeWeight: 5,
            strokeOpacity: 0.65,
            strokeStyle: "solid",
            enableMassClear: true,
            getParseTolerance: null ,
            getParseCacheIndex: null ,
            enableEditing: false,
            mouseOverTolerance: 15,
            use3DCoords: false,
            clickable: true
        };
        T = T || {};
        this.setConfig(T);
        if (this._config.strokeWeight <= 0) {
            this._config.strokeWeight = 5
        }
        if (this._config.strokeOpacity < 0 || this._config.strokeOpacity > 1) {
            this._config.strokeOpacity = 0.65
        }
        if (this._config.fillOpacity < 0 || this._config.fillOpacity > 1) {
            this._config.fillOpacity = 0.65
        }
        if (this._config.strokeStyle != "solid" && this._config.strokeStyle != "dashed") {
            this._config.strokeStyle = "solid"
        }
        if (ch(T.enableClicking)) {
            this._config.clickable = T.enableClicking
        }
        this.domElement = null ;
        this._bounds = new BMap.Bounds(0,0,0,0);
        this._parseCache = [];
        this.vertexMarkers = [];
        this._temp = {}
    }
    a8.lang.inherits(cF, Y, "Graph");
    cF.getGraphPoints = function(cL) {
        var T = [];
        if (!cL) {
            return T
        }
        if (b3(cL)) {
            var cM = cL.split(";");
            a8.array.each(cM, function(cO) {
                var cN = cO.split(",");
                T.push(new cd(cN[0],cN[1]))
            })
        }
        if (cL.constructor == Array && cL.length > 0) {
            T = cL
        }
        return T
    }
    ;
    cF.parseTolerance = [0.09, 0.005, 0.0001, 0.00001];
    a8.extend(cF.prototype, {
        initialize: function(T) {
            this.map = T;
            return null
        },
        draw: function() {
            return;
            if (!this.domElement) {
                return
            }
            if (this._drawer) {
                this._drawer.setPath(this.domElement, this._getDisplayPixels(this.points))
            }
        },
        setPath: function(T) {
            this._parseCache.length = 0;
            this.points = cF.getGraphPoints(T).slice(0);
            this._calcBounds()
        },
        _calcBounds: function() {
            if (!this.points) {
                return
            }
            var T = this;
            T._bounds = new bN();
            a8.array.each(this.points, function(cL) {
                T._bounds.extend(cL)
            })
        },
        getPath: function() {
            return this.points
        },
        setPositionAt: function(cL, T) {
            if (!T || !this.points[cL]) {
                return
            }
            this._parseCache.length = 0;
            this.points[cL] = new cd(T.lng,T.lat);
            this._calcBounds()
        },
        setStrokeColor: function(T) {
            this._config.strokeColor = T
        },
        getStrokeColor: function() {
            return this._config.strokeColor
        },
        setStrokeWeight: function(T) {
            if (T > 0) {
                this._config.strokeWeight = T
            }
        },
        getStrokeWeight: function() {
            return this._config.strokeWeight
        },
        setStrokeOpacity: function(T) {
            if (!T || T > 1 || T < 0) {
                return
            }
            this._config.strokeOpacity = T
        },
        getStrokeOpacity: function() {
            return this._config.strokeOpacity
        },
        setFillOpacity: function(T) {
            if (T > 1 || T < 0) {
                return
            }
            this._config.fillOpacity = T
        },
        getFillOpacity: function() {
            return this._config.fillOpacity
        },
        setStrokeStyle: function(T) {
            if (T != "solid" && T != "dashed") {
                return
            }
            this._config.strokeStyle = T
        },
        getStrokeStyle: function() {
            return this._config.strokeStyle
        },
        setFillColor: function(T) {
            this._config.fillColor = T || ""
        },
        getFillColor: function() {
            return this._config.fillColor
        },
        getBounds: function() {
            return this._bounds
        },
        remove: function() {
            if (this.map) {
                this.map.removeEventListener("onmousemove", this._graphMouseEvent)
            }
            Y.prototype.remove.call(this);
            this._parseCache.length = 0
        },
        enableEditing: function() {
            this._config.enableEditing = true
        },
        disableEditing: function() {
            this._config.enableEditing = false
        }
    });
    function m(T) {
        Y.call(this);
        this.map = null ;
        this.domElement = null ;
        this._config = {
            width: 0,
            height: 0,
            offset: new aH(0,0),
            opacity: 1,
            background: "transparent",
            lineStroke: 1,
            lineColor: "#000",
            lineStyle: "solid",
            point: null
        };
        this.setConfig(T);
        this.point = this._config.point
    }
    a8.lang.inherits(m, Y, "Division");
    a8.extend(m.prototype, {
        _addDom: function() {
            var T = this._config;
            var cM = this.content;
            var cL = ['<div class="BMap_Division" style="position:absolute;'];
            cL.push("width:" + T.width + "px;display:block;");
            cL.push("overflow:hidden;");
            if (T.borderColor != "none") {
                cL.push("border:" + T.lineStroke + "px " + T.lineStyle + " " + T.lineColor + ";")
            }
            cL.push("opacity:" + T.opacity + "; filter:(opacity=" + T.opacity * 100 + ")");
            cL.push("background:" + T.background + ";");
            cL.push('z-index:60;">');
            cL.push(cM);
            cL.push("</div>");
            this.domElement = at(this.map.getPanes().markerMouseTarget, cL.join(""))
        },
        initialize: function(T) {
            this.map = T;
            this._addDom();
            if (this.domElement) {
                a8.on(this.domElement, "mousedown", function(cL) {
                    aP(cL)
                })
            }
            return this.domElement
        },
        draw: function() {
            var T = this.map.pointToOverlayPixel(this._config.point);
            this._config.offset = new aH(-Math.round(this._config.width / 2) - Math.round(this._config.lineStroke),-Math.round(this._config.height / 2) - Math.round(this._config.lineStroke));
            this.domElement.style.left = T.x + this._config.offset.width + "px";
            this.domElement.style.top = T.y + this._config.offset.height + "px"
        },
        getPosition: function() {
            return this._config.point
        },
        _getPixel: function(T) {
            return this.map.pointToPixel(this.getPosition())
        },
        setPosition: function(T) {
            this._config.point = T;
            this.draw()
        },
        setDimension: function(T, cL) {
            this._config.width = Math.round(T);
            this._config.height = Math.round(cL);
            if (this.domElement) {
                this.domElement.style.width = this._config.width + "px";
                this.domElement.style.height = this._config.height + "px";
                this.draw()
            }
        }
    });
    function L(cL, cM, cN) {
        if (!cL || !cM) {
            return
        }
        this.imageUrl = cL;
        this.size = cM;
        var T = new aH(Math.floor(cM.width / 2),Math.floor(cM.height / 2));
        var cO = {
            anchor: T,
            imageOffset: new aH(0,0)
        };
        cN = cN || {};
        a8.extend(cO, cN);
        this.anchor = cO.anchor;
        this.imageOffset = cO.imageOffset;
        this.infoWindowAnchor = cN.infoWindowAnchor || this.anchor;
        this.printImageUrl = cN.printImageUrl || ""
    }
    var bD = L.prototype;
    bD.setImageUrl = function(T) {
        if (!T) {
            return
        }
        this.imageUrl = T
    }
    ;
    bD.setPrintImageUrl = function(T) {
        if (!T) {
            return
        }
        this.printImageUrl = T
    }
    ;
    bD.setSize = function(T) {
        if (!T) {
            return
        }
        this.size = new aH(T.width,T.height)
    }
    ;
    bD.setAnchor = function(T) {
        if (!T) {
            return
        }
        this.anchor = new aH(T.width,T.height)
    }
    ;
    bD.setImageOffset = function(T) {
        if (!T) {
            return
        }
        this.imageOffset = new aH(T.width,T.height)
    }
    ;
    bD.setInfoWindowAnchor = function(T) {
        if (!T) {
            return
        }
        this.infoWindowAnchor = new aH(T.width,T.height)
    }
    ;
    bD.toString = function() {
        return "Icon"
    }
    ;
    function bP(cM, cL) {
        a8.lang.Class.call(this);
        this.content = cM;
        this.map = null ;
        this._config = {
            width: 0,
            height: 0,
            maxWidth: 600,
            offset: new aH(0,0),
            title: "",
            maxContent: "",
            enableMaximize: false,
            enableAutoPan: true,
            enableCloseOnClick: true,
            margin: [10, 10, 40, 10],
            collisions: [[10, 10], [10, 10], [10, 10], [10, 10]],
            ifMaxScene: false,
            onClosing: function() {
                return true
            }
        };
        a8.extend(this._config, cL || {});
        if (this._config.width != 0) {
            if (this._config.width < 220) {
                this._config.width = 220
            }
            if (this._config.width > 730) {
                this._config.width = 730
            }
        }
        if (this._config.height != 0) {
            if (this._config.height < 60) {
                this._config.height = 60
            }
            if (this._config.height > 650) {
                this._config.height = 650
            }
        }
        if (this._config.maxWidth != 0) {
            if (this._config.maxWidth < 220) {
                this._config.maxWidth = 220
            }
            if (this._config.maxWidth > 730) {
                this._config.maxWidth = 730
            }
        }
        this.isWinMax = false;
        this.IMG_PATH = cc.imgPath;
        this.overlay = null ;
        var T = this;
        cA.load("infowindow", function() {
            T._draw()
        })
    }
    a8.lang.inherits(bP, a8.lang.Class, "InfoWindow");
    a8.extend(bP.prototype, {
        setWidth: function(T) {
            if (!T && T != 0 || isNaN(T) || T < 0) {
                return
            }
            if (T != 0) {
                if (T < 220) {
                    T = 220
                }
                if (T > 730) {
                    T = 730
                }
            }
            this._config.width = T
        },
        setHeight: function(T) {
            if (!T && T != 0 || isNaN(T) || T < 0) {
                return
            }
            if (T != 0) {
                if (T < 60) {
                    T = 60
                }
                if (T > 650) {
                    T = 650
                }
            }
            this._config.height = T
        },
        setMaxWidth: function(T) {
            if (!T && T != 0 || isNaN(T) || T < 0) {
                return
            }
            if (T != 0) {
                if (T < 220) {
                    T = 220
                }
                if (T > 730) {
                    T = 730
                }
            }
            this._config.maxWidth = T
        },
        setTitle: function(T) {
            this._config.title = T
        },
        getTitle: function() {
            return this._config.title
        },
        setContent: function(T) {
            this.content = T
        },
        getContent: function() {
            return this.content
        },
        setMaxContent: function(T) {
            this._config.maxContent = T + ""
        },
        redraw: function() {},
        enableAutoPan: function() {
            this._config.enableAutoPan = true
        },
        disableAutoPan: function() {
            this._config.enableAutoPan = false
        },
        enableCloseOnClick: function() {
            this._config.enableCloseOnClick = true
        },
        disableCloseOnClick: function() {
            this._config.enableCloseOnClick = false
        },
        enableMaximize: function() {
            this._config.enableMaximize = true
        },
        disableMaximize: function() {
            this._config.enableMaximize = false
        },
        show: function() {
            this._visible = true
        },
        hide: function() {
            this._visible = false
        },
        close: function() {
            this.hide()
        },
        maximize: function() {
            this.isWinMax = true
        },
        restore: function() {
            this.isWinMax = false
        },
        isVisible: function() {
            return this.isOpen()
        },
        isOpen: function() {
            return false
        },
        getPosition: function() {
            if (this.overlay && this.overlay.getPosition) {
                return this.overlay.getPosition()
            }
        },
        getOffset: function() {
            return this._config.offset
        }
    });
    bz.prototype.openInfoWindow = function(cN, T) {
        if (!(cN instanceof bP) || !(T instanceof cd)) {
            return
        }
        var cL = this.temp;
        if (!cL.marker) {
            var cM = new L(cc.imgPath + "blank.gif",{
                width: 1,
                height: 1
            });
            cL.marker = new ad(T,{
                icon: cM,
                width: 1,
                height: 1,
                offset: new aH(0,0),
                infoWindowOffset: new aH(0,0),
                clickable: false
            });
            cL.marker._fromMap = 1
        } else {
            cL.marker.setPosition(T)
        }
        this.addOverlay(cL.marker);
        cL.marker.openInfoWindow(cN)
    }
    ;
    bz.prototype.closeInfoWindow = function() {
        var T = this.temp.infoWin || this.temp._infoWin;
        if (T && T.overlay) {
            T.overlay.closeInfoWindow()
        }
    }
    ;
    Y.prototype.openInfoWindow = function(T) {
        if (this.map) {
            this.map.closeInfoWindow();
            T._visible = true;
            this.map.temp._infoWin = T;
            T.overlay = this;
            a8.lang.Class.call(T, T.guid)
        }
    }
    ;
    Y.prototype.closeInfoWindow = function() {
        if (this.map && this.map.temp._infoWin) {
            this.map.temp._infoWin._visible = false;
            a8.lang.decontrol(this.map.temp._infoWin.guid);
            this.map.temp._infoWin = null
        }
    }
    ;
    function ag(cM, cL) {
        Y.call(this);
        this.content = cM;
        this.map = null ;
        this.domElement = null ;
        this._config = {
            width: 0,
            offset: new aH(0,0),
            styles: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px " + cc.fontFamily,
                zIndex: "80",
                MozUserSelect: "none"
            },
            position: null ,
            enableMassClear: true,
            clickable: true
        };
        cL = cL || {};
        this.setConfig(cL);
        if (this._config.width < 0) {
            this._config.width = 0
        }
        if (ch(cL.enableClicking)) {
            this._config.clickable = cL.enableClicking
        }
        this.point = this._config.position;
        var T = this;
        cA.load("marker", function() {
            T._draw()
        })
    }
    a8.lang.inherits(ag, Y, "Label");
    a8.extend(ag.prototype, {
        getPosition: function() {
            if (this._marker) {
                return this._marker.getPosition()
            }
            return this.point
        },
        setPosition: function(T) {
            if (T instanceof cd && !this.getMarker()) {
                this.point = this._config.position = new cd(T.lng,T.lat)
            }
        },
        setContent: function(T) {
            this.content = T
        },
        setOpacity: function(T) {
            if (T >= 0 && T <= 1) {
                this._config.opacity = T
            }
        },
        setOffset: function(T) {
            if (!(T instanceof aH)) {
                return
            }
            this._config.offset = new aH(T.width,T.height)
        },
        getOffset: function() {
            return this._config.offset
        },
        setStyle: function(T) {
            T = T || {};
            this._config.styles = a8.extend(this._config.styles, T)
        },
        setStyles: function(T) {
            return this.setStyle(T)
        },
        setTitle: function(T) {
            this._config.title = T || ""
        },
        getTitle: function() {
            return this._config.title
        },
        setMarker: function(T) {
            this._marker = T;
            if (T) {
                this.point = this._config.position = T.getPosition()
            } else {
                this.point = this._config.position = null
            }
        },
        getMarker: function() {
            return this._marker || null
        }
    });
    window.BMAP_ANIMATION_DROP = 1;
    window.BMAP_ANIMATION_BOUNCE = 2;
    var au = new L(cc.imgPath + "marker_red_sprite.png",new aH(19,25),{
        anchor: new aH(10,25),
        infoWindowAnchor: new aH(10,0)
    });
    var ar = new L(cc.imgPath + "marker_red_sprite.png",new aH(20,11),{
        anchor: new aH(6,11),
        imageOffset: new aH(-19,-13)
    });
    function ad(T, cM) {
        Y.call(this);
        cM = cM || {};
        this.point = T;
        this.map = null ;
        this._animation = null ;
        this._config = {
            offset: new aH(0,0),
            icon: au,
            shadow: ar,
            title: "",
            label: null ,
            baseZIndex: 0,
            clickable: true,
            zIndexFixed: false,
            isTop: false,
            enableMassClear: true,
            enableDragging: false,
            raiseOnDrag: false,
            restrictDraggingArea: false,
            draggingCursor: cc.draggingCursor
        };
        this.setConfig(cM);
        if (cM.icon && !cM.shadow) {
            this._config.shadow = null
        }
        if (ch(cM.enableClicking)) {
            this._config.clickable = cM.enableClicking
        }
        var cL = this;
        cA.load("marker", function() {
            cL._draw()
        })
    }
    ad.TOP_ZINDEX = bG.getZIndex(-90) + 1000000;
    ad.DRAG_ZINDEX = ad.TOP_ZINDEX + 1000000;
    a8.lang.inherits(ad, Y, "Marker");
    a8.extend(ad.prototype, {
        setIcon: function(T) {
            if (T instanceof L) {
                this._config.icon = T
            }
        },
        getIcon: function() {
            return this._config.icon
        },
        setShadow: function(T) {
            if (T instanceof L) {
                this._config.shadow = T
            }
        },
        getShadow: function() {
            return this._config.shadow
        },
        setLabel: function(T) {
            this._config.label = T || null
        },
        getLabel: function() {
            return this._config.label
        },
        enableDragging: function() {
            this._config.enableDragging = true
        },
        disableDragging: function() {
            this._config.enableDragging = false
        },
        getPosition: function() {
            return this.point
        },
        setPosition: function(T) {
            if (T instanceof cd) {
                this.point = new cd(T.lng,T.lat)
            }
        },
        setTop: function(cL, T) {
            this._config.isTop = !!cL;
            if (cL) {
                this._addi = T || 0
            }
        },
        setTitle: function(T) {
            this._config.title = T + ""
        },
        getTitle: function() {
            return this._config.title
        },
        setOffset: function(T) {
            if (T instanceof aH) {
                this._config.offset = T
            }
        },
        getOffset: function() {
            return this._config.offset
        },
        setAnimation: function(T) {
            this._animation = T
        }
    });
    function cn(T, cM) {
        cF.call(this, cM);
        cM = cM || {};
        this._config.fillOpacity = cM.fillOpacity ? cM.fillOpacity : 0.65;
        if (cM.fillColor == "") {
            this._config.fillColor = ""
        } else {
            this._config.fillColor = cM.fillColor ? cM.fillColor : "#fff"
        }
        this.setPath(T);
        var cL = this;
        cA.load("poly", function() {
            cL._draw()
        })
    }
    a8.lang.inherits(cn, cF, "Polygon");
    a8.extend(cn.prototype, {
        setPath: function(cL, T) {
            this._userPoints = cF.getGraphPoints(cL).slice(0);
            var cM = cF.getGraphPoints(cL).slice(0);
            if (cM.length > 1 && !cM[0].equals(cM[cM.length - 1])) {
                cM.push(new cd(cM[0].lng,cM[0].lat))
            }
            cF.prototype.setPath.call(this, cM, T)
        },
        setPositionAt: function(cL, T) {
            if (!this._userPoints[cL]) {
                return
            }
            this._userPoints[cL] = new cd(T.lng,T.lat);
            this.points[cL] = new cd(T.lng,T.lat);
            if (cL == 0 && !this.points[0].equals(this.points[this.points.length - 1])) {
                this.points[this.points.length - 1] = new cd(T.lng,T.lat)
            }
            this._calcBounds()
        },
        getPath: function() {
            var T = this._userPoints;
            if (T.length == 0) {
                T = this.points
            }
            return T
        }
    });
    function f(T, cM) {
        cF.call(this, cM);
        this.setPath(T);
        var cL = this;
        cA.load("poly", function() {
            cL._draw()
        })
    }
    a8.lang.inherits(f, cF, "Polyline");
    function a(cL, T, cM) {
        this.point = cL;
        this.radius = Math.abs(T);
        cn.call(this, [], cM)
    }
    a.parseTolerance = [0.01, 0.0001, 0.00001, 0.000004];
    a8.lang.inherits(a, cn, "Circle");
    a8.extend(a.prototype, {
        initialize: function(T) {
            this.map = T;
            this.points = this._getPerimeterPoints(this.point, this.radius);
            this._calcBounds();
            return null
        },
        getCenter: function() {
            return this.point
        },
        setCenter: function(T, cL) {
            if (!T) {
                return
            }
            this.point = T
        },
        getRadius: function() {
            return this.radius
        },
        setRadius: function(T) {
            this.radius = Math.abs(T)
        },
        _getPerimeterPoints: function(T, cS) {
            if (!T || !cS || !this.map) {
                return []
            }
            var cL = this.map;
            var cP = T.lng
              , cN = T.lat;
            var cZ = [];
            var cU = cS / 6378800
              , cR = (Math.PI / 180) * cN
              , cX = (Math.PI / 180) * cP;
            for (var cQ = 0; cQ < 360; cQ += 9) {
                var cO = (Math.PI / 180) * cQ
                  , cV = Math.asin(Math.sin(cR) * Math.cos(cU) + Math.cos(cR) * Math.sin(cU) * Math.cos(cO))
                  , cT = Math.atan2(Math.sin(cO) * Math.sin(cU) * Math.cos(cR), Math.cos(cU) - Math.sin(cR) * Math.sin(cV))
                  , cW = ((cX - cT + Math.PI) % (2 * Math.PI)) - Math.PI
                  , cY = new cd(cW * (180 / Math.PI),cV * (180 / Math.PI));
                cZ.push(cY)
            }
            var cM = cZ[0];
            cZ.push(new cd(cM.lng,cM.lat));
            return cZ
        }
    });
    function bR(T) {
        this.map = T;
        this.mapTypeLayers = [];
        this.tileLayers = [];
        this.bufferNumber = 300;
        this.realBufferNumber = 0;
        this.mapTiles = {};
        this.bufferTiles = {};
        this.numLoading = 0;
        this._mapTypeLayerContainer = this._createDiv(1);
        this._normalLayerContainer = this._createDiv(2);
        T.platform.appendChild(this._mapTypeLayerContainer);
        T.platform.appendChild(this._normalLayerContainer)
    }
    BMap.register(function(cL) {
        var T = new bR(cL);
        T.initialize()
    });
    a8.extend(bR.prototype, {
        initialize: function() {
            var T = this
              , cL = T.map;
            cL.addEventListener("loadcode", function() {
                T.loadTiles()
            });
            cL.addEventListener("addtilelayer", function(cM) {
                T.addTileLayer(cM)
            });
            cL.addEventListener("removetilelayer", function(cM) {
                T.removeTileLayer(cM)
            });
            cL.addEventListener("setmaptype", function(cM) {
                T.setMapType(cM)
            });
            cL.addEventListener("zoomstartcode", function(cM) {
                T._zoom(cM)
            })
        },
        loadTiles: function() {
            var T = this;
            if (a8.browser.ie) {
                try {
                    document.execCommand("BackgroundImageCache", false, true)
                } catch (cL) {}
            }
            if (!this.loaded) {
                T.initMapTypeTiles()
            }
            T.moveGridTiles();
            if (!this.loaded) {
                this.loaded = true;
                cA.load("tile", function() {
                    T._asyncLoadTiles()
                })
            }
        },
        initMapTypeTiles: function() {
            var cL = this.map.getMapType();
            var cM = cL.getTileLayers();
            for (var T = 0; T < cM.length; T++) {
                var cN = new o();
                a8.extend(cN, cM[T]);
                this.mapTypeLayers.push(cN);
                cN.initialize(this.map, this._mapTypeLayerContainer)
            }
        },
        _createDiv: function(cL) {
            var T = aa("div");
            T.style.position = "absolute";
            T.style.left = T.style.top = "0";
            T.style.zIndex = cL;
            return T
        },
        showTile: function(cP, cO, cS) {
            var cV = this;
            cV.centerPos = cO;
            var cR = this.map.getMapType();
            var cM = cV.getTileName(cP, cS);
            var cZ = cR.getTileSize();
            var cN = (cP[0] * cZ) + cO[0];
            var cY = 0;
            if (cR === BMAP_PERSPECTIVE_MAP && cV.map.getZoom() == 15) {
                cY = 0.5
            }
            var cL = (cY - 1 - cP[1]) * cZ + cO[1];
            var cT = [cN, cL];
            var cU = this.mapTiles[cM];
            if (cU && cU.img) {
                bI(cU.img, cT);
                if (cU.loaded) {
                    this._checkTilesLoaded()
                } else {
                    cU._addLoadCbk(function() {
                        cV._checkTilesLoaded()
                    })
                }
                return
            }
            cU = this.bufferTiles[cM];
            if (cU && cU.img) {
                cS.tilesDiv.insertBefore(cU.img, cS.tilesDiv.lastChild);
                this.mapTiles[cM] = cU;
                bI(cU.img, cT);
                if (cU.loaded) {
                    this._checkTilesLoaded()
                } else {
                    cU._addLoadCbk(function() {
                        cV._checkTilesLoaded()
                    })
                }
                return
            }
            var cX = 256 * Math.pow(2, (cR.getMaxZoom() - cP[2]));
            var cW = new cd(cP[0] * cX,cP[1] * cX);
            var cQ = new bu(cP[0],cP[1]);
            var T = cS.getTilesUrl(cQ, cP[2]);
            cU = new bU(this,T,cT,cP,cS);
            cU._addLoadCbk(function() {
                cV._checkTilesLoaded()
            });
            cU._load();
            this.mapTiles[cM] = cU
        },
        _checkTilesLoaded: function() {
            this.numLoading--;
            var T = this;
            if (this.numLoading == 0) {
                if (this._checkLoadedTimer) {
                    clearTimeout(this._checkLoadedTimer);
                    this._checkLoadedTimer = null
                }
                this._checkLoadedTimer = setTimeout(function() {
                    if (T.numLoading == 0) {
                        T.map.dispatchEvent(new bg("ontilesloaded"))
                    }
                    T._checkLoadedTimer = null
                }, 80)
            }
        },
        getTileName: function(T, cL) {
            if (this.map.getMapType() === BMAP_PERSPECTIVE_MAP) {
                return "TILE-" + cL.guid + "-" + this.map.cityCode + "-" + T[0] + "-" + T[1] + "-" + T[2]
            } else {
                return "TILE-" + cL.guid + "-" + T[0] + "-" + T[1] + "-" + T[2]
            }
        },
        hideTile: function(cL) {
            var T = cL.img;
            if (T) {
                I(T);
                if (x(T)) {
                    T.parentNode.removeChild(T)
                }
            }
            delete this.mapTiles[cL.name];
            if (!cL.loaded) {
                I(T);
                T = null ;
                cL._callCbks();
                cL.img = null ;
                cL.mgr = null
            }
        },
        moveGridTiles: function() {
            var da = this.mapTypeLayers;
            var cW = da.concat(this.tileLayers);
            var c2 = cW.length;
            for (var c4 = 0; c4 < c2; c4++) {
                var cP = cW[c4];
                if (cP.baseLayer) {
                    this.tilesDiv = cP.tilesDiv
                }
                var dg = this.map;
                var dc = dg.getMapType();
                var dh = dc.getProjection();
                var c3 = dg.zoomLevel;
                var c6 = dg.mercatorCenter;
                this.mapCenterPoint = c6;
                var cU = dc.getZoomUnits(c3);
                var cX = dc.getZoomFactor(c3);
                var cV = Math.ceil(c6.lng / cX);
                var cQ = Math.ceil(c6.lat / cX);
                var c1 = dc.getTileSize();
                var cO = [cV, cQ, (c6.lng - cV * cX) / cX * c1, (c6.lat - cQ * cX) / cX * c1];
                var db = cO[0] - Math.ceil((dg.width / 2 - cO[2]) / c1);
                var cN = cO[1] - Math.ceil((dg.height / 2 - cO[3]) / c1);
                var c7 = cO[0] + Math.ceil((dg.width / 2 + cO[2]) / c1);
                var cZ = 0;
                if (dc === BMAP_PERSPECTIVE_MAP && dg.getZoom() == 15) {
                    cZ = 1
                }
                var cY = cO[1] + Math.ceil((dg.height / 2 + cO[3]) / c1) + cZ;
                this.areaCenter = new cd(c6.lng,c6.lat);
                var cM = this.mapTiles;
                var cT = -this.areaCenter.lng / cU;
                var cS = this.areaCenter.lat / cU;
                var de = [Math.round(cT), Math.round(cS)];
                var cL = dg.getZoom();
                for (var df in cM) {
                    var di = cM[df];
                    var dd = di.info;
                    if (dd[2] != cL || (dd[2] == cL && (db > dd[0] || c7 <= dd[0] || cN > dd[1] || cY <= dd[1]))) {
                        this.hideTile(di)
                    }
                }
                var cR = -dg.offsetX + dg.width / 2;
                var c0 = -dg.offsetY + dg.height / 2;
                cP.tilesDiv.style.left = Math.round(cT + cR) - de[0] + "px";
                cP.tilesDiv.style.top = Math.round(cS + c0) - de[1] + "px";
                var T = [];
                for (var c9 = db; c9 < c7; c9++) {
                    for (var c8 = cN; c8 < cY; c8++) {
                        T.push([c9, c8])
                    }
                }
                T.sort((function(dj) {
                    return function(dk, dl) {
                        return ( (0.4 * Math.abs(dk[0] - dj[0]) + 0.6 * Math.abs(dk[1] - dj[1])) - (0.4 * Math.abs(dl[0] - dj[0]) + 0.6 * Math.abs(dl[1] - dj[1])))
                    }
                })([cO[0] - 1, cO[1] - 1]));
                this.numLoading += T.length;
                for (var c9 = 0, c5 = T.length; c9 < c5; c9++) {
                    this.showTile([T[c9][0], T[c9][1], cL], de, cP)
                }
            }
            return
        },
        addTileLayer: function(cN) {
            var cM = this;
            var T = cN.target;
            for (var cL = 0; cL < cM.tileLayers.length; cL++) {
                if (cM.tileLayers[cL] == T) {
                    return
                }
            }
            T.initialize(this.map, this._normalLayerContainer);
            cM.tileLayers.push(T)
        },
        removeTileLayer: function(cO) {
            var cN = this;
            var cL = cO.target;
            for (var cM = 0, T = cN.tileLayers.length; cM < T; cM++) {
                if (cL == cN.tileLayers[cM]) {
                    cN.tileLayers.splice(cM, 1)
                }
            }
            cL.remove()
        },
        setMapType: function() {
            var cM = this;
            var cN = this.mapTypeLayers;
            for (var cL = 0, T = cN.length; cL < T; cL++) {
                cN[cL].remove()
            }
            delete this.tilesDiv;
            this.mapTypeLayers = [];
            this.bufferTiles = this.mapTiles = {};
            this.initMapTypeTiles();
            this.moveGridTiles()
        },
        _zoom: function() {
            var T = this;
            if (T.zoomsDiv) {
                a8.dom.hide(T.zoomsDiv)
            }
            setTimeout(function() {
                T.moveGridTiles();
                T.map.dispatchEvent(new bg("onzoomend"))
            }, 10)
        }
    });
    function bU(cR, T, cO, cL, cN) {
        this.mgr = cR;
        this.position = cO;
        this._cbks = [];
        this.name = cR.getTileName(cL, cN);
        this.info = cL;
        this._transparentPng = cN.isTransparentPng();
        var cS = aa("img");
        cw(cS);
        cS.galleryImg = false;
        var cQ = cS.style;
        var cM = cR.map.getMapType();
        cQ.position = "absolute";
        cQ.border = "none";
        cQ.width = cM.getTileSize() + "px";
        cQ.height = cM.getTileSize() + "px";
        cQ.left = cO[0] + "px";
        cQ.top = cO[1] + "px";
        this.img = cS;
        this.src = T;
        if (D) {
            this.img.style.opacity = 0
        }
        var cP = this;
        this.img.onload = function(cY) {
            cP.loaded = true;
            if (!cP.mgr) {
                return
            }
            var cU = cP.mgr;
            var cT = cU.bufferTiles;
            if (!cT[cP.name]) {
                cU.realBufferNumber++;
                cT[cP.name] = cP
            }
            if (cP.img && !x(cP.img)) {
                if (cN.tilesDiv) {
                    cN.tilesDiv.appendChild(cP.img);
                    if (a8.browser.ie <= 6 && a8.browser.ie > 0 && cP._transparentPng) {
                        cP.img.style.cssText += ';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + cP.src + '",sizingMethod=scale);'
                    }
                }
            }
            var cW = cU.realBufferNumber - cU.bufferNumber;
            for (var cX in cT) {
                if (cW <= 0) {
                    break
                }
                if (!cU.mapTiles[cX]) {
                    cT[cX].mgr = null ;
                    var cV = cT[cX].img;
                    if (cV && cV.parentNode) {
                        cV.parentNode.removeChild(cV);
                        I(cV)
                    }
                    cV = null ;
                    cT[cX].img = null ;
                    delete cT[cX];
                    cU.realBufferNumber--;
                    cW--
                }
            }
            if (D) {
                new g({
                    fps: 20,
                    duration: 200,
                    render: function(cZ) {
                        if (cP.img && cP.img.style) {
                            cP.img.style.opacity = cZ * 1
                        }
                    },
                    finish: function() {
                        if (cP.img && cP.img.style) {
                            delete cP.img.style.opacity
                        }
                    }
                })
            }
            cP._callCbks()
        }
        ;
        this.img.onerror = function() {
            var cU = cP.img
              , cV = cP.img.getAttribute("isError") || 0;
            if (l && cV < 5) {
                cV++;
                cU.setAttribute("isError", cV);
                cU.src = T + "&t=" + new Date().getTime()
            } else {
                cP._callCbks();
                if (!cP.mgr) {
                    return
                }
                var cT = cP.mgr;
                var cW = cT.map.getMapType();
                if (cW.getErrorImageUrl()) {
                    cP.error = true;
                    cP.img.src = cW.getErrorImageUrl();
                    if (cP.img && !x(cP.img)) {
                        cN.tilesDiv.appendChild(cP.img)
                    }
                }
            }
        }
        ;
        cS = null
    }
    bU.prototype._addLoadCbk = function(T) {
        this._cbks.push(T)
    }
    ;
    bU.prototype._load = function() {
        if (a8.browser.ie > 0 && a8.browser.ie <= 6 && this._transparentPng) {
            this.img.src = cc.imgPath + "blank.gif"
        } else {
            this.img.src = this.src
        }
    }
    ;
    bU.prototype._callCbks = function() {
        var cL = this;
        for (var T = 0; T < cL._cbks.length; T++) {
            cL._cbks[T]()
        }
        cL._cbks.length = 0
    }
    ;
    function I(cN) {
        if (!cN) {
            return
        }
        cN.onload = cN.onerror = null ;
        var cL = cN.attributes, cM, T, cO;
        if (cL) {
            T = cL.length;
            for (cM = 0; cM < T; cM += 1) {
                cO = cL[cM].name;
                if (H(cN[cO])) {
                    cN[cO] = null
                }
            }
        }
        cL = cN.children;
        if (cL) {
            T = cL.length;
            for (cM = 0; cM < T; cM += 1) {
                I(cN.children[cM])
            }
        }
    }
    var D = (!a8.browser.ie || a8.browser.ie > 8);
    function o(T) {
        this.opts = T || {};
        this.copyright = this.opts.copyright || null ;
        this.transparentPng = this.opts.transparentPng || false;
        this.baseLayer = this.opts.baseLayer || false;
        this.zIndex = this.opts.zIndex || 0;
        this.guid = o._guid++
    }
    o._guid = 0;
    a8.lang.inherits(o, a8.lang.Class, "TileLayer");
    a8.extend(o.prototype, {
        initialize: function(cM, T) {
            if (this.baseLayer) {
                this.zIndex = -100
            }
            this.map = cM;
            if (!this.tilesDiv) {
                var cN = aa("div");
                var cL = cN.style;
                if (!a8.platform.isAndroid) {
                    T.style.WebkitBackfaceVisibility = "hidden"
                }
                cL.position = "absolute";
                cL.zIndex = this.zIndex;
                cL.left = Math.ceil(-cM.offsetX + cM.width / 2) + "px";
                cL.top = Math.ceil(-cM.offsetY + cM.height / 2) + "px";
                T.appendChild(cN);
                this.tilesDiv = cN
            }
        },
        remove: function() {
            if (this.tilesDiv && this.tilesDiv.parentNode) {
                this.tilesDiv.innerHTML = "";
                this.tilesDiv.parentNode.removeChild(this.tilesDiv)
            }
            delete this.tilesDiv
        },
        isTransparentPng: function() {
            return this.transparentPng
        },
        getTilesUrl: function(cL, cM) {
            var T = "";
            if (this.opts.tileUrlTemplate) {
                T = this.opts.tileUrlTemplate.replace(/\{X\}/, cL.x);
                T = T.replace(/\{Y\}/, cL.y);
                T = T.replace(/\{Z\}/, cM)
            }
            return T
        },
        getCopyright: function() {
            return this.copyright
        },
        getMapType: function() {
            return this.mapType || BMAP_NORMAL_MAP
        }
    });
    function aC(T) {
        o.call(this, T);
        this._opts = {};
        T = T || {};
        this._opts = a8.object.extend(this._opts, T);
        if (this._opts.predictDate) {
            if (this._opts.predictDate.weekday < 1 || this._opts.predictDate.weekday > 7) {
                this._opts.predictDate = 1
            }
            if (this._opts.predictDate.hour < 0 || this._opts.predictDate.hour > 23) {
                this._opts.predictDate.hour = 0
            }
        }
        this._tileUrl = "http://its.map.baidu.com:8002/traffic/"
    }
    aC.prototype = new o();
    aC.prototype.initialize = function(cL, T) {
        o.prototype.initialize.call(this, cL, T);
        this._map = cL
    }
    ;
    aC.prototype.isTransparentPng = function() {
        return true
    }
    ;
    aC.prototype.getTilesUrl = function(cQ, cL) {
        var cR = "";
        if (this._opts.predictDate) {
            cR = "HistoryService?day=" + (this._opts.predictDate.weekday - 1) + "&hour=" + this._opts.predictDate.hour + "&t=" + new Date().getTime() + "&"
        } else {
            cR = "TrafficTileService?time=" + new Date().getTime() + "&"
        }
        var cM = this._map
          , cS = cQ.x
          , cN = cQ.y
          , cP = Math.floor(cS / 200)
          , cO = Math.floor(cN / 200)
          , T = this._tileUrl + cR + "level=" + cL + "&x=" + cS + "&y=" + cN;
        return T.replace(/-(\d+)/gi, "M$1")
    }
    ;
    function cu(T, cL, cM) {
        this._name = T;
        this._layers = cL instanceof o ? [cL] : cL.slice(0);
        this._opts = {
            tips: "",
            labelText: "",
            minZoom: 1,
            maxZoom: 19,
            tileSize: 256,
            textColor: "black",
            errorImageUrl: "",
            projection: new ba()
        };
        if (this._layers.length == 1) {
            this._layers[0].baseLayer = true
        }
        a8.extend(this._opts, cM || {})
    }
    a8.extend(cu.prototype, {
        getName: function() {
            return this._name
        },
        getTips: function() {
            return this._opts.tips
        },
        getLabelText: function() {
            return this._opts.labelText
        },
        getTileLayer: function() {
            return this._layers[0]
        },
        getTileLayers: function() {
            return this._layers
        },
        getTileSize: function() {
            return this._opts.tileSize
        },
        getMinZoom: function() {
            return this._opts.minZoom
        },
        getMaxZoom: function() {
            return this._opts.maxZoom
        },
        getTextColor: function() {
            return this._opts.textColor
        },
        getProjection: function() {
            return this._opts.projection
        },
        getErrorImageUrl: function() {
            return this._opts.errorImageUrl
        },
        getZoomUnits: function(T) {
            return Math.pow(2, (18 - T))
        },
        getZoomFactor: function(T) {
            return this.getZoomUnits(T) * 256
        }
    });
    var b7 = ["http://shangetu0.map.bdimg.com/it/", "http://shangetu1.map.bdimg.com/it/", "http://shangetu2.map.bdimg.com/it/", "http://shangetu3.map.bdimg.com/it/", "http://shangetu4.map.bdimg.com/it/"];
    var i = ["http://online0.map.bdimg.com/tile/", "http://online1.map.bdimg.com/tile/", "http://online2.map.bdimg.com/tile/", "http://online3.map.bdimg.com/tile/", "http://online4.map.bdimg.com/tile/"];
    var N = {
        TILE_BASE_URLS: ["ss0.baidu.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu", "ss0.baidu.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu", "ss0.baidu.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu", "ss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu", "ss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu"],
        TILE_ONLINE_URLS: ["ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlRMgBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlRcgBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlRsgBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv"],
        TIlE_PERSPECT_URLS: ["ss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "ss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "ss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "ss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"]
    };
    if (l) {
        b7 = [w + "it/"];
        i = ["https://" + N.TILE_ONLINE_URLS[0] + "/tile/", "https://" + N.TILE_ONLINE_URLS[1] + "/tile/", "https://" + N.TILE_ONLINE_URLS[2] + "/tile/", "https://" + N.TILE_ONLINE_URLS[3] + "/tile/", "https://" + N.TILE_ONLINE_URLS[4] + "/tile/", ]
    }
    var aT = new o();
    aT.getTilesUrl = function(cM, cP) {
        var cQ = cM.x;
        var cN = cM.y;
        var T = "20150518";
        var cO = "pl";
        if (this.map.highResolutionEnabled()) {
            cO = "ph"
        }
        var cL = i[Math.abs(cQ + cN) % i.length] + "?qt=tile&x=" + (cQ + "").replace(/-/gi, "M") + "&y=" + (cN + "").replace(/-/gi, "M") + "&z=" + cP + "&styles=" + cO + (a8.browser.ie == 6 ? "&color_dep=32&colors=50" : "") + "&udt=" + T;
        return cL.replace(/-(\d+)/gi, "M$1")
    }
    ;
    window.BMAP_NORMAL_MAP = new cu("\u5730\u56fe",aT,{
        tips: "\u663e\u793a\u666e\u901a\u5730\u56fe"
    });
    var bs = new o();
    bs.tileUrls = ["http://d0.map.baidu.com/resource/mappic/", "http://d1.map.baidu.com/resource/mappic/", "http://d2.map.baidu.com/resource/mappic/", "http://d3.map.baidu.com/resource/mappic/"];
    bs.getTilesUrl = function(T, cM) {
        var cO = T.x;
        var cL = T.y;
        var cN = Math.pow(2, (20 - cM)) * 256;
        cL = Math.round((9998336 - cN * (cL)) / cN) - 1;
        url = this.tileUrls[Math.abs(cO + cL) % this.tileUrls.length] + this.map.currentCity + "/" + this.map.cityCode + "/3/lv" + (21 - cM) + "/" + cO + "," + cL + ".jpg";
        return url
    }
    ;
    window.BMAP_PERSPECTIVE_MAP = new cu("\u4e09\u7ef4",bs,{
        tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
        minZoom: 15,
        maxZoom: 20,
        textColor: "white",
        projection: new cE()
    });
    BMAP_PERSPECTIVE_MAP.getZoomUnits = function(T) {
        return Math.pow(2, (20 - T))
    }
    ;
    BMAP_PERSPECTIVE_MAP.getCityName = function(T) {
        if (!T) {
            return ""
        }
        var cL = cc.cityNames;
        for (var cM in cL) {
            if (T.search(cM) > -1) {
                return cL[cM]
            }
        }
        return ""
    }
    ;
    BMAP_PERSPECTIVE_MAP.getCityCode = function(T) {
        return ({
            bj: 2,
            gz: 1,
            sz: 14,
            sh: 4
        })[T]
    }
    ;
    var bQ = new o({
        baseLayer: true
    });
    bQ.getTilesUrl = function(cL, cN) {
        var cO = cL.x;
        var cM = cL.y;
        var T = b7[Math.abs(cO + cM) % b7.length] + "u=x=" + cO + ";y=" + cM + ";z=" + cN + ";v=009;type=sate&fm=46&udt=20141015";
        return T.replace(/-(\d+)/gi, "M$1")
    }
    ;
    window.BMAP_SATELLITE_MAP = new cu("\u536b\u661f",bQ,{
        tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
        minZoom: 1,
        maxZoom: 19,
        textColor: "white"
    });
    var n = new o({
        transparentPng: true
    });
    n.getTilesUrl = function(cM, cO) {
        var cP = cM.x;
        var cN = cM.y;
        var T = "20141015";
        var cL = i[Math.abs(cP + cN) % i.length] + "?qt=tile&x=" + (cP + "").replace(/-/gi, "M") + "&y=" + (cN + "").replace(/-/gi, "M") + "&z=" + cO + "&styles=sl" + (a8.browser.ie == 6 ? "&color_dep=32&colors=50" : "") + "&udt=" + T;
        return cL.replace(/-(\d+)/gi, "M$1")
    }
    ;
    window.BMAP_HYBRID_MAP = new cu("\u6df7\u5408",[bQ, n],{
        tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
        labelText: "\u8def\u7f51",
        minZoom: 1,
        maxZoom: 19,
        textColor: "white"
    });
    window.BMAP_POI_TYPE_NORMAL = 0;
    window.BMAP_POI_TYPE_BUSSTOP = 1;
    window.BMAP_POI_TYPE_BUSLINE = 2;
    window.BMAP_POI_TYPE_SUBSTOP = 3;
    window.BMAP_POI_TYPE_SUBLINE = 4;
    var G = 0;
    var bh = 1;
    var an = {};
    function v(cL, T) {
        a8.lang.Class.call(this);
        this._loc = {};
        this.setLocation(cL);
        this._opts = {
            renderOptions: {
                panel: null ,
                map: null ,
                autoViewport: true
            },
            onSearchComplete: function() {},
            onMarkersSet: function() {},
            onInfoHtmlSet: function() {},
            onResultsHtmlSet: function() {},
            onGetBusListComplete: function() {},
            onGetBusLineComplete: function() {},
            onBusListHtmlSet: function() {},
            onBusLineHtmlSet: function() {},
            onPolylinesSet: function() {},
            reqFrom: ""
        };
        a8.extend(this._opts, T);
        if (typeof T != "undefined" && typeof T.renderOptions != "undefined" && typeof T.renderOptions.autoViewport != "undefined") {
            this._opts.renderOptions.autoViewport = T.renderOptions.autoViewport
        } else {
            this._opts.renderOptions.autoViewport = true
        }
        this._opts.renderOptions.panel = a8.G(this._opts.renderOptions.panel)
    }
    a8.inherits(v, a8.lang.Class);
    a8.extend(v.prototype, {
        getResults: function() {
            if (!this._isMultiKey) {
                return this._results
            } else {
                return this._arrResults
            }
        },
        enableAutoViewport: function() {
            this._opts.renderOptions.autoViewport = true
        },
        disableAutoViewport: function() {
            this._opts.renderOptions.autoViewport = false
        },
        setLocation: function(T) {
            if (!T) {
                return
            }
            this._loc.src = T
        },
        setSearchCompleteCallback: function(T) {
            this._opts.onSearchComplete = T || function() {}
        },
        setMarkersSetCallback: function(T) {
            this._opts.onMarkersSet = T || function() {}
        },
        setPolylinesSetCallback: function(T) {
            this._opts.onPolylinesSet = T || function() {}
        },
        setInfoHtmlSetCallback: function(T) {
            this._opts.onInfoHtmlSet = T || function() {}
        },
        setResultsHtmlSetCallback: function(T) {
            this._opts.onResultsHtmlSet = T || function() {}
        },
        getStatus: function() {
            return this._status
        }
    });
    var bb = {
        REQ_BASE_URL: w,
        request: function(cQ, cN, cL, cS, cM) {
            var cO = (Math.random() * 100000).toFixed(0);
            BMap._rd["_cbk" + cO] = function(cT) {
                cL = cL || {};
                cQ && cQ(cT, cL);
                delete BMap._rd["_cbk" + cO]
            }
            ;
            cS = cS || "";
            var cR;
            if (cL && cL.useEncodeURI) {
                cR = O(cN, encodeURI)
            } else {
                cR = O(cN, encodeURIComponent)
            }
            var cP = this
              , T = cP.REQ_BASE_URL + cS + "?" + cR + "&ie=utf-8&oue=1&fromproduct=jsapi";
            if (!cM) {
                T += "&res=api"
            }
            T += "&callback=BMap._rd._cbk" + cO;
            cx.request(T)
        }
    };
    BMap._rd = {};
    var S = {};
    S.removeHtml = function(T) {
        return T.replace(/<\/?b>/g, "")
    }
    ;
    S.parseGeoExtReg1 = function(T) {
        return T.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    }
    ;
    S.parseGeoExtReg2 = function(cL, T) {
        var cM = new RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + T + "}","ig");
        return cL.replace(cM, "$1")
    }
    ;
    window.BMAP_STATUS_SUCCESS = 0;
    window.BMAP_STATUS_CITY_LIST = 1;
    window.BMAP_STATUS_UNKNOWN_LOCATION = 2;
    window.BMAP_STATUS_UNKNOWN_ROUTE = 3;
    window.BMAP_STATUS_INVALID_KEY = 4;
    window.BMAP_STATUS_INVALID_REQUEST = 5;
    window.BMAP_STATUS_PERMISSION_DENIED = 6;
    window.BMAP_STATUS_SERVICE_UNAVAILABLE = 7;
    window.BMAP_STATUS_TIMEOUT = 8;
    window.BMAP_ROUTE_TYPE_WALKING = 2;
    window.BMAP_ROUTE_TYPE_DRIVING = 3;
    var cv = "cur";
    var c = "cen";
    var cj = "s";
    var Q = "con";
    var al = "bd";
    var cb = "nb";
    var E = "bt";
    var bM = "nav";
    var bv = "walk";
    var bA = "gc";
    var d = "rgc";
    var U = "dec";
    var aQ = "bse";
    var e = "nse";
    var F = "bl";
    var bf = "bsl";
    var aG = "bda";
    var ai = "sa";
    var a1 = "nba";
    var ci = "drag";
    var b4 = "ext";
    var q = 2;
    var a5 = 4;
    var bt = 7;
    var X = 11;
    var aN = 12;
    var bi = 14;
    var a2 = 15;
    var cy = 18;
    var t = 20;
    var R = 21;
    var ap = 26;
    var bE = 28;
    var y = 31;
    var bq = 35;
    var bC = 44;
    var ax = 45;
    var ae = 46;
    var bS = 47;
    var a0 = -1;
    var ab = 0;
    var cq = 1;
    var a6 = 2;
    var A = 3;
    var cI = "http://map.baidu.com/";
    BMap.I = window.Instance = a8.lang.instance;
    var a4 = function(cM, cL) {
        v.call(this, cM, cL);
        cL = cL || {};
        cL.renderOptions = cL.renderOptions || {};
        this.setPageCapacity(cL.pageCapacity);
        if (typeof cL.renderOptions.selectFirstResult != "undefined" && !cL.renderOptions.selectFirstResult) {
            this.disableFirstResultSelection()
        } else {
            this.enableFirstResultSelection()
        }
        this._overlays = [];
        this._arrPois = [];
        this._curIndex = -1;
        this._queryList = [];
        var T = this;
        cA.load("local", function() {
            T._check()
        })
    };
    a8.inherits(a4, v, "LocalSearch");
    a4.DEFAULT_PAGE_CAPACITY = 10;
    a4.MIN_PAGE_CAPACITY = 1;
    a4.MAX_PAGE_CAPACITY = 100;
    a4.DEFAULT_RADIUS = 2000;
    a4.MAX_RADIUS = 100000;
    a8.extend(a4.prototype, {
        search: function(T) {
            this._queryList.push({
                method: "search",
                arguments: [T]
            })
        },
        searchInBounds: function(T, cL) {
            this._queryList.push({
                method: "searchInBounds",
                arguments: [T, cL]
            })
        },
        searchNearby: function(cM, cL, T) {
            this._queryList.push({
                method: "searchNearby",
                arguments: [cM, cL, T]
            })
        },
        clearResults: function() {
            delete this._json;
            delete this._status;
            delete this._results;
            delete this._ud;
            this._curIndex = -1;
            this._setStatus();
            if (this._opts.renderOptions.panel) {
                this._opts.renderOptions.panel.innerHTML = ""
            }
        },
        gotoPage: function() {},
        enableFirstResultSelection: function() {
            this._opts.renderOptions.selectFirstResult = true
        },
        disableFirstResultSelection: function() {
            this._opts.renderOptions.selectFirstResult = false
        },
        setPageCapacity: function(T) {
            if (typeof T == "number" && !isNaN(T)) {
                this._opts.pageCapacity = T < 1 ? a4.DEFAULT_PAGE_CAPACITY : (T > a4.MAX_PAGE_CAPACITY ? a4.DEFAULT_PAGE_CAPACITY : T)
            } else {
                this._opts.pageCapacity = a4.DEFAULT_PAGE_CAPACITY
            }
        },
        getPageCapacity: function() {
            return this._opts.pageCapacity
        },
        toString: function() {
            return "LocalSearch"
        }
    });
    var b5 = function(cL, T) {
        v.call(this, cL, T)
    };
    a8.inherits(b5, v, "BaseRoute");
    a8.extend(b5.prototype, {
        clearResults: function() {}
    });
    window.BMAP_TRANSIT_POLICY_LEAST_TIME = 0;
    window.BMAP_TRANSIT_POLICY_LEAST_TRANSFER = 2;
    window.BMAP_TRANSIT_POLICY_LEAST_WALKING = 3;
    window.BMAP_TRANSIT_POLICY_AVOID_SUBWAYS = 4;
    window.BMAP_LINE_TYPE_BUS = 0;
    window.BMAP_LINE_TYPE_SUBWAY = 1;
    window.BMAP_LINE_TYPE_FERRY = 2;
    function aU(cM, cL) {
        b5.call(this, cM, cL);
        cL = cL || {};
        this.setPolicy(cL.policy);
        this.setPageCapacity(cL.pageCapacity);
        this.QUERY_TYPE = E;
        this.RETURN_TYPE = bi;
        this.ROUTE_TYPE = bh;
        this._overlays = [];
        this._curIndex = -1;
        this._queryList = [];
        var T = this;
        cA.load("route", function() {
            T._asyncSearch()
        })
    }
    aU.MAX_PAGE_CAPACITY = 100;
    aU.LINE_TYPE_MAPPING = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    a8.inherits(aU, b5, "TransitRoute");
    a8.extend(aU.prototype, {
        setPolicy: function(T) {
            if (T >= BMAP_TRANSIT_POLICY_LEAST_TIME && T <= BMAP_TRANSIT_POLICY_AVOID_SUBWAYS) {
                this._opts.policy = T
            } else {
                this._opts.policy = BMAP_TRANSIT_POLICY_LEAST_TIME
            }
        },
        _internalSearch: function(cL, T) {
            this._queryList.push({
                method: "_internalSearch",
                arguments: [cL, T]
            })
        },
        search: function(cL, T) {
            this._queryList.push({
                method: "search",
                arguments: [cL, T]
            })
        },
        setPageCapacity: function(T) {
            if (typeof T == "string") {
                T = parseInt(T);
                if (isNaN(T)) {
                    this._opts.pageCapacity = aU.MAX_PAGE_CAPACITY;
                    return
                }
            }
            if (typeof T != "number") {
                this._opts.pageCapacity = aU.MAX_PAGE_CAPACITY;
                return
            }
            if (T >= 1 && T <= aU.MAX_PAGE_CAPACITY) {
                this._opts.pageCapacity = Math.round(T)
            } else {
                this._opts.pageCapacity = aU.MAX_PAGE_CAPACITY
            }
        },
        toString: function() {
            return "TransitRoute"
        },
        _shortTitle: function(T) {
            return T.replace(/\(.*\)/, "")
        }
    });
    window.BMAP_HIGHLIGHT_STEP = 1;
    window.BMAP_HIGHLIGHT_ROUTE = 2;
    var bl = function(T, cN) {
        b5.call(this, T, cN);
        this._overlays = [];
        this._curIndex = -1;
        this._queryList = [];
        var cM = this;
        var cL = this._opts.renderOptions;
        if (cL.highlightMode != BMAP_HIGHLIGHT_STEP && cL.highlightMode != BMAP_HIGHLIGHT_ROUTE) {
            cL.highlightMode = BMAP_HIGHLIGHT_STEP
        }
        this._enableDragging = this._opts.renderOptions.enableDragging ? true : false;
        cA.load("route", function() {
            cM._asyncSearch()
        })
    };
    bl.ROAD_TYPE = ["", "\u73af\u5c9b", "\u65e0\u5c5e\u6027\u9053\u8def", "\u4e3b\u8def", "\u9ad8\u901f\u8fde\u63a5\u8def", "\u4ea4\u53c9\u70b9\u5185\u8def\u6bb5", "\u8fde\u63a5\u9053\u8def", "\u505c\u8f66\u573a\u5185\u90e8\u9053\u8def", "\u670d\u52a1\u533a\u5185\u90e8\u9053\u8def", "\u6865", "\u6b65\u884c\u8857", "\u8f85\u8def", "\u531d\u9053", "\u5168\u5c01\u95ed\u9053\u8def", "\u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df", "POI\u8fde\u63a5\u8def", "\u96a7\u9053", "\u6b65\u884c\u9053", "\u516c\u4ea4\u4e13\u7528\u9053", "\u63d0\u524d\u53f3\u8f6c\u9053"];
    a8.inherits(bl, b5, "DWRoute");
    a8.extend(bl.prototype, {
        search: function(cL, T) {
            this._queryList.push({
                method: "search",
                arguments: [cL, T]
            })
        }
    });
    window.BMAP_DRIVING_POLICY_LEAST_TIME = 0;
    window.BMAP_DRIVING_POLICY_LEAST_DISTANCE = 1;
    window.BMAP_DRIVING_POLICY_AVOID_HIGHWAYS = 2;
    function p(T, cL) {
        bl.call(this, T, cL);
        cL = cL || {};
        this.setPolicy(cL.policy);
        this.QUERY_TYPE = bM;
        this.RETURN_TYPE = t;
        this.ROUTE_TYPE = BMAP_ROUTE_TYPE_DRIVING
    }
    a8.inherits(p, bl, "DrivingRoute");
    a8.extend(p.prototype, {
        setPolicy: function(T) {
            if (T >= BMAP_DRIVING_POLICY_LEAST_TIME && T <= BMAP_DRIVING_POLICY_AVOID_HIGHWAYS) {
                this._opts.policy = T
            } else {
                this._opts.policy = BMAP_DRIVING_POLICY_LEAST_TIME
            }
        }
    });
    function cD(T, cL) {
        bl.call(this, T, cL);
        this.QUERY_TYPE = bv;
        this.RETURN_TYPE = y;
        this.ROUTE_TYPE = BMAP_ROUTE_TYPE_WALKING;
        this._enableDragging = false
    }
    a8.inherits(cD, bl, "WalkingRoute");
    function aX(cL) {
        this._opts = {};
        a8.extend(this._opts, cL);
        this._queryList = [];
        var T = this;
        cA.load("othersearch", function() {
            T._asyncSearch()
        })
    }
    a8.inherits(aX, a8.lang.Class, "Geocoder");
    a8.extend(aX.prototype, {
        getPoint: function(T, cM, cL) {
            this._queryList.push({
                method: "getPoint",
                arguments: [T, cM, cL]
            })
        },
        getLocation: function(T, cM, cL) {
            this._queryList.push({
                method: "getLocation",
                arguments: [T, cM, cL]
            })
        },
        toString: function() {
            return "Geocoder"
        }
    });
    function ak(cL) {
        this._opts = {};
        a8.extend(this._opts, cL);
        this._queryList = [];
        var T = this;
        cA.load("othersearch", function() {
            T._asyncSearch()
        })
    }
    a8.extend(ak.prototype, {
        getCurrentPosition: function(cL, T) {
            this._queryList.push({
                method: "getCurrentPosition",
                arguments: [cL, T]
            })
        },
        getStatus: function() {
            return this._status
        }
    });
    function b9(cL) {
        this._opts = {
            renderOptions: {
                map: null
            }
        };
        a8.extend(this._opts, cL);
        this._queryList = [];
        var T = this;
        cA.load("othersearch", function() {
            T._asyncSearch()
        })
    }
    a8.inherits(b9, a8.lang.Class, "LocalCity");
    a8.extend(b9.prototype, {
        get: function(T) {
            this._queryList.push({
                method: "get",
                arguments: [T]
            })
        },
        toString: function() {
            return "LocalCity"
        }
    });
    function V() {
        this._queryList = [];
        var T = this;
        cA.load("othersearch", function() {
            T._asyncSearch()
        })
    }
    a8.inherits(V, a8.lang.Class, "Boundary");
    a8.extend(V.prototype, {
        get: function(cL, T) {
            this._queryList.push({
                method: "get",
                arguments: [cL, T]
            })
        },
        toString: function() {
            return "Boundary"
        }
    });
    function bm(cM, cL) {
        v.call(this, cM, cL);
        this.QUERY_TYPE_BUSLIST = F;
        this.RETURN_TYPE_BUSLIST = a2;
        this.QUERY_TYPE_BUSLINE = bf;
        this.RETURN_TYPE_BUSLINE = cy;
        this._queryList = [];
        var T = this;
        cA.load("buslinesearch", function() {
            T._asyncSearch()
        })
    }
    bm._iconOpen = cc.imgPath + "iw_plus.gif";
    bm._iconClose = cc.imgPath + "iw_minus.gif";
    bm._stopUrl = cc.imgPath + "stop_icon.png";
    a8.inherits(bm, v);
    a8.extend(bm.prototype, {
        getBusList: function(T) {
            this._queryList.push({
                method: "getBusList",
                arguments: [T]
            })
        },
        getBusLine: function(T) {
            this._queryList.push({
                method: "getBusLine",
                arguments: [T]
            })
        },
        setGetBusListCompleteCallback: function(T) {
            this._opts.onGetBusListComplete = T || function() {}
        },
        setGetBusLineCompleteCallback: function(T) {
            this._opts.onGetBusLineComplete = T || function() {}
        },
        setBusListHtmlSetCallback: function(T) {
            this._opts.onBusListHtmlSet = T || function() {}
        },
        setBusLineHtmlSetCallback: function(T) {
            this._opts.onBusLineHtmlSet = T || function() {}
        },
        setPolylinesSetCallback: function(T) {
            this._opts.onPolylinesSet = T || function() {}
        }
    });
    function by(cL) {
        v.call(this, cL);
        cL = cL || {};
        this._options = {
            input: null ,
            types: [],
            onSearchComplete: function() {}
        };
        a8.extend(this._options, cL);
        this._loc.src = cL.location || "\u5168\u56fd";
        this._word = "";
        this._show = false;
        this._suggestion = null ;
        this._inputValue = "";
        this._initialize();
        _addStat(5011);
        var T = this;
        cA.load("autocomplete", function() {
            T._asyncSearch()
        })
    }
    a8.inherits(by, v, "Autocomplete");
    a8.extend(by.prototype, {
        _initialize: function() {},
        show: function() {
            this._show = true
        },
        hide: function() {
            this._show = false
        },
        setTypes: function(T) {
            this._options.types = T
        },
        setLocation: function(T) {
            this._loc.src = T
        },
        search: function(T) {
            this._word = T
        },
        setInputValue: function(T) {
            this._inputValue = T
        }
    });
    function aj(T, cL) {
        window.BMap[T] = cL
    }
    aj("Map", bz);
    aj("Hotspot", cm);
    aj("MapType", cu);
    aj("Point", cd);
    aj("Pixel", bu);
    aj("Size", aH);
    aj("Bounds", bN);
    aj("TileLayer", o);
    aj("Projection", bd);
    aj("MercatorProjection", ba);
    aj("PerspectiveProjection", cE);
    aj("Copyright", av);
    aj("Overlay", bG);
    aj("Label", ag);
    aj("Marker", ad);
    aj("Icon", L);
    aj("Polyline", f);
    aj("Polygon", cn);
    aj("InfoWindow", bP);
    aj("Circle", a);
    aj("Control", cp);
    aj("NavigationControl", K);
    aj("OverviewMapControl", cK);
    aj("CopyrightControl", am);
    aj("ScaleControl", bK);
    aj("MapTypeControl", aL);
    aj("TrafficLayer", aC);
    aj("ContextMenu", cz);
    aj("MenuItem", be);
    aj("LocalSearch", a4);
    aj("TransitRoute", aU);
    aj("DrivingRoute", p);
    aj("WalkingRoute", cD);
    aj("Autocomplete", by);
    aj("Geocoder", aX);
    aj("LocalCity", b9);
    aj("Geolocation", ak);
    aj("BusLineSearch", bm);
    aj("Boundary", V);
    window.BMap.apiLoad();
})();
