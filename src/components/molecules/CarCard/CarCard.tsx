import { CarCardProps } from 'src/types/types';
import { useContext } from 'react';
import { CarsContext } from 'src/providers/CarsProvider';
import { CarImage } from 'src/components/atoms/CarImg/CarImage';
import { CarInfoBox } from 'src/components/atoms/CarInfoBox/CarInfoBox';
import { CompareButton } from 'src/components/atoms/CompareButton/CompareButton';
import { TrashIcon } from 'src/assets/icons/TrashIcon';
import { ButtonsWrapper, CarInfoWrapper, CarName, DeleteButton, Wrapper } from './CarCard.styles';

export const CarCard = ({
	isCompared = false,
	car: { id, brand, model, generation, productionStartYear, productionEndYear, facelift, img },
}: CarCardProps) => {
	const { removeCar, handleCompareStatus } = useContext(CarsContext);

	return (
		<Wrapper>
			<CarName>
				{brand || 'unknown'} {model || 'unknown'}
			</CarName>
			<CarImage imgUrl={img} altText={`${brand} ${model}`} />
			<CarInfoWrapper>
				<CarInfoBox title='Generation' content={generation || 'unknown'} />
				<CarInfoBox title='Production years' content={`${productionStartYear} - ${productionEndYear}`} />
				<CarInfoBox title='Facelift' content={facelift || 'unknown'} />
			</CarInfoWrapper>
			{id ? (
				<ButtonsWrapper>
					<CompareButton isCompared={isCompared} onClick={() => handleCompareStatus(id)} />
					<DeleteButton aria-label='delete car' onClick={() => removeCar(id)}>
						<TrashIcon />
					</DeleteButton>
				</ButtonsWrapper>
			) : null}
		</Wrapper>
	);
};
