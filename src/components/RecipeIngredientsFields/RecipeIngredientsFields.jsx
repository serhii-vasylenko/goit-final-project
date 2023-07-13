import { Field, FieldArray, ErrorMessage } from 'formik';
import { useSelector } from 'react-redux';
import { selectIngredientsList } from 'redux/ingredients/ingredientsSelector';
import Counter from 'components/Counter/Counter';
import ReactSelect from 'react-select';
import { Container, Title, StyledSelect, Wrap } from './RecipeIngredientsFields.styled';


const RecipeIngredientsFields = () => {
  
  const ingredientsList = useSelector(selectIngredientsList);
  
  const nameIngredients = ingredientsList.map(el => ({
    value: el._id,
    label: el.name,
  }));
  
  return (
    <Container>
      
        <Title>Ingredients</Title>
      
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
              <Counter pop={pop} push={push} ingredients={ingredients} />
              {ingredients.map((ingredient, index) => (
                <Wrap key={index}>
                  <ReactSelect
                  classNamePrefix='custom-select'
                    name={`ingredients[${index}].id`}
                    options={nameIngredients}
                    onChange={selectedOption =>
                      handleIngredientChange(index, selectedOption)
                    }
                  ></ReactSelect>
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
                </Wrap>
              ))}
            </div>
          );
        }}
      </FieldArray>
    </Container>
  );
};

export default RecipeIngredientsFields;
