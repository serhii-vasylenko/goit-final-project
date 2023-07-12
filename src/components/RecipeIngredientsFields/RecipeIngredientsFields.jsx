import { Field, FieldArray, ErrorMessage } from 'formik';
import Select from 'react-select';


// const nameIngredients = ingredientsArr.map(el => ({
//   value: el._id,
//   label: el.name,
// }));

const RecipeIngredientsFields = () => {
  return (
    <div>
      <div>
        <h2>Ingredients</h2>
      </div>
      <FieldArray validateOnChange name="ingredients">
        {fieldArrayProps => {
          const { push, pop, remove, form } = fieldArrayProps;

          const { values, setFieldValue } = form;
          const { ingredients } = values;

          const handleIngredientChange = (index, selectedOption) => {
            const newIngredients = [...ingredients];
            newIngredients[index].id = selectedOption.value;
            setFieldValue('ingredients', newIngredients);
          };

          const handleCountChange = (index, value) => {
            const newIngredients = [...ingredients];
            newIngredients[index].measure = value;
            setFieldValue('ingredients', newIngredients);
          };

          return (
            <div>
              <div>
                <button
                  type="button"
                  onClick={() => pop({ id: '', measure: '' })}
                >
                  -
                </button>
                <span>{ingredients.length}</span>
                <button
                  type="button"
                  onClick={() => push({ id: '', measure: '' })}
                >
                  +
                </button>
              </div>
              {ingredients.map((ingredient, index) => (
                <div key={index}>
                  <Select
                    name={`ingredients[${index}].id`}
                    // options={nameIngredients}
                    onChange={selectedOption =>
                      handleIngredientChange(index, selectedOption)
                    }
                  ></Select>
                  <ErrorMessage
                    name={`ingredients[${index}].id`}
                    component="div"
                    className="error-message"
                  />
                  <Field
                    name={`ingredients[${index}].measure`}
                    type="text"
                    value={ingredients[index].measure || ''}
                    onChange={event => {
                      handleCountChange(index, event.target.value);
                    }}
                  ></Field>
                  <ErrorMessage
                    name={`ingredients[${index}].measure`}
                    component="div"
                    className="error-message"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      console.log(index);
                      remove(index);
                    }}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          );
        }}
      </FieldArray>
    </div>
  );
};

export default RecipeIngredientsFields;
