import { UserInfoModal } from "components/UserInfoModal/UserInfoModal"
import { useState } from "react"
import { UserWrapper, ImgContainer, UserImg, UserName } from "./UserLogo.styled"
import defaultImg from '../../images/user-icon.svg'
export const UserLogo = () => {
     const [isOpen, setIsOpen] = useState(false)
    const onModalClick = () => {
        setIsOpen(!isOpen)
        console.log(isOpen);
    }
    return(
        <UserWrapper onClick={()=> onModalClick()}>
            <ImgContainer>
                <UserImg src={defaultImg} />
            </ImgContainer> 
            <UserName>Anonym</UserName>
             {isOpen ? <UserInfoModal/> : null}

        </UserWrapper>
    
    )
}