import styles from '../../css/_IconsList.module.css';

export default function SwimmingIcon() {
    return (
        <div className={styles.icon}>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="6" fill="white"/>
            </svg>
            <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.00002 6.66667C5.84097 6.66667 7.33335 5.17428 7.33335 3.33333C7.33335 1.49238 5.84097 0 4.00002 0C2.15907 0 0.666687 1.49238 0.666687 3.33333C0.666687 5.17428 2.15907 6.66667 4.00002 6.66667Z" fill="#FF0101"/>
            </svg>

        </div>
    );
}
