import { FieldArray, getIn } from 'formik';
import { useSelector } from 'react-redux';
import { selectIngredientsList } from 'redux/ingredients/ingredientsSelector';
import { hasError } from 'helpers/hasError';
import Counter from 'components/Counter/Counter';
import sprite from '../../images/AddRecipePage/sprite.svg';
import FormError from 'components/ReusableComponents/FormError/FormError';
import {
  Container,
  Title,
  StyledSelect,
  Wrap,
  Button,
  Svg,
  MeasureField,
  SelectContainer,
  MeasureFieldContainer,
  BorderError,
} from './RecipeIngredientsFields.styled';

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
          const { push, remove, form } = fieldArrayProps;

          const { values, setFieldValue, errors, touched } = form;
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
              <Counter remove={remove} push={push} ingredients={ingredients} />
              {ingredients.map((ingredient, index) => (
                <Wrap key={index}>
                  <SelectContainer>
                    <BorderError
                      className={
                        hasError(
                          `ingredients[${index}].measure`,
                          getIn,
                          errors,
                          touched
                        )
                          ? 'error'
                          : ''
                      }
                    >
                      <StyledSelect
                        className={
                          hasError(
                            `ingredients[${index}].id`,
                            getIn,
                            errors,
                            touched
                          )
                            ? 'error'
                            : ''
                        }
                        classNamePrefix="custom-select"
                        name={`ingredients[${index}].id`}
                        placeholder={'Select ingredient'}
                        options={nameIngredients}
                        onChange={selectedOption => {
                          handleIngredientChange(index, selectedOption);
                        }}
                      />
                    </BorderError>
                    <FormError
                      name={`ingredients[${index}].id`}
                      style={{ marginTop: '5px' }}
                    />
                  </SelectContainer>

                  <MeasureFieldContainer>
                    <MeasureField
                      name={`ingredients[${index}].measure`}
                      type="text"
                      autoComplete="off"
                      value={ingredients[index].measure || ''}
                      onChange={event => {
                        handleCountChange(index, event.target.value);
                      }}
                      placeholder={'Enter measure'}
                      className={
                        hasError(
                          `ingredients[${index}].measure`,
                          getIn,
                          errors,
                          touched
                        )
                          ? 'error'
                          : ''
                      }
                    />
                    <FormError
                      name={`ingredients[${index}].measure`}
                      style={{ marginTop: '5px' }}
                    />
                  </MeasureFieldContainer>

                  <Button
                    type="button"
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    <Svg width={18} height={18}>
                      <use href={`${sprite}#delete-button`}></use>
                    </Svg>
                  </Button>
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
