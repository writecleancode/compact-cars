import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 1.2rem;
`;

export const TableWrapper = styled.div`
	overflow-x: scroll;
`;

export const StyledTable = styled.table`
	white-space: nowrap;

	tbody {
		tr:first-child {
			th {
				background-color: transparent;
			}
		}
	}

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

	td {
		&[data-brand] {
			background-size: contain;
			background-position: center;
			background-repeat: no-repeat;
			height: 48px;
			border-top: 10px solid transparent;
			border-left: 20px solid transparent;
			border-right: 20px solid transparent;
			border-bottom: 0;
		}

		&[data-brand='Alfa Romeo'] {
			background-image: url('src/assets/img/emblems/emblem_alfa-romeo.png');
		}

		&[data-brand='Audi'] {
			background-image: url('src/assets/img/emblems/emblem_audi.png');
		}

		&[data-brand='BMW'] {
			background-image: url('src/assets/img/emblems/emblem_bmw.png');
		}

		&[data-brand='Citroen'] {
			background-image: url('src/assets/img/emblems/emblem_citroen.png');
		}

		&[data-brand='Daewoo'] {
			background-image: url('src/assets/img/emblems/emblem_daewoo.png');
		}

		&[data-brand='Fiat'] {
			background-image: url('src/assets/img/emblems/emblem_fiat.png');
		}

		&[data-brand='Ford'] {
			background-image: url('src/assets/img/emblems/emblem_ford.png');
		}

		&[data-brand='Honda'] {
			background-image: url('src/assets/img/emblems/emblem_honda.png');
		}

		&[data-brand='Lancia'] {
			background-image: url('src/assets/img/emblems/emblem_lancia.png');
		}

		&[data-brand='Mazda'] {
			background-image: url('src/assets/img/emblems/emblem_mazda.png');
		}

		&[data-brand='Nissan'] {
			background-image: url('src/assets/img/emblems/emblem_nissan.png');
		}

		&[data-brand='Opel'] {
			background-image: url('src/assets/img/emblems/emblem_opel.png');
		}

		&[data-brand='Peugeot'] {
			background-image: url('src/assets/img/emblems/emblem_peugeot.png');
		}

		&[data-brand='Renault'] {
			background-image: url('src/assets/img/emblems/emblem_renault.png');
		}

		&[data-brand='Seat'] {
			background-image: url('src/assets/img/emblems/emblem_seat.png');
		}

		&[data-brand='Toyota'] {
			background-image: url('src/assets/img/emblems/emblem_toyota.png');
		}

		&[data-brand='Volkswagen'] {
			background-image: url('src/assets/img/emblems/emblem_volkswagen.png');
		}
	}
`;

export const StyledParagraph = styled.p`
	margin-top: 7.2rem;
	font-size: 1.8rem;
	text-align: center;
`;
