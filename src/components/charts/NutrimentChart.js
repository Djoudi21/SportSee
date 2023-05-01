import styles from "../../css/_Charts.module.css";
import GlucidesIcon from "../icons/GlucidesIcon";
import ProteinsIcon from "../icons/ProteinsIcon";
import LipidesIcon from "../icons/LipidesIcon";
import TotalNutrimentsIcon from "../icons/TotalNutrimentsIcon";

export default function NutrimentChart({container, title, subTitle}) {

    function renderIconStyle() {
        switch (container) {
            case 'proteinsNutrimentsContainer':
                return styles.proteinsIcon
            case 'glucidesNutrimentsContainer':
                return styles.glucidesIcon
            case 'lipidesNutrimentsContainer':
                return styles.lipidesIcon
            default:
                return styles.caloriesIcon
        }
    }

    function renderSvg() {
        switch (container) {
            case 'proteinsNutrimentsContainer':
                return (
                    <ProteinsIcon />
                )
            case 'glucidesNutrimentsContainer':
                return (
                    <GlucidesIcon />
                )
            case 'lipidesNutrimentsContainer':
                return (
                    <LipidesIcon />
                )
            default:
                return (
                    <TotalNutrimentsIcon />
                )
        }
    }

    function renderContainerStyle() {
        switch (container) {
            case 'proteinsNutrimentsContainer':
                return styles.proteinsNutrimentsContainer
            case 'glucidesNutrimentsContainer':
                return styles.glucidesNutrimentsContainer
            case 'lipidesNutrimentsContainer':
                return styles.lipidesNutrimentsContainer
            default:
                return styles.totalNutrimentsContainer
        }
    }

    return (
        <div className={renderContainerStyle()}>
                {renderSvg()}
            <div>
                <h3 className={styles.caloriesTitle}>{`${title}g`}</h3>
                <h4 className={styles.caloriesSubTitle}>{subTitle}</h4>
            </div>
        </div>
    );
}




