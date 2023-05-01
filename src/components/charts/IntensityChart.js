import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import styles from "../../css/_Charts.module.css";
import {useEffect, useState} from "react";
import UserService from "../../services/UserService";


export default function IntensityChart() {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchPerformance = async () => {
            const {data, kind} = await UserService.getUserPerformance();
            const dataTransformed = data.map(el => {
                return {
                    subject: kind[el.kind],
                    A: el.value,
                }
            })
            setData(dataTransformed);
        };

        fetchPerformance();
    }, []);
    if(!data) return null
    return (
        <div className={`${styles.intensityContainer} ${styles.gridItem}`}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="A" stroke="#ff0101b3" fill="#ff0101b3" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}




