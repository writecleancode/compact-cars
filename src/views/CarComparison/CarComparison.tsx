import { useOutletContext } from 'react-router-dom';
import { StyledParagraph, StyledTable, TableWrapper, Wrapper } from './CarComparison.styles';

export const CarComparison = () => {
	const cars = useOutletContext();

	return (
		<Wrapper>
			{cars.some(car => !car.isCompared) ? (
				<TableWrapper>
					<StyledTable>
						<tbody>
							<tr>
								<th></th>
								{cars.map(car => (
									<td key={car.id} data-brand={car.brand}></td>
								))}
							</tr>
							<tr>
								<th>Brand</th>
								{cars.map(car => (
									<td key={car.id}>{car.brand}</td>
								))}
							</tr>
							<tr>
								<th>Model</th>
								{cars.map(car => (
									<td key={car.id}>{car.model}</td>
								))}
							</tr>
							<tr>
								<th>Generation</th>
								{cars.map(car => (
									<td key={car.id}>{car.generation}</td>
								))}
							</tr>
							<tr>
								<th>Production start</th>
								{cars.map(car => (
									<td key={car.id}>{car.productionStartYear}</td>
								))}
							</tr>
							<tr>
								<th>Production end</th>
								{cars.map(car => (
									<td key={car.id}>{car.productionEndYear}</td>
								))}
							</tr>
							<tr>
								<th>Facelift</th>
								{cars.map(car => (
									<td key={car.id}>{car.facelift}</td>
								))}
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
