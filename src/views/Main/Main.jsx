import "./main.scss";
import fire from "assets/icons_nutrition/fire.png";
import chicken from "assets/icons_nutrition/chicken.png";
import apple from "assets/icons_nutrition/apple.png";
import cheeseburger from "assets/icons_nutrition/cheeseburger.png";
import Greetings from "./Greetings";
import BarCharts from "components/Charts/barChart/BarCharts";
import SessionsCharts from "components/Charts/lineChart/SessionsCharts";
import RadarCharts from "components/Charts/radarChart/RadarCharts";
import ScoreCharts from "components/Charts/radialChart/ScoreCharts";
import Cards from "components/Cards/Cards";
import { UserContext } from "DataProvider";
import { useContext } from "react";


function Main() {
 
    const user = useContext(UserContext)

   // const userName = user[0].userInfos.firstName

   
  return (
    <main className="user_content">
      <Greetings name={"thomas"} />
      <div className="user_stats">
        <div className="all_charts_container">
          <BarCharts />
          <div className="small_charts_container">
            <SessionsCharts />
            <RadarCharts />
            <ScoreCharts />
          </div>
        </div>
        <div className="user_nutrition_container">
            <Cards
              nutritionNumber="1234"
              unit="KCal"
              category="calories"
              src={fire}
              background="rgba(255, 0, 0, 0.061)"
              StyleName="icons_nutrition"
            ></Cards>
            <Cards
              nutritionNumber="123"
              unit="g"
              category="Proteines"
              src={chicken}
              background="rgba(74, 184, 255, 0.1)"
              StyleName="icons_nutrition"
            ></Cards>
            <Cards
              nutritionNumber="300"
              unit="g"
              category="Glucides"
              src={apple}
              background="rgba(249, 206, 35, 0.1)"
              StyleName="icons_nutrition"
            ></Cards>
            <Cards
              nutritionNumber="50"
              unit="g"
              category="Lipides"
              src={cheeseburger}
              background="rgba(253, 81, 129, 0.1)"
              StyleName="icons_nutrition"

            ></Cards>
          </div>
      </div>
    </main>
  );
}

export default Main;




  