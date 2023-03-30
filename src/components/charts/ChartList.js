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
                <NutrimentChart />
            {/*<div className={styles.gridItem}>*/}
            {/*    <ActivityChart />*/}
            {/*</div>*/}
            {/*<div className={styles.gridItem}>*/}
            {/*    <ActivityChart />*/}
            {/*</div>*/}
        </div>
    );
}
