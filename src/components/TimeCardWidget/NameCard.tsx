import React, { ReactElement } from "react";

interface NameCardProps {}

const NameCard: React.FC<NameCardProps> = (): ReactElement => {
	return <div className="name-card">hello from name card</div>;
};

export default NameCard;
