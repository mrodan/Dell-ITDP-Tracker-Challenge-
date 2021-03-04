import React from 'react'
import { Pie } from 'react-chartjs-2'

const Chart = () => {
    const eventTypeLabels = ["Training", "Networking", "Team Building", "Volunteer"];
    const eventTypeData = [4, 1, 1, 2];
    const backgroundColor = ["rgba(75, 192, 192, 1)", "rgba(255, 205, 85, 1)", "rgba(255, 100, 132, 1)", "rgba(54, 160, 235, 1)"]
    const hoverBackgroundColor = ["rgba(75, 192, 192, 0.7)", "rgba(255, 205, 85, 0.7)", "rgba(255, 100, 132, 0.7)", "rgba(54, 160, 235, 0.7)"]
    var data = {
        datasets: [{
            data: eventTypeData,
            backgroundColor: backgroundColor,
            hoverBackgroundColor: hoverBackgroundColor
        }],
        labels: eventTypeLabels
    };



    return (
        <>
            <Pie data={data}></Pie>
        </>
    )
}

export default Chart
