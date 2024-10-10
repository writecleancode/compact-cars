import { ReactNode } from 'react';
import { ModalButton, Wrapper } from './Modal.styles';

type ModalProps = {
	isOpen: boolean;
	closeModal: () => void;
	children: ReactNode;
};

export const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
	return (
		<Wrapper isOpen={isOpen} onRequestClose={closeModal}>
			{children}
			<ModalButton onClick={closeModal}>Close</ModalButton>
		</Wrapper>
	);
};
