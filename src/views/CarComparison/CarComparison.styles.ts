import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 1.2rem;
`;

export const TableWrapper = styled.div`
	overflow-y: scroll;
`;

export const StyledTable = styled.table`
	white-space: nowrap;

	th {
		background-color: rgba(0, 0, 0, 0.08);
	}

	td:nth-of-type(2n - 1) {
		background-color: rgba(0, 0, 0, 0.01);
	}

	td:nth-of-type(2n) {
		background-color: rgba(0, 0, 0, 0.03);
	}

	td,
	th {
		padding: 1.2rem 2rem;
		text-align: center;
	}
`;

export const StyledParagraph = styled.p`
	margin-top: 7.2rem;
	font-size: 1.8rem;
	text-align: center;
`;
