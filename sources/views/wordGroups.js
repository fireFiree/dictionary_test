import {JetView} from "webix-jet";
import {wordGroups} from "../models/wordGroups";
import WordsListView from "./wordsList";


export default class WordGroupView extends JetView {
	config() {
		const addBtn = {
			id: "wordGroups:addBtn",
			view: "button",
			icon: "plus",
			label: "Добавить новую",
			type: "icon",
			width: 100,
			click: () => { alert("НОВАЯ"); }
		};

		const clmns = [
			{id: "name", header: ["Название", {content: "textFilter"}], minWidth: 200, sort: "text", fillspace: 4},
			{id: "created_at", header: "Дата Создания", sort: "text", minWidth: 100, fillspace: 2},
			{id: "count", header: "Кол-во", minWidth: 50, sort: "int"},
			{id: "", template: "<span class='webix_icon fa-pencil-square-o'></span>", width: 40},
			{id: "", template: "<span class='webix_icon fa-trash-o'></span>", width: 40}
		];

		const datatable = {
			id: "wordGroups:datatable",
			view: "datatable",
			columns: clmns,
			autoWidth: true,
			rightSplit: 2,
			minWidth: 650,
			minHeight: 400,
			select: true,
			on: {
				onAfterSelect(id) {
					this.$scope.app.callEvent("onGroupClick", [id]);
				}
			}
		};

		const ui = {
			cols: [
				{rows: [
					addBtn,
					datatable,
					{}
				]},
				WordsListView
			]
		};


		return ui;
	}
	init() {
		wordGroups.waitData.then(() => {
			$$("wordGroups:datatable").parse(wordGroups);
			$$("wordGroups:datatable").select(wordGroups.getFirstId());
		});
	}
}
