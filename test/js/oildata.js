var chart_priceperferrell;
var myChart;
var option;

var timeData = [
    '01/31/1980', '02/29/1980', '03/31/1980', '04/30/1980', '05/31/1980', '06/30/1980', '07/31/1980', '08/31/1980', '09/30/1980', '10/31/1980', '11/30/1980', '12/31/1980', '01/31/1981', '02/28/1981', '03/31/1981', '04/30/1981', '05/31/1981', '06/30/1981', '07/31/1981', '08/31/1981', '09/30/1981', '10/31/1981', '11/30/1981', '12/31/1981', '01/31/1982', '02/28/1982', '03/31/1982', '04/30/1982', '05/31/1982', '06/30/1982', '07/31/1982', '08/31/1982', '09/30/1982', '10/31/1982', '11/30/1982', '12/31/1982', '01/31/1983', '02/28/1983', '03/31/1983', '04/30/1983', '05/31/1983', '06/30/1983', '07/31/1983', '08/31/1983', '09/30/1983', '10/31/1983', '11/30/1983', '12/31/1983', '01/31/1984', '02/29/1984', '03/31/1984', '04/30/1984', '05/31/1984', '06/30/1984', '07/31/1984', '08/31/1984', '09/30/1984', '10/31/1984', '11/30/1984', '12/31/1984', '01/31/1985', '02/28/1985', '03/31/1985', '04/30/1985', '05/31/1985', '06/30/1985', '07/31/1985', '08/31/1985', '09/30/1985', '10/31/1985', '11/30/1985', '12/31/1985', '01/31/1986', '02/28/1986', '03/31/1986', '04/30/1986', '05/31/1986', '06/30/1986', '07/31/1986', '08/31/1986', '09/30/1986', '10/31/1986', '11/30/1986', '12/31/1986', '01/31/1987', '02/28/1987', '03/31/1987', '04/30/1987', '05/31/1987', '06/30/1987', '07/31/1987', '08/31/1987', '09/30/1987', '10/31/1987', '11/30/1987', '12/31/1987', '01/31/1988', '02/29/1988', '03/31/1988', '04/30/1988', '05/31/1988', '06/30/1988', '07/31/1988', '08/31/1988', '09/30/1988', '10/31/1988', '11/30/1988', '12/31/1988', '01/31/1989', '02/28/1989', '03/31/1989', '04/30/1989', '05/31/1989', '06/30/1989', '07/31/1989', '08/31/1989', '09/30/1989', '10/31/1989', '11/30/1989', '12/31/1989', '01/31/1990', '02/28/1990', '03/31/1990', '04/30/1990', '05/31/1990', '06/30/1990', '07/31/1990', '08/31/1990', '09/30/1990', '10/31/1990', '11/30/1990', '12/31/1990', '01/31/1991', '02/28/1991', '03/31/1991', '04/30/1991', '05/31/1991', '06/30/1991', '07/31/1991', '08/31/1991', '09/30/1991', '10/31/1991', '11/30/1991', '12/31/1991', '01/31/1992', '02/29/1992', '03/31/1992', '04/30/1992', '05/31/1992', '06/30/1992', '07/31/1992', '08/31/1992', '09/30/1992', '10/31/1992', '11/30/1992', '12/31/1992', '01/31/1993', '02/28/1993', '03/31/1993', '04/30/1993', '05/31/1993', '06/30/1993', '07/31/1993', '08/31/1993', '09/30/1993', '10/31/1993', '11/30/1993', '12/31/1993', '01/31/1994', '02/28/1994', '03/31/1994', '04/30/1994', '05/31/1994', '06/30/1994', '07/31/1994', '08/31/1994', '09/30/1994', '10/31/1994', '11/30/1994', '12/31/1994', '01/31/1995', '02/28/1995', '03/31/1995', '04/30/1995', '05/31/1995', '06/30/1995', '07/31/1995', '08/31/1995', '09/30/1995', '10/31/1995', '11/30/1995', '12/31/1995', '01/31/1996', '02/29/1996', '03/31/1996', '04/30/1996', '05/31/1996', '06/30/1996', '07/31/1996', '08/31/1996', '09/30/1996', '10/31/1996', '11/30/1996', '12/31/1996', '01/31/1997', '02/28/1997', '03/31/1997', '04/30/1997', '05/31/1997', '06/30/1997', '07/31/1997', '08/31/1997', '09/30/1997', '10/31/1997', '11/30/1997', '12/31/1997', '01/31/1998', '02/28/1998', '03/31/1998', '04/30/1998', '05/31/1998', '06/30/1998', '07/31/1998', '08/31/1998', '09/30/1998', '10/31/1998', '11/30/1998', '12/31/1998', '01/31/1999', '02/28/1999', '03/31/1999', '04/30/1999', '05/31/1999', '06/30/1999', '07/31/1999', '08/31/1999', '09/30/1999', '10/31/1999', '11/30/1999', '12/31/1999', '01/31/2000', '02/29/2000', '03/31/2000', '04/30/2000', '05/31/2000', '06/30/2000', '07/31/2000', '08/31/2000', '09/30/2000', '10/31/2000', '11/30/2000', '12/31/2000', '01/31/2001', '02/28/2001', '03/31/2001', '04/30/2001', '05/31/2001', '06/30/2001', '07/31/2001', '08/31/2001', '09/30/2001', '10/31/2001', '11/30/2001', '12/31/2001', '01/31/2002', '02/28/2002', '03/31/2002', '04/30/2002', '05/31/2002', '06/30/2002', '07/31/2002', '08/31/2002', '09/30/2002', '10/31/2002', '11/30/2002', '12/31/2002', '01/31/2003', '02/28/2003', '03/31/2003', '04/30/2003', '05/31/2003', '06/30/2003', '07/31/2003', '08/31/2003', '09/30/2003', '10/31/2003', '11/30/2003', '12/31/2003', '01/31/2004', '02/29/2004', '03/31/2004', '04/30/2004', '05/31/2004', '06/30/2004', '07/31/2004', '08/31/2004', '09/30/2004', '10/31/2004', '11/30/2004', '12/31/2004', '01/31/2005', '02/28/2005', '03/31/2005', '04/30/2005', '05/31/2005', '06/30/2005', '07/31/2005', '08/31/2005', '09/30/2005', '10/31/2005', '11/30/2005', '12/31/2005', '01/31/2006', '02/28/2006', '03/31/2006', '04/30/2006', '05/31/2006', '06/30/2006', '07/31/2006', '08/31/2006', '09/30/2006', '10/31/2006', '11/30/2006', '12/31/2006', '01/31/2007', '02/28/2007', '03/31/2007', '04/30/2007', '05/31/2007', '06/30/2007', '07/31/2007', '08/31/2007', '09/30/2007', '10/31/2007', '11/30/2007', '12/31/2007', '01/31/2008', '02/29/2008', '03/31/2008', '04/30/2008', '05/31/2008', '06/30/2008', '07/31/2008', '08/31/2008', '09/30/2008', '10/31/2008', '11/30/2008', '12/31/2008', '01/31/2009', '02/28/2009', '03/31/2009', '04/30/2009', '05/31/2009', '06/30/2009', '07/31/2009', '08/31/2009', '09/30/2009', '10/31/2009', '11/30/2009', '12/31/2009', '01/31/2010', '02/28/2010', '03/31/2010', '04/30/2010', '05/31/2010', '06/30/2010', '07/31/2010', '08/31/2010', '09/30/2010', '10/31/2010', '11/30/2010', '12/31/2010', '01/31/2011', '02/28/2011', '03/31/2011', '04/30/2011', '05/31/2011', '06/30/2011', '07/31/2011', '08/31/2011', '09/30/2011', '10/31/2011', '11/30/2011', '12/31/2011', '01/31/2012', '02/29/2012', '03/31/2012', '04/30/2012', '05/31/2012', '06/30/2012', '07/31/2012', '08/31/2012', '09/30/2012', '10/31/2012', '11/30/2012', '12/31/2012', '01/31/2013', '02/28/2013', '03/31/2013', '04/30/2013', '05/31/2013', '06/30/2013', '07/31/2013', '08/31/2013', '09/30/2013', '10/31/2013', '11/30/2013', '12/31/2013', '01/31/2014', '02/28/2014', '03/31/2014', '04/30/2014', '05/31/2014', '06/30/2014', '07/31/2014', '08/31/2014', '09/30/2014', '10/31/2014', '11/30/2014', '12/31/2014', '01/31/2015', '02/28/2015', '03/31/2015', '04/30/2015', '05/31/2015', '06/30/2015', '07/31/2015', '08/31/2015', '09/30/2015', '10/31/2015', '11/30/2015', '12/31/2015', '01/31/2016', '02/29/2016', '03/31/2016', '04/30/2016', '05/31/2016', '06/30/2016', '07/31/2016', '08/31/2016', '09/30/2016', '10/31/2016', '11/30/2016', '12/31/2016', '01/31/2017', '02/28/2017', '03/31/2017', '04/30/2017', '05/31/2017', '06/30/2017', '07/31/2017', '08/31/2017', '09/30/2017', '10/31/2017', '11/30/2017', '12/31/2017', '01/31/2018', '02/28/2018', '03/31/2018', '04/30/2018', '05/31/2018', '06/30/2018', '07/31/2018', '08/31/2018'

];

