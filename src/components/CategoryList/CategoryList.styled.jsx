import styled from "@emotion/styled";

const Categories = styled.ul`
display: flex;
align-items: center;
padding-top: 100px;

`
const Category = styled.li`
position: relative;
color: #BDBDBD;
font-size: 18px;
font-weight: 400;
line-height: 1;
padding-bottom: 27px;
text-transform: capitalize;
transition: color var(--transition-duration) var(--timing-function);

&:not(:last-child){
    margin-right: 55px;

}
&:hover,
&.active{
    color: var(--accent-color);
    & span{
    height: 2px;
}
}

}
`
const ItemLine = styled.span`
position: absolute;
bottom: -1px;
left: 0;
display: block;
width: 100%;
background-color: currentColor;
`
const Line = styled.span`
display: block;
width: 1240px;
height: 1px;
background: #E0E0E0;
`
export{Categories, Category, Line, ItemLine}