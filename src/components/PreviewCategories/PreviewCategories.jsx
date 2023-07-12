import { Link } from 'react-router-dom';

const PreviewCategories = () => (
  <section>
        <ul>
          <li>
            <h2>Breakfast</h2>
            <Link>See all</Link>
          </li>
          <li>
            <h2>Miscellaneous</h2>
            <Link>See all</Link>
          </li>
          <li>
            <h2>Vegan</h2>
            <Link>See all</Link>
          </li>
          <li>
            <h2>Desserts</h2>
            <Link>See all</Link>
          </li>
        </ul>
      </section>
);

export default PreviewCategories;