timeData = timeData.map(function(str) {
    return str.replace('2009/', '');
});

require([
    'echarts' /*, 'map/js/china' */
], function(echarts) {


    var option = {
        title: {
            text: 'Comparison Output and Price ',
            subtext: 'Jan 1980 to Aug 2018',
            x: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },
        legend: {
            data: ['World output (kbbl/d)', 'Saudi Arabia (kbbl/d)', 'Price ($/bbl)'],
            x: 'left'
        },
     
        axisPointer: {
            link: {
                xAxisIndex: 'all'
            }
        },
        dataZoom: [{
                show: true,
                realtime: true,
                start: 0,
                end: 5,
                xAxisIndex: [0, 1]
            },
            {
                type: 'inside',
                realtime: true,
                start: 30,
                end: 70,
                xAxisIndex: [0, 1]
            }
        ],
        grid: [{
            left: 50,
            right: 50,
            height: '35%'
        }, {
            left: 50,
            right: 50,
            top: '55%',
            height: '35%'
        }],
        xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    onZero: true
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                data: timeData
            },
            {
                gridIndex: 1,
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    onZero: false
                },
                data: timeData,
                position: 'bottom'
            }
        ],
        yAxis: [{
                name: 'output',
                type: 'value',
                //max: 100000
            },
            {
                gridIndex: 1,
                //name: '$/bbl',
                type: 'value',
                inverse: false
            }
        ],
        series: [{
        	   name:'World output (kbbl/d)',
                type: 'line',
                symbolSize: 8,
                hoverAnimation: false,
                data: [
                    62348, 62716, 61647, 60391, 59779, 60009, 59609, 59446, 58298, 55842, 56669, 58048, 57892, 58157, 58809, 57804, 56994, 56311, 55016, 54080, 54191, 54556, 53983, 54949, 54696, 54058, 52236, 50937, 51783, 53724, 53304, 53226, 53081, 54797, 55386, 54252, 52763, 49812, 50736, 50959, 52659, 52869, 54652, 54499, 55153, 54892, 55260, 54455, 54577, 54928, 54650, 54849, 54468, 55745, 55025, 53346, 53805, 54217, 54234, 54194, 52957, 54427, 54645, 54220, 52783, 51324, 52353, 52216, 54096, 55779, 56257, 56572, 55650, 55660, 55163, 55267, 56448, 57220, 58359, 59013, 54978, 55335, 56264, 56435, 55635, 54938, 54197, 54870, 55675, 55376, 57940, 58738, 58130, 58325, 57863, 57937, 57138, 57218, 57579, 57890, 57607, 57272, 57696, 58853, 59207, 60891, 61350, 61597, 58707, 58228, 58630, 59060, 58981, 59018, 59536, 60429, 60512, 61082, 61842, 61485, 60921, 61179, 62082, 61806, 61238, 60409, 60514, 56966, 59514, 59854, 60672, 60884, 60637, 60327, 60582, 59183, 59006, 59199, 60192, 59495, 60534, 60489, 60735, 61143, 61257, 60420, 59771, 60131, 59003, 59245, 59710, 59697, 59958, 60756, 60467, 60788, 60623, 60979, 60264, 59560, 59747, 59462, 60069, 59891, 59902, 60366, 60430, 60817, 61138, 60960, 60867, 60410, 60852, 61161, 60767, 60662, 61270, 61768, 61944, 62266, 61841, 62344, 61605, 62403, 62414, 61555, 62508, 62641, 63037, 62674, 62892, 63287, 63237, 63634, 63486, 63339, 63339, 63661, 63738, 63387, 63859, 64222, 64670, 65244, 65182, 65541, 65529, 66048, 65398, 64626, 65070, 65950, 66312, 66827, 66680, 66496, 67707, 68081, 67965, 67828, 67294, 67014, 66878, 65904, 65984, 66098, 66947, 66772, 66987, 67312, 66989, 65545, 65351, 64307, 65818, 65704, 65747, 66254, 66236, 65422, 66450, 67066, 67099, 67758, 68276, 68074, 68695, 69526, 69543, 69980, 70536, 69280, 69197, 68719, 69381, 68451, 67761, 66207, 68146, 68320, 67853, 67750, 68100, 67693, 66957, 67028, 66825, 66288, 66859, 66706, 67187, 66915, 67465, 68876, 69006, 67353, 67750, 69368, 69884, 68810, 68773, 67977, 68604, 69059, 69661, 70624, 70861, 72127, 71908, 71884, 71813, 71781, 71416, 72973, 73515, 72484, 73112, 73726, 73420, 73093, 73354, 73662, 73961, 74275, 74362, 73969, 73836, 73832, 73409, 73470, 74045, 74243, 73711, 73708, 73574, 73635, 73178, 73175, 74213, 73931, 73565, 73900, 73466, 73387, 73039, 73352, 73346, 73553, 73011, 72620, 73212, 72591, 73246, 73973, 73706, 74317, 74505, 74594, 74820, 74249, 74568, 74575, 75309, 74215, 73216, 74216, 74048, 73280, 72322, 72814, 72674, 72910, 72488, 72647, 73533, 73009, 73470, 73894, 73986, 73688, 73848, 74358, 74705, 74646, 74787, 74868, 75060, 74920, 75254, 75097, 75568, 75509, 76151, 75302, 74264, 74085, 73446, 74241, 74680, 75107, 74426, 74950, 75931, 76326, 76512, 76749, 76551, 76867, 76162, 75997, 76186, 76148, 75596, 76228, 76742, 76687, 76021, 75864, 76082, 76456, 76339, 76430, 76903, 76707, 76179, 76441, 76754, 77153, 77491, 77970, 77389, 77197, 77335, 77688, 77858, 78168, 78931, 79884, 79696, 80529, 79874, 79781, 80675, 80334, 80244, 80676, 81249, 80957, 80822, 80815, 81433, 81654, 81668, 80829, 80786, 79988, 79194, 79889, 80608, 80064, 80383, 81531, 82592, 82067, 81124, 81246, 80370, 79912, 80473, 80994, 81537, 80927, 81128, 81352, 82003, 81760, 82179, 82317, 82018, 81696, 81451, 81976, 82457, 82764
                ]
            },
            {
            	 name:'Saudi Arabia (kbbl/d)',
                type: 'line',
                symbolSize: 8,
                hoverAnimation: false,
                data: [
                    9767, 9767, 9767, 9767, 9767, 9767, 9767, 9767, 9767, 10199, 10414, 10281, 10180, 10180, 9976, 10180, 10180, 10180, 10282, 10384, 9264, 9671, 8653, 8653, 8659, 8353, 7335, 6621, 6010, 6621, 6316, 6010, 5603, 5603, 5603, 5195, 4950, 3510, 3910, 3930, 4725, 4620, 5536, 5931, 6026, 6005, 5915, 5825, 5130, 5040, 4843, 5150, 5000, 5450, 5010, 4520, 4133, 4129, 3990, 3590, 3510, 4025, 3835, 3470, 2590, 2420, 2740, 2340, 2980, 3910, 4200, 4680, 4310, 4551, 3972, 4556, 4208, 5068, 5700, 6209, 4651, 4855, 5164, 5164, 4004, 3868, 3300, 4030, 4197, 4238, 4602, 4755, 4653, 4638, 4248, 4612, 4155, 4322, 4332, 4470, 4484, 4582, 4641, 5177, 5314, 6336, 6532, 6655, 4918, 4673, 4515, 4914, 5022, 4825, 4923, 5022, 5219, 5317, 5701, 5696, 5537, 5636, 5765, 5888, 5394, 5398, 5394, 5789, 7660, 7729, 8224, 8481, 8075, 8134, 7936, 7341, 7341, 8085, 8407, 8397, 8332, 8382, 8372, 8571, 8790, 8640, 8260, 8213, 8265, 8315, 8350, 8400, 8450, 8505, 8500, 8575, 8500, 8440, 8300, 8000, 8000, 8150, 8240, 8345, 8270, 8145, 7995, 8000, 8068, 8061, 8068, 8083, 8063, 8063, 8073, 8093, 8153, 8218, 8218, 8273, 8120, 8220, 8110, 8220, 8400, 8100, 8410, 8425, 8315, 8315, 8020, 8110, 8118, 8248, 8248, 8088, 8135, 8195, 8295, 8220, 8200, 8255, 8255, 8358, 8072, 8212, 8316, 8368, 8348, 8341, 8360, 8458, 8463, 8463, 8414, 8521, 8765, 8760, 8460, 8585, 8625, 8325, 8275, 8225, 8173, 8220, 8170, 8110, 8065, 8165, 8220, 7665, 7665, 7610, 7610, 7710, 7735, 7845, 7865, 7863, 7863, 7865, 7865, 8100, 8200, 8250, 8390, 8823, 8975, 8800, 8900, 8800, 8700, 8320, 8300, 7950, 8000, 8050, 8250, 8070, 7800, 7670, 7670, 7600, 7300, 7210, 7310, 7455, 7450, 7500, 7700, 7730, 7880, 7900, 8100, 8050, 8499, 8797, 9382, 9521, 9322, 8628, 8539, 8539, 8479, 8578, 8430, 8588, 8700, 8700, 8400, 8400, 8500, 9500, 9500, 9500, 9500, 9500, 9500, 9500, 9500, 9500, 9500, 9600, 9600, 9600, 9600, 9600, 9600, 9500, 9500, 9500, 9400, 9500, 9350, 9350, 9200, 9100, 9300, 9300, 9000, 8800, 8800, 8750, 8750, 8600, 8600, 8600, 8600, 8600, 8600, 8600, 8800, 8800, 9000, 9100, 9200, 9200, 9200, 9100, 9400, 9450, 9700, 9600, 9400, 9400, 8959, 8518, 8113, 8068, 8072, 8077, 8081, 8335, 8540, 8440, 8340, 8340, 8340, 8240, 8240, 8440, 8540, 8740, 8740, 9240, 9340, 9340, 9340, 8840, 9040, 8940, 9140, 9140, 8940, 8940, 8940, 9640, 9840, 9940, 9740, 9540, 9840, 9840, 9840, 10040, 10030, 9930, 9730, 10020, 10015, 10015, 9800, 9800, 9540, 9240, 9140, 9140, 9140, 9440, 9640, 9840, 10040, 10240, 10140, 9840, 9840, 9840, 9940, 9890, 9690, 9690, 9690, 9690, 9840, 9740, 9640, 9740, 9640, 9640, 9640, 9740, 10140, 10140, 10340, 10490, 10400, 10290, 10290, 10240, 10140, 10140, 10240, 10240, 10240, 10240, 10340, 10540, 10670, 10640, 10600, 10590, 10640, 10540, 10020, 10040, 9992, 10022, 10093, 10293, 10243, 10183, 10233, 10204, 10174, 10105, 10205, 10145, 10095, 10105, 10165, 10465, 10525, 10465
                ]
            },
            {
            	name:'Price ($/bbl)',
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                symbolSize: 8,
                hoverAnimation: false,
                data: [
                	40.00, 38.50, 38.25, 38.15, 38.50, 38.00, 37.40, 33.60, 33.40, 37.90, 40.85, 40.15, 40.30, 38.70, 38.35, 37.19, 35.19, 33.25, 35.06, 35.80, 35.91, 36.54, 37.12, 36.70, 35.85, 31.62, 29.30, 33.12, 35.18, 34.60, 33.70, 32.85, 34.25, 35.00, 33.80, 31.75, 30.85, 29.10, 28.20, 29.75, 29.60, 30.20, 30.80, 31.10, 30.35, 29.85, 29.20, 28.95, 29.56, 29.88, 30.08, 30.13, 29.90, 29.20, 27.91, 28.11, 28.36, 27.81, 27.70, 26.98, 26.95, 28.20, 28.10, 27.90, 26.65, 26.45, 26.60, 27.15, 27.15, 27.90, 29.05, 25.85, 25.75, 17.55, 13.85, 12.50, 14.20, 11.85, 9.45, 13.65, 14.20, 13.80, 14.55, 15.90, 18.40, 17.30, 17.90, 18.10, 18.75, 18.85, 19.80, 18.95, 18.35, 18.80, 17.80, 17.10, 16.85, 15.75, 14.75, 16.60, 16.40, 15.55, 14.90, 14.95, 13.30, 12.45, 13.00, 15.15, 17.00, 16.65, 18.70, 19.75, 18.35, 17.50, 17.75, 17.10, 17.80, 19.00, 19.15, 19.85, 20.95, 19.90, 18.45, 16.75, 16.70, 15.70, 17.55, 27.05, 34.10, 36.05, 33.00, 28.00, 23.65, 19.40, 19.45, 19.25, 19.30, 18.20, 19.45, 19.75, 20.50, 22.20, 21.25, 18.40, 18.15, 18.10, 17.60, 18.95, 19.90, 21.15, 20.25, 19.75, 20.25, 20.30, 19.20, 18.15, 17.40, 18.45, 18.75, 18.65, 18.50, 17.65, 16.80, 16.70, 16.00, 16.60, 15.15, 13.60, 14.25, 13.80, 13.95, 15.15, 16.20, 16.75, 17.60, 16.80, 15.90, 16.40, 17.20, 15.96, 16.63, 17.08, 17.01, 18.67, 18.38, 17.35, 15.86, 16.07, 16.78, 16.12, 16.88, 17.96, 17.94, 17.97, 19.99, 21.01, 19.12, 18.27, 19.61, 20.58, 22.59, 24.18, 22.64, 23.90, 23.47, 20.83, 19.21, 17.47, 19.14, 17.55, 18.40, 18.71, 18.45, 19.85, 19.00, 17.00, 15.09, 14.06, 13.08, 13.39, 14.39, 12.06, 12.01, 11.88, 13.36, 12.56, 10.92, 9.80, 11.06, 10.20, 12.47, 15.30, 15.14, 15.77, 19.01, 20.22, 22.40, 21.95, 24.59, 25.59, 25.38, 27.70, 27.47, 22.54, 27.34, 29.68, 28.53, 29.43, 32.62, 30.93, 32.52, 25.13, 25.64, 27.41, 24.40, 25.64, 28.45, 27.72, 24.54, 25.70, 25.54, 20.48, 18.94, 18.60, 19.49, 20.29, 23.69, 25.65, 25.39, 24.13, 25.77, 26.63, 28.34, 27.55, 24.18, 28.52, 31.25, 32.65, 30.34, 25.02, 25.81, 27.55, 28.40, 29.83, 27.10, 29.59, 28.77, 29.93, 31.18, 30.87, 33.80, 33.36, 37.92, 35.19, 38.37, 43.03, 43.38, 49.82, 43.05, 39.64, 44.28, 45.56, 53.08, 51.86, 48.67, 54.31, 57.58, 64.09, 62.98, 58.52, 55.54, 56.75, 63.57, 59.92, 62.25, 70.44, 70.19, 68.86, 73.90, 73.61, 62.77, 58.38, 58.48, 62.31, 54.30, 57.76, 62.14, 67.40, 67.48, 71.32, 77.20, 70.80, 77.13, 82.86, 92.53, 91.45, 91.92, 94.82, 103.28, 110.19, 123.94, 133.05, 133.87, 113.85, 99.06, 72.84, 53.24, 41.58, 44.86, 43.24, 46.84, 50.85, 57.94, 68.62, 64.91, 72.50, 67.69, 73.19, 77.04, 74.67, 76.37, 74.31, 79.27, 84.98, 76.25, 74.84, 74.74, 76.69, 77.79, 82.92, 85.67, 91.80, 96.29, 103.96, 114.44, 123.07, 114.46, 113.76, 116.46, 110.08, 110.88, 109.47, 110.50, 107.91, 111.16, 119.70, 124.93, 120.46, 110.52, 95.59, 103.14, 113.34, 113.38, 111.97, 109.71, 109.68, 112.97, 116.52, 109.24, 102.88, 103.03, 103.11, 107.72, 110.96, 111.62, 109.48, 108.08, 110.67, 107.42, 108.81, 107.40, 107.79, 109.68, 111.87, 106.98, 101.92, 97.34, 87.27, 78.44, 62.33, 48.07, 57.93, 55.79, 59.39, 64.56, 62.34, 55.87, 46.99, 47.24, 48.12, 44.42, 37.72, 30.80, 33.20, 39.07, 42.25, 47.13, 48.48, 45.07, 46.14, 46.19, 49.73, 46.44, 54.07, 54.89, 55.49, 51.97, 52.98, 50.87, 46.89, 48.69, 51.37, 55.16, 57.62, 62.57, 64.21, 68.99, 65.42, 66.45, 71.63, 76.65, 75.19, 74.44, 73.13

                ]
            }
        ]
    };

    chart_priceperbarrel = myChart = testHelper.create(echarts, 'oildata', {
        option: option,
        height: 400,
        // title: 'Labor Migration Top5 (2017)'
    });
});
/* Update the line chart */
function changePriceLineChart(yearIndex) {
    option_info = chart_priceperbarrel.getOption();
    if (yearIndex <= 454) {
        var start = (yearIndex) * (100 / 464);
        option_info.dataZoom[0].start = start;
        option_info.dataZoom[0].end = start + 9;

    } else {
        start = 91;
        option_info.dataZoom[0].start = start;
        option_info.dataZoom[0].end = start + 9;
    }
    chart_priceperbarrel.setOption(option_info, true);
}

