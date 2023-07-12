import { Field, ErrorMessage, useFormikContext  } from 'formik';
import React, { useState } from 'react';

const RecipePreparationFields = () => {
    
  const [textArea, setTextArea] = useState(['']);
  const formik = useFormikContext();

  const handleChange = event => {
    const value = event.target.value;
    setTextArea([value]);
    const valueArr = textArea[0].split("\n").map(el => el.length === 0? '\n': el);

    const updateArr = valueArr.length > 1 ? valueArr : [value];
    formik.setFieldValue('preparation', updateArr);

    
  };
  return (
    <div>
      <h2>Recipe Preparation</h2>
      <Field
        name="preparation"
        as="textarea"
        placeholder="Enter recipe"
        onChange={handleChange}
        value={textArea}
      ></Field>
      <ErrorMessage name="preparation" component="div" className="error-message" />
    </div>
  );
};

export default RecipePreparationFields;
