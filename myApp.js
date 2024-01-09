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
    Person.findById(personId, (err, result) => {
        if (err) return console.error(err);
        done(null, result);
    });
};

const findEditThenSave = (personId, done) => {
    const foodToAdd = "hamburger";
    Person.findById(personId, (err, result) => {
        if (err) return console.error(err);
        result.favoriteFoods.push(foodToAdd);
        result.save((err, result) => {
            if (err) return console.error(err);
            done(null, result);
        });
    });
};

const findAndUpdate = (personName, done) => {
    const ageToSet = 20;
    Person.findOneAndUpdate(
        { name: personName },
        { age: ageToSet },
        { new: true },
        (err, result) => {
            if (err) return console.error(err);
            done(null, result);
        }
    );
};

const removeById = (personId, done) => {
    Person.findByIdAndDelete(personId, (err, result) => {
        if (err) return console.error(err);
        done(null, result);
    });
};

const removeManyPeople = (done) => {
    const nameToRemove = "Mary";
    Person.deleteMany({ name: nameToRemove }, (err, result) => {
        if (err) return console.error(err);
        done(null, result);
    });
};

const queryChain = (done) => {
    const foodToSearch = "burrito";
    Person.find({ favoriteFoods: foodToSearch })
        .sort("name")
        .limit(2)
        .select("-age")
        .exec((err, result) => {
            if (err) return console.error(err);
            done(null, result);
        });
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
