import { useState } from "react"
import { UserLogoModal } from "components/UserLogoModal/UserLogoModal"
import { UserWrapper, ImgContainer, UserImg, UserName } from "./UserLogo.styled"
import defaultImg from '../../images/user-icon.svg'
export const UserLogo = () => {
     const [isOpen, setIsOpen] = useState(false)
    const onModalClick = () => {
        setIsOpen(!isOpen)
    }
    return(
        <UserWrapper onClick={()=> onModalClick()}>
            <ImgContainer>
                <UserImg src={defaultImg} />
            </ImgContainer> 
            <UserName>Anonym</UserName>
            <UserLogoModal isOpen={isOpen} setIsOpen={setIsOpen} />

        </UserWrapper>
    
    )
}