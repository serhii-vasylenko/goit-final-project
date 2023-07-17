import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import addRecipeValidationSchema from 'helpers/addRecipeValidationSchema';
import { recipeOperations } from 'redux/recipes/operations';
import { selectError, selectCurrentAddedOwnRecipe } from 'redux/recipes/recipesSelector';
import {
  showMessageToast,
  showErrorToast,
} from 'components/ReusableComponents/ToastCustom/showToast';
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

  const navigate = useNavigate();

  const currentAddedOwnRecipe = useSelector(selectCurrentAddedOwnRecipe);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const handleFileChange = event => {
    const file = event.target.files[0];
    setFile(file);
    console.log(file);
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
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

    await dispatch(recipeOperations.addOwnRecipe(formData));

    if (error) {
      showErrorToast('Oops... Something went wrong.');
      return;
    }

    showMessageToast('Congratulations! You have added a recipe.');
    // resetForm();

    if (currentAddedOwnRecipe){
      console.log(currentAddedOwnRecipe);
    navigate(`recipes/${currentAddedOwnRecipe}`);
  }
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
        <MainButton
          nameButton="Add"
          type={'submit'}
          cofByMedia768={{ font: 1, padX: 1.17, padY: 1.333 }}
          cofByMedia1280={{ font: 1, padX: 1.17, padY: 1.333 }}
        />
      </Form>
    </Formik>
  );
};

export default AddRecipeForm;
