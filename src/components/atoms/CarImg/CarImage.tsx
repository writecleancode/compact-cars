import { CarImageProps } from 'src/types/types';
import { StyledImage, StyledLink } from './CarImage.styles';

export const CarImage = ({ imgUrl, altText }: CarImageProps) => {
	return (
		<StyledLink href={imgUrl.big || imgUrl.medium || undefined} target='_blank'>
			<StyledImage
				srcSet={`${imgUrl.small || 'src/assets/img/unknown_car.jpg'}, ${imgUrl.medium || 'src/assets/img/unknown_car.jpg'} 2x`}
				src={imgUrl.small || 'src/assets/img/unknown_car.jpg'}
				alt={altText || ''}
			/>
		</StyledLink>
	);
};
