import styles from '../../css/_IconsList.module.css';

export default function WorkoutIcon() {
    return (
        <div className={styles.icon}>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="6" fill="white"/>
            </svg>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.712 20.576L32 18.288L29.712 16L24 21.712L10.288 8L16 2.288L13.712 0L11.424 2.288L9.136 0L5.712 3.424L3.424 1.136L1.136 3.424L3.424 5.712L0 9.136L2.288 11.424L0 13.712L2.288 16L8 10.288L21.712 24L16 29.712L18.288 32L20.576 29.712L22.864 32L26.288 28.576L28.576 30.864L30.864 28.576L28.576 26.288L32 22.864L29.712 20.576Z" fill="#FF0101"/>
            </svg>

        </div>
    );
}
