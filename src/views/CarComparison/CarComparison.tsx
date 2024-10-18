import { useOutletContext } from 'react-router-dom';
import { StyledParagraph, StyledTable, TableWrapper, Wrapper } from './CarComparison.styles';

export const CarComparison = () => {
	const { cars } = useOutletContext();

	const createTds = keyName => {
		switch (keyName) {
			case 'emblem':
				return cars.map(car => (car.isCompared ? <td key={car.id} data-brand={car.brand}></td> : null));

			case 'generation':
				return cars.map(car => (car.isCompared ? <td key={car.id}>{car[keyName].replace(/ .*/, ' ')}</td> : null));

			default:
				return cars.map(car => (car.isCompared ? <td key={car.id}>{car[keyName]}</td> : null));
		}
	};

	return (
		<Wrapper>
			{cars.some(car => car.isCompared) ? (
				<TableWrapper>
					<StyledTable>
						<tbody>
							<tr>
								<th></th>
								{createTds('emblem')}
							</tr>
							<tr>
								<th>Brand</th>
								{createTds('brand')}
							</tr>
							<tr>
								<th>Model</th>
								{createTds('model')}
							</tr>
							<tr>
								<th>Generation</th>
								{createTds('generation')}
							</tr>
							<tr>
								<th>Production start</th>
								{createTds('productionStartYear')}
							</tr>
							<tr>
								<th>Production end</th>
								{createTds('productionEndYear')}
							</tr>
							<tr>
								<th>Facelift</th>
								{createTds('facelift')}
							</tr>
						</tbody>
					</StyledTable>
				</TableWrapper>
			) : (
				<StyledParagraph>Add cars to compare...</StyledParagraph>
			)}
		</Wrapper>
	);
};
