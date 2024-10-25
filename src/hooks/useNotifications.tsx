import { NotificationsContextType, NotificationsProviderProps } from 'src/types/types';
import { createContext, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const NotificationsContext = createContext<NotificationsContextType>({
	successNotifications: [],
	handleSuccessNotifications: () => {},
});

export const NotificationsProvider = ({ children }: NotificationsProviderProps) => {
	const [successNotifications, setSuccessNotifications] = useState<string[]>([]);

	const removeSuccessNotification = (id: string) => {
		setSuccessNotifications(prevState => prevState.filter(el => el !== id));
	};

	const handleSuccessNotifications = () => {
		const id = uuid();
		setSuccessNotifications(prevState => [...prevState, id]);

		setTimeout(() => removeSuccessNotification(id), 2000);
	};

	return (
		<NotificationsContext.Provider value={{ successNotifications, handleSuccessNotifications }}>{children}</NotificationsContext.Provider>
	);
};

export const useNotifications = () => {
	const notificationsContext = useContext(NotificationsContext);

	return notificationsContext;
};
