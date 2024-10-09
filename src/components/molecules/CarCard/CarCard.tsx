import { CarInfoBox } from 'src/components/atoms/CarInfoBox/CarInfoBox';
import { CarImg, CarInfoWrapper, CarName, Wrapper } from './CarCard.styles';

type CarCardProps = {
	car: {
		id: string;
		brand: string;
		model: string;
		generation: string;
		productionStartYear: number;
		productionEndYear: number;
		facelift: string;
		imgUrl: string;
	};
};

// export const CarCard = ({ brand, model, generation, productionStartYear, productionEndYear, facelift, imgUrl }: CarCardProps) => {
export const CarCard = ({ car: { brand, model, generation, productionStartYear, productionEndYear, facelift, imgUrl } }: CarCardProps) => {
	return (
		<Wrapper>
			<CarName>
				{brand} {model}
			</CarName>
			<CarImg src={imgUrl} alt={`${brand} ${model}`} />
			<CarInfoWrapper>
				<CarInfoBox title='Generation' content={generation} />
				<CarInfoBox title='Production years' content={`${productionStartYear} - ${productionEndYear}`} />
				<CarInfoBox title='Facelift' content={facelift} />
			</CarInfoWrapper>
		</Wrapper>
	);
};
