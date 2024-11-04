import styled from 'styled-components';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';

export const Wrapper = styled.div`
	padding: 2.4rem;

	@media (min-width: 620px) {
		display: flex;
		gap: 3.2rem;

		& > * {
			flex-basis: 100%;
		}
	}

	@media (min-width: 900px) {
		justify-content: space-evenly;
		align-items: center;
		margin: 0 auto;
		min-height: 100%;
		max-width: 960px;

		& > * {
			flex-basis: initial;
		}
	}
`;

export const PreviewWrapper = styled.div`
	margin-top: 5.6rem;
	margin-left: auto;
	margin-right: auto;
	width: 50%;

	@media (min-width: 620px) {
		margin-left: 0;
		margin-right: 0;
		width: auto;
	}

	@media (min-width: 760px) {
		margin-top: 4rem;
	}

	@media (min-width: 900px) {
		flex-grow: 1;
		margin-top: 0;
		max-width: 260px;
	}

	@media (min-width: 1600px) {
		max-width: 290px;
	}
`;

export const PreviewTitle = styled(StyledTitle)`
	margin-bottom: 2.4rem;
	color: #3e3e3e;
	text-align: center;
`;
