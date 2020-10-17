import React from 'react';
import AuthPage from './../Auth/AuthPage';
import LineChartComponent from './../../Components/LineChart/LineChart';
import './MainPage.css';

const MainPage = (): JSX.Element => {
    return (<>
        <AuthPage />
        <LineChartComponent />
    </>);
}

export default MainPage;