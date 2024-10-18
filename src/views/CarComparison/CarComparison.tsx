import { useOutletContext } from 'react-router-dom';
import { StyledParagraph, StyledTable, TableWrapper, Wrapper } from './CarComparison.styles';

export const CarComparison = () => {
	const { cars } = useOutletContext();

	return (
		<Wrapper>
			{cars.some(car => car.isCompared) ? (
				<TableWrapper>
					<StyledTable>
						<tbody>
							<tr>
								<th></th>
								{cars.map(car => (car.isCompared ? <td key={car.id} data-brand={car.brand}></td> : null))}
							</tr>
							<tr>
								<th>Brand</th>
								{cars.map(car => (car.isCompared ? <td key={car.id}>{car.brand}</td> : null))}
							</tr>
							<tr>
								<th>Model</th>
								{cars.map(car => (car.isCompared ? <td key={car.id}>{car.model}</td> : null))}
							</tr>
							<tr>
								<th>Generation</th>
								{cars.map(car => (car.isCompared ? <td key={car.id}>{car.generation.replace(/ .*/, ' ')}</td> : null))}
							</tr>
							<tr>
								<th>Production start</th>
								{cars.map(car => (car.isCompared ? <td key={car.id}>{car.productionStartYear}</td> : null))}
							</tr>
							<tr>
								<th>Production end</th>
								{cars.map(car => (car.isCompared ? <td key={car.id}>{car.productionEndYear}</td> : null))}
							</tr>
							<tr>
								<th>Facelift</th>
								{cars.map(car => (car.isCompared ? <td key={car.id}>{car.facelift}</td> : null))}
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
