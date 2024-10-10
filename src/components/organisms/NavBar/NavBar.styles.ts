import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div<{ $isNavActive: boolean }>`
	position: absolute;
	z-index: 1;
	translate: ${({ $isNavActive }) => ($isNavActive ? '0' : '-100%')};
	padding: 2.4rem;
	border-right: 1px solid #d8d8d8;
	height: 100%;
	background-color: #fff;
	transition: translate 0.2s;
`;

export const NavLinksList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.8rem;
	list-style: none;
`;

export const NavLink = styled(RouterNavLink)`
	display: inline-block;
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

	&.active,
	&.active::before {
		opacity: 1;
	}
`;

export const BackgroundTint = styled.div<{ $isNavActive: boolean }>`
	position: absolute;
	left: 0;
	right: 0;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 0;
	opacity: ${({ $isNavActive }) => ($isNavActive ? '1' : '0')};
	transition: opacity 0.1s;
`;
