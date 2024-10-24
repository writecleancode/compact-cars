import { SpinningWheel, Wrapper } from "./LoadingAnimation.styles";

export const LoadingAnimation = () => {
	return (
		<Wrapper>
			<SpinningWheel src='src/assets/img/wheel2.png' alt='loading...' />
            <p>Loading...</p>
		</Wrapper>
	);
};
