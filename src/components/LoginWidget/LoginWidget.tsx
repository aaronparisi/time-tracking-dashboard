import React, { ReactElement } from "react";

interface LoginWidgetProps {
	handleCurUserChange: (name: string) => void;
}

const LoginWidget: React.FC<LoginWidgetProps> = ({
	handleCurUserChange,
}): ReactElement => {
	return (
		<div className="login-widget">
			<button onClick={() => handleCurUserChange("Jeremy Robson")}>
				Log In!
			</button>
		</div>
	);
};

export default LoginWidget;
