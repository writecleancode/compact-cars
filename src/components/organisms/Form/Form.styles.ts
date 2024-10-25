import styled from 'styled-components';

export const Wrapper = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
	padding: 1.6rem;
	border: 1px solid #f1f1f1;
	box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.128);

	@media (min-width: 900px) {
		flex-grow: 1;
		max-width: 360px;
	}
`;
