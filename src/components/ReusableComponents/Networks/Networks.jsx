import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs';
import { NetworkList, NetworkListItem, Link } from './Networks.styled';

const Networks = ({
  //пропси для розмірів іконок
  wFacebook,
  hFacebook,
  wYoutube,
  hYoutube,
  wTwitter,
  hTwitter,
  wInstagram,
  hInstagram,
}) => {
  return (
    <NetworkList>
      <NetworkListItem>
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook
            width={wFacebook || '20px'}
            height={hFacebook || '20px'}
          />
        </Link>
      </NetworkListItem>
      <NetworkListItem>
        <Link
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsYoutube width={wYoutube || '20px'} height={hYoutube || '15px'} />
        </Link>
      </NetworkListItem>

      <NetworkListItem>
        <Link
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter width={wTwitter || '20px'} height={hTwitter || '16px'} />
        </Link>
      </NetworkListItem>
      <NetworkListItem>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram
            width={wInstagram || '20px'}
            height={hInstagram || '20px'}
          />
        </Link>
      </NetworkListItem>
    </NetworkList>
  );
};

export default Networks;
