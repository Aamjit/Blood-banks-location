import React, { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

import DataCard from "./components/DataCard/DataCard";

function App() {
	const [info, setInfo] = useState([]);

	window.addEventListener("load", async () => {
		await getData();
	});

	async function getData() {
		await getDocs(collection(db, "bank-location")).then((snapshot) => {
			snapshot.forEach((element) => {
				var data = element.data();
				setInfo((arr) => [...arr, data]);
			});
		});
	}

	return (
		<div className="App">
			<header className="App-header">
				<div className="no-display" id="modal">
					<div className="modal-overlay"></div>
					<div className="msg-area">
						<p id="modal-msg"></p>
						<button id="ok-btn">OK</button>
					</div>
				</div>

				<section className="sec-1">
					<h2>Location on Blood Banks</h2>
				</section>

				<section className="sec-2">
					<span id="loc-data" className="text-center">
						{info.map((data) => (
							<DataCard data={data} />
						))}
					</span>
				</section>
			</header>
		</div>
	);
}

export default App;
