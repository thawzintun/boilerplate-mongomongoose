require("dotenv").config();
let mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
    Person.create({
        name: "Kyaw Gyi",
        age: 22,
        favoriteFoods: ["Apple", "Orange", "Grape"],
    });
    done(null);
};

const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, function (err, people) {
        if (err) return console.error(err);
        done(null, people);
    });
};

const findPeopleByName = (personName, done) => {
    Person.find({ name: personName }, (err, result) => {
        if (err) return console.error(err);
        done(null, result);
    });
};

const findOneByFood = (food, done) => {
    Person.findOne({ favoriteFoods: food }, (err, result) => {
        if (err) return console.error(err);
        done(null, result);
    });
};

const findPersonById = (personId, done) => {
    Person.findOne({ _id: personId }, (err, result) => {
        if (err) return console.error(err);
        done(null, result);
    });
};

const findEditThenSave = (personId, done) => {
    const foodToAdd = "hamburger";

    done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
    const ageToSet = 20;

    done(null /*, data*/);
};

const removeById = (personId, done) => {
    done(null /*, data*/);
};

const removeManyPeople = (done) => {
    const nameToRemove = "Mary";

    done(null /*, data*/);
};

const queryChain = (done) => {
    const foodToSearch = "burrito";

    done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
