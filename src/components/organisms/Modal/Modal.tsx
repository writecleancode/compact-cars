import { ModalProps } from 'src/types/types';
import { ModalButton, Wrapper } from './Modal.styles';

export const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
	return (
		<Wrapper isOpen={isOpen} onRequestClose={closeModal} appElement={document.querySelector<HTMLDivElement>('#root')!}>
			{children}
			<ModalButton onClick={closeModal}>Close</ModalButton>
		</Wrapper>
	);
};
