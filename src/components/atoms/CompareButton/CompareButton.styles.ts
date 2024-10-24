import styled from 'styled-components';
import { StyledButton } from '../StyledButton/StyledButton';

export const Wrapper = styled(StyledButton)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.4rem 0.6rem;
	fill: #fff;
	transition: fill 0.3s;

	&:hover span {
		background-color: #555;
	}
`;

export const ButtonBar = styled.span`
	position: absolute;
	border-radius: 100px;
	background-color: #fff;
	transition: background-color 0.3s, rotate 0.3s;
`;

export const VerticalButtonBar = styled(ButtonBar)<{ $isCompared: boolean }>`
	display: inline-block;
	width: 2px;
	height: 16px;
	rotate: ${({ $isCompared }) => ($isCompared ? '630deg' : '0')};
`;

export const HorizontalButtonBar = styled(ButtonBar)<{ $isCompared: boolean }>`
	display: inline-block;
	width: 16px;
	height: 2px;
	rotate: ${({ $isCompared }) => ($isCompared ? '360deg' : '0')};
`;
