import styled from 'styled-components';

export const Wrapper = styled.button<{ $isActive: boolean }>`
	position: absolute;
	top: 50%;
	right: 8px;
	translate: 0 -50%;
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding: ${({ theme }) => theme.burgerButton.padding};
	border: none;
	background-color: transparent;

	.burger-line {
		display: inline-block;
		width: ${({ theme }) => theme.burgerButton.width};
		height: 3px;
		background-color: #000;
		background-color: #212121;
		background-color: #3b3b3b;

		&--top,
		&--bottom {
			transition: ${({ $isActive }) =>
				$isActive ? 'translate 0.1s, rotate 0.1s 0.1s, scale 0.1s 0.05s' : 'translate 0.1s 0.1s, rotate 0.1s, scale 0.1s 0.05s'};
		}

		&--middle {
			opacity: ${({ $isActive }) => ($isActive ? '0' : '1')};
			transition-property: opacity;
			transition-delay: 0.1s;
		}

		&--top {
			translate: ${({ $isActive }) => ($isActive ? '0 8px' : '0 0')};
			rotate: ${({ $isActive }) => ($isActive ? '45deg' : 'none')};
			scale: ${({ $isActive }) => ($isActive ? '1.05 1' : '1 1')};
		}

		&--bottom {
			translate: ${({ $isActive }) => ($isActive ? '0 -8px' : '0 0')};
			rotate: ${({ $isActive }) => ($isActive ? '-45deg' : 'none')};
			scale: ${({ $isActive }) => ($isActive ? '1.05 1' : '1 1')};
		}
	}

	@media (min-width: 900px) {
		display: none;
	}
`;
