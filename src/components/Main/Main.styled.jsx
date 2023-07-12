import styled from '@emotion/styled';

export const MainEl = styled.section`
min-width: 320px;
margin: 0 auto;
padding: 0 16px;
padding-bottom: ${props => props.paddingBottom === '100px' ? '100px' : '0'};

@media (min-width: 375px) {
		width: 375px;
	}
@media (min-width: 768px) {
        padding: 0 32px;
		padding-bottom: ${props => props.paddingBottom === '100px' ? '100px' : '0'};
		width: 768px;
	}
	@media (min-width: 1280px) {
        padding: 0 20px;
		padding-bottom: ${props => props.paddingBottom === '100px' ? '100px' : '0'};
		width: 1280px;
	}
`
