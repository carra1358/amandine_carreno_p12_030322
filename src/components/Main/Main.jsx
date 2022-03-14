import "./main.scss";
import fire from "./assets/fire.png";
import chicken from "./assets/chicken.png";
import apple from "./assets/apple.png";
import cheeseburger from "./assets/cheeseburger.png";
import Greetings from "./Greetings";
import BarCharts from "../Charts/barChart/BarCharts";
import SessionsCharts from "../Charts/lineChart/SessionsCharts";
import RadarCharts from "../Charts/radarChart/RadarCharts";
import ScoreCharts from "../Charts/radialChart/ScoreCharts";
import Cards from "../Cards/Cards";
import Styles from "../Icons/icon_card.module.scss"
import { UserContextProfider, UserContext } from "../../DataProvider";
import { useContext } from "react";


function Main() {
 
    const user = useContext(UserContext)

    console.log(user[0].userInfos.firstName)
  return (
    <main className="user_content">
      <Greetings name={user[0].userInfos.firstName} />
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
              StyleName={Styles.icons}
            ></Cards>
            <Cards
              nutritionNumber="123"
              unit="g"
              category="Proteines"
              src={chicken}
              background="rgba(74, 184, 255, 0.1)"
              StyleName={Styles.icons}
            ></Cards>
            <Cards
              nutritionNumber="300"
              unit="g"
              category="Glucides"
              src={apple}
              background="rgba(249, 206, 35, 0.1)"
              StyleName={Styles.icons}
            ></Cards>
            <Cards
              nutritionNumber="50"
              unit="g"
              category="Lipides"
              src={cheeseburger}
              background="rgba(253, 81, 129, 0.1)"
              StyleName={Styles.icons}
            ></Cards>
          </div>
      </div>
    </main>
  );
}

export default Main;




  