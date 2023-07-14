import { useFormikContext } from 'formik';
import React, { useState } from 'react';
import {
  TitlePreparation,
  Container,
  TextArea,
} from './RecipePreparationFields.styled';
import FormError from 'components/ReusableComponents/FormError/FormError';

const RecipePreparationFields = () => {
  const [textArea, setTextArea] = useState(['']);

  const formik = useFormikContext();
  const { errors } = formik;

  const handleChange = event => {
    const value = event.target.value;
    setTextArea([value]);
    const valueArr = textArea[0]
      .split('\n')
      .map(el => (el.length === 0 ? '\n' : el));

    const updateArr = valueArr.length > 1 ? valueArr : [value];
    formik.setFieldValue('preparation', updateArr);
  };
  return (
    <Container>
      <TitlePreparation>Recipe Preparation</TitlePreparation>
      <TextArea
        name="preparation"
        as="textarea"
        placeholder="Enter recipe"
        onChange={handleChange}
        value={textArea}
        className={errors.preparation ? 'error' : ''}
      />
      <FormError name="preparation" />
    </Container>
  );
};

export default RecipePreparationFields;
