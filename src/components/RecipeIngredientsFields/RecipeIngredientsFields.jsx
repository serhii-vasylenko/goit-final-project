import { Field, FieldArray, ErrorMessage } from 'formik';
import Select from 'react-select';

const ingredientsArr = [
  {
    "_id": "640c2dd963a319ea671e3668",
    "name": "Basil Leaves",
    "desc": "Basil, also called great basil, is a culinary herb of the family Lamiaceae (mints).\r\n",
    "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/c8mwndz8kbgb29wjn4eg.png"
  },
  {
    "_id": "640c2dd963a319ea671e365c",
    "name": "Salmon",
    "desc": "Salmon is the common name for several species of ray-finned fish in the family Salmonidae. Other fish in the same family include trout, char, grayling and whitefish. Salmon are native to tributaries of the North Atlantic (genus Salmo) and Pacific Ocean (genus Oncorhynchus). Many species of salmon have been introduced into non-native environments such as the Great Lakes of North America and Patagonia in South America. Salmon are intensively farmed in many parts of the world.\r\n\r\nTypically, salmon are anadromous: they hatch in fresh water, migrate to the ocean, then return to fresh water to reproduce. However, populations of several species are restricted to fresh water through their lives. Folklore has it that the fish return to the exact spot where they hatched to spawn. Tracking studies have shown this to be mostly true. A portion of a returning salmon run may stray and spawn in different freshwater systems; the percent of straying depends on the species of salmon. Homing behavior has been shown to depend on olfactory memory. Salmon date back to the Neogene.",
    "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564123/bwzvxyjxozyankmd6ky8.png"
  },
  {
    "_id": "640c2dd963a319ea671e367e",
    "name": "Butter",
    "desc": "A dairy product made from churning cream or milk, with a high fat content and a creamy, rich flavor that is often used in cooking and baking.",
    "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564674/ovea5weymaecrnbwxuq9.png"
  },
  {
    "_id": "640c2dd963a319ea671e3660",
    "name": "Apple Cider Vinegar",
    "desc": "Apple cider vinegar, or cider vinegar, is a vinegar made from fermented apple juice, and used in salad dressings, marinades, vinaigrettes, food preservatives, and chutneys. It is made by crushing apples, then squeezing out the juice. Bacteria and yeast are added to the liquid to start the alcoholic fermentation process, which converts the sugars to alcohol. In a second fermentation step, the alcohol is converted into vinegar by acetic acid-forming bacteria (Acetobacter species). Acetic acid and malic acid combine to give vinegar its sour taste. Apple cider vinegar has no medicinal or nutritional value. There is no high-quality clinical evidence that regular consumption of apple cider vinegar helps to maintain or lose body weight, or is effective to manage blood glucose and lipid levels.",
    "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png"
  },
  {
    "_id": "640c2dd963a319ea671e366b",
    "name": "Bay Leaves",
    "desc": "The bay leaf is an aromatic leaf commonly used in cooking. It can be used whole, or as dried and ground.",
    "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/oucufhpi7o8xtvliebgs.png"
  },
  {
    "_id": "640c2dd963a319ea671e3675",
    "name": "Bowtie Pasta",
    "desc": "A type of pasta with a distinctive bowtie or butterfly shape that is often used in pasta salads and other cold dishes.",
    "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564217/sv5vhl5fpnitfl5kpgpj.png"
  },
  {
    "_id": "640c2dd963a319ea671e3679",
    "name": "Breadcrumbs",
    "desc": "Small pieces of bread that have been dried and ground into a coarse powder, often used as a coating or filler in recipes such as meatballs, stuffing, and casseroles.",
    "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564673/z8wxajen11evzfkuqem2.png"
  },
  {
    "_id": "640c2dd963a319ea671e3678",
    "name": "Bread",
    "desc": "A staple food made from flour, water, and yeast or other leavening agents, which is typically baked in an oven and used for sandwiches, toast, and other dishes.",
    "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564674/eunxtuoyla4xddjr6rvg.png"
  },
  {
    "_id": "640c2dd963a319ea671e3681",
    "name": "Canned Tomatoes",
    "desc": "Tomatoes that have been preserved in a can or jar, typically with added salt and sometimes other seasonings, and used in a variety of recipes such as soups, stews, sauces, and chili.",
    "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564675/fmctvplqyjfnsocsk7sq.png"
  },
  {
    "_id": "640c2dd963a319ea671e3693",
    "name": "Chicken Breast",
    "desc": "A cut of chicken meat that comes from the breast of the bird. It is lean and versatile, and can be cooked in a variety of ways, such as grilling, roasting, or pan-frying.",
    "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564674/uj8jffcs4p6qn4vazade.png"
  },
  {
    "_id": "640c2dd963a319ea671e369b",
    "name": "Chilli",
    "desc": "A spicy pepper used to add heat and flavor to dishes, commonly used in Mexican, Indian, and Thai cuisine.",
    "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564674/j7vofx2o5ywbs1ux0ens.png"
  },
  {
    "_id": "640c2dd963a319ea671e36a2",
    "name": "Chorizo",
    "desc": "A spicy sausage that is commonly used in Spanish, Mexican, and Portuguese cuisine, made with pork, garlic, and smoked paprika.",
    "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564743/che1ta2kgkfzz8mcqvzg.png"
  },
  {
    "_id": "640c2dd963a319ea671e36a9",
    "name": "Cocoa",
    "desc": "A powder made from roasted and ground cocoa beans, commonly used in baking to add chocolate flavor to desserts.",
    "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564743/kkswaov9adifmmvah1jm.png"
  },
  {
    "_id": "640c2dd963a319ea671e36b2",
    "name": "Corn Tortillas",
    "desc": "A type of flatbread made from cornmeal that is commonly used in Mexican cuisine. They are gluten-free and can be used to make tacos, enchiladas, and other dishes.",
    "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564743/mojwazuinyg3fonpkchb.png"
  },
  {
    "_id": "640c2dd963a319ea671e36bc",
    "name": "Dark Soft Brown Sugar",
    "desc": "Similar to dark brown sugar, but with a higher moisture content and softer texture. It is also rich in molasses and has a deep, complex flavor.",
    "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564743/bonybfriap3cqkrpzwa5.png"
  },
  {
    "_id": "640c2dd963a319ea671e36ba",
    "name": "Curry Powder",
    "desc": "A blend of spices commonly used in Indian cuisine. It typically includes turmeric, cumin, coriander, ginger, and other spices, and can vary in spiciness and flavor depending on the blend.",
    "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564743/mkvl5ajnzgpv0twvph9c.png"
  }
]

const nameIngredients = ingredientsArr.map(el => ({
  value: el._id,
  label: el.name,
}));

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
                    options={nameIngredients}
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
