import { Field, ErrorMessage, useFormikContext } from 'formik';
import cookTime from 'const/cookTime';
import { useSelector } from 'react-redux';
import { selectCategoryList } from 'redux/recipes/recipesSelector';
import FormError from 'components/ReusableComponents/FormError/FormError';
import sprite from '../../images/AddRecipePage/sprite.svg';
import {
  ImgWrapper,
  DescriptionFields,
  InputFileThumb,
  Image,
  ImgLabel,
  FieldWrapper,
  Input,
  FieldContainer,
  FieldLabel,
} from './RecipeDescriptionFields.styled';

const RecipeDescriptionFields = ({ file, handleFileChange }) => {
 
  const categoryRecipes = useSelector(selectCategoryList);
  const { setFieldValue, errors } = useFormikContext();
 
  return (
    <DescriptionFields>
      <Field name="photo" type="file">
        {({ field }) => {
          return (
            <ImgWrapper>
              <ImgLabel htmlFor={field.name}>
                <InputFileThumb>
                  {file ? (
                    <Image src={URL.createObjectURL(file)} alt="Uploaded" />
                  ) : (
                    <svg width={64} height={64}>
                    <use href={`${sprite}#capture`} ></use>
                    <use href={`${sprite}#photo-camera`} width={24} height={24} x={20} y={20}></use>
                  </svg>
                    )}
                </InputFileThumb>
              </ImgLabel>
              <input
        
                accept="image/*"
                type="file"
                id={field.name}
                style={{ display: 'none' }}
                onChange={event => {
                  setFieldValue('photo', event.target.files[0])
                  handleFileChange(event);
                }}
              />
            </ImgWrapper>
          )
        }}
      </Field>
     <ErrorMessage name="photo" component="div" className="error-message" />

     <FieldWrapper>
     <FormError name='title' />
      <FieldContainer className={errors.title ? 'error' : ''}>
       <FieldLabel htmlFor="title">Enter item title</FieldLabel>
      <Input name="title" id="title" type="text"/>
      </FieldContainer> 
      <FormError name='about' />
      <FieldContainer className={errors.about ? 'error' : ''}>
        <FieldLabel htmlFor="about">Enter about recipe</FieldLabel>
      <Input name="about" id="about" type="text"/>
      </FieldContainer> 

      {/* <FieldContainer className={errors.about ? 'error' : ''}>
        <FieldLabel htmlFor="about">Enter about recipe</FieldLabel>
        <Input name="about" id="about" type="text" />
        
      </FieldContainer>
      <FormError name="about" component="div" />  */}
    
      <Field name="category" as="select">
        <option value="">Select option</option>
        {categoryRecipes.map(({ _id, name }) => (
          <option value={name} key={_id}>
            {name}
          </option>
        ))}
      </Field>
      <ErrorMessage name="category" component="div" className="error-message" />

      <Field name="time" as="select">
        <option value="">Select time</option>
        {cookTime.map(({ id, time }) => (
          <option value={time} key={id}>
            {`${time} min`}
          </option>
        ))}
      </Field>
      <ErrorMessage name="time" component="div" className="error-message" />

      </FieldWrapper>
    </DescriptionFields>
  );
};

export default RecipeDescriptionFields;
