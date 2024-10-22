import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	padding: ${({ theme }) => `1.4rem calc(${theme.burgerButton.width} + ${theme.burgerButton.padding} * 2 + 1.6rem) 1.2rem`};
	border-bottom: 1px solid #e4e4e4;
	background-image: linear-gradient(-45deg, rgb(248, 248, 248), rgba(243, 243, 243, 0.48), rgb(248, 248, 248));

	@media (min-width: 640px) {
		padding: ${({ theme }) => `1.6rem calc(${theme.burgerButton.width} + ${theme.burgerButton.padding} * 2 + 2.4rem)`};
	}
`;

export const StyledTitle = styled.h1`
	font-size: 1.9rem;
	font-weight: bold;
	line-height: 1.15;
	text-align: center;

	span {
		display: inline-block;
		width: max-content;
		font-size: 1.4rem;
		font-weight: normal;
	}

	@media (min-width: 520px) {
		span {
			display: block;
			width: 100%;
			text-align: center;
		}
	}

	@media (min-width: 640px) {
		line-height: initial;

		span {
			display: inline-block;
			margin-left: .4rem;
			width: auto;
			font-size: 1.5rem;
			text-align: initial;
			line-height: 1.15;
		}
	}
`;
