import { CarCardProps } from 'src/types/types';
import { useContext } from 'react';
import { CarsContext } from 'src/providers/CarsProvider';
import { CarInfoBox } from 'src/components/atoms/CarInfoBox/CarInfoBox';
import { CompareButton } from 'src/components/atoms/CompareButton/CompareButton';
import { TrashIcon } from 'src/assets/icons/TrashIcon';
import { ButtonsWrapper, CarImg, CarInfoWrapper, CarName, DeleteButton, Wrapper } from './CarCard.styles';

export const CarCard = ({
	isCompared = false,
	car: { id, brand, model, generation, productionStartYear, productionEndYear, facelift, imgUrl},
}: CarCardProps) => {
	const { removeCar, handleCompareStatus } = useContext(CarsContext);

	return (
		<Wrapper>
			<CarName>
				{brand} {model}
			</CarName>
			<CarImg src={imgUrl ? imgUrl : 'https://tritonvoice.co/wp-content/uploads/2020/12/Jaguar-car-770663.jpg'} alt={`${brand} ${model}`} />
			<CarInfoWrapper>
				<CarInfoBox title='Generation' content={generation} />
				<CarInfoBox title='Production years' content={`${productionStartYear} - ${productionEndYear}`} />
				<CarInfoBox title='Facelift' content={facelift} />
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
