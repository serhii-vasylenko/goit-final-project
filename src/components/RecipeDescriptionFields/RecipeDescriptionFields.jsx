import { Field, ErrorMessage, useFormikContext } from 'formik';
import cookTime from 'const/cookTime';
import { useSelector } from 'react-redux';
import { selectCategoryList } from 'redux/recipes/recipesSelector';

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
  ErrorMess,
} from './RecipeDescriptionFields.styled';

const RecipeDescriptionFields = ({ file, handleFileChange }) => {

  const categoryRecipes = useSelector(selectCategoryList);
  const { errors } = useFormikContext();

  return (
    <DescriptionFields>
      <Field name="photo" type="file">
        {({ field }) => (
          <ImgWrapper>
            <ImgLabel htmlFor={field.name}>
              <InputFileThumb>
                {file ? (
                  <Image src={URL.createObjectURL(file)} alt="Uploaded" />
                ) : (
                  <p>Hello World!</p>
                )}
              </InputFileThumb>
            </ImgLabel>
            <input
              {...field}
              accept="image/*"
              type="file"
              id={field.name}
              style={{ display: 'none' }}
              onChange={event => {
                field.onChange(event);
                handleFileChange(event);
              }}
            />
          </ImgWrapper>
        )}
      </Field>
      <ErrorMessage name="photo" component="div" className="error-message" />
     <FieldWrapper>
      <FieldContainer className={errors.title ? 'error' : ''}>
      <FieldLabel htmlFor="title">Enter item title</FieldLabel>
      <Input name="title" id="title" type="text"/>
      <ErrorMess name="title" className="error-message" />
      </FieldContainer>


      <Field name="about" type="text" placeholder="Enter about recipe"></Field>
      <ErrorMessage name="about" component="div" className="error-message" />

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
            {time}
          </option>
        ))}
      </Field>
      <ErrorMessage name="time" component="div" className="error-message" />
      </FieldWrapper>
    </DescriptionFields>
  );
};

export default RecipeDescriptionFields;
