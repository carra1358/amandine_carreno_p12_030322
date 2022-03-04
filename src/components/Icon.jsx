

function Icon({ src,background,alt,StyleName}) {

  return <div style={{backgroundColor:background}}  className={StyleName}>
      <img src={src} alt={alt}></img>
  </div>;
}
export default Icon;
