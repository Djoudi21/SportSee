import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import styles from "../../css/_Charts.module.css";


export default function ScoreChart() {
    const data01 = [
        { name: 'Group A', value: 400 },
    ];
    const data02 = [
        { name: 'A1', value: 100 },
    ];

    return (
        <div className={styles.scoreContainer}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}




