export var Oops;
(function (Oops) {
    class Person {
        personality;
        constructor() {
            this.personality = "Mystery";
        }
        AskedQuestion(pvalue) {
            if (pvalue == 1)
                this.personality = "Extravert";
            else if (pvalue == 2)
                this.personality = "Intravert";
            else
                this.personality = "You are still a Mystery";
        }
        GetPersonality() {
            return this.personality;
        }
    }
    Oops.Person = Person;
})(Oops || (Oops = {}));
