import styled from 'styled-components';

export const ControlsWrapper = styled.div`
	@media (min-width: 640px) {
		position: relative;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		padding: 0.8rem;
		background-color: #d9d9d9;
	}
`;

export const SearchWrapper = styled.div`
	display: flex;
	gap: 1.6rem;
	padding: 0.8rem;
	background-color: #d9d9d9;

	@media (min-width: 440px) {
		justify-content: space-between;
	}

	@media (min-width: 640px) {
		padding: 0;
	}
`;

export const FiltersWrapper = styled.div`
	padding: 0.8rem 0.8rem 0.4rem;

	@media (min-width: 640px) {
		padding: 0;
	}
`;

export const ManageFiltersButton = styled.button`
	display: block;
	padding: 0.3rem;
	width: 100%;

	@media (min-width: 640px) {
		padding: 0.4rem 1.2rem;
		width: auto;
		height: 100%;
	}
`;

export const CarCardsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	padding: 1.2rem;
`;

// export const CarsWrapper = styled.div`
/* display: grid; */
/* grid-template-columns: 1fr 1fr 1fr; */
/* gap: 3.2rem; */
// `;

export const NoCarsInfo = styled.p`
	grid-column: 1 / 3;
	margin-top: 5.6rem;
	text-align: center;
`;
