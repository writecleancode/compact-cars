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
`;

export const PreviewWrapper = styled.div`
	margin-top: 5.6rem;
	margin-left: auto;
	margin-right: auto;
	width: 50%;

	@media (min-width: 620px) {
		width: auto;
	}
`;

export const PreviewTitle = styled(StyledTitle)`
	margin-bottom: 2.4rem;
	color: #3e3e3e;
	text-align: center;
`;
