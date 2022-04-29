import React, { useState } from "react";
import TimeCardWidget from "./components/TimeCardWidget/TimeCardWidget";
import LoginWidget from "./components/LoginWidget/LoginWidget";
import "./stylesheets/index.css";

function App() {
	const [curUser, setCurUser] = useState<string | null>(null);

	const handleCurUserChange = (name: string | null): void => {
		setCurUser(name);
	};

	return (
		<div className="App">
			{curUser ? (
				<TimeCardWidget handleCurUserChange={handleCurUserChange} />
			) : (
				<LoginWidget handleCurUserChange={handleCurUserChange} />
			)}
		</div>
	);
}

export default App;
