import React from 'react';
import AuthPage from './../Auth/AuthPage';
import LineChartComponent from './../../Components/LineChart/LineChart'; 
import s from './MainPage.module.css';

const MainPage = (props: any) => {
    return (<>
        <AuthPage />
        <LineChartComponent />
    </>);
}

export default MainPage;