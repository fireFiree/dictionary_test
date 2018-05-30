import {JetView, plugins} from "webix-jet";


export default class TopView extends JetView {
	config() {
		const toolbar = {
			view: "toolbar",
			height: 50,
			elements: [
				{template: "<a route='/top/wordGroups'>Dictionary++</a>", type: "header", borderless: true},
				{view: "button", type: "icon", icon: "user", label: "Profile", width: 200}
			]
		};

		let menu = {
			view: "menu",
			id: "top:menu",
			width: 180,
			layout: "y",
			select: true,
			template: "<span class='webix_icon fa-#icon#'></span> #value# ",
			data: [
				{id: "wordGroups", value: "Группы слов", icon: "object-group"},
				{value: ""},
				{id: "tests", value: "Тесты", icon: "question"}
			]
		};

		let ui = {
			rows: [
				toolbar,
				{cols: [
					{type: "clean",
						css: "app-left-panel",
						padding: 10,
						margin: 20,
						borderless: true,
						rows: [menu]},
					{rows: [
						{type: "clean",
							css: "app-right-panel",
							rows: [
								{$subview: true}
							]}
					]}
				]}
			]
		};


		return ui;
	}
	init() {
		this.use(plugins.Menu, "top:menu");
	}
}
