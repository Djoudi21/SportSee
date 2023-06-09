import styles from '../../css/_IconsList.module.css';

export default function YogaIcon() {
    return (
        <div>
            <div className={styles.iconContainer}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z" fill="#FF0101"/>
                </svg>
                <svg width="36" height="22" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36 14V10C31.52 10 27.68 8.08 24.8 4.64L22.12 1.44C21.36 0.520001 20.24 0 19.06 0H16.96C15.78 0 14.66 0.520001 13.9 1.44L11.22 4.64C8.32 8.08 4.48 10 0 10V14C5.54 14 10.38 11.66 14 7.5V12L6.24 15.1C4.9 15.64 4 16.96 4 18.42C4 20.4 5.6 22 7.58 22H12V21C12 18.24 14.24 16 17 16H23C23.56 16 24 16.44 24 17C24 17.56 23.56 18 23 18H17C15.34 18 14 19.34 14 21V22H28.42C30.4 22 32 20.4 32 18.42C32 16.96 31.1 15.64 29.76 15.1L22 12V7.5C25.62 11.66 30.46 14 36 14Z" fill="#FF0101"/>
                </svg>
            </div>
        </div>
    );
}
