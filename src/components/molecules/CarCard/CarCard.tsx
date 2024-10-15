import { CarInfoBox } from 'src/components/atoms/CarInfoBox/CarInfoBox';
import { TrashIcon } from 'src/assets/icons/TrashIcon';
import { ButtonsWrapper, CarImg, CarInfoWrapper, CarName, DeleteButton, Wrapper } from './CarCard.styles';
import { CompareButton } from 'src/components/atoms/CompareButton/CompareButton';

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
	$isPreviewCard = false,
	handleCompareStatus,
	car: { id, brand, model, generation, productionStartYear, productionEndYear, facelift, imgUrl, isCompared },
}: CarCardProps) => {
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
			<ButtonsWrapper>
				<CompareButton isCompared={isCompared} onClick={() => handleCompareStatus(id)} />
				{$isPreviewCard ? null : (
					<DeleteButton aria-label='delete car'>
						<TrashIcon />
					</DeleteButton>
					// {$isPreviewCard ? null : (
					// 	<DeleteButton onClick={() => handleRemoveCar(id)} aria-label='delete car'>
					// 		<TrashIcon />
					// 	</DeleteButton>
					// )}
				)}
			</ButtonsWrapper>
		</Wrapper>
	);
};
