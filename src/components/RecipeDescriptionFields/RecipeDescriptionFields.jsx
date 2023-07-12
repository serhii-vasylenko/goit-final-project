import { Field, ErrorMessage } from 'formik';
import { categoryRecipes, timeCook } from 'const/const';
import {
  Wrapper,
  DescriptionFields,
  InputFileThumb,
  Image,
} from './RecipeDescriptionFields.styled';
import CamIcon from 'components/CamIcon/CamIcon';
import WrapCamIcon from 'components/WrapCamIcon/WrapCamIcon';


const RecipeDescriptionFields = ({ file, handleFileChange }) => {
  return (
    <DescriptionFields>
      <Field name="photo" type="file">
        {({ field }) => (
          <Wrapper>
            <label htmlFor={field.name}>
              <InputFileThumb>
                {file ? (
                  <Image src={URL.createObjectURL(file)} alt="Uploaded" />
                ) : (
                  <WrapCamIcon>
                    <CamIcon />
                    </WrapCamIcon>
                )}
              </InputFileThumb>
            </label>
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
          </Wrapper>
        )}
      </Field>
      <ErrorMessage name="photo" component="div" className="error-message" />
      <Field name="title" type="text" placeholder="Enter item title"></Field>
      <ErrorMessage name="title" component="div" className="error-message" />
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
        {timeCook.map(({ id, time }) => (
          <option value={time} key={id}>
            {time}
          </option>
        ))}
      </Field>
      <ErrorMessage name="time" component="div" className="error-message" />
    </DescriptionFields>
  );
};

export default RecipeDescriptionFields;
