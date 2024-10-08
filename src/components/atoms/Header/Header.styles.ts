import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 1.4rem 1.6rem 1.2rem;
	border-bottom: 1px solid #e4e4e4;
	background-image: linear-gradient(-45deg, rgb(248, 248, 248), rgba(243, 243, 243, 0.48), rgb(248, 248, 248));
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
`;
