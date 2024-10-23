import { CarInfoBox } from 'src/components/atoms/CarInfoBox/CarInfoBox';
import { TrashIcon } from 'src/assets/icons/TrashIcon';
import { ButtonsWrapper, CarImg, CarInfoWrapper, CarName, DeleteButton, Wrapper } from './CarCard.styles';
import { CompareButton } from 'src/components/atoms/CompareButton/CompareButton';
import { useContext } from 'react';
import { CarsContext } from 'src/providers/CarsProvider';

type CarCardProps = {
	$isPreviewCard?: boolean;
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
export const CarCard = ({
	isPreviewCard = false,
	isCompared,
	handleCompareStatus,
	car: { id, brand, model, generation, productionStartYear, productionEndYear, facelift, imgUrl },
}: CarCardProps) => {
	const { removeCar } = useContext(CarsContext);

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
			{isPreviewCard ? null : (
				<ButtonsWrapper>
					<CompareButton isCompared={isCompared} onClick={() => handleCompareStatus(id)} />
					<DeleteButton aria-label='delete car' onClick={() => removeCar(id)}>
						<TrashIcon />
					</DeleteButton>
				</ButtonsWrapper>
			)}
		</Wrapper>
	);
};
