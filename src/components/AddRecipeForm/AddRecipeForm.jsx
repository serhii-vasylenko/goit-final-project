import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import addRecipeValidationSchema from 'helpers/addRecipeValidationSchema';
import { recipeOperations } from 'redux/recipes/operations';
import MainButton from '../ReusableComponents/MainButton/MainButton';
import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';

const initialValues = {
  photo: '',
  title: '',
  about: '',
  category: '',
  time: '',
  ingredients: [
    { id: '', measure: '' },
    { id: '', measure: '' },
    { id: '', measure: '' },
  ],
  preparation: [''],
};

const AddRecipeForm = () => {
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();

  const handleFileChange = event => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    console.log(values);

    const data = JSON.stringify({
      title: values.title,
      description: values.about,
      category: values.category,
      time: values.time,
      ingredients: values.ingredients,
      instructions: values.preparation,
    });

    const formData = new FormData();
    formData.append('recipeImg', file);
    formData.append('data', data);
    // setSubmitting(true);
    dispatch(recipeOperations.addOwnRecipe(formData));
    // setSubmitting(false);
    // resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addRecipeValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <RecipeDescriptionFields
          handleFileChange={handleFileChange}
          file={file}
        />
        <RecipeIngredientsFields />
        <RecipePreparationFields />
        <MainButton nameButton="Add" type={'submit'} />
      </Form>
    </Formik>
  );
};

export default AddRecipeForm;
