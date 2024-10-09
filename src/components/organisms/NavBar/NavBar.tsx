import { NavLink, NavLinks, Wrapper } from './NavBar.styles';

export const NavBar = ({ isNavActive }) => {
	return (
		<Wrapper $isNavActive={isNavActive}>
			<NavLinks>
				<NavLink>Dashboard</NavLink>
				<NavLink>Comparison (1)</NavLink>
				<NavLink>Add car</NavLink>
			</NavLinks>
		</Wrapper>
	);
};
