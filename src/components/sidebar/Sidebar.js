import Copyright from "../Copyright";
import styles from '../../css/_Sidebar.module.css';
import IconsList from "../icons-sidebar/IconsList";


export default function Sidebar() {
    return (
        <div className={styles.container}>
            <IconsList />
            <Copyright />
        </div>
    );
}
