import styled from 'styled-components';

export const StyledTitle = styled.p<{ $isFilterTitle?: boolean }>`
	margin-bottom: ${({ $isFilterTitle }) => ($isFilterTitle ? '1.2rem' : '0.8rem')};
	color: #3e3e3e;
	font-size: 1.8rem;
	font-weight: bold;
	line-height: ${({ $isFilterTitle }) => ($isFilterTitle ? '1.5' : '1')};
`;
