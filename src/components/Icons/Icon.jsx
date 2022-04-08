import './icons.scss';

/**
 * React class component
 *
 * @param {string} src link to icon picture
 * @param {string} background icon's background color
 * @param {string} alt alternative text
 * @param {string} StyleName icon className
 *
 *@returns icon
 */

function Icon({ src, background, alt, StyleName }) {
  return (
    <div
      style={{ backgroundColor: background }}
      className={'icons ' + StyleName}
    >
      <img src={src} alt={alt}></img>
    </div>
  );
}
export default Icon;
