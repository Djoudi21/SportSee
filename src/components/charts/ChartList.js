import styles from '../../css/_Charts.module.css';
import ActivityChart from "./ActivityChart";
import IntensityChart from "./IntensityChart";
import MilesChart from "./MilesChart";
import ScoreChart from "./ScoreChart";
import NutrimentChart from "./NutrimentChart";


export default function ChartList() {
    return (
        <div className={styles.chartsContainer}>
                <ActivityChart />
                <IntensityChart />
                <MilesChart />
                <ScoreChart />
                <NutrimentChart container={'totalNutrimentsContainer'} title={'1,930kCal'} subTitle={'Calories'} />
                <NutrimentChart container={'proteinsNutrimentsContainer'} title={'155g'} subTitle={'Proteines'} />
                <NutrimentChart container={'glucidesNutrimentsContainer'} title={'290g'} subTitle={'Glucides'} />
                <NutrimentChart container={'lipidesNutrimentsContainer'} title={'50g'} subTitle={'Lipides'} />
        </div>
    );
}
