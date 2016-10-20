! function() {
    "use strict";
    angular.module("app", ["app.core", "app.chart", "app.ui", "app.ui.form", "app.ui.form.validation", "app.page", "app.table", "mgo-angular-wizard", "ui.tree", "ngMap", "textAngular"])
}(),
function() {
    "use strict";
    angular.module("app.chart", ["ngecharts"])
}(),
function() {
    "use strict";
    angular.module("app.core", ["ngAnimate", "ngAria", "ngMessages", "app.layout", "app.i18n", "ngMaterial", "ui.router", "ui.bootstrap", "duScroll"])
}(),
function() {
    "use strict";
    angular.module("app.ui.form", [])
}(),
function() {
    "use strict";
    angular.module("app.ui.form.validation", ["validation.match"])
}(),
function() {
    "use strict";
    angular.module("app.layout", [])
}(),
function() {
    "use strict";
    angular.module("app.page", [])
}(),
function() {
    "use strict";
    angular.module("app.table", [])
}(),
function() {
    "use strict";
    angular.module("app.ui", ["ngMaterial"])
}(),
function() {
    "use strict";

    function e(e, t) {
        function a() {
            var e = Math.round(100 * Math.random());
            return e * (e % 2 == 0 ? 1 : -1)
        }

        function n() {
            for (var e = [], t = 100; t--;) e.push([a(), a(), Math.abs(a())]);
            return e
        }
        e.line1 = {}, e.line2 = {}, e.line3 = {}, e.line4 = {}, e.bar1 = {}, e.bar2 = {}, e.bar3 = {}, e.bar4 = {}, e.bar5 = {}, e.pie1 = {}, e.pie2 = {}, e.pie4 = {}, e.scatter1 = {}, e.scatter2 = {}, e.radar1 = {}, e.radar2 = {}, e.gauge1 = {}, e.chord1 = {}, e.funnel1 = {}, e.line1.options = {
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["Highest temperature", "Lowest temperature"]
            },
            toolbox: {
                show: !0,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            calculable: !0,
            xAxis: [{
                type: "category",
                boundaryGap: !1,
                data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
            }],
            yAxis: [{
                type: "value",
                axisLabel: {
                    formatter: "{value} °C"
                }
            }],
            series: [{
                name: "Highest temperature",
                type: "line",
                data: [11, 11, 15, 13, 12, 13, 10],
                markPoint: {
                    data: [{
                        type: "max",
                        name: "Max"
                    }, {
                        type: "min",
                        name: "Min"
                    }]
                },
                markLine: {
                    data: [{
                        type: "average",
                        name: "Average"
                    }]
                }
            }, {
                name: "Lowest temperature",
                type: "line",
                data: [1, -2, 2, 5, 3, 2, 0],
                markPoint: {
                    data: [{
                        name: "Lowest temperature",
                        value: -2,
                        xAxis: 1,
                        yAxis: -1.5
                    }]
                },
                markLine: {
                    data: [{
                        type: "average",
                        name: "Average"
                    }]
                }
            }]
        }, e.line2.options = {
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["Email", "Affiliate", "Video Ads", "Direct", "Search"]
            },
            toolbox: {
                show: !0,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            calculable: !0,
            xAxis: [{
                type: "category",
                boundaryGap: !1,
                data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
            }],
            yAxis: [{
                type: "value"
            }],
            series: [{
                name: "Email",
                type: "line",
                stack: "Sum",
                data: [120, 132, 101, 134, 90, 230, 210]
            }, {
                name: "Affiliate",
                type: "line",
                stack: "Sum",
                data: [220, 182, 191, 234, 290, 330, 310]
            }, {
                name: "Video Ads",
                type: "line",
                stack: "Sum",
                data: [150, 232, 201, 154, 190, 330, 410]
            }, {
                name: "Direct",
                type: "line",
                stack: "Sum",
                data: [320, 332, 301, 334, 390, 330, 320]
            }, {
                name: "Search",
                type: "line",
                stack: "Sum",
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }]
        }, e.line3.options = {
            title: {
                text: "Sales"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["Intention", "Pre-order", "Deal closed"]
            },
            toolbox: {
                show: !0,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            calculable: !0,
            xAxis: [{
                type: "category",
                boundaryGap: !1,
                data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
            }],
            yAxis: [{
                type: "value"
            }],
            series: [{
                name: "Deal closed",
                type: "line",
                smooth: !0,
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                },
                data: [10, 12, 21, 54, 260, 830, 710]
            }, {
                name: "Pre-order",
                type: "line",
                smooth: !0,
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                },
                data: [30, 182, 434, 791, 390, 30, 10]
            }, {
                name: "Intention",
                type: "line",
                smooth: !0,
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                },
                data: [1320, 1132, 601, 234, 120, 90, 20]
            }]
        }, e.line4.options = {
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["Email", "Affiliate", "Video Ads", "Direct", "Search"]
            },
            toolbox: {
                show: !0,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            calculable: !0,
            xAxis: [{
                type: "category",
                boundaryGap: !1,
                data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
            }],
            yAxis: [{
                type: "value"
            }],
            series: [{
                name: "Email",
                type: "line",
                stack: "Sum",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            }, {
                name: "Affiliate",
                type: "line",
                stack: "Sum",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            }, {
                name: "Video Ads",
                type: "line",
                stack: "Sum",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            }, {
                name: "Direct",
                type: "line",
                stack: "Sum",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                },
                data: [320, 332, 301, 334, 390, 330, 320]
            }, {
                name: "Search",
                type: "line",
                stack: "Sum",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }]
        }, e.bar1.options = {
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["Evaporation", "Precipitation"]
            },
            toolbox: {
                show: !0,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            calculable: !0,
            xAxis: [{
                type: "category",
                data: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]
            }],
            yAxis: [{
                type: "value"
            }],
            series: [{
                name: "Evaporation",
                type: "bar",
                data: [2, 4.9, 7, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20, 6.4, 3.3],
                markPoint: {
                    data: [{
                        type: "max",
                        name: "Max"
                    }, {
                        type: "min",
                        name: "Min"
                    }]
                },
                markLine: {
                    data: [{
                        type: "average",
                        name: "Average"
                    }]
                }
            }, {
                name: "Precipitation",
                type: "bar",
                data: [2.6, 5.9, 9, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6, 2.3],
                markPoint: {
                    data: [{
                        name: "Highest",
                        value: 182.2,
                        xAxis: 7,
                        yAxis: 183,
                        symbolSize: 18
                    }, {
                        name: "Lowest",
                        value: 2.3,
                        xAxis: 11,
                        yAxis: 3
                    }]
                },
                markLine: {
                    data: [{
                        type: "average",
                        name: "Average"
                    }]
                }
            }]
        }, e.bar2.options = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                }
            },
            legend: {
                data: ["Direct", "Email", "Affiliate", "Video Ads", "Search", "Baidu", "Google", "Bing", "Others"]
            },
            calculable: !0,
            xAxis: [{
                type: "category",
                data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
            }],
            yAxis: [{
                type: "value"
            }],
            series: [{
                name: "Direct",
                type: "bar",
                data: [320, 332, 301, 334, 390, 330, 320]
            }, {
                name: "Email",
                type: "bar",
                stack: "Ads",
                data: [120, 132, 101, 134, 90, 230, 210]
            }, {
                name: "Affiliate",
                type: "bar",
                stack: "Ads",
                data: [220, 182, 191, 234, 290, 330, 310]
            }, {
                name: "Video Ads",
                type: "bar",
                stack: "Ads",
                data: [150, 232, 201, 154, 190, 330, 410]
            }, {
                name: "Search",
                type: "bar",
                data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                markLine: {
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                type: "dashed"
                            }
                        }
                    },
                    data: [
                        [{
                            type: "min"
                        }, {
                            type: "max"
                        }]
                    ]
                }
            }, {
                name: "Baidu",
                type: "bar",
                barWidth: 5,
                stack: "Search",
                data: [620, 732, 701, 734, 1090, 1130, 1120]
            }, {
                name: "Google",
                type: "bar",
                stack: "Search",
                data: [120, 132, 101, 134, 290, 230, 220]
            }, {
                name: "Bing",
                type: "bar",
                stack: "Search",
                data: [60, 72, 71, 74, 190, 130, 110]
            }, {
                name: "Others",
                type: "bar",
                stack: "Search",
                data: [62, 82, 91, 84, 109, 110, 120]
            }]
        }, e.bar3.options = {
            title: {
                text: "World Population",
                subtext: "From the Internet"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["2011", "2012"]
            },
            toolbox: {
                show: !0,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            calculable: !0,
            xAxis: [{
                type: "value",
                boundaryGap: [0, .01]
            }],
            yAxis: [{
                type: "category",
                data: ["Brazil", "Indonesia", "USA", "India", "China", "World Population (10k)"]
            }],
            series: [{
                name: "2011",
                type: "bar",
                data: [18203, 23489, 29034, 104970, 131744, 630230]
            }, {
                name: "2012",
                type: "bar",
                data: [19325, 23438, 31e3, 121594, 134141, 681807]
            }]
        }, e.bar4.options = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                }
            },
            legend: {
                data: ["Direct", "Email", "Affiliate", "Video Ads", "Search"]
            },
            toolbox: {
                show: !0,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            calculable: !0,
            xAxis: [{
                type: "value"
            }],
            yAxis: [{
                type: "category",
                data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
            }],
            series: [{
                name: "Direct",
                type: "bar",
                stack: "Sum",
                itemStyle: {
                    normal: {
                        label: {
                            show: !0,
                            position: "insideRight"
                        }
                    }
                },
                data: [320, 302, 301, 334, 390, 330, 320]
            }, {
                name: "Email",
                type: "bar",
                stack: "Sum",
                itemStyle: {
                    normal: {
                        label: {
                            show: !0,
                            position: "insideRight"
                        }
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            }, {
                name: "Affiliate",
                type: "bar",
                stack: "Sum",
                itemStyle: {
                    normal: {
                        label: {
                            show: !0,
                            position: "insideRight"
                        }
                    }
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            }, {
                name: "Video Ads",
                type: "bar",
                stack: "Sum",
                itemStyle: {
                    normal: {
                        label: {
                            show: !0,
                            position: "insideRight"
                        }
                    }
                },
                data: [150, 212, 201, 154, 190, 330, 410]
            }, {
                name: "Search",
                type: "bar",
                stack: "Sum",
                itemStyle: {
                    normal: {
                        label: {
                            show: !0,
                            position: "insideRight"
                        }
                    }
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
            }]
        }, e.bar5.options = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                }
            },
            legend: {
                data: ["Profit", "Cost", "Income"]
            },
            toolbox: {
                show: !0,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            calculable: !0,
            xAxis: [{
                type: "value"
            }],
            yAxis: [{
                type: "category",
                axisTick: {
                    show: !1
                },
                data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
            }],
            series: [{
                name: "Profit",
                type: "bar",
                itemStyle: {
                    normal: {
                        label: {
                            show: !0,
                            position: "inside"
                        }
                    }
                },
                data: [200, 170, 240, 244, 200, 220, 210]
            }, {
                name: "Income",
                type: "bar",
                stack: "Sum",
                barWidth: 5,
                itemStyle: {
                    normal: {
                        label: {
                            show: !0
                        }
                    }
                },
                data: [320, 302, 341, 374, 390, 450, 420]
            }, {
                name: "Cost",
                type: "bar",
                stack: "Sum",
                itemStyle: {
                    normal: {
                        label: {
                            show: !0,
                            position: "left"
                        }
                    }
                },
                data: [-120, -132, -101, -134, -190, -230, -210]
            }]
        }, e.pie1.options = {
            title: {
                text: "Traffic Source",
                x: "center"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                x: "left",
                data: ["Direct", "Email", "Affiliate", "Video Ads", "Search"]
            },
            toolbox: {
                show: !0,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            calculable: !0,
            series: [{
                name: "Vist source",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [{
                    value: 335,
                    name: "Direct"
                }, {
                    value: 310,
                    name: "Email"
                }, {
                    value: 234,
                    name: "Affiliate"
                }, {
                    value: 135,
                    name: "Video Ads"
                }, {
                    value: 1548,
                    name: "Search"
                }]
            }]
        }, e.pie2.options = {
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                x: "left",
                data: ["Direct", "Email", "Affiliate", "Video Ads", "Search"]
            },
            toolbox: {
                show: !0,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            calculable: !0,
            series: [{
                name: "Traffic source",
                type: "pie",
                radius: ["50%", "70%"],
                itemStyle: {
                    normal: {
                        label: {
                            show: !1
                        },
                        labelLine: {
                            show: !1
                        }
                    },
                    emphasis: {
                        label: {
                            show: !0,
                            position: "center",
                            textStyle: {
                                fontSize: "30",
                                fontWeight: "bold"
                            }
                        }
                    }
                },
                data: [{
                    value: 335,
                    name: "Direct"
                }, {
                    value: 310,
                    name: "Email"
                }, {
                    value: 234,
                    name: "Affiliate"
                }, {
                    value: 135,
                    name: "Video Ads"
                }, {
                    value: 1548,
                    name: "Search"
                }]
            }]
        }, e.pie4.options = {
            title: {
                text: "Nightingale rose diagram",
                x: "center"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x: "center",
                y: "bottom",
                data: ["rose1", "rose2", "rose3", "rose4", "rose5", "rose6", "rose7", "rose8"]
            },
            toolbox: {
                show: !0,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            calculable: !0,
            series: [{
                name: "Radius model",
                type: "pie",
                radius: [20, 110],
                center: ["25%", 200],
                roseType: "radius",
                width: "40%",
                max: 40,
                itemStyle: {
                    normal: {
                        label: {
                            show: !1
                        },
                        labelLine: {
                            show: !1
                        }
                    },
                    emphasis: {
                        label: {
                            show: !0
                        },
                        labelLine: {
                            show: !0
                        }
                    }
                },
                data: [{
                    value: 10,
                    name: "rose1"
                }, {
                    value: 5,
                    name: "rose2"
                }, {
                    value: 15,
                    name: "rose3"
                }, {
                    value: 25,
                    name: "rose4"
                }, {
                    value: 20,
                    name: "rose5"
                }, {
                    value: 35,
                    name: "rose6"
                }, {
                    value: 30,
                    name: "rose7"
                }, {
                    value: 40,
                    name: "rose8"
                }]
            }, {
                name: "Area model",
                type: "pie",
                radius: [30, 110],
                center: ["75%", 200],
                roseType: "area",
                x: "50%",
                max: 40,
                sort: "ascending",
                data: [{
                    value: 10,
                    name: "rose1"
                }, {
                    value: 5,
                    name: "rose2"
                }, {
                    value: 15,
                    name: "rose3"
                }, {
                    value: 25,
                    name: "rose4"
                }, {
                    value: 20,
                    name: "rose5"
                }, {
                    value: 35,
                    name: "rose6"
                }, {
                    value: 30,
                    name: "rose7"
                }, {
                    value: 40,
                    name: "rose8"
                }]
            }]
        }, e.scatter1.options = {
            title: {
                text: "Height and weight distribution",
                subtext: "Data: Heinz  2003"
            },
            tooltip: {
                trigger: "axis",
                showDelay: 0,
                formatter: function(e) {
                    return e.value.length > 1 ? e.seriesName + " :<br/>" + e.value[0] + "cm " + e.value[1] + "kg " : e.seriesName + " :<br/>" + e.name + " : " + e.value + "kg "
                },
                axisPointer: {
                    show: !0,
                    type: "cross",
                    lineStyle: {
                        type: "dashed",
                        width: 1
                    }
                }
            },
            legend: {
                data: ["Femail", "Male"]
            },
            toolbox: {
                show: !0,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            xAxis: [{
                type: "value",
                scale: !0,
                axisLabel: {
                    formatter: "{value} cm"
                }
            }],
            yAxis: [{
                type: "value",
                scale: !0,
                axisLabel: {
                    formatter: "{value} kg"
                }
            }],
            series: [{
                name: "Femail",
                type: "scatter",
                data: [
                    [161.2, 51.6],
                    [167.5, 59],
                    [159.5, 49.2],
                    [157, 63],
                    [155.8, 53.6],
                    [170, 59],
                    [159.1, 47.6],
                    [166, 69.8],
                    [176.2, 66.8],
                    [160.2, 75.2],
                    [172.5, 55.2],
                    [170.9, 54.2],
                    [172.9, 62.5],
                    [153.4, 42],
                    [160, 50],
                    [147.2, 49.8],
                    [168.2, 49.2],
                    [175, 73.2],
                    [157, 47.8],
                    [167.6, 68.8],
                    [159.5, 50.6],
                    [175, 82.5],
                    [166.8, 57.2],
                    [176.5, 87.8],
                    [170.2, 72.8],
                    [174, 54.5],
                    [173, 59.8],
                    [179.9, 67.3],
                    [170.5, 67.8],
                    [160, 47],
                    [154.4, 46.2],
                    [162, 55],
                    [176.5, 83],
                    [160, 54.4],
                    [152, 45.8],
                    [162.1, 53.6],
                    [170, 73.2],
                    [160.2, 52.1],
                    [161.3, 67.9],
                    [166.4, 56.6],
                    [168.9, 62.3],
                    [163.8, 58.5],
                    [167.6, 54.5],
                    [160, 50.2],
                    [161.3, 60.3],
                    [167.6, 58.3],
                    [165.1, 56.2],
                    [160, 50.2],
                    [170, 72.9],
                    [157.5, 59.8],
                    [167.6, 61],
                    [160.7, 69.1],
                    [163.2, 55.9],
                    [152.4, 46.5],
                    [157.5, 54.3],
                    [168.3, 54.8],
                    [180.3, 60.7],
                    [165.5, 60],
                    [165, 62],
                    [164.5, 60.3],
                    [156, 52.7],
                    [160, 74.3],
                    [163, 62],
                    [165.7, 73.1],
                    [161, 80],
                    [162, 54.7],
                    [166, 53.2],
                    [174, 75.7],
                    [172.7, 61.1],
                    [167.6, 55.7],
                    [151.1, 48.7],
                    [164.5, 52.3],
                    [163.5, 50],
                    [152, 59.3],
                    [169, 62.5],
                    [164, 55.7],
                    [161.2, 54.8],
                    [155, 45.9],
                    [170, 70.6],
                    [176.2, 67.2],
                    [170, 69.4],
                    [162.5, 58.2],
                    [170.3, 64.8],
                    [164.1, 71.6],
                    [169.5, 52.8],
                    [163.2, 59.8],
                    [154.5, 49],
                    [159.8, 50],
                    [173.2, 69.2],
                    [170, 55.9],
                    [161.4, 63.4],
                    [169, 58.2],
                    [166.2, 58.6],
                    [159.4, 45.7],
                    [162.5, 52.2],
                    [159, 48.6],
                    [162.8, 57.8],
                    [159, 55.6],
                    [179.8, 66.8],
                    [162.9, 59.4],
                    [161, 53.6],
                    [151.1, 73.2],
                    [168.2, 53.4],
                    [168.9, 69],
                    [173.2, 58.4],
                    [171.8, 56.2],
                    [178, 70.6],
                    [164.3, 59.8],
                    [163, 72],
                    [168.5, 65.2],
                    [166.8, 56.6],
                    [172.7, 105.2],
                    [163.5, 51.8],
                    [169.4, 63.4],
                    [167.8, 59],
                    [159.5, 47.6],
                    [167.6, 63],
                    [161.2, 55.2],
                    [160, 45],
                    [163.2, 54],
                    [162.2, 50.2],
                    [161.3, 60.2],
                    [149.5, 44.8],
                    [157.5, 58.8],
                    [163.2, 56.4],
                    [172.7, 62],
                    [155, 49.2],
                    [156.5, 67.2],
                    [164, 53.8],
                    [160.9, 54.4],
                    [162.8, 58],
                    [167, 59.8],
                    [160, 54.8],
                    [160, 43.2],
                    [168.9, 60.5],
                    [158.2, 46.4],
                    [156, 64.4],
                    [160, 48.8],
                    [167.1, 62.2],
                    [158, 55.5],
                    [167.6, 57.8],
                    [156, 54.6],
                    [162.1, 59.2],
                    [173.4, 52.7],
                    [159.8, 53.2],
                    [170.5, 64.5],
                    [159.2, 51.8],
                    [157.5, 56],
                    [161.3, 63.6],
                    [162.6, 63.2],
                    [160, 59.5],
                    [168.9, 56.8],
                    [165.1, 64.1],
                    [162.6, 50],
                    [165.1, 72.3],
                    [166.4, 55],
                    [160, 55.9],
                    [152.4, 60.4],
                    [170.2, 69.1],
                    [162.6, 84.5],
                    [170.2, 55.9],
                    [158.8, 55.5],
                    [172.7, 69.5],
                    [167.6, 76.4],
                    [162.6, 61.4],
                    [167.6, 65.9],
                    [156.2, 58.6],
                    [175.2, 66.8],
                    [172.1, 56.6],
                    [162.6, 58.6],
                    [160, 55.9],
                    [165.1, 59.1],
                    [182.9, 81.8],
                    [166.4, 70.7],
                    [165.1, 56.8],
                    [177.8, 60],
                    [165.1, 58.2],
                    [175.3, 72.7],
                    [154.9, 54.1],
                    [158.8, 49.1],
                    [172.7, 75.9],
                    [168.9, 55],
                    [161.3, 57.3],
                    [167.6, 55],
                    [165.1, 65.5],
                    [175.3, 65.5],
                    [157.5, 48.6],
                    [163.8, 58.6],
                    [167.6, 63.6],
                    [165.1, 55.2],
                    [165.1, 62.7],
                    [168.9, 56.6],
                    [162.6, 53.9],
                    [164.5, 63.2],
                    [176.5, 73.6],
                    [168.9, 62],
                    [175.3, 63.6],
                    [159.4, 53.2],
                    [160, 53.4],
                    [170.2, 55],
                    [162.6, 70.5],
                    [167.6, 54.5],
                    [162.6, 54.5],
                    [160.7, 55.9],
                    [160, 59],
                    [157.5, 63.6],
                    [162.6, 54.5],
                    [152.4, 47.3],
                    [170.2, 67.7],
                    [165.1, 80.9],
                    [172.7, 70.5],
                    [165.1, 60.9],
                    [170.2, 63.6],
                    [170.2, 54.5],
                    [170.2, 59.1],
                    [161.3, 70.5],
                    [167.6, 52.7],
                    [167.6, 62.7],
                    [165.1, 86.3],
                    [162.6, 66.4],
                    [152.4, 67.3],
                    [168.9, 63],
                    [170.2, 73.6],
                    [175.2, 62.3],
                    [175.2, 57.7],
                    [160, 55.4],
                    [165.1, 104.1],
                    [174, 55.5],
                    [170.2, 77.3],
                    [160, 80.5],
                    [167.6, 64.5],
                    [167.6, 72.3],
                    [167.6, 61.4],
                    [154.9, 58.2],
                    [162.6, 81.8],
                    [175.3, 63.6],
                    [171.4, 53.4],
                    [157.5, 54.5],
                    [165.1, 53.6],
                    [160, 60],
                    [174, 73.6],
                    [162.6, 61.4],
                    [174, 55.5],
                    [162.6, 63.6],
                    [161.3, 60.9],
                    [156.2, 60],
                    [149.9, 46.8],
                    [169.5, 57.3],
                    [160, 64.1],
                    [175.3, 63.6],
                    [169.5, 67.3],
                    [160, 75.5],
                    [172.7, 68.2],
                    [162.6, 61.4],
                    [157.5, 76.8],
                    [176.5, 71.8],
                    [164.4, 55.5],
                    [160.7, 48.6],
                    [174, 66.4],
                    [163.8, 67.3]
                ],
                markPoint: {
                    data: [{
                        type: "max",
                        name: "Max"
                    }, {
                        type: "min",
                        name: "Min"
                    }]
                },
                markLine: {
                    data: [{
                        type: "average",
                        name: "Average"
                    }]
                }
            }, {
                name: "Male",
                type: "scatter",
                data: [
                    [174, 65.6],
                    [175.3, 71.8],
                    [193.5, 80.7],
                    [186.5, 72.6],
                    [187.2, 78.8],
                    [181.5, 74.8],
                    [184, 86.4],
                    [184.5, 78.4],
                    [175, 62],
                    [184, 81.6],
                    [180, 76.6],
                    [177.8, 83.6],
                    [192, 90],
                    [176, 74.6],
                    [174, 71],
                    [184, 79.6],
                    [192.7, 93.8],
                    [171.5, 70],
                    [173, 72.4],
                    [176, 85.9],
                    [176, 78.8],
                    [180.5, 77.8],
                    [172.7, 66.2],
                    [176, 86.4],
                    [173.5, 81.8],
                    [178, 89.6],
                    [180.3, 82.8],
                    [180.3, 76.4],
                    [164.5, 63.2],
                    [173, 60.9],
                    [183.5, 74.8],
                    [175.5, 70],
                    [188, 72.4],
                    [189.2, 84.1],
                    [172.8, 69.1],
                    [170, 59.5],
                    [182, 67.2],
                    [170, 61.3],
                    [177.8, 68.6],
                    [184.2, 80.1],
                    [186.7, 87.8],
                    [171.4, 84.7],
                    [172.7, 73.4],
                    [175.3, 72.1],
                    [180.3, 82.6],
                    [182.9, 88.7],
                    [188, 84.1],
                    [177.2, 94.1],
                    [172.1, 74.9],
                    [167, 59.1],
                    [169.5, 75.6],
                    [174, 86.2],
                    [172.7, 75.3],
                    [182.2, 87.1],
                    [164.1, 55.2],
                    [163, 57],
                    [171.5, 61.4],
                    [184.2, 76.8],
                    [174, 86.8],
                    [174, 72.2],
                    [177, 71.6],
                    [186, 84.8],
                    [167, 68.2],
                    [171.8, 66.1],
                    [182, 72],
                    [167, 64.6],
                    [177.8, 74.8],
                    [164.5, 70],
                    [192, 101.6],
                    [175.5, 63.2],
                    [171.2, 79.1],
                    [181.6, 78.9],
                    [167.4, 67.7],
                    [181.1, 66],
                    [177, 68.2],
                    [174.5, 63.9],
                    [177.5, 72],
                    [170.5, 56.8],
                    [182.4, 74.5],
                    [197.1, 90.9],
                    [180.1, 93],
                    [175.5, 80.9],
                    [180.6, 72.7],
                    [184.4, 68],
                    [175.5, 70.9],
                    [180.6, 72.5],
                    [177, 72.5],
                    [177.1, 83.4],
                    [181.6, 75.5],
                    [176.5, 73],
                    [175, 70.2],
                    [174, 73.4],
                    [165.1, 70.5],
                    [177, 68.9],
                    [192, 102.3],
                    [176.5, 68.4],
                    [169.4, 65.9],
                    [182.1, 75.7],
                    [179.8, 84.5],
                    [175.3, 87.7],
                    [184.9, 86.4],
                    [177.3, 73.2],
                    [167.4, 53.9],
                    [178.1, 72],
                    [168.9, 55.5],
                    [157.2, 58.4],
                    [180.3, 83.2],
                    [170.2, 72.7],
                    [177.8, 64.1],
                    [172.7, 72.3],
                    [165.1, 65],
                    [186.7, 86.4],
                    [165.1, 65],
                    [174, 88.6],
                    [175.3, 84.1],
                    [185.4, 66.8],
                    [177.8, 75.5],
                    [180.3, 93.2],
                    [180.3, 82.7],
                    [177.8, 58],
                    [177.8, 79.5],
                    [177.8, 78.6],
                    [177.8, 71.8],
                    [177.8, 116.4],
                    [163.8, 72.2],
                    [188, 83.6],
                    [198.1, 85.5],
                    [175.3, 90.9],
                    [166.4, 85.9],
                    [190.5, 89.1],
                    [166.4, 75],
                    [177.8, 77.7],
                    [179.7, 86.4],
                    [172.7, 90.9],
                    [190.5, 73.6],
                    [185.4, 76.4],
                    [168.9, 69.1],
                    [167.6, 84.5],
                    [175.3, 64.5],
                    [170.2, 69.1],
                    [190.5, 108.6],
                    [177.8, 86.4],
                    [190.5, 80.9],
                    [177.8, 87.7],
                    [184.2, 94.5],
                    [176.5, 80.2],
                    [177.8, 72],
                    [180.3, 71.4],
                    [171.4, 72.7],
                    [172.7, 84.1],
                    [172.7, 76.8],
                    [177.8, 63.6],
                    [177.8, 80.9],
                    [182.9, 80.9],
                    [170.2, 85.5],
                    [167.6, 68.6],
                    [175.3, 67.7],
                    [165.1, 66.4],
                    [185.4, 102.3],
                    [181.6, 70.5],
                    [172.7, 95.9],
                    [190.5, 84.1],
                    [179.1, 87.3],
                    [175.3, 71.8],
                    [170.2, 65.9],
                    [193, 95.9],
                    [171.4, 91.4],
                    [177.8, 81.8],
                    [177.8, 96.8],
                    [167.6, 69.1],
                    [167.6, 82.7],
                    [180.3, 75.5],
                    [182.9, 79.5],
                    [176.5, 73.6],
                    [186.7, 91.8],
                    [188, 84.1],
                    [188, 85.9],
                    [177.8, 81.8],
                    [174, 82.5],
                    [177.8, 80.5],
                    [171.4, 70],
                    [185.4, 81.8],
                    [185.4, 84.1],
                    [188, 90.5],
                    [188, 91.4],
                    [182.9, 89.1],
                    [176.5, 85],
                    [175.3, 69.1],
                    [175.3, 73.6],
                    [188, 80.5],
                    [188, 82.7],
                    [175.3, 86.4],
                    [170.5, 67.7],
                    [179.1, 92.7],
                    [177.8, 93.6],
                    [175.3, 70.9],
                    [182.9, 75],
                    [170.8, 93.2],
                    [188, 93.2],
                    [180.3, 77.7],
                    [177.8, 61.4],
                    [185.4, 94.1],
                    [168.9, 75],
                    [185.4, 83.6],
                    [180.3, 85.5],
                    [174, 73.9],
                    [167.6, 66.8],
                    [182.9, 87.3],
                    [160, 72.3],
                    [180.3, 88.6],
                    [167.6, 75.5],
                    [186.7, 101.4],
                    [175.3, 91.1],
                    [175.3, 67.3],
                    [175.9, 77.7],
                    [175.3, 81.8],
                    [179.1, 75.5],
                    [181.6, 84.5],
                    [177.8, 76.6],
                    [182.9, 85],
                    [177.8, 102.5],
                    [184.2, 77.3],
                    [179.1, 71.8],
                    [176.5, 87.9],
                    [188, 94.3],
                    [174, 70.9],
                    [167.6, 64.5],
                    [170.2, 77.3],
                    [167.6, 72.3],
                    [188, 87.3],
                    [174, 80],
                    [176.5, 82.3],
                    [180.3, 73.6],
                    [167.6, 74.1],
                    [188, 85.9],
                    [180.3, 73.2],
                    [167.6, 76.3],
                    [183, 65.9],
                    [183, 90.9],
                    [179.1, 89.1],
                    [170.2, 62.3],
                    [177.8, 82.7],
                    [179.1, 79.1],
                    [190.5, 98.2],
                    [177.8, 84.1],
                    [180.3, 83.2],
                    [180.3, 83.2]
                ],
                markPoint: {
                    data: [{
                        type: "max",
                        name: "Max"
                    }, {
                        type: "min",
                        name: "Min"
                    }]
                },
                markLine: {
                    data: [{
                        type: "average",
                        name: "Average"
                    }]
                }
            }]
        }, e.scatter2.options = {
            tooltip: {
                trigger: "axis",
                showDelay: 0,
                axisPointer: {
                    show: !0,
                    type: "cross",
                    lineStyle: {
                        type: "dashed",
                        width: 1
                    }
                }
            },
            legend: {
                data: ["scatter1", "scatter2"]
            },
            toolbox: {
                show: !0,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            xAxis: [{
                type: "value",
                splitNumber: 4,
                scale: !0
            }],
            yAxis: [{
                type: "value",
                splitNumber: 4,
                scale: !0
            }],
            series: [{
                name: "scatter1",
                type: "scatter",
                symbolSize: function(e) {
                    return Math.round(e[2] / 5)
                },
                data: n()
            }, {
                name: "scatter2",
                type: "scatter",
                symbolSize: function(e) {
                    return Math.round(e[2] / 5)
                },
                data: n()
            }]
        }, e.radar1.options = {
            title: {
                text: "Budget vs spending"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                orient: "vertical",
                x: "right",
                y: "bottom",
                data: ["Allocated Budget", "Actual Spending"]
            },
            toolbox: {
                show: !0,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            polar: [{
                indicator: [{
                    text: "sales",
                    max: 6e3
                }, {
                    text: "dministration",
                    max: 16e3
                }, {
                    text: "Information Techology",
                    max: 3e4
                }, {
                    text: "Customer Support",
                    max: 38e3
                }, {
                    text: "Development",
                    max: 52e3
                }, {
                    text: "Marketing",
                    max: 25e3
                }]
            }],
            calculable: !0,
            series: [{
                name: "Budget vs spending",
                type: "radar",
                data: [{
                    value: [4300, 1e4, 28e3, 35e3, 5e4, 19e3],
                    name: "Allocated Budget"
                }, {
                    value: [5e3, 14e3, 28e3, 31e3, 42e3, 21e3],
                    name: "Actual Spending"
                }]
            }]
        }, e.radar2.options = {
            tooltip: {
                trigger: "axis"
            },
            legend: {
                x: "center",
                data: ["Ronaldo", "Andriy Shevchenko"]
            },
            toolbox: {
                show: !0,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            calculable: !0,
            polar: [{
                indicator: [{
                    text: "Attack",
                    max: 100
                }, {
                    text: "Guard",
                    max: 100
                }, {
                    text: "Physical",
                    max: 100
                }, {
                    text: "Speed",
                    max: 100
                }, {
                    text: "Strength",
                    max: 100
                }, {
                    text: "Skill",
                    max: 100
                }],
                radius: 130
            }],
            series: [{
                name: "Full of live data",
                type: "radar",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                },
                data: [{
                    value: [97, 42, 88, 94, 90, 86],
                    name: "Andriy Shevchenko"
                }, {
                    value: [97, 32, 74, 95, 88, 92],
                    name: "Ronaldo"
                }]
            }]
        }, e.gauge1.options = {
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                show: !0,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            series: [{
                name: "Business metric",
                type: "gauge",
                detail: {
                    formatter: "{value}%"
                },
                data: [{
                    value: 50,
                    name: "Completion"
                }]
            }]
        }, e.chord1.options = {
            title: {
                text: "Test Data",
                subtext: "From d3.js",
                x: "right",
                y: "bottom"
            },
            tooltip: {
                trigger: "item",
                formatter: function(e) {
                    return e.indicator2 ? e.value.weight : e.name
                }
            },
            toolbox: {
                show: !0,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            legend: {
                x: "left",
                data: ["group1", "group2", "group3", "group4"]
            },
            series: [{
                type: "chord",
                sort: "ascending",
                sortSub: "descending",
                showScale: !0,
                showScaleText: !0,
                data: [{
                    name: "group1"
                }, {
                    name: "group2"
                }, {
                    name: "group3"
                }, {
                    name: "group4"
                }],
                itemStyle: {
                    normal: {
                        label: {
                            show: !1
                        }
                    }
                },
                matrix: [
                    [11975, 5871, 8916, 2868],
                    [1951, 10048, 2060, 6171],
                    [8010, 16145, 8090, 8045],
                    [1013, 990, 940, 6907]
                ]
            }]
        }, e.funnel1.options = {
            title: {
                text: "Funnel"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                show: !0,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            legend: {
                data: ["Display", "Click", "Vist", "Contact", "Order"]
            },
            calculable: !0,
            series: [{
                name: "Funnel",
                type: "funnel",
                width: "40%",
                data: [{
                    value: 60,
                    name: "Vist"
                }, {
                    value: 40,
                    name: "Contact"
                }, {
                    value: 20,
                    name: "Order"
                }, {
                    value: 80,
                    name: "Click"
                }, {
                    value: 100,
                    name: "Display"
                }]
            }, {
                name: "Pyramid",
                type: "funnel",
                x: "50%",
                sort: "ascending",
                itemStyle: {
                    normal: {
                        label: {
                            position: "left"
                        }
                    }
                },
                data: [{
                    value: 60,
                    name: "Vist"
                }, {
                    value: 40,
                    name: "Contact"
                }, {
                    value: 20,
                    name: "Order"
                }, {
                    value: 80,
                    name: "Click"
                }, {
                    value: 100,
                    name: "Display"
                }]
            }]
        }
    }
    angular.module("app.chart").controller("EChartsCtrl", ["$scope", "$timeout", e])
}(),
function() {
    "use strict";

    function e() {
        var e = [{
                name: "Fade up",
                "class": "animate-fade-up"
            }, {
                name: "Scale up",
                "class": "ainmate-scale-up"
            }, {
                name: "Slide in from right",
                "class": "ainmate-slide-in-right"
            }, {
                name: "Flip Y",
                "class": "animate-flip-y"
            }],
            t = new Date,
            a = t.getFullYear(),
            n = {
                brand: "Material",
                name: "Lisa",
                year: a,
                layout: "wide",
                menu: "vertical",
                isMenuCollapsed: !1,
                fixedHeader: !0,
                fixedSidebar: !0,
                pageTransition: e[0],
                skin: "12"
            },
            o = {
                primary: "#009688",
                success: "#8BC34A",
                info: "#00BCD4",
                infoAlt: "#7E57C2",
                warning: "#FFCA28",
                danger: "#F44336",
                text: "#3D4051",
                gray: "#EDF0F1"
            };
        return {
            pageTransitionOpts: e,
            main: n,
            color: o
        }
    }

    function t(e) {
        var t = e.extendPalette("cyan", {
                contrastLightColors: "500 600 700 800 900",
                contrastStrongLightColors: "500 600 700 800 900"
            }),
            a = e.extendPalette("light-green", {
                contrastLightColors: "500 600 700 800 900",
                contrastStrongLightColors: "500 600 700 800 900"
            });
        e.definePalette("cyanAlt", t).definePalette("lightGreenAlt", a), e.theme("default").primaryPalette("teal", {
            "default": "500"
        }).accentPalette("cyanAlt", {
            "default": "500"
        }).warnPalette("red", {
            "default": "500"
        }).backgroundPalette("grey")
    }
    angular.module("app.core").factory("appConfig", [e]).config(["$mdThemingProvider", t])
}(),
function() {
    "use strict";

    function e(e, t, a, n, o) {
        e.pageTransitionOpts = o.pageTransitionOpts, e.main = o.main, e.color = o.color, e.$watch("main", function(a, n) {
            "horizontal" === a.menu && "vertical" === n.menu && t.$broadcast("nav:reset"), a.fixedHeader === !1 && a.fixedSidebar === !0 && (n.fixedHeader === !1 && n.fixedSidebar === !1 && (e.main.fixedHeader = !0, e.main.fixedSidebar = !0), n.fixedHeader === !0 && n.fixedSidebar === !0 && (e.main.fixedHeader = !1, e.main.fixedSidebar = !1)), a.fixedSidebar === !0 && (e.main.fixedHeader = !0), a.fixedHeader === !1 && (e.main.fixedSidebar = !1)
        }, !0), t.$on("$stateChangeSuccess", function(e, t, a) {
            n.scrollTo(0, 0)
        })
    }
    angular.module("app").controller("AppCtrl", ["$scope", "$rootScope", "$state", "$document", "appConfig", e])
}(),
function() {
    "use strict";
    angular.module("app").config(["$stateProvider", "$urlRouterProvider", function(e, t) {
        var a, n;
        a = ["ui/cards", "ui/typography", "ui/buttons", "ui/icons", "ui/grids", "ui/widgets", 
		"ui/components", "ui/timeline", "ui/lists", "ui/pricing-tables", "map/maps", "table/static",
		"table/dynamic", "table/responsive", "form/elements", "form/layouts", "form/validation", "form/wizard", 
		"chart/echarts", "chart/echarts-line", "chart/echarts-bar", "chart/echarts-pie", "chart/echarts-scatter", 
		"chart/echarts-more", "page/404", "page/500", "page/blank", "page/forgot-password", "page/invoice", 
		"page/lock-screen", "page/profile", "page/login", "page/signup", "page/signup2", "page/signup3", 
                "page/team", "page/partners", "page/partner_detail", "page/partner_detail_staff", "page/rate_project",
                "page/rate_project_detail", "page/cd_project_detail", "page/pd_project_detail", "page/my_projects",
                "page/user_profile", "app/calendar"], n = function(t) {
            var a, n;
            return n = "/" + t, a = {
                url: n,
                templateUrl: "app/" + t + ".html"
            }, e.state(t, a), e
        }, a.forEach(function(e) {
            return n(e)
        }), t.when("/", "/dashboard").otherwise("/dashboard"), e.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/dashboard/dashboard.html"
        })
    }])
}(),
function() {
    function e(e) {
        e.useStaticFilesLoader({
            prefix: "i18n/",
            suffix: ".json"
        }), e.preferredLanguage("en"), e.useSanitizeValueStrategy(null)
    }

    function t(e, t) {
        function a(a) {
            switch (a) {
                case "English":
                    t.use("en");
                    break;
                case "Español":
                    t.use("es");
                    break;
                case "中文":
                    t.use("zh");
                    break;
                case "日本語":
                    t.use("ja");
                    break;
                case "Portugal":
                    t.use("pt");
                    break;
                case "Ру�?�?кий �?зык":
                    t.use("ru")
            }
            return e.lang = a
        }

        function n() {
            var t;
            switch (t = e.lang) {
                case "English":
                    return "flags-american";
                case "Español":
                    return "flags-spain";
                case "中文":
                    return "flags-china";
                case "Portugal":
                    return "flags-portugal";
                case "日本語":
                    return "flags-japan";
                case "Ру�?�?кий �?зык":
                    return "flags-russia"
            }
        }
        e.lang = "English", e.setLang = a, e.getFlag = n
    }
    angular.module("app.i18n", ["pascalprecht.translate"]).config(["$translateProvider", e]).controller("LangCtrl", ["$scope", "$translate", t])
}(),
function() {
    "use strict";

    function e(e) {
        e.combo = {}, e.combo.options = {
            legend: {
                show: !0,
                x: "right",
                y: "top",
                data: ["WOM", "Viral", "Paid"]
            },
            grid: {
                x: 40,
                y: 60,
                x2: 40,
                y2: 30,
                borderWidth: 0
            },
            tooltip: {
                show: !0,
                trigger: "axis",
                axisPointer: {
                    lineStyle: {
                        color: e.color.gray
                    }
                }
            },
            xAxis: [{
                type: "category",
                axisLine: {
                    show: !1
                },
                axisTick: {
                    show: !1
                },
                axisLabel: {
                    textStyle: {
                        color: "#607685"
                    }
                },
                splitLine: {
                    show: !1,
                    lineStyle: {
                        color: "#f3f3f3"
                    }
                },
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
            }],
            yAxis: [{
                type: "value",
                axisLine: {
                    show: !1
                },
                axisTick: {
                    show: !1
                },
                axisLabel: {
                    textStyle: {
                        color: "#607685"
                    }
                },
                splitLine: {
                    show: !0,
                    lineStyle: {
                        color: "#f3f3f3"
                    }
                }
            }],
            series: [{
                name: "WOM",
                type: "bar",
                clickable: !1,
                itemStyle: {
                    normal: {
                        color: e.color.gray
                    },
                    emphasis: {
                        color: "rgba(237,240,241,.7)"
                    }
                },
                barCategoryGap: "50%",
                data: [75, 62, 45, 60, 73, 50, 31, 56, 70, 63, 49, 72, 76, 67, 46, 51, 69, 59, 85, 67, 56],
                legendHoverLink: !1,
                z: 2
            }, {
                name: "Viral",
                type: "line",
                smooth: !0,
                itemStyle: {
                    normal: {
                        color: e.color.success,
                        areaStyle: {
                            color: "rgba(139,195,74,.7)",
                            type: "default"
                        }
                    }
                },
                data: [0, 0, 0, 5, 20, 15, 30, 28, 25, 40, 60, 40, 43, 32, 36, 23, 12, 15, 2, 0, 0],
                symbol: "none",
                legendHoverLink: !1,
                z: 3
            }, {
                name: "Paid",
                type: "line",
                smooth: !0,
                itemStyle: {
                    normal: {
                        color: e.color.info,
                        areaStyle: {
                            color: "rgba(0,188,212,.7)",
                            type: "default"
                        }
                    }
                },
                data: [0, 0, 0, 0, 1, 6, 15, 8, 16, 9, 25, 12, 50, 20, 25, 12, 2, 1, 0, 0, 0],
                symbol: "none",
                legendHoverLink: !1,
                z: 4
            }]
        }, e.smline1 = {}, e.smline2 = {}, e.smline3 = {}, e.smline4 = {}, e.smline1.options = {
            tooltip: {
                show: !1,
                trigger: "axis",
                axisPointer: {
                    lineStyle: {
                        color: e.color.gray
                    }
                }
            },
            grid: {
                x: 1,
                y: 1,
                x2: 1,
                y2: 1,
                borderWidth: 0
            },
            xAxis: [{
                type: "category",
                show: !1,
                boundaryGap: !1,
                data: [1, 2, 3, 4, 5, 6, 7]
            }],
            yAxis: [{
                type: "value",
                show: !1,
                axisLabel: {
                    formatter: "{value} °C"
                }
            }],
            series: [{
                name: "*",
                type: "line",
                symbol: "none",
                data: [11, 11, 15, 13, 12, 13, 10],
                itemStyle: {
                    normal: {
                        color: e.color.info
                    }
                }
            }]
        }, e.smline2.options = {
            tooltip: {
                show: !1,
                trigger: "axis",
                axisPointer: {
                    lineStyle: {
                        color: e.color.gray
                    }
                }
            },
            grid: {
                x: 1,
                y: 1,
                x2: 1,
                y2: 1,
                borderWidth: 0
            },
            xAxis: [{
                type: "category",
                show: !1,
                boundaryGap: !1,
                data: [1, 2, 3, 4, 5, 6, 7]
            }],
            yAxis: [{
                type: "value",
                show: !1,
                axisLabel: {
                    formatter: "{value} °C"
                }
            }],
            series: [{
                name: "*",
                type: "line",
                symbol: "none",
                data: [11, 10, 14, 12, 13, 11, 12],
                itemStyle: {
                    normal: {
                        color: e.color.success
                    }
                }
            }]
        }, e.smline3.options = {
            tooltip: {
                show: !1,
                trigger: "axis",
                axisPointer: {
                    lineStyle: {
                        color: e.color.gray
                    }
                }
            },
            grid: {
                x: 1,
                y: 1,
                x2: 1,
                y2: 1,
                borderWidth: 0
            },
            xAxis: [{
                type: "category",
                show: !1,
                boundaryGap: !1,
                data: [1, 2, 3, 4, 5, 6, 7]
            }],
            yAxis: [{
                type: "value",
                show: !1,
                axisLabel: {
                    formatter: "{value} °C"
                }
            }],
            series: [{
                name: "*",
                type: "line",
                symbol: "none",
                data: [11, 10, 15, 13, 12, 13, 10],
                itemStyle: {
                    normal: {
                        color: e.color.danger
                    }
                }
            }]
        }, e.smline4.options = {
            tooltip: {
                show: !1,
                trigger: "axis",
                axisPointer: {
                    lineStyle: {
                        color: e.color.gray
                    }
                }
            },
            grid: {
                x: 1,
                y: 1,
                x2: 1,
                y2: 1,
                borderWidth: 0
            },
            xAxis: [{
                type: "category",
                show: !1,
                boundaryGap: !1,
                data: [1, 2, 3, 4, 5, 6, 7]
            }],
            yAxis: [{
                type: "value",
                show: !1,
                axisLabel: {
                    formatter: "{value} °C"
                }
            }],
            series: [{
                name: "*",
                type: "line",
                symbol: "none",
                data: [11, 12, 8, 10, 15, 12, 10],
                itemStyle: {
                    normal: {
                        color: e.color.warning
                    }
                }
            }]
        };
        var t = {
                normal: {
                    color: e.color.primary,
                    label: {
                        show: !0,
                        position: "center",
                        formatter: "{b}",
                        textStyle: {
                            color: "#999",
                            baseline: "top",
                            fontSize: 12
                        }
                    },
                    labelLine: {
                        show: !1
                    }
                }
            },
            a = {
                normal: {
                    label: {
                        formatter: function(e) {
                            return 100 - e.value + "%"
                        },
                        textStyle: {
                            color: e.color.text,
                            baseline: "bottom",
                            fontSize: 20
                        }
                    }
                }
            },
            n = {
                normal: {
                    color: "#f1f1f1",
                    label: {
                        show: !0,
                        position: "center"
                    },
                    labelLine: {
                        show: !1
                    }
                }
            },
            o = [55, 60];
        e.pie = {}, e.pie.options = {
            series: [{
                type: "pie",
                center: ["12.5%", "50%"],
                radius: o,
                itemStyle: a,
                data: [{
                    name: "Bounce",
                    value: 36,
                    itemStyle: t
                }, {
                    name: "other",
                    value: 64,
                    itemStyle: n
                }]
            }, {
                type: "pie",
                center: ["37.5%", "50%"],
                radius: o,
                itemStyle: a,
                data: [{
                    name: "Activation",
                    value: 45,
                    itemStyle: t
                }, {
                    name: "other",
                    value: 55,
                    itemStyle: n
                }]
            }, {
                type: "pie",
                center: ["62.5%", "50%"],
                radius: o,
                itemStyle: a,
                data: [{
                    name: "Retention",
                    value: 25,
                    itemStyle: t
                }, {
                    name: "other",
                    value: 75,
                    itemStyle: n
                }]
            }, {
                type: "pie",
                center: ["87.5%", "50%"],
                radius: o,
                itemStyle: a,
                data: [{
                    name: "Referral",
                    value: 75,
                    itemStyle: t
                }, {
                    name: "other",
                    value: 25,
                    itemStyle: n
                }]
            }]
        }
    }
    angular.module("app").controller("DashboardCtrl", ["$scope", e])
}(),
function() {
    "use strict";

    function e(e) {
        e.user = {
            title: "Developer",
            email: "ipsum@lorem.com",
            firstName: "",
            lastName: "",
            company: "Google",
            address: "1600 Amphitheatre Pkwy",
            city: "Mountain View",
            state: "CA",
            biography: "Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!",
            postalCode: "94043"
        }, e.states = "AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY".split(" ").map(function(e) {
            return {
                abbrev: e
            }
        })
    }

    function t(e) {
        e.checkbox = {}, e.checkbox.cb1 = !0, e.checkbox.cb2 = !1, e.checkbox.cb3 = !1, e.checkbox.cb4 = !1, e.checkbox.cb5 = !1, e.checkbox.cb6 = !0, e.checkbox.cb7 = !0, e.checkbox.cb8 = !0, e.items = [1, 2, 3, 4, 5], e.selected = [], e.toggle = function(e, t) {
            var a = t.indexOf(e);
            a > -1 ? t.splice(a, 1) : t.push(e)
        }, e.exists = function(e, t) {
            return t.indexOf(e) > -1
        }
    }

    function a(e) {
        e.radio = {
            group1: "Banana",
            group2: "2",
            group3: "Primary"
        }, e.radioData = [{
            label: "Radio: disabled",
            value: "1",
            isDisabled: !0
        }, {
            label: "Radio: disabled, Checked",
            value: "2",
            isDisabled: !0
        }], e.contacts = [{
            id: 1,
            fullName: "Maria Guadalupe",
            lastName: "Guadalupe",
            title: "CEO, Found"
        }, {
            id: 2,
            fullName: "Gabriel García Marquéz",
            lastName: "Marquéz",
            title: "VP Sales & Marketing"
        }, {
            id: 3,
            fullName: "Miguel de Cervantes",
            lastName: "Cervantes",
            title: "Manager, Operations"
        }, {
            id: 4,
            fullName: "Pacorro de Castel",
            lastName: "Castel",
            title: "Security"
        }], e.selectedIndex = 2, e.selectedUser = function() {
            var t = e.selectedIndex - 1;
            return e.contacts[t].lastName
        }
    }

    function n(e) {
        e.color = {
            red: 97,
            green: 211,
            blue: 140
        }, e.rating1 = 3, e.rating2 = 2, e.rating3 = 4, e.disabled1 = 0, e.disabled2 = 70, e.user = {
            title: "Developer",
            email: "ipsum@lorem.com",
            firstName: "",
            lastName: "",
            company: "Google",
            address: "1600 Amphitheatre Pkwy",
            city: "Mountain View",
            state: "CA",
            biography: "Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!",
            postalCode: "94043"
        }, e.select1 = "1", e.toppings = [{
            category: "meat",
            name: "Pepperoni"
        }, {
            category: "meat",
            name: "Sausage"
        }, {
            category: "meat",
            name: "Ground Beef"
        }, {
            category: "meat",
            name: "Bacon"
        }, {
            category: "veg",
            name: "Mushrooms"
        }, {
            category: "veg",
            name: "Onion"
        }, {
            category: "veg",
            name: "Green Pepper"
        }, {
            category: "veg",
            name: "Green Olives"
        }], e.favoriteTopping = e.toppings[0].name, e.switchData = {
            cb1: !0,
            cbs: !1,
            cb4: !0,
            color1: !0,
            color2: !0,
            color3: !0
        }, e.switchOnChange = function(t) {
            e.message = "The switch is now: " + t
        }
    }

    function o(e, t, a, n) {
        function o(e) {
            alert("Sorry! You'll need to create a Constituion for " + e + " first!")
        }

        function i(n) {
            var o, i = n ? e.states.filter(c(n)) : e.states;
            return e.simulateQuery ? (o = a.defer(), t(function() {
                o.resolve(i)
            }, 1e3 * Math.random(), !1), o.promise) : i
        }

        function r(e) {}

        function s(e) {}

        function l() {
            var e = "Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,                            Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,                            Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,                            Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,                            North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,                            South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,                            Wisconsin, Wyoming";
            return e.split(/, +/g).map(function(e) {
                return {
                    value: e.toLowerCase(),
                    display: e
                }
            })
        }

        function c(e) {
            var t = angular.lowercase(e);
            return function(e) {
                return 0 === e.value.indexOf(t)
            }
        }
        var e = this;
        e.simulateQuery = !1, e.isDisabled = !1, e.states = l(), e.querySearch = i, e.selectedItemChange = s, e.searchTextChange = r, e.newState = o
    }

    function i(e) {
        e.myDate = new Date, e.minDate = new Date(e.myDate.getFullYear(), e.myDate.getMonth() - 2, e.myDate.getDate()), e.maxDate = new Date(e.myDate.getFullYear(), e.myDate.getMonth() + 2, e.myDate.getDate())
    }

    function r(e) {
        e.today = function() {
            e.dt = new Date
        }, e.today(), e.clear = function() {
            e.dt = null
        }, e.disabled = function(e, t) {
            return "day" === t && (0 === e.getDay() || 6 === e.getDay())
        }, e.toggleMin = function() {
            e.minDate = e.minDate ? null : new Date
        }, e.toggleMin(), e.maxDate = new Date(2020, 5, 22), e.open1 = function() {
            e.popup1.opened = !0
        }, e.open2 = function() {
            e.popup2.opened = !0
        }, e.setDate = function(t, a, n) {
            e.dt = new Date(t, a, n)
        }, e.dateOptions = {
            formatYear: "yy",
            startingDay: 1
        }, e.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate"], e.format = e.formats[0], e.altInputFormats = ["M!/d!/yyyy"], e.popup1 = {
            opened: !1
        }, e.popup2 = {
            opened: !1
        };
        var t = new Date;
        t.setDate(t.getDate() + 1);
        var a = new Date;
        a.setDate(t.getDate() + 1), e.events = [{
            date: t,
            status: "full"
        }, {
            date: a,
            status: "partially"
        }], e.getDayClass = function(t, a) {
            if ("day" === a)
                for (var n = new Date(t).setHours(0, 0, 0, 0), o = 0; o < e.events.length; o++) {
                    var i = new Date(e.events[o].date).setHours(0, 0, 0, 0);
                    if (n === i) return e.events[o].status
                }
            return ""
        }
    }

    function s(e) {
        e.mytime = new Date, e.hstep = 1, e.mstep = 15, e.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        }, e.ismeridian = !0, e.toggleMode = function() {
            return e.ismeridian = !e.ismeridian
        }, e.update = function() {
            var t;
            return t = new Date, t.setHours(14), t.setMinutes(0), e.mytime = t
        }, e.changed = function() {}, e.clear = function() {
            return e.mytime = null
        }
    }

    function l(e) {
        e.selected = void 0, e.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    }

    function c(e) {
        e.rate = 7, e.max = 10, e.isReadonly = !1, e.hoveringOver = function(t) {
            return e.overStar = t, e.percent = 100 * (t / e.max)
        }, e.ratingStates = [{
            stateOn: "glyphicon-ok-sign",
            stateOff: "glyphicon-ok-circle"
        }, {
            stateOn: "glyphicon-star",
            stateOff: "glyphicon-star-empty"
        }, {
            stateOn: "glyphicon-heart",
            stateOff: "glyphicon-ban-circle"
        }, {
            stateOn: "glyphicon-heart"
        }, {
            stateOff: "glyphicon-off"
        }]
    }
    angular.module("app.ui.form").controller("InputCtrl", ["$scope", e]).controller("CheckboxCtrl", ["$scope", t]).controller("RadioCtrl", ["$scope", a]).controller("FormCtrl", ["$scope", n]).controller("MaterialAutocompleteCtrl", ["$scope", "$timeout", "$q", "$log", o]).controller("MaterialDatepickerCtrl", ["$scope", i]).controller("DatepickerDemoCtrl", ["$scope", r]).controller("TimepickerDemoCtrl", ["$scope", s]).controller("TypeaheadCtrl", ["$scope", l]).controller("RatingDemoCtrl", ["$scope", c])
}(),
function() {
    "use strict";

    function e() {
        return {
            restrict: "A",
            link: function(e, t) {
                t.slider()
            }
        }
    }

    function t() {
        return {
            restrict: "A",
            compile: function(e, t) {
                return e.addClass("ui-spinner"), {
                    post: function() {
                        e.spinner()
                    }
                }
            }
        }
    }

    function a() {
        return {
            restrict: "A",
            link: function(e, t) {
                t.steps()
            }
        }
    }
    angular.module("app.ui.form").directive("uiRangeSlider", e).directive("uiSpinner", t).directive("uiWizardForm", a)
}(),
function() {
    "use strict";

    function e(e) {
        var t;
        e.form = {
            required: "",
            minlength: "",
            maxlength: "",
            length_rage: "",
            type_something: "",
            confirm_type: "",
            foo: "",
            email: "",
            url: "",
            num: "",
            minVal: "",
            maxVal: "",
            valRange: "",
            pattern: ""
        }, t = angular.copy(e.form), e.revert = function() {
            return e.form = angular.copy(t), e.form_constraints.$setPristine()
        }, e.canRevert = function() {
            return !angular.equals(e.form, t) || !e.form_constraints.$pristine
        }, e.canSubmit = function() {
            return e.form_constraints.$valid && !angular.equals(e.form, t)
        }, e.submitForm = function() {
            return e.showInfoOnSubmit = !0, e.revert()
        }
    }

    function t(e) {
        var t;
        e.user = {
            email: "",
            passowrd: ""
        }, t = angular.copy(e.user), e.revert = function() {
            e.user = angular.copy(t), e.material_login_form.$setPristine(), e.material_login_form.$setUntouched()
        }, e.canRevert = function() {
            return !angular.equals(e.user, t) || !e.material_login_form.$pristine
        }, e.canSubmit = function() {
            return e.material_login_form.$valid && !angular.equals(e.user, t)
        }, e.submitForm = function() {
            return e.showInfoOnSubmit = !0, e.revert()
        }
    }

    function a(e) {
        var t;
        e.user = {
            name: "",
            email: "",
            passowrd: ""
        }, t = angular.copy(e.user), e.revert = function() {
            e.user = angular.copy(t), e.material_signup_form.$setPristine(), e.material_signup_form.$setUntouched()
        }, e.canRevert = function() {
            return !angular.equals(e.user, t) || !e.material_signup_form.$pristine
        }, e.canSubmit = function() {
            return e.material_signup_form.$valid && !angular.equals(e.user, t)
        }, e.submitForm = function() {
            return e.showInfoOnSubmit = !0, e.revert()
        }
    }

    function n(e) {
        var t;
        e.user = {
            email: "",
            password: ""
        }, e.showInfoOnSubmit = !1, t = angular.copy(e.user), e.revert = function() {
            return e.user = angular.copy(t), e.form_signin.$setPristine()
        }, e.canRevert = function() {
            return !angular.equals(e.user, t) || !e.form_signin.$pristine
        }, e.canSubmit = function() {
            return e.form_signin.$valid && !angular.equals(e.user, t)
        }, e.submitForm = function() {
            return e.showInfoOnSubmit = !0, e.revert()
        }
    }

    function o(e) {
        var t;
        e.user = {
            name: "",
            email: "",
            password: "",
            age: ""
        }, e.showInfoOnSubmit = !1, t = angular.copy(e.user), e.revert = function() {
            e.user = angular.copy(t), e.form_signup.$setPristine()
        }, e.canRevert = function() {
            return !angular.equals(e.user, t) || !e.form_signup.$pristine
        }, e.canSubmit = function() {
            return e.form_signup.$valid && !angular.equals(e.user, t)
        }, e.submitForm = function() {
            return e.showInfoOnSubmit = !0, e.revert()
        }
    }
    angular.module("app.ui.form.validation").controller("FormConstraintsCtrl", ["$scope", e]).controller("MaterialLoginCtrl", ["$scope", t]).controller("MaterialSignUpCtrl", ["$scope", a]).controller("SigninCtrl", ["$scope", n]).controller("SignupCtrl", ["$scope", o])
}(),
function() {
    "use strict";

    function e(e, t, a, n) {
        e.canExit = !1, e.stepActive = !0, e.finished = function() {
            alert("Wizard finished :)")
        }, e.logStep = function() {
            console.log("Step continued")
        }, e.goBack = function() {
            n.wizard().goTo(0)
        }, e.exitWithAPromise = function() {
            var e = t.defer();
            return a(function() {
                e.resolve(!0)
            }, 1e3), e.promise
        }, e.exitToggle = function() {
            e.canExit = !e.canExit
        }, e.stepToggle = function() {
            e.stepActive = !e.stepActive
        }, e.exitValidation = function() {
            return e.canExit
        }
    }
    angular.module("app.ui.form").controller("WizardCtrl", ["$scope", "$q", "$timeout", "WizardHandler", e])
}(),
function() {
    "use strict";

    function e(e) {
        return {
            restrict: "A",
            template: '<span class="bar"></span>',
            link: function(e, t, a) {
                t.addClass("preloaderbar hide"), e.$on("$stateChangeStart", function(e) {
                    t.removeClass("hide").addClass("active")
                }), e.$on("$stateChangeSuccess", function(e, a, n, o) {
                    e.targetScope.$watch("$viewContentLoaded", function() {
                        t.addClass("hide").removeClass("active")
                    })
                }), e.$on("preloader:active", function(e) {
                    t.removeClass("hide").addClass("active")
                }), e.$on("preloader:hide", function(e) {
                    t.addClass("hide").removeClass("active")
                })
            }
        }
    }
    angular.module("app.layout").directive("uiPreloader", ["$rootScope", e])
}(),
function() {
    function e() {
        $("#loader-container").fadeOut("slow")
    }
    $(window).load(function() {
        setTimeout(e, 1e3)
    })
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, a, n) {
            var o;
            o = $("#app"), a.on("click", function(t) {
                return o.hasClass("nav-collapsed-min") ? o.removeClass("nav-collapsed-min") : (o.addClass("nav-collapsed-min"), e.$broadcast("nav:reset")), t.preventDefault()
            })
        }
        var a = {
            restrict: "A",
            link: t
        };
        return a
    }

    function t() {
        function e(e, t, a) {
            var n, o, i, r, s, l, c, u, m, d, p;
            d = 250, c = $(window), r = t.find("ul").parent("li"), r.append('<i class="fa fa-angle-down icon-has-ul-h"></i>'), n = r.children("a"), n.append('<i class="fa fa-angle-down icon-has-ul"></i>'), s = t.children("li").not(r), o = s.children("a"), i = $("#app"), l = $("#nav-container"), n.on("click", function(e) {
                var t, a;
                return i.hasClass("nav-collapsed-min") || l.hasClass("nav-horizontal") && c.width() >= 768 ? !1 : (a = $(this), t = a.parent("li"), r.not(t).removeClass("open").find("ul").slideUp(d), t.toggleClass("open").find("ul").stop().slideToggle(d), void e.preventDefault())
            }), o.on("click", function(e) {
                r.removeClass("open").find("ul").slideUp(d)
            }), e.$on("nav:reset", function(e) {
                r.removeClass("open").find("ul").slideUp(d)
            }), u = void 0, m = c.width(), p = function() {
                var e;
                e = c.width(), 768 > e && i.removeClass("nav-collapsed-min"), 768 > m && e >= 768 && l.hasClass("nav-horizontal") && r.removeClass("open").find("ul").slideUp(d), m = e
            }, c.resize(function() {
                var e;
                clearTimeout(e), e = setTimeout(p, 300)
            })
        }
        var t = {
            restrict: "A",
            link: e
        };
        return t
    }

    function a() {
        function e(e, t, a, n) {
            var o, i, r;
            i = t.find("a"), r = function() {
                return n.path()
            }, o = function(e, t) {
                return t = "#" + t, angular.forEach(e, function(e) {
                    var a, n, o;
                    return n = angular.element(e), a = n.parent("li"), o = n.attr("href"), a.hasClass("active") && a.removeClass("active"), 0 === t.indexOf(o) ? a.addClass("active") : void 0
                })
            }, o(i, n.path()), e.$watch(r, function(e, t) {
                return e !== t ? o(i, n.path()) : void 0
            })
        }
        var t = {
            restrict: "A",
            controller: ["$scope", "$element", "$attrs", "$location", e]
        };
        return t
    }

    function n() {
        function e(e, t, a) {
            t.on("click", function() {
                return $("#app").toggleClass("on-canvas")
            })
        }
        var t = {
            restrict: "A",
            link: e
        };
        return t
    }
    angular.module("app.layout").directive("toggleNavCollapsedMin", ["$rootScope", e]).directive("collapseNav", t).directive("highlightActive", a).directive("toggleOffCanvas", n)
}(),
function() {
    "use strict";

    function e(e, t) {
        var a, n, o;
        e.printInvoice = function() {
            a = document.getElementById("invoice").innerHTML, n = document.body.innerHTML, o = window.open(), o.document.open(), o.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">' + a + "</html>"), o.document.close()
        }
    }

    function t(e, t, a) {
        e.login = function() {
            a.url("/")
        }, e.signup = function() {
            a.url("/")
        }, e.reset = function() {
            a.url("/")
        }, e.unlock = function() {
            a.url("/")
        }
    }
    angular.module("app.page").controller("invoiceCtrl", ["$scope", "$window", e]).controller("authCtrl", ["$scope", "$window", "$location", t])
}(),
function() {
    "use strict";

    function e() {
        function e(e, t, a) {
            var n, o;
            o = function() {
                return a.path()
            }, n = function(e) {
                switch (t.removeClass("on-canvas"), t.removeClass("body-wide body-err body-lock body-auth"), e) {
                    case "/404":
                    case "/page/404":
                    case "/page/500":
                        return t.addClass("body-wide body-err");
                    case "/page/login":
                    case "/page/signup":
                    case "/page/signup2":
                    case "/page/signup3":
                    case "/page/forgot-password":
                        return t.addClass("body-wide body-auth");
                    case "/page/lock-screen":
                        return t.addClass("body-wide body-lock")
                }
            }, n(a.path()), e.$watch(o, function(e, t) {
                return e !== t ? n(a.path()) : void 0
            })
        }
        var t = {
            restrict: "A",
            controller: ["$scope", "$element", "$location", e]
        };
        return t
    }
    angular.module("app.page").directive("customPage", e)
}(),
function() {
    "use strict";

    function e(e, t) {
        function a(t) {
            var a, n;
            return n = (t - 1) * e.numPerPage, a = n + e.numPerPage, e.currentPageStores = e.filteredStores.slice(n, a)
        }

        function n() {
            return e.select(1), e.currentPage = 1, e.row = ""
        }

        function o() {
            return e.select(1), e.currentPage = 1
        }

        function i() {
            return e.select(1), e.currentPage = 1
        }

        function r() {
            return e.filteredStores = t("filter")(e.stores, e.searchKeywords), e.onFilterChange()
        }

        function s(a) {
            return e.row !== a ? (e.row = a, e.filteredStores = t("orderBy")(e.stores, a), e.onOrderChange()) : void 0
        }
        var l;
        e.stores = [], e.searchKeywords = "", e.filteredStores = [], e.row = "", e.select = a, e.onFilterChange = n, e.onNumPerPageChange = o, e.onOrderChange = i, e.search = r, e.order = s, e.numPerPageOpt = [3, 5, 10, 20], e.numPerPage = e.numPerPageOpt[2], e.currentPage = 1, e.currentPage = [], e.stores = [{
            name: "Nijiya Market",
            price: "$$",
            sales: 292,
            rating: 4
        }, {
            name: "Eat On Monday Truck",
            price: "$",
            sales: 119,
            rating: 4.3
        }, {
            name: "Tea Era",
            price: "$",
            sales: 874,
            rating: 4
        }, {
            name: "Rogers Deli",
            price: "$",
            sales: 347,
            rating: 4.2
        }, {
            name: "MoBowl",
            price: "$$$",
            sales: 24,
            rating: 4.6
        }, {
            name: "The Milk Pail Market",
            price: "$",
            sales: 543,
            rating: 4.5
        }, {
            name: "Nob Hill Foods",
            price: "$$",
            sales: 874,
            rating: 4
        }, {
            name: "Scratch",
            price: "$$$",
            sales: 643,
            rating: 3.6
        }, {
            name: "Gochi Japanese Fusion Tapas",
            price: "$$$",
            sales: 56,
            rating: 4.1
        }, {
            name: "Cost Plus World Market",
            price: "$$",
            sales: 79,
            rating: 4
        }, {
            name: "Bumble Bee Health Foods",
            price: "$$",
            sales: 43,
            rating: 4.3
        }, {
            name: "Costco",
            price: "$$",
            sales: 219,
            rating: 3.6
        }, {
            name: "Red Rock Coffee Co",
            price: "$",
            sales: 765,
            rating: 4.1
        }, {
            name: "99 Ranch Market",
            price: "$",
            sales: 181,
            rating: 3.4
        }, {
            name: "Mi Pueblo Food Center",
            price: "$",
            sales: 78,
            rating: 4
        }, {
            name: "Cucina Venti",
            price: "$$",
            sales: 163,
            rating: 3.3
        }, {
            name: "Sufi Coffee Shop",
            price: "$",
            sales: 113,
            rating: 3.3
        }, {
            name: "Dana Street Roasting",
            price: "$",
            sales: 316,
            rating: 4.1
        }, {
            name: "Pearl Cafe",
            price: "$",
            sales: 173,
            rating: 3.4
        }, {
            name: "Posh Bagel",
            price: "$",
            sales: 140,
            rating: 4
        }, {
            name: "Artisan Wine Depot",
            price: "$$",
            sales: 26,
            rating: 4.1
        }, {
            name: "Hong Kong Chinese Bakery",
            price: "$",
            sales: 182,
            rating: 3.4
        }, {
            name: "Starbucks",
            price: "$$",
            sales: 97,
            rating: 3.7
        }, {
            name: "Tapioca Express",
            price: "$",
            sales: 301,
            rating: 3
        }, {
            name: "House of Bagels",
            price: "$",
            sales: 82,
            rating: 4.4
        }], (l = function() {
            return e.search(), e.select(e.currentPage)
        })()
    }
    angular.module("app.table").controller("TableCtrl", ["$scope", "$filter", e])
}(),
function() {
    "use strict";

    function e() {
        var e = this;
        e.readonly = !1, e.fruitNames = ["Apple", "Banana", "Orange"], e.roFruitNames = angular.copy(e.fruitNames), e.tags = [], e.vegObjs = [{
            name: "Broccoli",
            type: "Brassica"
        }, {
            name: "Cabbage",
            type: "Brassica"
        }, {
            name: "Carrot",
            type: "Umbelliferous"
        }], e.newVeg = function(e) {
            return {
                name: e,
                type: "unknown"
            }
        }
    }

    function t(e, t) {
        e.status = "  ", e.showAlert = function(e) {
            t.show(t.alert().parent(angular.element(document.querySelector("#popupContainer"))).clickOutsideToClose(!0).title("This is an alert title").content("You can specify some description text in here.").ariaLabel("Alert Dialog Demo").ok("Got it!").targetEvent(e))
        }, e.showConfirm = function(a) {
            var n = t.confirm().title("Would you like to delete your debt?").content('All of the banks have agreed to <span class="debt-be-gone">forgive</span> you your debts.').ariaLabel("Lucky day").targetEvent(a).ok("Please do it!").cancel("Sounds like a scam");
            t.show(n).then(function() {
                e.status = "You decided to get rid of your debt."
            }, function() {
                e.status = "You decided to keep your debt."
            })
        }, e.showAdvanced = function(n) {
            t.show({
                controller: a,
                templateUrl: "dialog1.tmpl.html",
                parent: angular.element(document.body),
                targetEvent: n,
                clickOutsideToClose: !0
            }).then(function(t) {
                e.status = 'You said the information was "' + t + '".'
            }, function() {
                e.status = "You cancelled the dialog."
            })
        }, e.openOffscreen = function() {
            t.show(t.alert().clickOutsideToClose(!0).title("Opening from offscreen").content("Closing to offscreen").ariaLabel("Offscreen Demo").ok("Amazing!").openFrom({
                top: 50,
                width: 30,
                height: 80
            }).closeTo({
                left: 1500
            }))
        }
    }

    function a(e, t) {
        e.hide = function() {
            t.hide()
        }, e.cancel = function() {
            t.cancel()
        }, e.answer = function(e) {
            t.hide(e)
        }
    }

    function n(e, t) {
        var a = [{
                title: "One",
                content: "Tabs will become paginated if there isn't enough room for them."
            }, {
                title: "Two",
                content: "You can swipe left and right on a mobile device to change tabs."
            }, {
                title: "Three",
                content: "You can bind the selected tab via the selected attribute on the md-tabs element."
            }, {
                title: "Four",
                content: "If you set the selected tab binding to -1, it will leave no tab selected."
            }, {
                title: "Five",
                content: "If you remove a tab, it will try to select a new one."
            }, {
                title: "Six",
                content: "There's an ink bar that follows the selected tab, you can turn it off if you want."
            }, {
                title: "Seven",
                content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."
            }, {
                title: "Eight",
                content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"
            }, {
                title: "Nine",
                content: 'If you set md-theme="green" on the md-tabs element, you\'ll get green tabs.'
            }, {
                title: "Ten",
                content: "If you're still reading this, you should just go check out the API docs for tabs!"
            }],
            n = null,
            o = null;
        e.tabs = a, e.selectedIndex = 2, e.$watch("selectedIndex", function(e, t) {
            o = n, n = a[e]
        }), e.addTab = function(e, t) {
            t = t || e + " Content View", a.push({
                title: e,
                content: t,
                disabled: !1
            })
        }, e.removeTab = function(e) {
            var t = a.indexOf(e);
            a.splice(t, 1)
        }
    }

    function o(e, t) {
        var a = this,
            n = 0,
            o = 0;
        a.modes = [], a.activated = !0, a.determinateValue = 30, a.toggleActivation = function() {
            a.activated || (a.modes = []), a.activated && (n = o = 0)
        }, t(function() {
            a.determinateValue += 1, a.determinateValue > 100 && (a.determinateValue = 30), 5 > n && !a.modes[n] && a.activated && (a.modes[n] = "indeterminate"), o++ % 4 == 0 && n++
        }, 100, 0, !0)
    }

    function i(e, t) {
        var a = this,
            n = 0,
            o = 0;
        a.mode = "query", a.activated = !0, a.determinateValue = 30, a.determinateValue2 = 30, a.modes = [], a.toggleActivation = function() {
            a.activated || (a.modes = []), a.activated && (n = o = 0, a.determinateValue = 30, a.determinateValue2 = 30)
        }, t(function() {
            a.determinateValue += 1, a.determinateValue2 += 1.5, a.determinateValue > 100 && (a.determinateValue = 30), a.determinateValue2 > 100 && (a.determinateValue2 = 30), 2 > n && !a.modes[n] && a.activated && (a.modes[n] = 0 == n ? "buffer" : "query"), o++ % 4 == 0 && n++, 2 == n && (a.contained = "indeterminate")
        }, 100, 0, !0), t(function() {
            a.mode = "query" == a.mode ? "determinate" : "query"
        }, 7200, 0, !0)
    }

    function r(e, t, a) {
        function n() {
            var t = e.toastPosition;
            t.bottom && o.top && (t.top = !1), t.top && o.bottom && (t.bottom = !1), t.right && o.left && (t.left = !1), t.left && o.right && (t.right = !1), o = angular.extend({}, t)
        }
        var o = {
            bottom: !1,
            top: !0,
            left: !1,
            right: !0
        };
        e.toastPosition = angular.extend({}, o), e.getToastPosition = function() {
            return n(), Object.keys(e.toastPosition).filter(function(t) {
                return e.toastPosition[t]
            }).join(" ")
        }, e.showCustomToast = function() {
            t.show({
                controller: "ToastCustomDemo",
                templateUrl: "toast-template.html",
                parent: a[0].querySelector("#toastBounds"),
                hideDelay: 6e3,
                position: e.getToastPosition()
            })
        }, e.showSimpleToast = function() {
            t.show(t.simple().content("Simple Toast!").position(e.getToastPosition()).hideDelay(3e3))
        }, e.showActionToast = function() {
            var a = t.simple().content("Action Toast!").action("OK").highlightAction(!1).position(e.getToastPosition());
            t.show(a).then(function(e) {
                "ok" == e && alert("You clicked 'OK'.")
            })
        }
    }

    function s(e, t) {
        e.closeToast = function() {
            t.hide()
        }
    }

    function l(e) {
        e.demo = {
            showTooltip: !1,
            tipDirection: ""
        }, e.$watch("demo.tipDirection", function(t) {
            t && t.length && (e.demo.showTooltip = !0)
        })
    }

    function c(e) {
        var t = "images/g1.jpg";
        e.messages = [{
            face: t,
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: t,
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: t,
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: t,
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: t,
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: t,
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: t,
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: t,
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: t,
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: t,
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: t,
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }]
    }

    function u() {
        var e = this;
        e.userState = "", e.states = "AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY".split(" ").map(function(e) {
            return {
                abbrev: e
            }
        }), e.sizes = ["small (12-inch)", "medium (14-inch)", "large (16-inch)", "insane (42-inch)"], e.toppings = [{
            category: "meat",
            name: "Pepperoni"
        }, {
            category: "meat",
            name: "Sausage"
        }, {
            category: "meat",
            name: "Ground Beef"
        }, {
            category: "meat",
            name: "Bacon"
        }, {
            category: "veg",
            name: "Mushrooms"
        }, {
            category: "veg",
            name: "Onion"
        }, {
            category: "veg",
            name: "Green Pepper"
        }, {
            category: "veg",
            name: "Green Olives"
        }]
    }
    angular.module("app.ui").controller("ChipsBasicDemoCtrl", e).controller("DialogDemo", ["$scope", "$mdDialog", t]).controller("TabsDemo", ["$scope", "$log", n]).controller("ProgressCircularDemo", ["$scope", "$interval", o]).controller("ProgressLinearDemo", ["$scope", "$interval", i]).controller("ToastDemo", ["$scope", "$mdToast", "$document", r]).controller("ToastCustomDemo", ["$scope", "$mdToast", s]).controller("TooltipDemo", ["$scope", l]).controller("SubheaderDemo", ["$scope", c]).controller("SelectDemo", u)
}(),
function() {
    "use strict";

    function e(e, t) {
        e.start = function() {
            t.$broadcast("preloader:active")
        }, e.complete = function() {
            t.$broadcast("preloader:hide")
        }
    }

    function t(e, t) {
        e.toppings = [{
            name: "Pepperoni",
            wanted: !0
        }, {
            name: "Sausage",
            wanted: !1
        }, {
            name: "Black Olives",
            wanted: !0
        }], e.settings = [{
            name: "Wi-Fi",
            extraScreen: "Wi-fi menu",
            icon: "zmdi zmdi-wifi-alt",
            enabled: !0
        }, {
            name: "Bluetooth",
            extraScreen: "Bluetooth menu",
            icon: "zmdi zmdi-bluetooth",
            enabled: !1
        }], e.messages = [{
            id: 1,
            title: "Message A",
            selected: !1
        }, {
            id: 2,
            title: "Message B",
            selected: !0
        }, {
            id: 3,
            title: "Message C",
            selected: !0
        }], e.people = [{
            name: "Janet Perkins",
            img: "img/100-0.jpeg",
            newMessage: !0
        }, {
            name: "Mary Johnson",
            img: "img/100-1.jpeg",
            newMessage: !1
        }, {
            name: "Peter Carlsson",
            img: "img/100-2.jpeg",
            newMessage: !1
        }], e.goToPerson = function(e, a) {
            t.show(t.alert().title("Navigating").content("Inspect " + e).ariaLabel("Person inspect demo").ok("Neat!").targetEvent(a))
        }, e.navigateTo = function(e, a) {
            t.show(t.alert().title("Navigating").content("Imagine being taken to " + e).ariaLabel("Navigation demo").ok("Neat!").targetEvent(a))
        }, e.doSecondaryAction = function(e) {
            t.show(t.alert().title("Secondary Action").content("Secondary actions can be used for one click actions").ariaLabel("Secondary click demo").ok("Neat!").targetEvent(e))
        }
    }

    function a(e) {
        e.alerts = [{
            type: "success",
            msg: "Well done! You successfully read this important alert message."
        }, {
            type: "info",
            msg: "Heads up! This alert needs your attention, but it is not super important."
        }, {
            type: "warning",
            msg: "Warning! Best check yo self, you're not looking too good."
        }, {
            type: "danger",
            msg: "Oh snap! Change a few things up and try submitting again."
        }], e.addAlert = function() {
            var t, a;
            switch (t = Math.ceil(4 * Math.random()), a = void 0, t) {
                case 0:
                    a = "info";
                    break;
                case 1:
                    a = "success";
                    break;
                case 2:
                    a = "info";
                    break;
                case 3:
                    a = "warning";
                    break;
                case 4:
                    a = "danger"
            }
            return e.alerts.push({
                type: a,
                msg: "Another alert!"
            })
        }, e.closeAlert = function(t) {
            return e.alerts.splice(t, 1)
        }
    }

    function n(e) {
        e.max = 200, e.random = function() {
            var t, a;
            a = Math.floor(100 * Math.random()), t = void 0, t = 25 > a ? "success" : 50 > a ? "info" : 75 > a ? "warning" : "danger", e.showWarning = "danger" === t || "warning" === t, e.dynamic = a, e.type = t
        }, e.random()
    }

    function o(e) {
        e.oneAtATime = !0, e.groups = [{
            title: "Dynamic Group Header - 1",
            content: "Dynamic Group Body - 1"
        }, {
            title: "Dynamic Group Header - 2",
            content: "Dynamic Group Body - 2"
        }, {
            title: "Dynamic Group Header - 3",
            content: "Dynamic Group Body - 3"
        }], e.items = ["Item 1", "Item 2", "Item 3"], e.status = {
            isFirstOpen: !0,
            isFirstOpen1: !0
        }, e.addItem = function() {
            var t;
            t = e.items.length + 1, e.items.push("Item " + t)
        }
    }

    function i(e) {
        e.isCollapsed = !1
    }

    function r(e, t, a) {
        e.items = ["item1", "item2", "item3"], e.animationsEnabled = !0, e.open = function(n) {
            var o = t.open({
                animation: e.animationsEnabled,
                templateUrl: "myModalContent.html",
                controller: "ModalInstanceCtrl",
                size: n,
                resolve: {
                    items: function() {
                        return e.items
                    }
                }
            });
            o.result.then(function(t) {
                e.selected = t
            }, function() {
                a.info("Modal dismissed at: " + new Date)
            })
        }, e.toggleAnimation = function() {
            e.animationsEnabled = !e.animationsEnabled
        }
    }

    function s(e, t, a) {
        e.items = a, e.selected = {
            item: e.items[0]
        }, e.ok = function() {
            t.close(e.selected.item)
        }, e.cancel = function() {
            t.dismiss("cancel")
        }
    }

    function l(e) {
        e.totalItems = 64, e.currentPage = 4, e.setPage = function(t) {
            e.currentPage = t
        }, e.maxSize = 5, e.bigTotalItems = 175, e.bigCurrentPage = 1
    }

    function c(e) {
        e.tabs = [{
            title: "Dynamic Title 1",
            content: "Dynamic content 1.    Consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at."
        }, {
            title: "Disabled",
            content: "Dynamic content 2.    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at.",
            disabled: !0
        }], e.navType = "pills"
    }

    function u(e) {
        e.list = [{
            id: 1,
            title: "Item 1",
            items: []
        }, {
            id: 2,
            title: "Item 2",
            items: [{
                id: 21,
                title: "Item 2.1",
                items: [{
                    id: 211,
                    title: "Item 2.1.1",
                    items: []
                }, {
                    id: 212,
                    title: "Item 2.1.2",
                    items: []
                }]
            }]
        }, {
            id: 3,
            title: "Item 3",
            items: []
        }, {
            id: 4,
            title: "Item 4",
            items: [{
                id: 41,
                title: "Item 4.1",
                items: []
            }]
        }, {
            id: 5,
            title: "Item 5",
            items: []
        }], e.selectedItem = {}, e.options = {}, e.remove = function(e) {
            e.remove()
        }, e.toggle = function(e) {
            e.toggle()
        }, e.newSubItem = function(e) {
            var t;
            t = e.$modelValue, t.items.push({
                id: 10 * t.id + t.items.length,
                title: t.title + "." + (t.items.length + 1),
                items: []
            })
        }
    }

    function m(e, t, a) {
        var n, o;
        for (o = [], n = 0; 8 > n;) o[n] = new google.maps.Marker({
            title: "Marker: " + n
        }), n++;
        e.GenerateMapMarkers = function() {
            var t, a, i, r, s;
            for (t = new Date, e.date = t.toLocaleString(), s = Math.floor(4 * Math.random()) + 4, n = 0; s > n;) a = 43.66 + Math.random() / 100, i = -79.4103 + Math.random() / 100, r = new google.maps.LatLng(a, i), o[n].setPosition(r), o[n].setMap(e.map), n++
        }, a(e.GenerateMapMarkers, 2e3)
    }
    angular.module("app.ui").controller("LoaderCtrl", ["$scope", "$rootScope", e]).controller("ListCtrl", ["$scope", "$mdDialog", t]).controller("AlertDemoCtrl", ["$scope", a]).controller("ProgressDemoCtrl", ["$scope", n]).controller("AccordionDemoCtrl", ["$scope", o]).controller("CollapseDemoCtrl", ["$scope", i]).controller("ModalDemoCtrl", ["$scope", "$uibModal", "$log", r]).controller("ModalInstanceCtrl", ["$scope", "$uibModalInstance", "items", s]).controller("PaginationDemoCtrl", ["$scope", l]).controller("TabsDemoCtrl", ["$scope", c]).controller("TreeDemoCtrl", ["$scope", u]).controller("MapDemoCtrl", ["$scope", "$http", "$interval", m])
}(),
function() {
    "use strict";

    function e() {
        function e(e, t) {
            e.addClass("ui-wave");
            var a, n, o, i;
            e.off("click").on("click", function(e) {
                var t = $(this);
                0 === t.find(".ink").length && t.prepend("<span class='ink'></span>"), a = t.find(".ink"), a.removeClass("wave-animate"), a.height() || a.width() || (n = Math.max(t.outerWidth(), t.outerHeight()), a.css({
                    height: n,
                    width: n
                })), o = e.pageX - t.offset().left - a.width() / 2, i = e.pageY - t.offset().top - a.height() / 2, a.css({
                    top: i + "px",
                    left: o + "px"
                }).addClass("wave-animate")
            })
        }
        var t = {
            restrict: "A",
            compile: e
        };
        return t
    }

    function t() {
        function e(e, t) {
            var a, n;
            n = function() {
                var e, o, i, r, s, l;
                return l = new Date, e = l.getHours(), o = l.getMinutes(), i = l.getSeconds(), o = a(o), i = a(i), s = e + ":" + o + ":" + i, t.html(s), r = setTimeout(n, 500)
            }, a = function(e) {
                return 10 > e && (e = "0" + e), e
            }, n()
        }
        var t = {
            restrict: "A",
            link: e
        };
        return t
    }

    function a() {
        return {
            restrict: "A",
            compile: function(e, t) {
                return e.on("click", function(e) {
                    e.stopPropagation()
                })
            }
        }
    }

    function n() {
        return {
            restrict: "A",
            link: function(e, t, a) {
                return t.slimScroll({
                    height: a.scrollHeight || "100%"
                })
            }
        }
    }
    angular.module("app.ui").directive("uiWave", e).directive("uiTime", t).directive("uiNotCloseOnClick", a).directive("slimScroll", n)
}();