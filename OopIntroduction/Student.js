import { Oops } from "./Person.js";
export var OopsS;
(function (OopsS) {
    class Student extends Oops.Person {
        _name = "";
        constructor() {
            super();
            this._name = "";
        }
        get name() {
            return this._name;
        }
        set name(name) {
            this._name = name;
        }
    }
    OopsS.Student = Student;
})(OopsS || (OopsS = {}));
