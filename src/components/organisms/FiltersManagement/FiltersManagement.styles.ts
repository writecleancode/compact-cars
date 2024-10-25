import styled from 'styled-components';

export const Wrapper = styled.div`
	display: none;

	@media (min-width: 1200px) {
		display: flex;
		flex-direction: column;
		gap: 4.8rem;
		grid-column: 1 / 2;
		grid-row: 2 / 3;
		padding: 2.4rem;
		border-right: 1px solid #d8d8d8;
		overflow-x: auto;
	}
`;
