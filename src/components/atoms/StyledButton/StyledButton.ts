import styled from 'styled-components';

export const StyledButton = styled.button<{ $hasExtraMargin?: boolean }>`
	margin-top: ${({ $hasExtraMargin }) => ($hasExtraMargin ? '1.6rem' : '')};
	padding: 0.8rem 1.6rem;
	border: 2px solid #555555;
	background-color: #555555;
	color: #fff;
	font-size: 1.6rem;
	font-weight: bold;
	transition: background-color 0.3s, color 0.3s;

	&:hover {
		background-color: transparent;
		color: #555555;
	}
`;
