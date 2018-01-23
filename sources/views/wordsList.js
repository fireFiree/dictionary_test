import {JetView} from "webix-jet";
//import {wordGroups} from "../models/wordGroups";


export default class WordsListView extends JetView {
	config() {
		const addBtn = {
			id: "wordsList:addBtn",
			view: "button",
			icon: "plus",
			label: "Добавить слово",
			type: "icon",
			width: 100,
			click: () => { alert("НОВОЕ СЛОВО"); }
		};

		const clmns = [
			{id: "word", header: ["Слово", {content: "textFilter"}], minWidth: 200, sort: "text", fillspace: 4},
			{id: "partofSpeech", header: "Часть речи", sort: "text", minWidth: 100, fillspace: 2},
			{id: "translation", header: ["Перевод", {content: "textFilter"}], minWidth: 200, sort: "text", fillspace: 4},
			{id: "", template: "<span class='webix_icon fa-pencil-square-o'></span>", width: 40},
			{id: "", template: "<span class='webix_icon fa-trash-o'></span>", width: 40}
		];

		const datatable = {
			id: "wordsList:datatable",
			view: "datatable",
			columns: clmns,
			autoWidth: true,
			rightSplit: 2,
			minWidth: 650,
			minHeight: 400
		};

		const ui = {
			rows: [
				addBtn,
				datatable,
				{}
			]
		};


		return ui;
	}
	init() {
		let list = [
			{id: 1, word: "kaa", translation: "la", partofSpeech: "noun"},
			{id: 2, word: "kaa2", translation: "la43", partofSpeech: "verb"},
			{id: 3, word: "kaa1", translation: "la4", partofSpeech: "noun"}
		];
		$$("wordsList:datatable").parse(list);
	}
}
