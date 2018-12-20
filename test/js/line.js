var chart_priceperferrell;
var myChart;
var option;

require([
    'echarts' /*, 'map/js/china' */
], function(echarts) {


    var option = {

        legend: {
            data: ['EIA Low', 'IMF', 'EIA', 'WEO 2018', 'World Bank', 'EIA High']
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis: {
            type: 'category',
            data: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025']
        },
        yAxis: {
            type: 'value',
            name: '$/bbl',
            nameLocation: 'center'
        },
        series: [{
                name: 'EIA Low',
                data: [27.7, 30.7, 33.3, 37, 38, 39.3, 40.5, 41.5],
                type: 'line'
            },
            {
                name: 'IMF',
                data: [50, 51.9, 53.5, 55, 56.5],
                type: 'line'
            },
            {
                name: 'EIA',
                data: [54.1, 58.8, 75.1, 85.1, 90.7, 95.8, 99.9, 103.7],
                type: 'line'
            },
            {
                name: 'WEO 2018',
                data: [71.9, 72.3, 69.4, 66.8, 64.9, 63.9],
                type: 'line'
            },
            {
                name: 'World Bank',
                data: [72, 74, 69, 69.1, 69.2, 69.3, 69.4, 69.5],
                type: 'line'
            },
            {
                name: 'EIA High',
                data: [81.9, 112.8, 133.1, 157.8, 172, 185, 198.2, 211.1],
                type: 'line'
            }





        ]
    };

    chart_priceperferrell = myChart = testHelper.create(echarts, 'forecast', {
        option: option,
        height: 400,
        // title: 'Labor Migration Top5 (2017)'
    });
});