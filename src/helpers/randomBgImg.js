import img1 from '../components/ReusableComponents/MotivationCard/images/1.jpg';
import img2 from '../components/ReusableComponents/MotivationCard/images/2.jpg';
import img3 from '../components/ReusableComponents/MotivationCard/images/3.jpg';
import img4 from '../components/ReusableComponents/MotivationCard/images/4.jpg';

const images = [
  img1,
  img2,
  img3,
  img4,
];

export const randomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

