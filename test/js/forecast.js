var chart_priceperferrell;
var myChart;
var option;

require([
    'echarts' /*, 'map/js/china' */
], function(echarts) {


    var option = {

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['EIA Low', 'IMF', 'EIA', 'WEO 2018', 'World Bank', 'EIA High', ]
        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025']
        }],
        yAxis: [{
            type: 'value',

        }],
        series: [{
                name: 'EIA Low',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [27.7, 30.7, 33.3, 37, 38, 39.3, 40.5, 41.5]
            },
            {
                name: 'IMF',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [50, 51.9, 53.5, 55, 56.5]
            },
            {
                name: 'EIA',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [54.1, 58.8, 75.1, 85.1, 90.7, 95.8, 99.9, 103.7]
            },
            {
                name: 'WEO 2018',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [71.9, 72.3, 69.4, 66.8, 64.9, 63.9]
            },
            {
                name: 'World Bank',
                type: 'line',
                stack: '总量',
                areaStyle: {
                    normal: {}
                },
                data: [72, 74, 69, 69.1, 69.2, 69.3, 69.4, 69.5]
            },
            {
                name: 'EIA High',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {
                    normal: {}
                },
                data: [81.9, 112.8, 133.1, 157.8, 172, 185, 198.2, 211.1]
            }
        ]
    };

    chart_priceperferrell = myChart = testHelper.create(echarts, 'forecast', {
        option: option,
        height: 400,
        // title: 'Labor Migration Top5 (2017)'
    });
});