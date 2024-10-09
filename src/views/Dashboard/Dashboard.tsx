import { CarCard } from 'src/components/molecules/CarCard/CarCard';
import { Wrapper } from './Dashboard.styles';

export const Dashboard = () => {
	return (
		<Wrapper>
			<CarCard />
			<CarCard />
			<CarCard />
			<CarCard />
			<CarCard />
		</Wrapper>
	);
};
