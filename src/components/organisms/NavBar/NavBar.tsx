import { useContext } from 'react';
import { NavContext } from 'src/providers/NavProvider';
import { BackgroundTint, NavLink, NavLinksList, Wrapper } from './NavBar.styles';

export const NavBar = ({ comparedCarsNumber = 0 }) => {
	const { isNavActive, closeMobileNav } = useContext(NavContext);

	return (
		<>
			<Wrapper $isNavActive={isNavActive} {...{ inert: isNavActive ? undefined : '' }}>
				<NavLinksList>
					<li>
						<NavLink to='/'>Dashboard</NavLink>
					</li>
					<li>
						<NavLink to='/cars-comparison'>Comparison {comparedCarsNumber > 0 ? `(${comparedCarsNumber})` : null}</NavLink>
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
