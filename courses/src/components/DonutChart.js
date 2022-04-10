import {Grid, Typography} from "@material-ui/core";
import React from "react";
import Chart from 'react-apexcharts'

function DonutChart(data) {
    const options = {
        series: [92, 8],
        labels: ["Liked", "Disliked"],
    };

    const series = [92, 8];
    return (
        <Grid
            xs={13}
            style={{height: "250px", marginTop: "50px"}}>
            <Grid xs = {12} item>
                <Chart
                    options={options}
                    series={data.series}
                    type="donut"
                    width="100%"
                    height={300}
                />
            </Grid>
            <Grid xs = {10} item></Grid>
        </Grid>

    );
}
export default DonutChart;