function updateyearMonth(yearIndex) {
    $('.month_name').html(month_year[yearIndex].month);
    $('.year_name').html(month_year[yearIndex].year);

}

function updateEvent(yearIndex) {
    var year = month_year[yearIndex].year;

    var news = event[year];
    $("#marquee-vertical").empty()
    if (news[0] !== undefined)
        $("#marquee-vertical").append('<li class="list-group-item"><i class="fas fa-chevron-circle-right"></i> ' + news[0] + '  </li>');
    if (news[1] !== undefined)
        $("#marquee-vertical").append('<li class="list-group-item"><i class="fas fa-chevron-circle-right"></i> ' + news[1] + '  </li>');
    if (news[2] !== undefined)
        $("#marquee-vertical").append('<li class="list-group-item"><i class="fas fa-chevron-circle-right"></i> ' + news[2] + '  </li>');
    if (news[3] !== undefined)
        $("#marquee-vertical").append('<li class="list-group-item"><i class="fas fa-chevron-circle-right"></i> ' + news[3] + '  </li>');
    if (news[4] !== undefined)
        $("#marquee-vertical").append('<li class="list-group-item"><i class="fas fa-chevron-circle-right"></i> ' + news[4] + '  </li>');
    if (news[5] !== undefined)
        $("#marquee-vertical").append('<li class="list-group-item"><i class="fas fa-chevron-circle-right"></i> ' + news[5] + '  </li>');




}