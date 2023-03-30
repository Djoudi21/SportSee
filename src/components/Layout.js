import React from 'react';
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import styles from  '../css/_Layout.module.css';

export default function Layout ({children}) {
    return(
        <div>
            <Header />
            <main className={styles.layout}>
                <Sidebar />
                {children}
            </main>
        </div>
    )
}
