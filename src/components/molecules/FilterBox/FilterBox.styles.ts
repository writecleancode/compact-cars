import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 4.8rem;
`;

export const FilterItems = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 1.6rem;
	list-style: none;
`;

export const FilterItem = styled.li<{ $isYears?: boolean; $isActive: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.4rem 1.6rem;
	min-width: ${({ $isYears }) => ($isYears ? '72px' : 'unset')};
	background-color: ${({ $isActive }) => ($isActive ? '#bdeeb1' : '#d9d9d9')};
	font-size: 1.6rem;
	cursor: pointer;
`;
