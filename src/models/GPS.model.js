const mongoose = require("mongoose");
const uri =
	"mongodb+srv://test:test@cluster0.sbgc9.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority";
mongoose
	.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.catch((err) => {
		console.log(err);
	});

const GPSSchema = new mongoose.Schema({
	latitude: {
		type: Number,
		required: true,
	},
	longtitude: {
		type: Number,
		required: true,
	},
	time: Date,
});

module.exports = mongoose.model("GPS", GPSSchema);
