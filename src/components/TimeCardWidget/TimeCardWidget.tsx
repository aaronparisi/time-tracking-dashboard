import React, { ReactElement } from "react";

interface TimeCardWidgetProps {}

const TimeCardWidget: React.FC<TimeCardWidgetProps> = (): ReactElement => {
	return (
		<div className="time-card-widget">
			<div className="name-card"></div>
			<div className="time-cards"></div>
		</div>
	);
};

export default TimeCardWidget;
