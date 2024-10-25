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

	@media (min-width: 1200px) {
		/* grid-template-columns: 1.33fr 3fr auto; */
		grid-template-columns: 300px 1fr auto;
	}

	@media (min-width: 1400px) {
		grid-template-columns: 320px 1fr auto;
	}

	@media (min-width: 1600px) {
		grid-template-columns: 320px 1fr 320px;
	}
`;

export const OutletWrapper = styled.div`
	@media (min-width: 900px) {
		grid-column: 1 / 2;
		grid-row: 2 / 3;
		overflow-x: auto;
	}

	@media (min-width: 1200px) {
		grid-column: 2 / 3;
	}
`;
