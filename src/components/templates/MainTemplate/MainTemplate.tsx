import { ReactNode } from 'react';
import { Wrapper } from './MainTemplate.styles';

type MainTemplateProps = {
	children: ReactNode;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
	return <Wrapper>{children}</Wrapper>;
};
