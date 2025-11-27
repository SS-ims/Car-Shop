const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = (req, res) => {
    const db = mongodb.getDatabase();
    const usersCollection = db.collection("users");

    usersCollection.find().toArray()
    .then((users) => {
        res.status(200).json(users);
    })
    .catch((err) => {
        res.status(500).json({message: "An error occurred", error: err});
    });
};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().collection("users").findOne({_id: userId});
    result.toArray().then((user) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(user);
    }).catch((err) => {
        res.status(500).json({message: "An error occurred", error: err});
    });
};

module.exports = { getAll, getSingle };