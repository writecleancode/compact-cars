import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { Header } from 'src/components/atoms/Header/Header';

export const Root = () => {
	return (
		<div>
			<GlobalStyle />
			<Header />
		</div>
	);
};
