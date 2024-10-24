import styled, { keyframes } from 'styled-components';

const spining = keyframes`
0% {
    rotate: 0;
}

100% {
    rotate: 360deg;
}
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    gap: 1.6rem;
`;

export const SpinningWheel = styled.img`
	margin-top: 8rem;
	width: 40px;
    animation: ${spining} .3s infinite linear;
`;
