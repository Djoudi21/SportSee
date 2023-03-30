import styles from '../../css/_Dashboard.module.css';
import DashboardBody from "./DashboardBody";
import DashboardHeader from "./DashboardHeader";


export default function Dashboard() {
    return (
        <div className={styles.container}>
            <DashboardHeader />
            <DashboardBody />
        </div>
    );
}
