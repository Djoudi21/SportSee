import styles from '../../css/_Charts.module.css';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {useEffect, useState} from "react";
import UserService from "../../services/UserService";


export default function ActivityChart() {
    const [sessions, setSessions] = useState(null);
    useEffect(() => {
        const fetchActivity = async () => {
            const {sessions} = await UserService.getUserActivity();
            setSessions(sessions);
        };

        fetchActivity();
    }, []);
    // if(!toto) return
    // const monthTickFormatter = (tick) => {
    //     const date = new Date(tick);
    //
    //     return date.getMonth() + 1;
    // };

    // const renderQuarterTick = (tickProps) => {
    //     const { x, y, payload } = tickProps;
    //     const { value, offset } = payload;
    //     const date = new Date(value);
    //     const month = date.getMonth();
    //     const quarterNo = Math.floor(month / 3) + 1;
    //     const isMidMonth = month % 3 === 1;
    //
    //     if (month % 3 === 1) {
    //         return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
    //     }
    //
    //     const isLast = month === 11;
    //
    //     if (month % 3 === 0 || isLast) {
    //         const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;
    //
    //         return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
    //     }
    //     return null;
    // };
    return (
        <div className={styles.activityContainer}>
            {/*<ResponsiveContainer width="100%" height="100%">*/}
            {/*    <BarChart*/}
            {/*        width={500}*/}
            {/*        height={300}*/}
            {/*        data={data}*/}
            {/*        margin={{*/}
            {/*            top: 5,*/}
            {/*            right: 30,*/}
            {/*            left: 20,*/}
            {/*            bottom: 5,*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <CartesianGrid strokeDasharray="3 3" />*/}
            {/*        <XAxis dataKey="date" tickFormatter={monthTickFormatter} />*/}
            {/*        <XAxis*/}
            {/*            dataKey="date"*/}
            {/*            axisLine={false}*/}
            {/*            tickLine={false}*/}
            {/*            interval={0}*/}
            {/*            tick={renderQuarterTick}*/}
            {/*            height={1}*/}
            {/*            scale="band"*/}
            {/*            xAxisId="quarter"*/}
            {/*        />*/}
            {/*        <YAxis />*/}
            {/*        <Tooltip />*/}
            {/*        <Legend />*/}
            {/*        <Bar dataKey="pv" fill="#8884d8" />*/}
            {/*        <Bar dataKey="uv" fill="#82ca9d" />*/}
            {/*    </BarChart>*/}
            {/*</ResponsiveContainer>*/}
        </div>
    );
}



