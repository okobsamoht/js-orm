(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.JsOrm = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    const JsOrm = function (params) {
        this.params = params+'init'
    }
    JsOrm.prototype.version = "1.0.0"
    return JsOrm;
}));

