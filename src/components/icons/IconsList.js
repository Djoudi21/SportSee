// import styles from '../../css/_IconsList.module.css';
import BikingIcon from "./BikingIcon";
import YogaIcon from "./YogaIcon";
import SwimmingIcon from "./SwimmingIcon";
import WorkoutIcon from "./WorkoutIcon";
import styles from '../../css/_IconsList.module.css';


export default function IconsList() {
    return (
        <div className={styles.container}>
            <YogaIcon />
            <SwimmingIcon />
            <BikingIcon />
            <WorkoutIcon />
        </div>
    );
}
