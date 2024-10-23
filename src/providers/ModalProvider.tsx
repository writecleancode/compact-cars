import { ModalProviderProps } from 'src/types/types';
import { createContext, useEffect, useState } from 'react';

const initialModalState = false;

export const ModalContext = createContext({
	isModalOpen: initialModalState,
	openModal: () => {},
	closeModal: () => {},
});

export const ModalProvider = ({ children }: ModalProviderProps) => {
	const [isModalOpen, setModalState] = useState(initialModalState);

	const openModal = () => setModalState(true);
	const closeModal = () => setModalState(false);

	useEffect(() => {
		isModalOpen ? document.body.classList.add('preventScroll') : document.body.classList.remove('preventScroll');
	}, [isModalOpen]);

	return <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>{children}</ModalContext.Provider>;
};
