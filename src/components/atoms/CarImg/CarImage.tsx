import { CarImageProps } from 'src/types/types';
import { StyledImage, StyledLink } from './CarImage.styles';

export const CarImage = ({ imgUrl, altText }: CarImageProps) => {
	return (
		<StyledLink href={imgUrl.big || imgUrl.medium || undefined} target='_blank'>
			<StyledImage
				srcSet={`${imgUrl.small || 'https://tritonvoice.co/wp-content/uploads/2020/12/Jaguar-car-770663.jpg'}, ${
					imgUrl.medium || 'https://tritonvoice.co/wp-content/uploads/2020/12/Jaguar-car-770663.jpg'
				} 2x`}
				src={imgUrl.small || 'https://tritonvoice.co/wp-content/uploads/2020/12/Jaguar-car-770663.jpg'}
				alt={altText || ''}
			/>
		</StyledLink>
	);
};
