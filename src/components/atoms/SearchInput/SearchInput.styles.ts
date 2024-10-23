import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-grow: 1;
	background-color: #f6f6f6;
	min-width: 0;
	max-width: 260px;

	@media (min-width: 640px) {
		position: absolute;
		left: 50%;
		translate: -50%;
		min-width: 260px;
	}
`;

export const Input = styled.input`
	flex-grow: 1;
	padding: 0.8rem 1.6rem;
	border: none;
	border-right: 1px solid #ccc;
	background-color: #f6f6f6;
	font-size: 1.3rem;
	min-width: 0;
`;

export const IconBox = styled.label`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.8rem;
	background-color: #f6f6f6;

	svg {
		width: 1.6;
		height: 1.6;
		fill: #464646;
	}
`;
