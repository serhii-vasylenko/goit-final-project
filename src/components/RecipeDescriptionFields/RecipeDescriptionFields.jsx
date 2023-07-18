import { Field, useFormikContext, getIn } from 'formik';
import { useSelector } from 'react-redux';

import cookTime from 'const/cookTime';
import FormError from 'components/ReusableComponents/FormError/FormError';
import sprite from '../../images/AddRecipePage/sprite.svg';

import { selectCategoryList } from 'redux/recipes/recipesSelector';
import { hasError } from 'helpers/hasError';
import { convertMinutesToHours } from 'helpers/time-formatter';
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

const RecipeDescriptionFields = ({ file, handleFileChange }) => {
  const categoryRecipes = useSelector(selectCategoryList);
  const categories = categoryRecipes.map(el => ({
    value: el._id,
    label: el.name,
  }));

  const time = cookTime.map(el => ({
    value: el.time,
    label: convertMinutesToHours(el.time),
  }));

  const { setFieldValue, errors, touched } = useFormikContext();

  return (
    <DescriptionFields>
      <PhotoFieldWrapper>
        <Field name="photo" type="file">
          {({ field }) => {
            return (
              <ImgWrapper
                className={
                  hasError('title', getIn, errors, touched) ? 'error' : ''
                }
              >
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
        <FormError name="photo" style={{ paddingTop: '5px' }} />
      </PhotoFieldWrapper>

      <FieldWrapper>
        <FieldContainer
          className={hasError('title', getIn, errors, touched) ? 'error' : ''}
        >
          <FieldLabel htmlFor="title">Enter item title</FieldLabel>
          <Input name="title" id="title" type="text" />
          <FormError name="title" style={{ paddingTop: '5px' }} />
        </FieldContainer>

        <FieldContainer
          className={hasError('about', getIn, errors, touched) ? 'error' : ''}
        >
          <FieldLabel htmlFor="about">Enter about recipe</FieldLabel>
          <Input name="about" id="about" type="text" />
          <FormError name="about" style={{ paddingTop: '5px' }} />
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
            isSearchable={false}
            onChange={event => {
              setFieldValue('category', event.label);
            }}
          >
            {categoryRecipes.map(({ _id, name }) => (
              <option value={name} key={_id}>
                {name}
              </option>
            ))}
          </Select>

          <FormError
            name="category"
            style={{
              position: 'absolute',
              ...(window.innerWidth >= 768
                ? { bottom: '-21px' }
                : { bottom: '-19px' }),
            }}
          />
        </FieldContainer>

        <FieldContainer
          className={hasError('time', getIn, errors, touched) ? 'error' : ''}
        >
          <FieldLabel htmlFor="time">Cooking time</FieldLabel>

          <Select
            name="time"
            as="select"
            options={time}
            classNamePrefix="custom-select"
            onChange={event => setFieldValue('time', event.value)}
            isSearchable={false}
          >
            {cookTime.map(({ id, time }) => (
              <option value={time} key={id}>
                {time}
              </option>
            ))}
          </Select>

          <FormError
            name="time"
            style={{
              position: 'absolute',
              ...(window.innerWidth >= 768
                ? { bottom: '-21px' }
                : { bottom: '-19px' }),
            }}
          />
        </FieldContainer>
      </FieldWrapper>
    </DescriptionFields>
  );
};

export default RecipeDescriptionFields;
