import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Wrapper = styled(ReactModal)`
	padding: 1.6rem;
	background-color: #fff;
    box-shadow: 0 0 16px rgba(0, 0, 0, .5);
`;

export const ModalButton = styled.button`
	display: inline-block;
	padding: 0.4rem 0.8rem;
	width: 100%;
	font-size: 1.5rem;
	text-transform: uppercase;
	font-weight: bold;
`;
