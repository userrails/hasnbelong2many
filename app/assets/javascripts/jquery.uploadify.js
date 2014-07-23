var swfobject = function() {
    function C() {
        if (b) {
            return
        }
        try {
            var e = a.getElementsByTagName("body")[0].appendChild(U("span"));
            e.parentNode.removeChild(e)
        } catch (t) {
            return
        }
        b = true;
        var n = c.length;
        for (var r = 0; r < n; r++) {
            c[r]()
        }
    }
    function k(e) {
        if (b) {
            e()
        } else {
            c[c.length] = e
        }
    }
    function L(t) {
        if (typeof u.addEventListener != e) {
            u.addEventListener("load", t, false)
        } else {
            if (typeof a.addEventListener != e) {
                a.addEventListener("load", t, false)
            } else {
                if (typeof u.attachEvent != e) {
                    z(u, "onload", t)
                } else {
                    if (typeof u.onload == "function") {
                        var n = u.onload;
                        u.onload = function() {
                            n();
                            t()
                        }
                    } else {
                        u.onload = t
                    }
                }
            }
        }
    }
    function A() {
        if (l) {
            O()
        } else {
            M()
        }
    }
    function O() {
        var n = a.getElementsByTagName("body")[0];
        var r = U(t);
        r.setAttribute("type", i);
        var s = n.appendChild(r);
        if (s) {
            var o = 0;
            (function() {
                if (typeof s.GetVariable != e) {
                    var t = s.GetVariable("$version");
                    if (t) {
                        t = t.split(" ")[1].split(",");
                        T.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)]
                    }
                } else {
                    if (o < 10) {
                        o++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                n.removeChild(r);
                s = null;
                M()
            })()
        } else {
            M()
        }
    }
    function M() {
        var t = h.length;
        if (t > 0) {
            for (var n = 0; n < t; n++) {
                var r = h[n].id;
                var i = h[n].callbackFn;
                var s = {success: false, id: r};
                if (T.pv[0] > 0) {
                    var o = R(r);
                    if (o) {
                        if (W(h[n].swfVersion) && !(T.wk && T.wk < 312)) {
                            V(r, true);
                            if (i) {
                                s.success = true;
                                s.ref = _(r);
                                i(s)
                            }
                        } else {
                            if (h[n].expressInstall && D()) {
                                var u = {};
                                u.data = h[n].expressInstall;
                                u.width = o.getAttribute("width") || "0";
                                u.height = o.getAttribute("height") || "0";
                                if (o.getAttribute("class")) {
                                    u.styleclass = o.getAttribute("class")
                                }
                                if (o.getAttribute("align")) {
                                    u.align = o.getAttribute("align")
                                }
                                var a = {};
                                var f = o.getElementsByTagName("param");
                                var l = f.length;
                                for (var c = 0; c < l; c++) {
                                    if (f[c].getAttribute("name").toLowerCase() != "movie") {
                                        a[f[c].getAttribute("name")] = f[c].getAttribute("value")
                                    }
                                }
                                P(u, a, r, i)
                            } else {
                                H(o);
                                if (i) {
                                    i(s)
                                }
                            }
                        }
                    }
                } else {
                    V(r, true);
                    if (i) {
                        var p = _(r);
                        if (p && typeof p.SetVariable != e) {
                            s.success = true;
                            s.ref = p
                        }
                        i(s)
                    }
                }
            }
        }
    }
    function _(n) {
        var r = null;
        var i = R(n);
        if (i && i.nodeName == "OBJECT") {
            if (typeof i.SetVariable != e) {
                r = i
            } else {
                var s = i.getElementsByTagName(t)[0];
                if (s) {
                    r = s
                }
            }
        }
        return r
    }
    function D() {
        return!w && W("6.0.65") && (T.win || T.mac) && !(T.wk && T.wk < 312)
    }
    function P(t, n, r, i) {
        w = true;
        g = i || null;
        y = {success: false, id: r};
        var o = R(r);
        if (o) {
            if (o.nodeName == "OBJECT") {
                v = B(o);
                m = null
            } else {
                v = o;
                m = r
            }
            t.id = s;
            if (typeof t.width == e || !/%$/.test(t.width) && parseInt(t.width, 10) < 310) {
                t.width = "310"
            }
            if (typeof t.height == e || !/%$/.test(t.height) && parseInt(t.height, 10) < 137) {
                t.height = "137"
            }
            a.title = a.title.slice(0, 47) + " - Flash Player Installation";
            var f = T.ie && T.win ? "ActiveX" : "PlugIn", l = "MMredirectURL=" + u.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + a.title;
            if (typeof n.flashvars != e) {
                n.flashvars += "&" + l
            } else {
                n.flashvars = l
            }
            if (T.ie && T.win && o.readyState != 4) {
                var c = U("div");
                r += "SWFObjectNew";
                c.setAttribute("id", r);
                o.parentNode.insertBefore(c, o);
                o.style.display = "none";
                (function() {
                    if (o.readyState == 4) {
                        o.parentNode.removeChild(o)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            j(t, n, r)
        }
    }
    function H(e) {
        if (T.ie && T.win && e.readyState != 4) {
            var t = U("div");
            e.parentNode.insertBefore(t, e);
            t.parentNode.replaceChild(B(e), t);
            e.style.display = "none";
            (function() {
                if (e.readyState == 4) {
                    e.parentNode.removeChild(e)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            e.parentNode.replaceChild(B(e), e)
        }
    }
    function B(e) {
        var n = U("div");
        if (T.win && T.ie) {
            n.innerHTML = e.innerHTML
        } else {
            var r = e.getElementsByTagName(t)[0];
            if (r) {
                var i = r.childNodes;
                if (i) {
                    var s = i.length;
                    for (var o = 0; o < s; o++) {
                        if (!(i[o].nodeType == 1 && i[o].nodeName == "PARAM") && !(i[o].nodeType == 8)) {
                            n.appendChild(i[o].cloneNode(true))
                        }
                    }
                }
            }
        }
        return n
    }
    function j(n, r, s) {
        var o, u = R(s);
        if (T.wk && T.wk < 312) {
            return o
        }
        if (u) {
            if (typeof n.id == e) {
                n.id = s
            }
            if (T.ie && T.win) {
                var a = "";
                for (var f in n) {
                    if (n[f] != Object.prototype[f]) {
                        if (f.toLowerCase() == "data") {
                            r.movie = n[f]
                        } else {
                            if (f.toLowerCase() == "styleclass") {
                                a += ' class="' + n[f] + '"'
                            } else {
                                if (f.toLowerCase() != "classid") {
                                    a += " " + f + '="' + n[f] + '"'
                                }
                            }
                        }
                    }
                }
                var l = "";
                for (var c in r) {
                    if (r[c] != Object.prototype[c]) {
                        l += '<param name="' + c + '" value="' + r[c] + '" />'
                    }
                }
                u.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + a + ">" + l + "</object>";
                p[p.length] = n.id;
                o = R(n.id)
            } else {
                var h = U(t);
                h.setAttribute("type", i);
                for (var d in n) {
                    if (n[d] != Object.prototype[d]) {
                        if (d.toLowerCase() == "styleclass") {
                            h.setAttribute("class", n[d])
                        } else {
                            if (d.toLowerCase() != "classid") {
                                h.setAttribute(d, n[d])
                            }
                        }
                    }
                }
                for (var v in r) {
                    if (r[v] != Object.prototype[v] && v.toLowerCase() != "movie") {
                        F(h, v, r[v])
                    }
                }
                u.parentNode.replaceChild(h, u);
                o = h
            }
        }
        return o
    }
    function F(e, t, n) {
        var r = U("param");
        r.setAttribute("name", t);
        r.setAttribute("value", n);
        e.appendChild(r)
    }
    function I(e) {
        var t = R(e);
        if (t && t.nodeName == "OBJECT") {
            if (T.ie && T.win) {
                t.style.display = "none";
                (function() {
                    if (t.readyState == 4) {
                        q(e)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                t.parentNode.removeChild(t)
            }
        }
    }
    function q(e) {
        var t = R(e);
        if (t) {
            for (var n in t) {
                if (typeof t[n] == "function") {
                    t[n] = null
                }
            }
            t.parentNode.removeChild(t)
        }
    }
    function R(e) {
        var t = null;
        try {
            t = a.getElementById(e)
        } catch (n) {
        }
        return t
    }
    function U(e) {
        return a.createElement(e)
    }
    function z(e, t, n) {
        e.attachEvent(t, n);
        d[d.length] = [e, t, n]
    }
    function W(e) {
        var t = T.pv, n = e.split(".");
        n[0] = parseInt(n[0], 10);
        n[1] = parseInt(n[1], 10) || 0;
        n[2] = parseInt(n[2], 10) || 0;
        return t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? true : false
    }
    function X(n, r, i, s) {
        if (T.ie && T.mac) {
            return
        }
        var o = a.getElementsByTagName("head")[0];
        if (!o) {
            return
        }
        var u = i && typeof i == "string" ? i : "screen";
        if (s) {
            E = null;
            S = null
        }
        if (!E || S != u) {
            var f = U("style");
            f.setAttribute("type", "text/css");
            f.setAttribute("media", u);
            E = o.appendChild(f);
            if (T.ie && T.win && typeof a.styleSheets != e && a.styleSheets.length > 0) {
                E = a.styleSheets[a.styleSheets.length - 1]
            }
            S = u
        }
        if (T.ie && T.win) {
            if (E && typeof E.addRule == t) {
                E.addRule(n, r)
            }
        } else {
            if (E && typeof a.createTextNode != e) {
                E.appendChild(a.createTextNode(n + " {" + r + "}"))
            }
        }
    }
    function V(e, t) {
        if (!x) {
            return
        }
        var n = t ? "visible" : "hidden";
        if (b && R(e)) {
            R(e).style.visibility = n
        } else {
            X("#" + e, "visibility:" + n)
        }
    }
    function $(t) {
        var n = /[\\\"<>\.;]/;
        var r = n.exec(t) != null;
        return r && typeof encodeURIComponent != e ? encodeURIComponent(t) : t
    }
    var e = "undefined", t = "object", n = "Shockwave Flash", r = "ShockwaveFlash.ShockwaveFlash", i = "application/x-shockwave-flash", s = "SWFObjectExprInst", o = "onreadystatechange", u = window, a = document, f = navigator, l = false, c = [A], h = [], p = [], d = [], v, m, g, y, b = false, w = false, E, S, x = true, T = function() {
        var s = typeof a.getElementById != e && typeof a.getElementsByTagName != e && typeof a.createElement != e, o = f.userAgent.toLowerCase(), c = f.platform.toLowerCase(), h = c ? /win/.test(c) : /win/.test(o), p = c ? /mac/.test(c) : /mac/.test(o), d = /webkit/.test(o) ? parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, v = !+"1", m = [0, 0, 0], g = null;
        if (typeof f.plugins != e && typeof f.plugins[n] == t) {
            g = f.plugins[n].description;
            if (g && !(typeof f.mimeTypes != e && f.mimeTypes[i] && !f.mimeTypes[i].enabledPlugin)) {
                l = true;
                v = false;
                g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                m[0] = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10);
                m[1] = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                m[2] = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
            }
        } else {
            if (typeof u.ActiveXObject != e) {
                try {
                    var y = new ActiveXObject(r);
                    if (y) {
                        g = y.GetVariable("$version");
                        if (g) {
                            v = true;
                            g = g.split(" ")[1].split(",");
                            m = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)]
                        }
                    }
                } catch (b) {
                }
            }
        }
        return{w3: s, pv: m, wk: d, ie: v, win: h, mac: p}
    }(), N = function() {
        if (!T.w3) {
            return
        }
        if (typeof a.readyState != e && a.readyState == "complete" || typeof a.readyState == e && (a.getElementsByTagName("body")[0] || a.body)) {
            C()
        }
        if (!b) {
            if (typeof a.addEventListener != e) {
                a.addEventListener("DOMContentLoaded", C, false)
            }
            if (T.ie && T.win) {
                a.attachEvent(o, function() {
                    if (a.readyState == "complete") {
                        a.detachEvent(o, arguments.callee);
                        C()
                    }
                });
                if (u == top) {
                    (function() {
                        if (b) {
                            return
                        }
                        try {
                            a.documentElement.doScroll("left")
                        } catch (e) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        C()
                    })()
                }
            }
            if (T.wk) {
                (function() {
                    if (b) {
                        return
                    }
                    if (!/loaded|complete/.test(a.readyState)) {
                        setTimeout(arguments.callee, 0);
                        return
                    }
                    C()
                })()
            }
            L(C)
        }
    }();
    var J = function() {
        if (T.ie && T.win) {
            window.attachEvent("onunload", function() {
                var e = d.length;
                for (var t = 0; t < e; t++) {
                    d[t][0].detachEvent(d[t][1], d[t][2])
                }
                var n = p.length;
                for (var r = 0; r < n; r++) {
                    I(p[r])
                }
                for (var i in T) {
                    T[i] = null
                }
                T = null;
                for (var s in swfobject) {
                    swfobject[s] = null
                }
                swfobject = null
            })
        }
    }();
    return{registerObject: function(e, t, n, r) {
            if (T.w3 && e && t) {
                var i = {};
                i.id = e;
                i.swfVersion = t;
                i.expressInstall = n;
                i.callbackFn = r;
                h[h.length] = i;
                V(e, false)
            } else {
                if (r) {
                    r({success: false, id: e})
                }
            }
        }, getObjectById: function(e) {
            if (T.w3) {
                return _(e)
            }
        }, embedSWF: function(n, r, i, s, o, u, a, f, l, c) {
            var h = {success: false, id: r};
            if (T.w3 && !(T.wk && T.wk < 312) && n && r && i && s && o) {
                V(r, false);
                k(function() {
                    i += "";
                    s += "";
                    var p = {};
                    if (l && typeof l === t) {
                        for (var d in l) {
                            p[d] = l[d]
                        }
                    }
                    p.data = n;
                    p.width = i;
                    p.height = s;
                    var v = {};
                    if (f && typeof f === t) {
                        for (var m in f) {
                            v[m] = f[m]
                        }
                    }
                    if (a && typeof a === t) {
                        for (var g in a) {
                            if (typeof v.flashvars != e) {
                                v.flashvars += "&" + g + "=" + a[g]
                            } else {
                                v.flashvars = g + "=" + a[g]
                            }
                        }
                    }
                    if (W(o)) {
                        var y = j(p, v, r);
                        if (p.id == r) {
                            V(r, true)
                        }
                        h.success = true;
                        h.ref = y
                    } else {
                        if (u && D()) {
                            p.data = u;
                            P(p, v, r, c);
                            return
                        } else {
                            V(r, true)
                        }
                    }
                    if (c) {
                        c(h)
                    }
                })
            } else {
                if (c) {
                    c(h)
                }
            }
        }, switchOffAutoHideShow: function() {
            x = false
        }, ua: T, getFlashPlayerVersion: function() {
            return{major: T.pv[0], minor: T.pv[1], release: T.pv[2]}
        }, hasFlashPlayerVersion: W, createSWF: function(e, t, n) {
            if (T.w3) {
                return j(e, t, n)
            } else {
                return undefined
            }
        }, showExpressInstall: function(e, t, n, r) {
            if (T.w3 && D()) {
                P(e, t, n, r)
            }
        }, removeSWF: function(e) {
            if (T.w3) {
                I(e)
            }
        }, createCSS: function(e, t, n, r) {
            if (T.w3) {
                X(e, t, n, r)
            }
        }, addDomLoadEvent: k, addLoadEvent: L, getQueryParamValue: function(e) {
            var t = a.location.search || a.location.hash;
            if (t) {
                if (/\?/.test(t)) {
                    t = t.split("?")[1]
                }
                if (e == null) {
                    return $(t)
                }
                var n = t.split("&");
                for (var r = 0; r < n.length; r++) {
                    if (n[r].substring(0, n[r].indexOf("=")) == e) {
                        return $(n[r].substring(n[r].indexOf("=") + 1))
                    }
                }
            }
            return""
        }, expressInstallCallback: function() {
            if (w) {
                var e = R(s);
                if (e && v) {
                    e.parentNode.replaceChild(v, e);
                    if (m) {
                        V(m, true);
                        if (T.ie && T.win) {
                            v.style.display = "block"
                        }
                    }
                    if (g) {
                        g(y)
                    }
                }
                w = false
            }
        }}
}();
var SWFUpload;
if (SWFUpload == undefined) {
    SWFUpload = function(e) {
        this.initSWFUpload(e)
    }
}
SWFUpload.prototype.initSWFUpload = function(e) {
    try {
        this.customSettings = {};
        this.settings = e;
        this.eventQueue = [];
        this.movieName = "SWFUpload_" + SWFUpload.movieCount++;
        this.movieElement = null;
        SWFUpload.instances[this.movieName] = this;
        this.initSettings();
        this.loadFlash();
        this.displayDebugInfo()
    } catch (t) {
        delete SWFUpload.instances[this.movieName];
        throw t
    }
};
SWFUpload.instances = {};
SWFUpload.movieCount = 0;
SWFUpload.version = "2.2.0 2009-03-25";
SWFUpload.QUEUE_ERROR = {QUEUE_LIMIT_EXCEEDED: -100, FILE_EXCEEDS_SIZE_LIMIT: -110, ZERO_BYTE_FILE: -120, INVALID_FILETYPE: -130};
SWFUpload.FILE_STATUS = {QUEUED: -1, IN_PROGRESS: -2, ERROR: -3, COMPLETE: -4, CANCELLED: -5};
SWFUpload.BUTTON_ACTION = {SELECT_FILE: -100, SELECT_FILES: -110, START_UPLOAD: -120};
SWFUpload.CURSOR = {ARROW: -1, HAND: -2};
SWFUpload.WINDOW_MODE = {WINDOW: "window", TRANSPARENT: "transparent", OPAQUE: "opaque"};
SWFUpload.completeURL = function(e) {
    if (typeof e !== "string" || e.match(/^https?:\/\//i) || e.match(/^\//)) {
        return e
    }
    var t = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
    var n = window.location.pathname.lastIndexOf("/");
    if (n <= 0) {
        path = "/"
    } else {
        path = window.location.pathname.substr(0, n) + "/"
    }
    return path + e
};
SWFUpload.prototype.initSettings = function() {
    this.ensureDefault = function(e, t) {
        this.settings[e] = this.settings[e] == undefined ? t : this.settings[e]
    };
    this.ensureDefault("upload_url", "");
    this.ensureDefault("preserve_relative_urls", false);
    this.ensureDefault("file_post_name", "Filedata");
    this.ensureDefault("post_params", {});
    this.ensureDefault("use_query_string", false);
    this.ensureDefault("requeue_on_error", false);
    this.ensureDefault("http_success", []);
    this.ensureDefault("assume_success_timeout", 0);
    this.ensureDefault("file_types", "*.*");
    this.ensureDefault("file_types_description", "All Files");
    this.ensureDefault("file_size_limit", 0);
    this.ensureDefault("file_upload_limit", 0);
    this.ensureDefault("file_queue_limit", 0);
    this.ensureDefault("flash_url", "swfupload.swf");
    this.ensureDefault("prevent_swf_caching", true);
    this.ensureDefault("button_image_url", "");
    this.ensureDefault("button_width", 1);
    this.ensureDefault("button_height", 1);
    this.ensureDefault("button_text", "");
    this.ensureDefault("button_text_style", "color: #000000; font-size: 16pt;");
    this.ensureDefault("button_text_top_padding", 0);
    this.ensureDefault("button_text_left_padding", 0);
    this.ensureDefault("button_action", SWFUpload.BUTTON_ACTION.SELECT_FILES);
    this.ensureDefault("button_disabled", false);
    this.ensureDefault("button_placeholder_id", "");
    this.ensureDefault("button_placeholder", null);
    this.ensureDefault("button_cursor", SWFUpload.CURSOR.ARROW);
    this.ensureDefault("button_window_mode", SWFUpload.WINDOW_MODE.WINDOW);
    this.ensureDefault("debug", false);
    this.settings.debug_enabled = this.settings.debug;
    this.settings.return_upload_start_handler = this.returnUploadStart;
    this.ensureDefault("swfupload_loaded_handler", null);
    this.ensureDefault("file_dialog_start_handler", null);
    this.ensureDefault("file_queued_handler", null);
    this.ensureDefault("file_queue_error_handler", null);
    this.ensureDefault("file_dialog_complete_handler", null);
    this.ensureDefault("upload_start_handler", null);
    this.ensureDefault("upload_progress_handler", null);
    this.ensureDefault("upload_error_handler", null);
    this.ensureDefault("upload_success_handler", null);
    this.ensureDefault("upload_complete_handler", null);
    this.ensureDefault("debug_handler", this.debugMessage);
    this.ensureDefault("custom_settings", {});
    this.customSettings = this.settings.custom_settings;
    if (!!this.settings.prevent_swf_caching) {
        this.settings.flash_url = this.settings.flash_url + (this.settings.flash_url.indexOf("?") < 0 ? "?" : "&") + "preventswfcaching=" + (new Date).getTime()
    }
    if (!this.settings.preserve_relative_urls) {
        this.settings.upload_url = SWFUpload.completeURL(this.settings.upload_url);
        this.settings.button_image_url = SWFUpload.completeURL(this.settings.button_image_url)
    }
    delete this.ensureDefault
};
SWFUpload.prototype.loadFlash = function() {
    var e, t;
    if (document.getElementById(this.movieName) !== null) {
        throw"ID " + this.movieName + " is already in use. The Flash Object could not be added"
    }
    e = document.getElementById(this.settings.button_placeholder_id) || this.settings.button_placeholder;
    if (e == undefined) {
        throw"Could not find the placeholder element: " + this.settings.button_placeholder_id
    }
    t = document.createElement("div");
    t.innerHTML = this.getFlashHTML();
    e.parentNode.replaceChild(t.firstChild, e);
    if (window[this.movieName] == undefined) {
        window[this.movieName] = this.getMovieElement()
    }
};
SWFUpload.prototype.getFlashHTML = function() {
    return['<object id="', this.movieName, '" type="application/x-shockwave-flash" data="', this.settings.flash_url, '" width="', this.settings.button_width, '" height="', this.settings.button_height, '" class="swfupload">', '<param name="wmode" value="', this.settings.button_window_mode, '" />', '<param name="movie" value="', this.settings.flash_url, '" />', '<param name="quality" value="high" />', '<param name="menu" value="false" />', '<param name="allowScriptAccess" value="always" />', '<param name="flashvars" value="' + this.getFlashVars() + '" />', "</object>"].join("")
};
SWFUpload.prototype.getFlashVars = function() {
    var e = this.buildParamString();
    var t = this.settings.http_success.join(",");
    return["movieName=", encodeURIComponent(this.movieName), "&uploadURL=", encodeURIComponent(this.settings.upload_url), "&useQueryString=", encodeURIComponent(this.settings.use_query_string), "&requeueOnError=", encodeURIComponent(this.settings.requeue_on_error), "&httpSuccess=", encodeURIComponent(t), "&assumeSuccessTimeout=", encodeURIComponent(this.settings.assume_success_timeout), "&params=", encodeURIComponent(e), "&filePostName=", encodeURIComponent(this.settings.file_post_name), "&fileTypes=", encodeURIComponent(this.settings.file_types), "&fileTypesDescription=", encodeURIComponent(this.settings.file_types_description), "&fileSizeLimit=", encodeURIComponent(this.settings.file_size_limit), "&fileUploadLimit=", encodeURIComponent(this.settings.file_upload_limit), "&fileQueueLimit=", encodeURIComponent(this.settings.file_queue_limit), "&debugEnabled=", encodeURIComponent(this.settings.debug_enabled), "&buttonImageURL=", encodeURIComponent(this.settings.button_image_url), "&buttonWidth=", encodeURIComponent(this.settings.button_width), "&buttonHeight=", encodeURIComponent(this.settings.button_height), "&buttonText=", encodeURIComponent(this.settings.button_text), "&buttonTextTopPadding=", encodeURIComponent(this.settings.button_text_top_padding), "&buttonTextLeftPadding=", encodeURIComponent(this.settings.button_text_left_padding), "&buttonTextStyle=", encodeURIComponent(this.settings.button_text_style), "&buttonAction=", encodeURIComponent(this.settings.button_action), "&buttonDisabled=", encodeURIComponent(this.settings.button_disabled), "&buttonCursor=", encodeURIComponent(this.settings.button_cursor)].join("")
};
SWFUpload.prototype.getMovieElement = function() {
    if (this.movieElement == undefined) {
        this.movieElement = document.getElementById(this.movieName)
    }
    if (this.movieElement === null) {
        throw"Could not find Flash element"
    }
    return this.movieElement
};
SWFUpload.prototype.buildParamString = function() {
    var e = this.settings.post_params;
    var t = [];
    if (typeof e === "object") {
        for (var n in e) {
            if (e.hasOwnProperty(n)) {
                t.push(encodeURIComponent(n.toString()) + "=" + encodeURIComponent(e[n].toString()))
            }
        }
    }
    return t.join("&")
};
SWFUpload.prototype.destroy = function() {
    try {
        this.cancelUpload(null, false);
        var e = null;
        e = this.getMovieElement();
        if (e && typeof e.CallFunction === "unknown") {
            for (var t in e) {
                try {
                    if (typeof e[t] === "function") {
                        e[t] = null
                    }
                } catch (n) {
                }
            }
            try {
                e.parentNode.removeChild(e)
            } catch (r) {
            }
        }
        window[this.movieName] = null;
        SWFUpload.instances[this.movieName] = null;
        delete SWFUpload.instances[this.movieName];
        this.movieElement = null;
        this.settings = null;
        this.customSettings = null;
        this.eventQueue = null;
        this.movieName = null;
        return true
    } catch (i) {
        return false
    }
};
SWFUpload.prototype.displayDebugInfo = function() {
    this.debug(["---SWFUpload Instance Info---\n", "Version: ", SWFUpload.version, "\n", "Movie Name: ", this.movieName, "\n", "Settings:\n", "	", "upload_url:               ", this.settings.upload_url, "\n", "	", "flash_url:                ", this.settings.flash_url, "\n", "	", "use_query_string:         ", this.settings.use_query_string.toString(), "\n", "	", "requeue_on_error:         ", this.settings.requeue_on_error.toString(), "\n", "	", "http_success:             ", this.settings.http_success.join(", "), "\n", "	", "assume_success_timeout:   ", this.settings.assume_success_timeout, "\n", "	", "file_post_name:           ", this.settings.file_post_name, "\n", "	", "post_params:              ", this.settings.post_params.toString(), "\n", "	", "file_types:               ", this.settings.file_types, "\n", "	", "file_types_description:   ", this.settings.file_types_description, "\n", "	", "file_size_limit:          ", this.settings.file_size_limit, "\n", "	", "file_upload_limit:        ", this.settings.file_upload_limit, "\n", "	", "file_queue_limit:         ", this.settings.file_queue_limit, "\n", "	", "debug:                    ", this.settings.debug.toString(), "\n", "	", "prevent_swf_caching:      ", this.settings.prevent_swf_caching.toString(), "\n", "	", "button_placeholder_id:    ", this.settings.button_placeholder_id.toString(), "\n", "	", "button_placeholder:       ", this.settings.button_placeholder ? "Set" : "Not Set", "\n", "	", "button_image_url:         ", this.settings.button_image_url.toString(), "\n", "	", "button_width:             ", this.settings.button_width.toString(), "\n", "	", "button_height:            ", this.settings.button_height.toString(), "\n", "	", "button_text:              ", this.settings.button_text.toString(), "\n", "	", "button_text_style:        ", this.settings.button_text_style.toString(), "\n", "	", "button_text_top_padding:  ", this.settings.button_text_top_padding.toString(), "\n", "	", "button_text_left_padding: ", this.settings.button_text_left_padding.toString(), "\n", "	", "button_action:            ", this.settings.button_action.toString(), "\n", "	", "button_disabled:          ", this.settings.button_disabled.toString(), "\n", "	", "custom_settings:          ", this.settings.custom_settings.toString(), "\n", "Event Handlers:\n", "	", "swfupload_loaded_handler assigned:  ", (typeof this.settings.swfupload_loaded_handler === "function").toString(), "\n", "	", "file_dialog_start_handler assigned: ", (typeof this.settings.file_dialog_start_handler === "function").toString(), "\n", "	", "file_queued_handler assigned:       ", (typeof this.settings.file_queued_handler === "function").toString(), "\n", "	", "file_queue_error_handler assigned:  ", (typeof this.settings.file_queue_error_handler === "function").toString(), "\n", "	", "upload_start_handler assigned:      ", (typeof this.settings.upload_start_handler === "function").toString(), "\n", "	", "upload_progress_handler assigned:   ", (typeof this.settings.upload_progress_handler === "function").toString(), "\n", "	", "upload_error_handler assigned:      ", (typeof this.settings.upload_error_handler === "function").toString(), "\n", "	", "upload_success_handler assigned:    ", (typeof this.settings.upload_success_handler === "function").toString(), "\n", "	", "upload_complete_handler assigned:   ", (typeof this.settings.upload_complete_handler === "function").toString(), "\n", "	", "debug_handler assigned:             ", (typeof this.settings.debug_handler === "function").toString(), "\n"].join(""))
};
SWFUpload.prototype.addSetting = function(e, t, n) {
    if (t == undefined) {
        return this.settings[e] = n
    } else {
        return this.settings[e] = t
    }
};
SWFUpload.prototype.getSetting = function(e) {
    if (this.settings[e] != undefined) {
        return this.settings[e]
    }
    return""
};
SWFUpload.prototype.callFlash = function(functionName, argumentArray) {
    argumentArray = argumentArray || [];
    var movieElement = this.getMovieElement();
    var returnValue, returnString;
    try {
        returnString = movieElement.CallFunction('<invoke name="' + functionName + '" returntype="javascript">' + __flash__argumentsToXML(argumentArray, 0) + "</invoke>");
        returnValue = eval(returnString)
    } catch (ex) {
        throw"Call to " + functionName + " failed"
    }
    if (returnValue != undefined && typeof returnValue.post === "object") {
        returnValue = this.unescapeFilePostParams(returnValue)
    }
    return returnValue
};
SWFUpload.prototype.selectFile = function() {
    this.callFlash("SelectFile")
};
SWFUpload.prototype.selectFiles = function() {
    this.callFlash("SelectFiles")
};
SWFUpload.prototype.startUpload = function(e) {
    this.callFlash("StartUpload", [e])
};
SWFUpload.prototype.cancelUpload = function(e, t) {
    if (t !== false) {
        t = true
    }
    this.callFlash("CancelUpload", [e, t])
};
SWFUpload.prototype.stopUpload = function() {
    this.callFlash("StopUpload")
};
SWFUpload.prototype.getStats = function() {
    return this.callFlash("GetStats")
};
SWFUpload.prototype.setStats = function(e) {
    this.callFlash("SetStats", [e])
};
SWFUpload.prototype.getFile = function(e) {
    if (typeof e === "number") {
        return this.callFlash("GetFileByIndex", [e])
    } else {
        return this.callFlash("GetFile", [e])
    }
};
SWFUpload.prototype.addFileParam = function(e, t, n) {
    return this.callFlash("AddFileParam", [e, t, n])
};
SWFUpload.prototype.removeFileParam = function(e, t) {
    this.callFlash("RemoveFileParam", [e, t])
};
SWFUpload.prototype.setUploadURL = function(e) {
    this.settings.upload_url = e.toString();
    this.callFlash("SetUploadURL", [e])
};
SWFUpload.prototype.setPostParams = function(e) {
    this.settings.post_params = e;
    this.callFlash("SetPostParams", [e])
};
SWFUpload.prototype.addPostParam = function(e, t) {
    this.settings.post_params[e] = t;
    this.callFlash("SetPostParams", [this.settings.post_params])
};
SWFUpload.prototype.removePostParam = function(e) {
    delete this.settings.post_params[e];
    this.callFlash("SetPostParams", [this.settings.post_params])
};
SWFUpload.prototype.setFileTypes = function(e, t) {
    this.settings.file_types = e;
    this.settings.file_types_description = t;
    this.callFlash("SetFileTypes", [e, t])
};
SWFUpload.prototype.setFileSizeLimit = function(e) {
    this.settings.file_size_limit = e;
    this.callFlash("SetFileSizeLimit", [e])
};
SWFUpload.prototype.setFileUploadLimit = function(e) {
    this.settings.file_upload_limit = e;
    this.callFlash("SetFileUploadLimit", [e])
};
SWFUpload.prototype.setFileQueueLimit = function(e) {
    this.settings.file_queue_limit = e;
    this.callFlash("SetFileQueueLimit", [e])
};
SWFUpload.prototype.setFilePostName = function(e) {
    this.settings.file_post_name = e;
    this.callFlash("SetFilePostName", [e])
};
SWFUpload.prototype.setUseQueryString = function(e) {
    this.settings.use_query_string = e;
    this.callFlash("SetUseQueryString", [e])
};
SWFUpload.prototype.setRequeueOnError = function(e) {
    this.settings.requeue_on_error = e;
    this.callFlash("SetRequeueOnError", [e])
};
SWFUpload.prototype.setHTTPSuccess = function(e) {
    if (typeof e === "string") {
        e = e.replace(" ", "").split(",")
    }
    this.settings.http_success = e;
    this.callFlash("SetHTTPSuccess", [e])
};
SWFUpload.prototype.setAssumeSuccessTimeout = function(e) {
    this.settings.assume_success_timeout = e;
    this.callFlash("SetAssumeSuccessTimeout", [e])
};
SWFUpload.prototype.setDebugEnabled = function(e) {
    this.settings.debug_enabled = e;
    this.callFlash("SetDebugEnabled", [e])
};
SWFUpload.prototype.setButtonImageURL = function(e) {
    if (e == undefined) {
        e = ""
    }
    this.settings.button_image_url = e;
    this.callFlash("SetButtonImageURL", [e])
};
SWFUpload.prototype.setButtonDimensions = function(e, t) {
    this.settings.button_width = e;
    this.settings.button_height = t;
    var n = this.getMovieElement();
    if (n != undefined) {
        n.style.width = e + "px";
        n.style.height = t + "px"
    }
    this.callFlash("SetButtonDimensions", [e, t])
};
SWFUpload.prototype.setButtonText = function(e) {
    this.settings.button_text = e;
    this.callFlash("SetButtonText", [e])
};
SWFUpload.prototype.setButtonTextPadding = function(e, t) {
    this.settings.button_text_top_padding = t;
    this.settings.button_text_left_padding = e;
    this.callFlash("SetButtonTextPadding", [e, t])
};
SWFUpload.prototype.setButtonTextStyle = function(e) {
    this.settings.button_text_style = e;
    this.callFlash("SetButtonTextStyle", [e])
};
SWFUpload.prototype.setButtonDisabled = function(e) {
    this.settings.button_disabled = e;
    this.callFlash("SetButtonDisabled", [e])
};
SWFUpload.prototype.setButtonAction = function(e) {
    this.settings.button_action = e;
    this.callFlash("SetButtonAction", [e])
};
SWFUpload.prototype.setButtonCursor = function(e) {
    this.settings.button_cursor = e;
    this.callFlash("SetButtonCursor", [e])
};
SWFUpload.prototype.queueEvent = function(e, t) {
    if (t == undefined) {
        t = []
    } else {
        if (!(t instanceof Array)) {
            t = [t]
        }
    }
    var n = this;
    if (typeof this.settings[e] === "function") {
        this.eventQueue.push(function() {
            this.settings[e].apply(this, t)
        });
        setTimeout(function() {
            n.executeNextEvent()
        }, 0)
    } else {
        if (this.settings[e] !== null) {
            throw"Event handler " + e + " is unknown or is not a function"
        }
    }
};
SWFUpload.prototype.executeNextEvent = function() {
    var e = this.eventQueue ? this.eventQueue.shift() : null;
    if (typeof e === "function") {
        e.apply(this)
    }
};
SWFUpload.prototype.unescapeFilePostParams = function(e) {
    var t = /[$]([0-9a-f]{4})/i;
    var n = {};
    var r;
    if (e != undefined) {
        for (var i in e.post) {
            if (e.post.hasOwnProperty(i)) {
                r = i;
                var s;
                while ((s = t.exec(r)) !== null) {
                    r = r.replace(s[0], String.fromCharCode(parseInt("0x" + s[1], 16)))
                }
                n[r] = e.post[i]
            }
        }
        e.post = n
    }
    return e
};
SWFUpload.prototype.testExternalInterface = function() {
    try {
        return this.callFlash("TestExternalInterface")
    } catch (e) {
        return false
    }
};
SWFUpload.prototype.flashReady = function() {
    var e = this.getMovieElement();
    if (!e) {
        this.debug("Flash called back ready but the flash movie can't be found.");
        return
    }
    this.cleanUp(e);
    this.queueEvent("swfupload_loaded_handler")
};
SWFUpload.prototype.cleanUp = function(e) {
    try {
        if (this.movieElement && typeof e.CallFunction === "unknown") {
            this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
            for (var t in e) {
                try {
                    if (typeof e[t] === "function") {
                        e[t] = null
                    }
                } catch (n) {
                }
            }
        }
    } catch (r) {
    }
    window.__flash__removeCallback = function(e, t) {
        try {
            if (e) {
                e[t] = null
            }
        } catch (n) {
        }
    }
};
SWFUpload.prototype.fileDialogStart = function() {
    this.queueEvent("file_dialog_start_handler")
};
SWFUpload.prototype.fileQueued = function(e) {
    e = this.unescapeFilePostParams(e);
    this.queueEvent("file_queued_handler", e)
};
SWFUpload.prototype.fileQueueError = function(e, t, n) {
    e = this.unescapeFilePostParams(e);
    this.queueEvent("file_queue_error_handler", [e, t, n])
};
SWFUpload.prototype.fileDialogComplete = function(e, t, n) {
    this.queueEvent("file_dialog_complete_handler", [e, t, n])
};
SWFUpload.prototype.uploadStart = function(e) {
    e = this.unescapeFilePostParams(e);
    this.queueEvent("return_upload_start_handler", e)
};
SWFUpload.prototype.returnUploadStart = function(e) {
    var t;
    if (typeof this.settings.upload_start_handler === "function") {
        e = this.unescapeFilePostParams(e);
        t = this.settings.upload_start_handler.call(this, e)
    } else {
        if (this.settings.upload_start_handler != undefined) {
            throw"upload_start_handler must be a function"
        }
    }
    if (t === undefined) {
        t = true
    }
    t = !!t;
    this.callFlash("ReturnUploadStart", [t])
};
SWFUpload.prototype.uploadProgress = function(e, t, n) {
    e = this.unescapeFilePostParams(e);
    this.queueEvent("upload_progress_handler", [e, t, n])
};
SWFUpload.prototype.uploadError = function(e, t, n) {
    e = this.unescapeFilePostParams(e);
    this.queueEvent("upload_error_handler", [e, t, n])
};
SWFUpload.prototype.uploadSuccess = function(e, t, n) {
    e = this.unescapeFilePostParams(e);
    this.queueEvent("upload_success_handler", [e, t, n])
};
SWFUpload.prototype.uploadComplete = function(e) {
    e = this.unescapeFilePostParams(e);
    this.queueEvent("upload_complete_handler", e)
};
SWFUpload.prototype.debug = function(e) {
    this.queueEvent("debug_handler", e)
};
SWFUpload.prototype.debugMessage = function(e) {
    if (this.settings.debug) {
        var t, n = [];
        if (typeof e === "object" && typeof e.name === "string" && typeof e.message === "string") {
            for (var r in e) {
                if (e.hasOwnProperty(r)) {
                    n.push(r + ": " + e[r])
                }
            }
            t = n.join("\n") || "";
            n = t.split("\n");
            t = "EXCEPTION: " + n.join("\nEXCEPTION: ");
            SWFUpload.Console.writeLine(t)
        } else {
            SWFUpload.Console.writeLine(e)
        }
    }
};
SWFUpload.Console = {};
SWFUpload.Console.writeLine = function(e) {
    var t, n;
    try {
        t = document.getElementById("SWFUpload_Console");
        if (!t) {
            n = document.createElement("form");
            document.getElementsByTagName("body")[0].appendChild(n);
            t = document.createElement("textarea");
            t.id = "SWFUpload_Console";
            t.style.fontFamily = "monospace";
            t.setAttribute("wrap", "off");
            t.wrap = "off";
            t.style.overflow = "auto";
            t.style.width = "700px";
            t.style.height = "350px";
            t.style.margin = "5px";
            n.appendChild(t)
        }
        t.value += e + "\n";
        t.scrollTop = t.scrollHeight - t.clientHeight
    } catch (r) {
        alert("Exception: " + r.name + " Message: " + r.message)
    }
};
(function(e) {
    var t = {init: function(t, r) {
            return this.each(function() {
                var i = e(this);
                var s = i.clone();
                var o = e.extend({id: i.attr("id"), swf: "uploadify.swf", uploader: "uploadify.php", auto: true, buttonClass: "", buttonCursor: "hand", buttonImage: null, buttonText: "SELECT FILES", checkExisting: false, debug: false, fileObjName: "Filedata", fileSizeLimit: 0, fileTypeDesc: "All Files", fileTypeExts: "*.*", height: 30, itemTemplate: false, method: "post", multi: true, formData: {}, preventCaching: true, progressData: "percentage", queueID: false, queueSizeLimit: 999, removeCompleted: true, removeTimeout: 3, requeueErrors: false, successTimeout: 30, uploadLimit: 0, width: 120, overrideEvents: []}, t);
                var u = {assume_success_timeout: o.successTimeout, button_placeholder_id: o.id, button_width: o.width, button_height: o.height, button_text: null, button_text_style: null, button_text_top_padding: 0, button_text_left_padding: 0, button_action: o.multi ? SWFUpload.BUTTON_ACTION.SELECT_FILES : SWFUpload.BUTTON_ACTION.SELECT_FILE, button_disabled: false, button_cursor: o.buttonCursor == "arrow" ? SWFUpload.CURSOR.ARROW : SWFUpload.CURSOR.HAND, button_window_mode: SWFUpload.WINDOW_MODE.TRANSPARENT, debug: o.debug, requeue_on_error: o.requeueErrors, file_post_name: o.fileObjName, file_size_limit: o.fileSizeLimit, file_types: o.fileTypeExts, file_types_description: o.fileTypeDesc, file_queue_limit: o.queueSizeLimit, file_upload_limit: o.uploadLimit, flash_url: o.swf, prevent_swf_caching: o.preventCaching, post_params: o.formData, upload_url: o.uploader, use_query_string: o.method == "get", file_dialog_complete_handler: n.onDialogClose, file_dialog_start_handler: n.onDialogOpen, file_queued_handler: n.onSelect, file_queue_error_handler: n.onSelectError, swfupload_loaded_handler: o.onSWFReady, upload_complete_handler: n.onUploadComplete, upload_error_handler: n.onUploadError, upload_progress_handler: n.onUploadProgress, upload_start_handler: n.onUploadStart, upload_success_handler: n.onUploadSuccess};
                if (r) {
                    u = e.extend(u, r)
                }
                u = e.extend(u, o);
                var a = swfobject.getFlashPlayerVersion();
                var f = a.major >= 9;
                if (f) {
                    window["uploadify_" + o.id] = new SWFUpload(u);
                    var l = window["uploadify_" + o.id];
                    i.data("uploadify", l);
                    var c = e("<div />", {id: o.id, "class": "uploadify", css: {height: o.height + "px", width: o.width + "px"}});
                    e("#" + l.movieName).wrap(c);
                    c = e("#" + o.id);
                    c.data("uploadify", l);
                    var h = e("<div />", {id: o.id + "-button", "class": "uploadify-button " + o.buttonClass});
                    if (o.buttonImage) {
                        h.css({"background-image": "url('" + o.buttonImage + "')", "text-indent": "-9999px"})
                    }
                    h.html('<span class="uploadify-button-text">' + o.buttonText + "</span>").css({height: o.height + "px", "line-height": o.height + "px", width: o.width + "px"});
                    c.append(h);
                    e("#" + l.movieName).css({position: "absolute", "z-index": 1});
                    if (!o.queueID) {
                        var p = e("<div />", {id: o.id + "-queue", "class": "uploadify-queue"});
                        c.after(p);
                        l.settings.queueID = o.id + "-queue";
                        l.settings.defaultQueue = true
                    }
                    l.queueData = {files: {}, filesSelected: 0, filesQueued: 0, filesReplaced: 0, filesCancelled: 0, filesErrored: 0, uploadsSuccessful: 0, uploadsErrored: 0, averageSpeed: 0, queueLength: 0, queueSize: 0, uploadSize: 0, queueBytesUploaded: 0, uploadQueue: [], errorMsg: "Some files were not added to the queue:"};
                    l.original = s;
                    l.wrapper = c;
                    l.button = h;
                    l.queue = p;
                    if (o.onInit)
                        o.onInit.call(i, l)
                } else {
                    if (o.onFallback)
                        o.onFallback.call(i)
                }
            })
        }, cancel: function(t, n) {
            var r = arguments;
            this.each(function() {
                var t = e(this), n = t.data("uploadify"), i = n.settings, s = -1;
                if (r[0]) {
                    if (r[0] == "*") {
                        var o = n.queueData.queueLength;
                        e("#" + i.queueID).find(".uploadify-queue-item").each(function() {
                            s++;
                            if (r[1] === true) {
                                n.cancelUpload(e(this).attr("id"), false)
                            } else {
                                n.cancelUpload(e(this).attr("id"))
                            }
                            e(this).find(".data").removeClass("data").html(" - Cancelled");
                            e(this).find(".uploadify-progress-bar").remove();
                            e(this).delay(1e3 + 100 * s).fadeOut(500, function() {
                                e(this).remove()
                            })
                        });
                        n.queueData.queueSize = 0;
                        n.queueData.queueLength = 0;
                        if (i.onClearQueue)
                            i.onClearQueue.call(t, o)
                    } else {
                        for (var u = 0; u < r.length; u++) {
                            n.cancelUpload(r[u]);
                            e("#" + r[u]).find(".data").removeClass("data").html(" - Cancelled");
                            e("#" + r[u]).find(".uploadify-progress-bar").remove();
                            e("#" + r[u]).delay(1e3 + 100 * u).fadeOut(500, function() {
                                e(this).remove()
                            })
                        }
                    }
                } else {
                    var a = e("#" + i.queueID).find(".uploadify-queue-item").get(0);
                    $item = e(a);
                    n.cancelUpload($item.attr("id"));
                    $item.find(".data").removeClass("data").html(" - Cancelled");
                    $item.find(".uploadify-progress-bar").remove();
                    $item.delay(1e3).fadeOut(500, function() {
                        e(this).remove()
                    })
                }
            })
        }, destroy: function() {
            this.each(function() {
                var t = e(this), n = t.data("uploadify"), r = n.settings;
                n.destroy();
                if (r.defaultQueue) {
                    e("#" + r.queueID).remove()
                }
                e("#" + r.id).replaceWith(n.original);
                if (r.onDestroy)
                    r.onDestroy.call(this);
                delete n
            })
        }, disable: function(t) {
            this.each(function() {
                var n = e(this), r = n.data("uploadify"), i = r.settings;
                if (t) {
                    r.button.addClass("disabled");
                    if (i.onDisable)
                        i.onDisable.call(this)
                } else {
                    r.button.removeClass("disabled");
                    if (i.onEnable)
                        i.onEnable.call(this)
                }
                r.setButtonDisabled(t)
            })
        }, settings: function(t, n, r) {
            var i = arguments;
            var s = n;
            this.each(function() {
                var o = e(this), u = o.data("uploadify"), a = u.settings;
                if (typeof i[0] == "object") {
                    for (var f in n) {
                        setData(f, n[f])
                    }
                }
                if (i.length === 1) {
                    s = a[t]
                } else {
                    switch (t) {
                        case"uploader":
                            u.setUploadURL(n);
                            break;
                        case"formData":
                            if (!r) {
                                n = e.extend(a.formData, n)
                            }
                            u.setPostParams(a.formData);
                            break;
                        case"method":
                            if (n == "get") {
                                u.setUseQueryString(true)
                            } else {
                                u.setUseQueryString(false)
                            }
                            break;
                        case"fileObjName":
                            u.setFilePostName(n);
                            break;
                        case"fileTypeExts":
                            u.setFileTypes(n, a.fileTypeDesc);
                            break;
                        case"fileTypeDesc":
                            u.setFileTypes(a.fileTypeExts, n);
                            break;
                        case"fileSizeLimit":
                            u.setFileSizeLimit(n);
                            break;
                        case"uploadLimit":
                            u.setFileUploadLimit(n);
                            break;
                        case"queueSizeLimit":
                            u.setFileQueueLimit(n);
                            break;
                        case"buttonImage":
                            u.button.css("background-image", settingValue);
                            break;
                        case"buttonCursor":
                            if (n == "arrow") {
                                u.setButtonCursor(SWFUpload.CURSOR.ARROW)
                            } else {
                                u.setButtonCursor(SWFUpload.CURSOR.HAND)
                            }
                            break;
                        case"buttonText":
                            e("#" + a.id + "-button").find(".uploadify-button-text").html(n);
                            break;
                        case"width":
                            u.setButtonDimensions(n, a.height);
                            break;
                        case"height":
                            u.setButtonDimensions(a.width, n);
                            break;
                        case"multi":
                            if (n) {
                                u.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILES)
                            } else {
                                u.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILE)
                            }
                            break
                    }
                    a[t] = n
                }
            });
            if (i.length === 1) {
                return s
            }
        }, stop: function() {
            this.each(function() {
                var t = e(this), n = t.data("uploadify");
                n.queueData.averageSpeed = 0;
                n.queueData.uploadSize = 0;
                n.queueData.bytesUploaded = 0;
                n.queueData.uploadQueue = [];
                n.stopUpload()
            })
        }, upload: function() {
            var t = arguments;
            this.each(function() {
                var n = e(this), r = n.data("uploadify");
                r.queueData.averageSpeed = 0;
                r.queueData.uploadSize = 0;
                r.queueData.bytesUploaded = 0;
                r.queueData.uploadQueue = [];
                if (t[0]) {
                    if (t[0] == "*") {
                        r.queueData.uploadSize = r.queueData.queueSize;
                        r.queueData.uploadQueue.push("*");
                        r.startUpload()
                    } else {
                        for (var i = 0; i < t.length; i++) {
                            r.queueData.uploadSize += r.queueData.files[t[i]].size;
                            r.queueData.uploadQueue.push(t[i])
                        }
                        r.startUpload(r.queueData.uploadQueue.shift())
                    }
                } else {
                    r.startUpload()
                }
            })
        }};
    var n = {onDialogOpen: function() {
            var e = this.settings;
            this.queueData.errorMsg = "Some files were not added to the queue:";
            this.queueData.filesReplaced = 0;
            this.queueData.filesCancelled = 0;
            if (e.onDialogOpen)
                e.onDialogOpen.call(this)
        }, onDialogClose: function(t, n, r) {
            var i = this.settings;
            this.queueData.filesErrored = t - n;
            this.queueData.filesSelected = t;
            this.queueData.filesQueued = n - this.queueData.filesCancelled;
            this.queueData.queueLength = r;
            if (e.inArray("onDialogClose", i.overrideEvents) < 0) {
                if (this.queueData.filesErrored > 0) {
                    alert(this.queueData.errorMsg)
                }
            }
            if (i.onDialogClose)
                i.onDialogClose.call(this, this.queueData);
            if (i.auto)
                e("#" + i.id).uploadify("upload", "*")
        }, onSelect: function(t) {
            var n = this.settings;
            var r = {};
            for (var i in this.queueData.files) {
                r = this.queueData.files[i];
                if (r.uploaded != true && r.name == t.name) {
                    var s = confirm('The file named "' + t.name + '" is already in the queue.\nDo you want to replace the existing item in the queue?');
                    if (!s) {
                        this.cancelUpload(t.id);
                        this.queueData.filesCancelled++;
                        return false
                    } else {
                        e("#" + r.id).remove();
                        this.cancelUpload(r.id);
                        this.queueData.filesReplaced++
                    }
                }
            }
            var o = Math.round(t.size / 1024);
            var u = "KB";
            if (o > 1e3) {
                o = Math.round(o / 1e3);
                u = "MB"
            }
            var a = o.toString().split(".");
            o = a[0];
            if (a.length > 1) {
                o += "." + a[1].substr(0, 2)
            }
            o += u;
            var f = t.name;
            if (f.length > 25) {
                f = f.substr(0, 25) + "..."
            }
            itemData = {fileID: t.id, instanceID: n.id, fileName: f, fileSize: o};
            if (n.itemTemplate == false) {
                n.itemTemplate = '<div id="${fileID}" class="uploadify-queue-item">					<div class="cancel">						<a href="javascript:$(\'#${instanceID}\').uploadify(\'cancel\', \'${fileID}\')">X</a>					</div>					<span class="fileName">${fileName} (${fileSize})</span><span class="data"></span>					<div class="uploadify-progress">						<div class="uploadify-progress-bar"><!--Progress Bar--></div>					</div>				</div>'
            }
            if (e.inArray("onSelect", n.overrideEvents) < 0) {
                itemHTML = n.itemTemplate;
                for (var l in itemData) {
                    itemHTML = itemHTML.replace(new RegExp("\\$\\{" + l + "\\}", "g"), itemData[l])
                }
                e("#" + n.queueID).append(itemHTML)
            }
            this.queueData.queueSize += t.size;
            this.queueData.files[t.id] = t;
            if (n.onSelect)
                n.onSelect.apply(this, arguments)
        }, onSelectError: function(t, n, r) {
            var i = this.settings;
            if (e.inArray("onSelectError", i.overrideEvents) < 0) {
                switch (n) {
                    case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
                        if (i.queueSizeLimit > r) {
                            this.queueData.errorMsg += "\nThe number of files selected exceeds the remaining upload limit (" + r + ")."
                        } else {
                            this.queueData.errorMsg += "\nThe number of files selected exceeds the queue size limit (" + i.queueSizeLimit + ")."
                        }
                        break;
                    case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                        this.queueData.errorMsg += '\nThe file "' + t.name + '" exceeds the size limit (' + i.fileSizeLimit + ").";
                        break;
                    case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
                        this.queueData.errorMsg += '\nThe file "' + t.name + '" is empty.';
                        break;
                    case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                        this.queueData.errorMsg += '\nThe file "' + t.name + '" is not an accepted file type (' + i.fileTypeDesc + ").";
                        break
                    }
            }
            if (n != SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED) {
                delete this.queueData.files[t.id]
            }
            if (i.onSelectError)
                i.onSelectError.apply(this, arguments)
        }, onQueueComplete: function() {
            if (this.settings.onQueueComplete)
                this.settings.onQueueComplete.call(this, this.settings.queueData)
        }, onUploadComplete: function(t) {
            var n = this.settings, r = this;
            var i = this.getStats();
            this.queueData.queueLength = i.files_queued;
            if (this.queueData.uploadQueue[0] == "*") {
                if (this.queueData.queueLength > 0) {
                    this.startUpload()
                } else {
                    this.queueData.uploadQueue = [];
                    if (n.onQueueComplete)
                        n.onQueueComplete.call(this, this.queueData)
                }
            } else {
                if (this.queueData.uploadQueue.length > 0) {
                    this.startUpload(this.queueData.uploadQueue.shift())
                } else {
                    this.queueData.uploadQueue = [];
                    if (n.onQueueComplete)
                        n.onQueueComplete.call(this, this.queueData)
                }
            }
            if (e.inArray("onUploadComplete", n.overrideEvents) < 0) {
                if (n.removeCompleted) {
                    switch (t.filestatus) {
                        case SWFUpload.FILE_STATUS.COMPLETE:
                            setTimeout(function() {
                                if (e("#" + t.id)) {
                                    r.queueData.queueSize -= t.size;
                                    r.queueData.queueLength -= 1;
                                    delete r.queueData.files[t.id];
                                    e("#" + t.id).fadeOut(500, function() {
                                        e(this).remove()
                                    })
                                }
                            }, n.removeTimeout * 1e3);
                            break
                        }
                } else {
                    t.uploaded = true
                }
            }
            if (n.onUploadComplete)
                n.onUploadComplete.call(this, t)
        }, onUploadProgress: function(t, n, r) {
            var i = this.settings;
            var s = new Date;
            var o = s.getTime();
            var u = o - this.timer;
            if (u > 500) {
                this.timer = o
            }
            var a = n - this.bytesLoaded;
            this.bytesLoaded = n;
            var f = this.queueData.queueBytesUploaded + n;
            var l = Math.round(n / r * 100);
            var c = "KB/s";
            var h = 0;
            var p = a / 1024 / (u / 1e3);
            p = Math.floor(p * 10) / 10;
            if (this.queueData.averageSpeed > 0) {
                this.queueData.averageSpeed = Math.floor((this.queueData.averageSpeed + p) / 2)
            } else {
                this.queueData.averageSpeed = Math.floor(p)
            }
            if (p > 1e3) {
                h = p * .001;
                this.queueData.averageSpeed = Math.floor(h);
                c = "MB/s"
            }
            if (e.inArray("onUploadProgress", i.overrideEvents) < 0) {
                if (i.progressData == "percentage") {
                    e("#" + t.id).find(".data").html(" - " + l + "%")
                } else if (i.progressData == "speed" && u > 500) {
                    e("#" + t.id).find(".data").html(" - " + this.queueData.averageSpeed + c)
                }
                e("#" + t.id).find(".uploadify-progress-bar").css("width", l + "%")
            }
            if (i.onUploadProgress)
                i.onUploadProgress.call(this, t, n, r, f, this.queueData.uploadSize)
        }, onUploadStart: function(t) {
            var n = this.settings;
            var r = new Date;
            this.timer = r.getTime();
            this.bytesLoaded = 0;
            if (this.queueData.uploadQueue.length == 0) {
                this.queueData.uploadSize = t.size
            }
            if (n.checkExisting) {
                e.ajax({type: "POST", async: false, url: n.checkExisting, data: {filename: t.name}, success: function(n) {
                        if (n == 1) {
                            var r = confirm('A file with the name "' + t.name + '" already exists on the server.\nWould you like to replace the existing file?');
                            if (!r) {
                                this.cancelUpload(t.id);
                                e("#" + t.id).remove();
                                if (this.queueData.uploadQueue.length > 0 && this.queueData.queueLength > 0) {
                                    if (this.queueData.uploadQueue[0] == "*") {
                                        this.startUpload()
                                    } else {
                                        this.startUpload(this.queueData.uploadQueue.shift())
                                    }
                                }
                            }
                        }
                    }})
            }
            if (n.onUploadStart)
                n.onUploadStart.call(this, t)
        }, onUploadSuccess: function(t, n, r) {
            var i = this.settings;
            var s = this.getStats();
            this.queueData.uploadsSuccessful = s.successful_uploads;
            this.queueData.queueBytesUploaded += t.size;
            if (e.inArray("onUploadSuccess", i.overrideEvents) < 0) {
                e("#" + t.id).find(".data").html(" - Complete")
            }
            if (i.onUploadSuccess)
                i.onUploadSuccess.call(this, t, n, r)
        }};
    e.fn.uploadify = function(n) {
        if (t[n]) {
            return t[n].apply(this, Array.prototype.slice.call(arguments, 1))
        } else if (typeof n === "object" || !n) {
            return t.init.apply(this, arguments)
        } else {
            e.error("The method " + n + " does not exist in $.uploadify")
        }
    }
})($)