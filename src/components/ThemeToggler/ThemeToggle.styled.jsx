import styled from "@emotion/styled";

export const Toggle = styled.div`
display: ${props => props.nav ? 'block' : 'none'};
position: absolute;
left: 16px; 
bottom:18px;
 width: 30px;
 height: 29px;
 border: 1px solid tomato;

 @media (min-width: 1280px) {
        display: block;
        position: static;
	}

`