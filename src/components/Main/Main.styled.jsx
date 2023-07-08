import styled from '@emotion/styled';

export const MainEl = styled.main`
width: 320px;
margin: 0 auto;
padding: 0 16px;
@media (min-width: 375px) {
		width: 375px;
	}
@media (min-width: 768px) {
        padding: 0 32px;
		width: 768px;
	}
	@media (min-width: 1260px) {
        padding: 0 20px;
		width: 1260px;
	}
`
