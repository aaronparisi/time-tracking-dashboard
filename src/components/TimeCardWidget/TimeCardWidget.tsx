import React, { ReactElement } from "react";
import NameCard from "./NameCard";
import TimeCards from "./TimeCards";

interface TimeCardWidgetProps {
	handleCurUserChange: (name: string | null) => void;
}

const TimeCardWidget: React.FC<TimeCardWidgetProps> = ({
	handleCurUserChange,
}): ReactElement => {
	return (
		<div className="time-card-widget">
			<button
				className="logout"
				onClick={() => handleCurUserChange(null)}
			>
				Log out!
			</button>
			<NameCard />
			<TimeCards />
		</div>
	);
};

export default TimeCardWidget;
