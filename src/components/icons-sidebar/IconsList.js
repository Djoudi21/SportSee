import styles from '../../css/_IconsList.module.css';
import BikingIcon from "./BikingIcon";
import YogaIcon from "./YogaIcon";
import SwimmingIcon from "./SwimmingIcon";
import WorkoutIcon from "./WorkoutIcon";

export default function IconsList() {
    return (
        <div className={styles.container}>
            <BikingIcon />
            <YogaIcon />
            <SwimmingIcon />
            <WorkoutIcon />
        </div>
    );
}
