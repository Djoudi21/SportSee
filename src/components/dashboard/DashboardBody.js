import styles from '../../css/_Dashboard.module.css';
import ChartList from "../charts/ChartList";


export default function DashboardBody() {
    return (
        <div className={styles.body}>
            <ChartList />
        </div>
    );
}
