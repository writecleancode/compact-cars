import styled from 'styled-components';

export const Wrapper = styled.div`
	/* position: relative; */
	display: flex;
	flex-direction: column;
	padding: 0.8rem;
	border: 1px solid #dddddd;
	background-color: #f1f1f1;
	color: #3e3e3e;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.18);
`;

export const CarName = styled.p`
	margin-bottom: 0.6rem;
	font-size: 1.8rem;
	font-weight: bold;
	text-align: center;
`;

export const CarImg = styled.img`
	width: 100%;
	aspect-ratio: 320 / 220;
	object-fit: cover;
`;

export const CarInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	margin-top: 0.8rem;
`;
