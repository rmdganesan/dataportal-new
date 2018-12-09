var chart_priceperferrell;
var myChart;
var option;
var dataAxis = ["Iraq", "Canada", "UAE", "Venezuela", "Mexico", "China", "Iran", "USA", "Saudi Arabia", "Russia"];
var data = [2095, 2103, 2147, 2216, 2281, 2605, 3336, 8675, 9767, 11570];
var yMax = 15500;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}

require([
    'echarts' /*, 'map/js/china' */
], function(echarts) {


    var option = {
        title: {
            text: '1980 January - Top 10 Production country',
        },

        color: ['#17a2b8', '#006699', '#4cabce', '#e5323e'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['United States', 'Iran', 'China', 'Saudi Arabia', 'Russia']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {

            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            }
        },
        yAxis: {

            data: dataAxis,
            axisLabel: {
                inside: true,
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
        },
        series: [{ // For shadow
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0.05)'
                    }
                },
                barGap: '-100%',
                barCategoryGap: '40%',
                data: dataShadow,
                animation: false
            },
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#83bff6'
                                },
                                {
                                    offset: 0.5,
                                    color: '#188df0'
                                },
                                {
                                    offset: 1,
                                    color: '#188df0'
                                }
                            ]
                        )
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#2378f7'
                                },
                                {
                                    offset: 0.7,
                                    color: '#2378f7'
                                },
                                {
                                    offset: 1,
                                    color: '#83bff6'
                                }
                            ]
                        )
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: data
            }
        ]
    };

    bar_chart = testHelper.create(echarts, 'bar-chart', {
        option: option,
        height: 300,
        // title: 'Labor Migration Top5 (2017)'
    });
});

function changeBarChart(yearIndex) {

    option_info = bar_chart.getOption();
    option_info.yAxis[0].data = country[yearIndex];
    option_info.series[0].data = production[yearIndex];
    option_info.title[0].text = month_year[yearIndex].year + ' ' + month_year[yearIndex].month + '  - Top 10 Production country';
    // alert(country[yearIndex] + '  ' + production[yearIndex]);
    bar_chart.setOption(option_info, true);

    // alert(yearIndex);
}