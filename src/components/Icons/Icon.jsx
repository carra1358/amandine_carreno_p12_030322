import "./icons.scss";

function Icon({ src,background,alt,StyleName}) {

  return <div style={{backgroundColor:background}}  className={"icons " +StyleName}>
      <img src={src} alt={alt}></img>
  </div>;
}
export default Icon;
