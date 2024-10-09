// import { NavLink } from 'react-router-dom';
import { BackgroundTint, NavLink, NavLinksList, Wrapper } from './NavBar.styles';

export const NavBar = ({ isNavActive, closeMobileNav }) => {
	return (
		<>
			<Wrapper $isNavActive={isNavActive}>
				<NavLinksList>
					<li>
						<NavLink to='/'>Dashboard</NavLink>
					</li>
					<li>
						<NavLink to='/cars-comparison'>Comparison (1)</NavLink>
					</li>
					<li>
						<NavLink to='/add-car'>Add car</NavLink>
					</li>
				</NavLinksList>
			</Wrapper>
			<BackgroundTint $isNavActive={isNavActive} onClick={closeMobileNav} {...{ inert: !isNavActive ? '' : undefined }} />
		</>
	);
};
