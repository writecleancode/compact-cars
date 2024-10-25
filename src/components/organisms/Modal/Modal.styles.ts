import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Wrapper = styled(ReactModal)`
	padding: 1.6rem;
	max-height: 100vh;
	background-color: #fff;
	box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
	overflow-y: auto;

	@media (min-width: 640px) and (min-height: 560px) {
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		width: 80vw;
		max-width: 560px;
		box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
	}

	@media (min-width: 1200px) {
		display: none;
	}
`;

export const ModalButton = styled.button`
	display: inline-block;
	padding: 0.4rem 0.8rem;
	width: 100%;
	font-size: 1.5rem;
	text-transform: uppercase;
	font-weight: bold;
`;
