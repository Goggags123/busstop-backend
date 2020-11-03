const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();
const GPSModel = require("../models/GPS.model");

router.post("/api/gps", (req, res) => {
	if (!req.body) {
		return res.status(400).send("Request body is missing.");
	}
	let model = GPSModel(req.body);
	let date = new Date();
	model._doc.date = date;
	model._doc.offset = date.getTimezoneOffset();
	// console.log(model)
	model
		.save()
		.then((doc) => {
			if (!doc || doc.length <= 0) res.status(500).send(doc);
			res.status(201).send(doc);
		})
		.catch((err) => res.status(500).send(err));
});
router.get("/api/gps", (req, res) => {
	GPSModel.find()
		.limit(7)
		.sort({ date: -1 })
		.then((doc) => {
			return res.status(201).json(doc);
		})
		.catch((err) => res.status(500).send(err));
});
module.exports = router;