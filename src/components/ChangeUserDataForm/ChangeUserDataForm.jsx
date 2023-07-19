import {Form, ImgContainer, UserImg, SaveBtn, AddPhotoBtn, Plus, InputFile } from './ChangeUserDataForm.styled';
import defaultImg from '../../images/default-img.png';
import { FieldChangeName } from 'components/FieldChangeName/FieldChangeName';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { changeUserData } from 'redux/auth/operations';

export const ChangeUserDataForm = ({setEditIsOpen}) => {
    const { user } = useSelector(selectAuth);
    const [file, setFile] = useState(null);
    const [name, setName] = useState(user.name);
    const dispatch = useDispatch();

    const handleFileChange = e => {
        const file = e.target.files[0];
        setFile(file)
    };
    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('avatar', file);
        formData.append('name', JSON.stringify(name))
        dispatch(changeUserData(formData))
        setEditIsOpen(false)
    }

    return <Form onSubmit={e => onFormSubmit(e)}>
            <div style={{position: 'relative'}}>
                <ImgContainer>
                    {file ? ( <UserImg src={URL.createObjectURL(file)} alt="Uploaded" />) : (
                    <UserImg src={user.avatarURL ? user.avatarURL : defaultImg} />)}
                </ImgContainer>
                <AddPhotoBtn>
                    <Plus />
                    <InputFile type='file' accept="image/*" onChange={(e)=> handleFileChange(e)}/>
                </AddPhotoBtn>
            </div>
            <FieldChangeName setName={setName} />
            <SaveBtn type='submit'>Save changes</SaveBtn>
        </Form>
}