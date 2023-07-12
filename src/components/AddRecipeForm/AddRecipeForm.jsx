import { Formik, Form } from 'formik';
import React, { useState} from 'react';

import MainButton from 'components/MainButton/MainButton';
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
    // formData.append('photo', file, file.name);
    // formData.append('title', values.title);
    // formData.append('about', values.about);
    // formData.append('category', values.category);
    // formData.append('time', values.time);
    // setSubmitting(true);
//     for(let [name, value] of formData) {
//   alert(`${name} = ${value}`); // key1=value1, потом key2=value2
// }
    dispatch(recipeOperations.addOwnRecipe(formData));
    // setSubmitting(false);

    // resetForm();
  };

  dispatch(recipeOperations.getMainPageRecipes());

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RecipeSchema}
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
