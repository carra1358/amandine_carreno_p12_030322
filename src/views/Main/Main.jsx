import './main.scss';
import fire from 'assets/icons_nutrition/fire.png';
import chicken from 'assets/icons_nutrition/chicken.png';
import apple from 'assets/icons_nutrition/apple.png';
import cheeseburger from 'assets/icons_nutrition/cheeseburger.png';
import Greetings from './Greetings';
import BarCharts from 'components/Charts/barChart/BarCharts';
import SessionsCharts from 'components/Charts/lineChart/SessionsCharts';
import RadarCharts from 'components/Charts/radarChart/RadarCharts';
import ScoreCharts from 'components/Charts/radialChart/ScoreCharts';
import Cards from 'components/Cards/Cards';
import { UserContext } from 'ContextProvider';
import { useContext } from 'react';

function Main() {
  const user = useContext(UserContext);

  // avoid trigering the render before receving  user datas
  if (
    user.summary === null ||
    user.activity === null ||
    user.performance === null ||
    user.averageSession === null
  ) {
    return <div>Chargement</div>;
  }
  return (
    <main className="user_content">
      <Greetings name={user.summary.userInfos.firstName} />
      <div className="user_stats">
        <div className="all_charts_container">
          <BarCharts data={user.activity.sessions} />
          <div className="small_charts_container">
            <SessionsCharts data={user.averageSession.sessions} />
            <RadarCharts data={user.performance} />
            <ScoreCharts data={user.summary} />
          </div>
        </div>

        <div className="user_nutrition_container">
          <Cards
            nutritionNumber={user.summary.keyData.calorieCount}
            unit="KCal"
            category="calories"
            src={fire}
            background="rgba(255, 0, 0, 0.061)"
          ></Cards>
          <Cards
            nutritionNumber={user.summary.keyData.proteinCount}
            unit="g"
            category="Proteines"
            src={chicken}
            background="rgba(74, 184, 255, 0.1)"
          ></Cards>
          <Cards
            nutritionNumber={user.summary.keyData.carbohydrateCount}
            unit="g"
            category="Glucides"
            src={apple}
            background="rgba(249, 206, 35, 0.1)"
          ></Cards>
          <Cards
            nutritionNumber={user.summary.keyData.lipidCount}
            unit="g"
            category="Lipides"
            src={cheeseburger}
            background="rgba(253, 81, 129, 0.1)"
          ></Cards>
        </div>
      </div>
    </main>
  );
}

export default Main;
