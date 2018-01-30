export const wordGroups = new webix.DataCollection({

	scheme: {
		$init(obj) {
			obj.count = obj.words.length;
		}
	},
	data: [
		{id: 1,
			name: "Family",
			created_at: "01-01-2018",
			words: [
				{id: 1, word: "Family1", partOfSpeech: "noun", translation: "Семья1"},
				{id: 2, word: "Family2", partOfSpeech: "noun", translation: "Семья2"},
				{id: 3, word: "Family3", partOfSpeech: "noun", translation: "Семья3"}

			]},
		{id: 2,
			name: "House",
			created_at: "01-01-2018",
			words: [
				{id: 1, word: "House1", partOfSpeech: "noun", translation: "Дом1"},
				{id: 2, word: "House2", partOfSpeech: "noun", translation: "Дом2"},
				{id: 3, word: "House3", partOfSpeech: "noun", translation: "Дом3"}
			]},
		{id: 3,
			name: "Sun",
			created_at: "01-01-2018",
			words: [
				{id: 1, word: "Sun1", partOfSpeech: "noun", translation: "Солнце1"},
				{id: 2, word: "Sun2", partOfSpeech: "noun", translation: "Солнце2"},
				{id: 3, word: "Sun3", partOfSpeech: "noun", translation: "Солнце3"},
				{id: 4, word: "Sun4", partOfSpeech: "noun", translation: "Солнце4"}
			]}
	]});
