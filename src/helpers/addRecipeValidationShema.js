import * as Yup from 'yup';
import cookTime from 'const/cookTime';

const timeValidation = cookTime.map(el => el.time);


const RecipeSchema = Yup.object().shape({
    photo: Yup.mixed()
    .required("You need to provide a file")
    .test("fileSize", "The file is too large", (value) => {
        // console.log("🚀 ~ file: AddRecipeForm.jsx:15 ~ .test ~ value:", value)
        return value && value[0].size <= 2000000;
    })
    .test("type", "Only the following formats are accepted: .jpeg, .jpg, .bmp, .pdf and .doc", (value) => {
        return value && (
            value[0].type === "image/jpeg" ||
            value[0].type === "image/bmp" ||
            value[0].type === "image/png"
        );
    }),
    title: Yup.string().required('Please enter the recipe title').matches(/[а-яА-Яa-zA-Z]+/, 'Title must contain letters'),
    about: Yup.string().required('Please describe the recipe').matches(/[а-яА-Яa-zA-Z]+/, 'Describe must contain letters'),
    category: Yup.string()
      .required('Please choose a category for your recipe')
      .oneOf(category),
    time: Yup.string().required('Please select the cooking time').oneOf(timeValidation),
    ingredients: Yup.array().of(
      Yup.object().shape({
        ingredient: Yup.string().required('Please select an ingredient'),   //.oneOf(category),
        count: Yup.string().required('Please enter the count'),
      })
    ),
    preparation: Yup.array()
      .of(Yup.string().required('Please enter the recipe'))
      .test('notEmptyStrings', 'Please enter the recipe', function (value) {
        return (
          value &&
          value[0] &&
          value[0].length > 0 &&
          /[^\s\n]/.test(value[0]) &&
          value.every(val => val && val.length > 0)
        );
      }),
  });

  export default RecipeSchema;