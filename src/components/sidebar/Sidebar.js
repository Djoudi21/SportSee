import Copyright from "../Copyright";
import styles from '../../css/_Sidebar.module.css';
import IconsList from "../icons/IconsList";


export default function Sidebar() {
    return (
        <div className={styles.container}>
            <IconsList />
            <Copyright />
        </div>
    );
}
