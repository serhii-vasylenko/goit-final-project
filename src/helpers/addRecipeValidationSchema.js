import * as Yup from 'yup';
import cookTime from 'const/cookTime';

const timeValidation = cookTime.map(el => el.time);


const addRecipeValidationSchema = Yup.object().shape({
  photo: Yup.mixed()
    .required("You need to provide a file")
    .test("fileSize", "To limit the file size to a maximum of 3MB", (value) => {
        return value.size <= 3000000;
    })
    .test("type", "Only the following formats are accepted: .jpeg, .jpg, .bmp, .png, .svg, and .webp", (value) => {
      return value && (
        value.type === "image/jpeg" ||
        value.type === "image/bmp" ||
        value.type === "image/png" 
      );
    }),
    title: Yup.string().required('Please enter the recipe title').matches(/[а-яА-Яa-zA-Z]+/, 'Title must contain letters'),
    about: Yup.string().required('Please describe the recipe').matches(/[а-яА-Яa-zA-Z]+/, 'Describe must contain letters'),
    category: Yup.string()
      .required('Please choose a category for your recipe'),  //.oneOf(category),
    time: Yup.string().required('Please select the cooking time').oneOf(timeValidation),
    ingredients: Yup.array().of(
      Yup.object().shape({
        id: Yup.string().required('Please select an ingredient'),  //.oneOf(category),
        measure: Yup.string().required('Please enter the measure'),
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

  export default addRecipeValidationSchema;