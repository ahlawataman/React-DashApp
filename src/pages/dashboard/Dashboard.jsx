import React, {useState, useEffect} from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import './dashboard.css'
// import {userData} from '../../dummyData.js'
import axios from 'axios'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'

export default function Dashboard() {

    const [userData, setUserData] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {axios.get('https://script.google.com/macros/s/AKfycbweO_N_4u5JDm26FPlB1lPvp1Ue8bC09St37yfh1ZcF1NFPrR2sNpPJ2SU-uKdfTr1O/exec?info=userData').then(res => {
        console.log(res.data.data)
        setUserData(res.data.data)
    })}, [])
    

    return (
        <div className='dashboard'>
            <FeaturedInfo/>
            {userData===[]?
            (<div>Loading</div>): (<Chart data={userData} title='User Analytics' grid dataKey='Active User'/>)}
            <div className="dashboardWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
