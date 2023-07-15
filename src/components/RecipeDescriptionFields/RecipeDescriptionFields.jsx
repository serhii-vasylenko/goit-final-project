import { Field, ErrorMessage, useFormikContext, getIn } from 'formik';
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
  PhotoFieldWrapper,
  Select,
} from './RecipeDescriptionFields.styled';
import { hasError } from 'helpers/hasError';

const RecipeDescriptionFields = ({ file, handleFileChange }) => {
  const categoryRecipes = useSelector(selectCategoryList);
  const categories = categoryRecipes.map(el => ({
    value: el._id,
    label: el.name,
  }));

 
  const { setFieldValue, errors, touched } = useFormikContext();

  return (
    <DescriptionFields>
      <PhotoFieldWrapper>
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
                        <use href={`${sprite}#capture`}></use>
                        <use
                          href={`${sprite}#photo-camera`}
                          width={24}
                          height={24}
                          x={20}
                          y={20}
                        ></use>
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
                    setFieldValue('photo', event.target.files[0]);
                    handleFileChange(event);
                  }}
                />
              </ImgWrapper>
            );
          }}
        </Field>
        <FormError name="photo" />
      </PhotoFieldWrapper>

      <FieldWrapper>
        <FieldContainer
          className={hasError('title', getIn, errors, touched) ? 'error' : ''}
        >
          <FieldLabel htmlFor="title">Enter item title</FieldLabel>
          <Input name="title" id="title" type="text" />
          <FormError name="title" />
        </FieldContainer>

        <FieldContainer
          className={hasError('about', getIn, errors, touched) ? 'error' : ''}
        >
          <FieldLabel htmlFor="about">Enter about recipe</FieldLabel>
          <Input name="about" id="about" type="text" />
          <FormError name="about" />
        </FieldContainer>

        <FieldContainer
          className={
            hasError('category', getIn, errors, touched) ? 'error' : ''
          }
        >
          <FieldLabel htmlFor="category">Category</FieldLabel>
          
          <Select
            name="category"
            as="select"
            options={categories}
            classNamePrefix="custom-select"
          >
            {categoryRecipes.map(({ _id, name }) => (
              <option value={name} key={_id}>
                {name}
              </option>
            ))}
          </Select>
          
          <FormError name="category" />
        </FieldContainer>

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
