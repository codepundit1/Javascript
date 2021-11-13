const normalPerson = {
    firstName: "Jahid",
    lastName: "Hasan",
    getfullName: function() {
        // call from object like this we need to use THIS.somethings.
        console.log(this.firstName, this.lastName);
    },
    salary: 10000,
    chargeBill: function(amount, tax) {
        console.log(this);
        this.salary = this.salary - amount - tax;
        return this.salary;
    },
};

// normalPerson.chargeBill(500);
// console.log(normalPerson.salary);
// normalPerson.getfullName("firstName","lastName");

//BIND =>>>>  ekti object er method k onno object e use krte bind kora lge.
const heroPerson = {
    firstName: "Hero",
    lastName: "Alam",
    salary: 15000,
};

const friendlyPerson = {
    firstName: "Mahmufujor",
    lastName: "Rahman",
    salary: 5000,
};


const fakePerson = {
    firstName: "Momi",
    lastName: "shikder",
    salary: 90000,
};

// Bind//

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(1000, 50);
heroChargeBill(2000, 50);
console.log(heroPerson.salary);
console.log(normalPerson.salary);


// Call //


normalPerson.chargeBill.call(friendlyPerson, 500, 100);
normalPerson.chargeBill.call(friendlyPerson, 1500, 100);
console.log(friendlyPerson.salary);


// Apply//

normalPerson.chargeBill.apply(fakePerson, [10000, 5000]);
console.log(fakePerson.salary);