import styled from 'styled-components';

export const StyledLink = styled.a`
	&:not([href]) {
		cursor: default;
	}
`;

export const StyledImage = styled.img`
	width: 100%;
	aspect-ratio: 320 / 220;
	object-fit: cover;
`;
