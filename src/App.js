import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

/**
 * ! how this got hosted:
 * - make new github repo
 * git remote add origin https://github.com/jasongir/asdfkj.git
 * yarn add gh-pages
 *
 * add to package.json:
 * 	"homepage": "https://jasongir.github.io/monsters-rolodex",
 * under scripts:
 *    "predeploy": "yarn build",
 *    "deploy": "gh-pages -d build"
 *
 * yarn deploy
 * gh-pages -d build
 * git add -A
 * git commit -m "first commit"
 *
 * git push --set-upstream origin master
 *
 */

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: "",
		};

		// this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	handleChange = (e) => {
		// arrow functions let us bind this to the context of the arrow function, so no need for .bind
		this.setState({
			searchField: e.target.value,
		});
	};

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		// const monsters = this.state.monsters
		// const searchField = this.state.searchField

		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox
					placeholder="search monsters"
					handleChange={this.handleChange}
				/>

				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;

// function App() {
// 	return (
// 		<main className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>Hello! my name is joseph mother</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 			</header>
// 		</main>
// 	);
// }
