import React, { useState, useEffect } from 'react';
import MotivationCard from 'components/ReusableComponents/MotivationCard/';
import { Container } from './MotivationToast.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { changeUserInfo } from 'redux/auth/operations';

const data = {
    isInformed: {
      newUser: null,
      daysInApp: false,
      addedRecipes: false,
      favoriteRecipes: false,
    },
  };

const MotivationToast = ({ text }) => {
  const { newUser, name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (newUser) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        dispatch(
          changeUserInfo({
            ...data,
            isInformed: {
              ...data.isInformed,
              newUser: false,
            },
          })
        );
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [newUser, dispatch]);

  const onCloseHandler = () => {
    setVisible(false);
    dispatch(
        changeUserInfo({
          ...data,
          isInformed: {
            ...data.isInformed,
            newUser: false,
          },
        })
      )
  };

  return (
    visible && (
      <Container>
        <MotivationCard text={`Hello and welcome, ${name}!`} onCloseHandler={onCloseHandler} />
      </Container>
    )
  );
};

export default MotivationToast;
