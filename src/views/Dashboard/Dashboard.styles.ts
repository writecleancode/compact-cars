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

	@media (min-width: 900px) {
		background-color: initial;
		padding: 1.6rem 2.4rem;
	}

	@media (min-width: 1600px) {
		padding: 2.4rem 3.2rem;
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

	@media (min-width: 1200px) {
		display: none;
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

	@media (min-width: 614px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 900px) {
		gap: 1.2rem;
		padding-left: 2.4rem;
		padding-right: 2.4rem;
	}

	@media (min-width: 1500px) {
		grid-template-columns: repeat(4, 1fr);
		gap: 1.6rem;
	}

	@media (min-width: 1600px) {
		gap: 2rem;
		padding-left: 3.2rem;
		padding-right: 3.2rem;
	}
`;

export const NoCarsInfo = styled.p`
	grid-column: 1 / 3;
	margin-top: 5.6rem;
	text-align: center;

	@media (min-width: 614px) {
		grid-column: 1 / 4;
		font-size: 1.7rem;
	}

	@media (min-width: 1500px) {
		grid-column: 1 / 5;
		font-size: 1.8rem;
	}
`;
