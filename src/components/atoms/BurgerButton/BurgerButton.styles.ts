import styled from 'styled-components';

export const Wrapper = styled.button<{ $isActive: boolean }>`
	display: flex;
	flex-direction: column;
	gap: 5px;
    padding: 0.4rem;
    /* border-radius: 0; */
    /* border: 1px solid #999; */
    border: none;
    background-color: transparent;

	.burger-line {
		display: inline-block;
		width: 24px;
		height: 3px;
		background-color: #000;

		&--top,
		&--bottom {
			transition: transform 0.2s;
		}

		&--top {
			transform: ${({ $isActive }) =>
				$isActive ? 'translate3d(8px, 3px, 0) rotate(45deg) scale(0.7, 1)' : 'translate3d(0, 0, 0) rotate(0) scale(1, 1)'};
			/* transform: ${({ $isActive }) =>
				$isActive ? 'translate3d(5px, 2px, 0) rotate(45deg) scale(0.6, 1)' : 'translate3d(0, 0, 0) rotate(0) scale(1, 1)'}; */
		}

		&--bottom {
			transform: ${({ $isActive }) =>
				$isActive ? 'translate3d(8px, -3px, 0) rotate(-45deg) scale(0.7, 1)' : 'translate3d(0, 0, 0) rotate(0) scale(1, 1)'};
			/* transform: ${({ $isActive }) =>
				$isActive ? 'translate3d(5px, -2px, 0) rotate(-45deg) scale(0.6, 1)' : 'translate3d(0, 0, 0) rotate(0) scale(1, 1)'}; */
		}
	}
`;
