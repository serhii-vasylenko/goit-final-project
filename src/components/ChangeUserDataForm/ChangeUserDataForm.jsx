import { ImgContainer, UserImg, SaveBtn, AddPhotoBtn, Plus, InputFile } from './ChangeUserDataForm.styled';
import defaultImg from '../../images/default-img.png';
import { FieldChangeName } from 'components/FieldChangeName/FieldChangeName';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeUserName, uploadAvatar } from 'redux/auth/operations';
export const ChangeUserDataForm = () => {
    // const urerImg = useSelector()
      const [file, setFile] = useState(null);
      const [name, setName] = useState('');
      const dispatch = useDispatch();

    const handleFileChange = event => {
        const file = event.target.files[0];
        setFile(file)
    };
    const onFormSubmit = () => {
        dispatch(changeUserName(name))
        dispatch(uploadAvatar(file))
    }

    return <form onSubmit={() => onFormSubmit()}>
        
                <div style={{position: 'relative'}}>
                <ImgContainer>
                    {file ? ( <UserImg src={URL.createObjectURL(file)} alt="Uploaded" />) : (
                    <UserImg src={defaultImg} />)}
                </ImgContainer>
                <AddPhotoBtn>
                    <Plus />
                    <InputFile type='file' name='photo' onChange={(e)=> handleFileChange(e)}/>
                </AddPhotoBtn>
            </div>
        <FieldChangeName setName={setName} />
            <SaveBtn type='submit'>Save changes</SaveBtn>
        </form>
}