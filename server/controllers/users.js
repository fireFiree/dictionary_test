const User = require("../models/User");

module.exports.getAll = (req, res) => {
	User.find({}).exec((err, data) => {
		if (err) {
			res.status(500).send(err);
		}

		res.status(200).send(data);
	});
};

module.exports.create = (req, res) => {
	let user = new User({
		name: req.params.name,
		login: req.params.login,
		password: req.params.password
	});
	user.save((err, data) => {
		if (err) {
			res.status(500).send(err);
		}
		res.status(200).send(data);
	});
};

module.exports.update = (req, res) => {
	User.findById(req.params.id, (err, user) => {
		if (err) {
			res.status(500).send(err);
		}
		else {
			user.name = user.body.name || user.name;
			user.login = user.body.login || user.login;
			user.password = user.body.password || user.password;

			user.save((err, user) => {
				if (err) {
					res.status(500).send(err);
				}
				res.status(200).send(user);
			});
		}
	});
};

module.exports.remove = (req, res) => {
	User.findByIdAndRemove(req.params.id, (err, user) => {
		if (err) {
			res.status(500).send(err);
		}
		res.status(200).send(user);
	});
};
