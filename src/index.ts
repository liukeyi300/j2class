/**
 * Created by liukeyi on 2017/9/26.
 */
namespace Test {
    interface A {
        a: number;
        b: string;
    }

    export class Liukeyi {
        constructor (t: A) {
            this._t = t;
        }

        private _t: A;

        public get t () {
            return this._t;
        }
        public set t (value: A) {
            this._t = value;
        }
    }
}