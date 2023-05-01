import iconStyles from '../../css/_IconsList.module.css';
import utilsStyles from '../../css/_Utils.module.css';

export default function ProteinsIcon() {
    return (
        <div className={`${utilsStyles.flexColCenter} ${utilsStyles.alignCenter} ${utilsStyles.blueBgColor} ${iconStyles.chartIconContainer}`}>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.2353 2.47058C17.8824 2.11764 17.4118 1.88234 17.0588 1.88234C16.9412 1.41176 16.8235 1.05881 16.4706 0.705873C15.6471 -0.117656 14.2353 -0.117656 13.4118 0.705873C12.7059 1.41176 12.5882 2.58823 13.1765 3.41176L10.5882 5.88234L9.29412 4.58823L6.70588 7.17646C6.47059 7.05881 6.11765 7.05881 5.88235 7.05881C2.58824 7.05881 0 9.64705 0 12.9412C0 16.2353 2.58824 18.8235 5.88235 18.8235C9.17647 18.8235 11.7647 16.2353 11.7647 12.9412C11.7647 12.7059 11.7647 12.3529 11.6471 12.1176L14.2353 9.5294L12.9412 8.23528L15.4118 5.7647C16.2353 6.35293 17.4118 6.23529 18.1176 5.5294C19.0588 4.70587 19.0588 3.29411 18.2353 2.47058Z" fill="#4AB8FF"/>
            </svg>
        </div>
    );
}
