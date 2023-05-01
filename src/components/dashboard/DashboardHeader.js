import styles from '../../css/_Dashboard.module.css';
import UserService from "../../services/UserService";
import {useEffect, useState} from "react";


export default function DashboardHeader() {
    const [userInfos, setUserInfos] = useState(null);
    useEffect(() => {
        const fetchUserInfo = async () => {
            const {userInfos} = await UserService.getUserInfos();
            setUserInfos(userInfos);
        };

        fetchUserInfo();
    }, []);
    if(!userInfos) return null;
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Bonjour<span className={styles.username}>{`${userInfos.firstName}`}</span></h1>
            <h3 className={styles.subtitle}>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
        </div>
    );
}
