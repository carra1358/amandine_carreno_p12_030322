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

function Main() {
  return (
    <main className="user_content">
      <Greetings name={"Thomas"} />
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
              StyleName="icons icons_nutrition"
            ></Cards>
            <Cards
              nutritionNumber="123"
              unit="g"
              category="Proteines"
              src={chicken}
              background="rgba(74, 184, 255, 0.1)"
              StyleName="icons icons_nutrition"
            ></Cards>
            <Cards
              nutritionNumber="300"
              unit="g"
              category="Glucides"
              src={apple}
              background="rgba(249, 206, 35, 0.1)"
              StyleName="icons icons_nutrition"
            ></Cards>
            <Cards
              nutritionNumber="50"
              unit="g"
              category="Lipides"
              src={cheeseburger}
              background="rgba(253, 81, 129, 0.1)"
              StyleName="icons icons_nutrition"
            ></Cards>
          </div>
      </div>
    </main>
  );
}

export default Main;
