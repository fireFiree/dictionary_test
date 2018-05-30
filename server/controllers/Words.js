const Word = require("../models/Word");

module.exports.getAll = (req, res) => {
	
	Word.find({})
		.populate("WordGroup", "name")
		.exec((err, data) => {
			if (err) {
				res.status(500).send(err);
			}

			res.status(200).send(data);
		});
};

module.exports.getOne = (req, res) => {
	Word.findById(req.params.id, (err, data) => {
		if (err) {
			res.status(500).send(err);
		}

		res.status(200).send(data);
	});
};

module.exports.create = (req, res) => {
	let wrd = new Word({
		word: req.body.name,
		partOfSpeech: req.body.partOfSpeech,
		translation: req.body,
		wordGroup: req.body.groupId
	});
	wrd.save((err, data) => {
		if (err) {
			res.status(500).send(err);
		}
		res.status(200).send(data);
	});
};

module.exports.update = (req, res) => {
	wrd.findById(req.params.id, (err, wrd) => {
		if (err) {
			res.status(500).send(err);
		}
		else {
			wrd.word = wrd.body.word || wrd.word;
			wrd.partOfSpeech = wrd.body.partOfSpeech || wrd.partOfSpeech;
			wrd.translation = wrd.body.translation || wrd.translation;

			wrd.save((err, wrd) => {
				if (err) {
					res.status(500).send(err);
				}
				res.status(200).send(wrd);
			});
		}
	});
};

module.exports.remove = (req, res) => {
	Word.findByIdAndRemove(req.params.id, (err, wrd) => {
		if (err) {
			res.status(500).send(err);
		}
		res.status(200).send(wrd);
	});
};
