import styled from 'styled-components';

export const Wrapper = styled.div`
	@media (min-width: 900px) {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: auto 1fr;
		height: 100vh;
		height: 100svh;
		overflow: clip;
	}
`;

export const OutletWrapper = styled.div`
	@media (min-width: 900px) {
		grid-column: 1 / 2;
		grid-row: 2 / 3;
		overflow-x: auto;
	}
`;
