import {Link} from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import HeaderBrand from "./HeaderBrand";
import styles from '../../css/_Header.module.css';



export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <HeaderLogo/>
                <HeaderBrand />
            </div>
            <nav className={styles.navContainer}>
                <ul className={styles.navList}>
                    <li><Link to={'/'} className={styles.title}>ACCUEIL</Link></li>
                    <li><Link to={'/'} className={styles.title}>PROFILE</Link></li>
                    <li><Link to={'/'} className={styles.title}>REGLAGES</Link></li>
                    <li><Link to={'/'} className={styles.title}>COMMUNAUTe</Link></li>
                </ul>
            </nav>
        </header>
    );
}
