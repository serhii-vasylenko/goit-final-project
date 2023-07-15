import MainButton from '../MainButton/MainButton';
import sprite from '../../../images/sprite.svg';
import {
  Card,
  Description,
  FlexContainer,
  Info,
  Image,
  ImageContainer,
  Time,
  Title,
  TitleContainer,
  Trash,
  TrashIcon,
} from './RecipeCardItem.styled';
import { convertMinutesToHours } from 'helpers/time-formatter';
import { useNavigate } from 'react-router-dom';
const RecipeCardItem = ({
  _id,
  thumb,
  title,
  description,
  time,
  onDeleteHandler,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <ImageContainer>
          <Image src={thumb} />
        </ImageContainer>
        <Info>
          <TitleContainer>
            <Title>{title}</Title>
            <Trash onClick={() => onDeleteHandler(_id)}>
              <TrashIcon width="30" height="30" fill="none">
                <use href={`${sprite}#trash`}></use>
              </TrashIcon>
            </Trash>
          </TitleContainer>
          <Description>{description}</Description>
          <FlexContainer>
            <Time>{convertMinutesToHours(Number(time))}</Time>
            <MainButton
              cofByMedia1280={{ padX: 3, padY: 3.14, font: 1.6 }}
              cofByMedia768={{ padX: 2, padY: 2.28, font: 1.4 }}
              fontSize="10px"
              padding={{
                paddingTop: '6px',
                paddingBottom: '6px',
                paddingLeft: '14px',
                paddingRight: '14px',
              }}
              nameButton="See recipe"
              onClick={() => navigate(`/recipes/${_id}`)}
            ></MainButton>
          </FlexContainer>
        </Info>
      </Card>
    </>
  );
};

export default RecipeCardItem;
