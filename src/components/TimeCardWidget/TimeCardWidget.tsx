import React, { ReactElement } from "react";
import NameCard from "./NameCard";
import TimeCards from "./TimeCards";

interface TimeCardWidgetProps {}

const TimeCardWidget: React.FC<TimeCardWidgetProps> = (): ReactElement => {
	return (
		<div className="time-card-widget">
			<NameCard />
			<TimeCards />
		</div>
	);
};

export default TimeCardWidget;
