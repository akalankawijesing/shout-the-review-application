import React from 'react'
import Header from '../components/Header';
import RecentActivities from '../components/RecentActivities';

function Home () {

    return (
        <> 
        <Header/>
        <section className="recent_activities">
        <RecentActivities/>
        </section>
        </>
    );
};

export default Home