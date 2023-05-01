import styles from '../../css/_Charts.module.css';
import ActivityChart from "./ActivityChart";
import IntensityChart from "./IntensityChart";
import MilesChart from "./MilesChart";
import ScoreChart from "./ScoreChart";
import NutrimentChart from "./NutrimentChart";
import UserService from "../../services/UserService";
import {useEffect, useState} from "react";


export default function ChartList() {
    const [keyData, setKeyData] = useState(null);
    useEffect(() => {
        const fetchKeyData = async () => {
            const {keyData} = await UserService.getUserInfos();
            setKeyData(keyData);
        };

        fetchKeyData();
    }, []);
    if(!keyData) return
    return (
        <div className={styles.chartsContainer}>
                <ActivityChart />
                <IntensityChart />
                <MilesChart />
                <ScoreChart />
                <NutrimentChart container={'totalNutrimentsContainer'} title={keyData.calorieCount} subTitle={'Calories'} />
                <NutrimentChart container={'proteinsNutrimentsContainer'} title={keyData.proteinCount} subTitle={'Proteines'} />
                <NutrimentChart container={'glucidesNutrimentsContainer'} title={keyData.carbohydrateCount} subTitle={'Glucides'} />
                <NutrimentChart container={'lipidesNutrimentsContainer'} title={keyData.lipidCount} subTitle={'Lipides'} />
        </div>
    );
}
