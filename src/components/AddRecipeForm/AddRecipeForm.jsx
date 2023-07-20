import { Formik, Form } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import addRecipeValidationSchema from 'helpers/addRecipeValidationSchema';
import { recipeOperations } from 'redux/recipes/operations';
import {
  selectError,
  selectCurrentAddedOwnRecipe,
} from 'redux/recipes/recipesSelector';
import {
  showMessageToast,
  showErrorToast,
} from 'components/ReusableComponents/ToastCustom/showToast';
import { getUserInfo } from 'redux/auth/operations';
import MainButton from '../ReusableComponents/MainButton/';
import RecipeDescriptionFields from 'components/RecipeDescriptionFields/';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/';
import RecipePreparationFields from 'components/RecipePreparationFields/';
import { removeCurrentAddedOwnRecipe } from 'redux/recipes/recipesSlice';

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

  useEffect(() => {
    if (error) {
      showErrorToast('Oops... Something went wrong.');
      return;
    }
    if (currentAddedOwnRecipe) {
      dispatch(getUserInfo());
      showMessageToast('Congratulations! You have added a recipe.');
    }
    if (currentAddedOwnRecipe) {
      navigate(`/recipes/${currentAddedOwnRecipe}`);
    }

    return () => {
      dispatch(removeCurrentAddedOwnRecipe(''));
    };
  }, [error, currentAddedOwnRecipe, navigate, dispatch]);

  const handleFileChange = event => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
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
    setSubmitting(true);
    await dispatch(recipeOperations.addOwnRecipe(formData));
    setSubmitting(false);
    resetForm();
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
          bgColor={({ theme }) => theme.colors.mainButtonColor}
          textColor={({ theme }) => theme.colors.whiteColor}
          hoverStyles={{ styleFirst: 'color' }}
          hoverParams={{
            paramFirst: ({ theme }) => theme.colors.hoverMainButtonColor,
          }}
          focusParams={{
            paramFirst: ({ theme }) => theme.colors.hoverMainButtonColor,
          }}
          cofByMedia768={{ font: 1, padX: 1.17, padY: 1.333 }}
          cofByMedia1280={{ font: 1, padX: 1.17, padY: 1.333 }}
        />
      </Form>
    </Formik>
  );
};

export default AddRecipeForm;
