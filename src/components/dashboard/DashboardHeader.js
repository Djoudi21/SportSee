import styles from '../../css/_Dashboard.module.css';


export default function DashboardHeader() {
    const username = 'Abdel'
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Bonjour<span className={styles.username}>{`${username}`}</span></h1>
            <h3 className={styles.subtitle}>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
        </div>
    );
}
