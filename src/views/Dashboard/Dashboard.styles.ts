import styled from 'styled-components';

export const SearchWrapper = styled.div`
	display: flex;
	gap: 1.6rem;
	padding: 0.8rem;
	background-color: #d9d9d9;
`;

export const FiltersWrapper = styled.div`
	padding: 0.8rem 0.8rem 0.4rem;
	/* background-color: #d9d9d9; */
`;

export const ManageFiltersButton = styled.button`
	display: block;
	padding: 0.3rem;
	width: 100%;
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
