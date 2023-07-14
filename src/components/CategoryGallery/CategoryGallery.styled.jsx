import styled from "@emotion/styled"

export const Gallery = styled.ul`
display: flex;
flex-direction: column;
row-gap: 28px;
width: 100%;
padding-top: 32px;
padding-bottom: 100px;

@media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 200px;
    row-gap: 32px;
    column-gap: 32px;
}
@media (min-width: 1280px) {
    row-gap: 100px;
    column-gap: 14px;
}
`