import utilsStyles from '../../css/_Utils.module.css';
import iconStyles from "../../css/_IconsList.module.css";

export default function GlucidesIcon() {
    return (
        <div className={`${utilsStyles.flexColCenter} ${utilsStyles.alignCenter} ${utilsStyles.yellowBgColor} ${iconStyles.chartIconContainer}`}>
            <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.00498 3.37375C4.68748 2.49875 5.20498 1.2625 5.01623 0C3.90248 0.07625 2.59998 0.785 1.83873 1.70875C1.14873 2.5475 0.578726 3.79125 0.799976 5C2.01623 5.0375 3.27373 4.31125 4.00498 3.37375V3.37375Z" fill="#FDCC0C"/>
            </svg>
            <svg width="16" height="14" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.842846 10.1C1.27535 11.0575 1.4816 11.485 2.0391 12.3313C2.81535 13.5125 3.9091 14.985 5.26535 14.9975C6.47035 15.0088 6.78035 14.2138 8.41535 14.2225C10.0503 14.2313 10.3928 15.0113 11.5978 15C12.9541 14.9875 13.9903 13.6588 14.7678 12.4763C16.9378 9.17125 17.1653 5.29375 15.8266 3.2325C14.8753 1.76625 13.3741 0.910002 11.9616 0.910002C10.5241 0.910002 9.6216 1.6975 8.43285 1.6975C7.28035 1.6975 6.57785 0.908752 4.91535 0.908752C3.6591 0.908752 2.32785 1.5925 1.38035 2.77375C4.4866 4.4775 3.9816 8.91375 0.842846 10.1Z" fill="#FDCC0C"/>
            </svg>
        </div>
    );
}
