import Icon from "../Icons/Icon";
import "./cards.scss"


function Cards({nutritionNumber,unit,category,src,background,StyleName}){

    return(
        <div className="cards">
          <Icon src={src} background={background} StyleName={StyleName} alt=" "></Icon>
           <div className="user_nutrition">
               <p>{new Intl.NumberFormat('en-IN').format(nutritionNumber)}{unit}</p>
               <p>{category}</p>

           </div> 
        </div>
    )

}


export default Cards;
