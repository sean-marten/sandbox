// To declare an object assign a variable to curly brackets, then use key-valued pairs
var sean = {
    // Key : Value
    realName: 'Sean',
    "age (est)": 25,
    race: 'human',
    haveRetirementPlan: true,
    aliases: [
        'Sean',
        'Seanye',
        'Seanny',
        {
            moreAliases: [
                "Wheeze",
                "Tiny"
            ]
        }
    ],
    sayHi: function() {
        console.log("Hi");
    },
    favoriteSong: "The Middle"
}

sean.race // Accesses my race
sean["age (est)"] // Accesses my age, needs the brackets cuz of the double quotes
Object.keys(sean) // Returns all keys from the object

// Not using double quotes for my key, only reason to do that is if you are going to put a space or special characters in your key
// Values can also be functions

var sean = {
    name: 'sean',
    sayHi: () => {
        console.log(this.name)
    }
}

// This won't console log anything because this is referencing the global object

var sean = {
    name: 'sean',
    sayHi: function() {
        console.log(this.name)
    }
}

var john = {
    name: 'john'
}

john.sayHi = sean.sayHi; // This adds the function to the john, DO NOT invoke it here

// This works because this refers to the object that called it, if I used sean.name, it wouldn't work with other functions

// Sometimes people like the trailing comma in the objects, as shown below (should put it there)
var john = {
    name: 'john',
}
