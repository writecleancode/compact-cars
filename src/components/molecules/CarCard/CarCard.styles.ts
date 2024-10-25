import styled from 'styled-components';
import { StyledButton } from 'src/components/atoms/StyledButton/StyledButton';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 0.8rem;
	border: 1px solid #dddddd;
	background-color: #f1f1f1;
	color: #3e3e3e;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.18);
	container-type: inline-size;
`;

export const CarName = styled.p`
	margin-bottom: 0.6rem;
	font-size: 1.8rem;
	font-weight: bold;
	text-align: center;

	@media (min-width: 1600px) {
		margin-bottom: 0.8rem;
	}
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

export const ButtonsWrapper = styled.div`
	position: absolute;
	bottom: 0.6rem;
	right: 0.6rem;
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	gap: 0.4rem;

	@container (min-width: 190px) {
		right: 0.8rem;
		bottom: 0.8rem;
		gap: 0.6rem;
	}
`;

export const DeleteButton = styled(StyledButton)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.4rem 0.6rem;
	fill: #fff;
	transition: fill 0.3s;

	&:hover {
		fill: #555;
	}
`;
