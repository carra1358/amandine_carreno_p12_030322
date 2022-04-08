import Icon from '../Icons/Icon';
import './cards.scss';

/**
 * Card with user nutrient intake
 * @param {number} nutritionNumber amount of nutrient intake
 * @param {string} unit nutrient metric system
 * @param {string} unit nutrient's name
 * @param {string} src link to icon picture
 * @param {string} background icon's background color
 *
 *@returns React class component
 */
function Cards({ nutritionNumber, unit, category, src, background }) {
  return (
    <div className="cards">
      <Icon
        src={src}
        background={background}
        StyleName="icons_nutrition"
        alt=" "
      />
      <div className="user_nutrition">
        <p>
          {new Intl.NumberFormat('en-IN').format(nutritionNumber)}
          {unit}
        </p>
        <p>{category}</p>
      </div>
    </div>
  );
}

export default Cards;
