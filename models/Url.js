const mongoose = require('mongoose');
const { Schema } = mongoose;
const urlSchema = new Schema({
	origin: {
		type: String,
		required: true,
	},
	shortUrl: {
		type: String,
		required: true,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'user',
		required: true,
	},
});
const Url = mongoose.model('url', urlSchema);
module.exports = Url;
