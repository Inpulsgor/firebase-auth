import React from 'react';

type TProps = {
	children: React.ReactNode,
	[props: string]: React.ReactNode
}

const Main = ({children, ...props}: TProps): JSX.Element => {
	return (
		<main className="main" {...props}>
			{children}
		</main>
	)
}

export default Main;
