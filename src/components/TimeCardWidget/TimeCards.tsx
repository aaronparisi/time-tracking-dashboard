import React, { ReactElement } from "react";
import TimeCard from "./TimeCard";

interface TimeCardsProps {}

const TimeCards: React.FC<TimeCardsProps> = (): ReactElement => {
	return (
		<div className="time-cards">
			<TimeCard />
			<TimeCard />
			<TimeCard />
			<TimeCard />
			<TimeCard />
			<TimeCard />
		</div>
	);
};

export default TimeCards;
