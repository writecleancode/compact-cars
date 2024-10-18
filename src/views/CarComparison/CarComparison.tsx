import { useOutletContext } from 'react-router-dom';
import { StyledParagraph, StyledTable, TableWrapper, Wrapper } from './CarComparison.styles';

export const CarComparison = () => {
	const { comparedCars } = useOutletContext();

	const createTds = keyName => {
		switch (keyName) {
			case 'emblem':
				return comparedCars.map(car => <td key={car.id} data-brand={car.brand}></td>);

			case 'generation':
				return comparedCars.map(car => <td key={car.id}>{car[keyName].replace(/ .*/, ' ')}</td>);

			default:
				return comparedCars.map(car => <td key={car.id}>{car[keyName]}</td>);
		}
	};

	return (
		<Wrapper>
			{comparedCars.length > 0 ? (
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
