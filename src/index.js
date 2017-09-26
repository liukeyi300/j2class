/**
 * Created by liukeyi on 2017/9/26.
 */
var Test;
(function (Test) {
    class Liukeyi {
        constructor(t) {
            this._t = t;
        }
        get t() {
            return this._t;
        }
        set t(value) {
            this._t = value;
        }
    }
    Test.Liukeyi = Liukeyi;
})(Test || (Test = {}));
