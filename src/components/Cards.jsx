import Icon from "./Icon";


function Cards({nutritionNumber,unit,category,src,background,StyleName}){

    return(
        <div className="cards">
          <Icon src={src} background={background} StyleName={StyleName} alt=" "></Icon>
           <div className="user_nutrition">
               <p>{nutritionNumber < 1000 ? nutritionNumber  : nutritionNumber.split("")[0]+","+nutritionNumber.split("").slice(1).join("")}{unit}</p>
               <p>{category}</p>

           </div> 
        </div>
    )

}


export default Cards;
