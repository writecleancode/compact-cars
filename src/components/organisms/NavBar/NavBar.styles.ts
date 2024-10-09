import styled from 'styled-components';

export const Wrapper = styled.div<{ $isNavActive: boolean }>`
	position: absolute;
	translate: ${({ $isNavActive }) => ($isNavActive ? '0' : '-100%')};
	padding: 2.4rem;
	border-right: 1px solid #d8d8d8;
	height: 100vh;
	transition: translate 0.2s;
`;

export const NavLinks = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.8rem;

	list-style: none;
`;

export const NavLink = styled.li`
	position: relative;
	padding: 0.4rem 0.8rem;
	color: #3e3e3e;
	font-size: 2rem;
	font-weight: bold;
	text-decoration: none;
	opacity: 0.7;
	transition: opacity 0.3s;

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		translate: 0 -50%;
		left: -24px;
		width: 24px;
		height: 3px;
		background-color: #767676;
		opacity: 0.4;
		transition: opacity 0.3s;
	}
`;
