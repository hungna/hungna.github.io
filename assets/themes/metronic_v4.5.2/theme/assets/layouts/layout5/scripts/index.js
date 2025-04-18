var Index = function () {

	var handleAmChart = function() {
		var chartData = [
		    {
		        "date": "2012-01-05",
		        "distance": 480,
		        "townName": "Miami",
		        "townName2": "Miami",
		        "townSize": 10,
		        "latitude": 25.83,
		        "duration": 501
		    },
		    {
		        "date": "2012-01-06",
		        "distance": 386,
		        "townName": "Tallahassee",
		        "townSize": 7,
		        "latitude": 30.46,
		        "duration": 443
		    },
		    {
		        "date": "2012-01-07",
		        "distance": 348,
		        "townName": "New Orleans",
		        "townSize": 10,
		        "latitude": 29.94,
		        "duration": 405
		    },
		    {
		        "date": "2012-01-08",
		        "distance": 238,
		        "townName": "Houston",
		        "townName2": "Houston",
		        "townSize": 16,
		        "latitude": 29.76,
		        "duration": 309
		    },
		    {
		        "date": "2012-01-09",
		        "distance": 218,
		        "townName": "Dalas",
		        "townSize": 17,
		        "latitude": 32.8,
		        "duration": 287
		    },
		    {
		        "date": "2012-01-10",
		        "distance": 349,
		        "townName": "Oklahoma City",
		        "townSize": 11,
		        "latitude": 35.49,
		        "duration": 485
		    },
		    {
		        "date": "2012-01-11",
		        "distance": 603,
		        "townName": "Kansas City",
		        "townSize": 10,
		        "latitude": 39.1,
		        "duration": 890
		    },
		    {
		        "date": "2012-01-12",
		        "distance": 534,
		        "townName": "Denver",
		        "townName2": "Denver",
		        "townSize": 18,
		        "latitude": 39.74,
		        "duration": 810
		    },
		    {
		        "date": "2012-01-13",
		        "townName": "Salt Lake City",
		        "townSize": 12,
		        "distance": 425,
		        "duration": 670,
		        "latitude": 40.75,
		        "alpha":0.4
		    },
		    {
		        "date": "2012-01-14",
		        "latitude": 36.1,
		        "duration": 470,
		        "townName": "Las Vegas",
		        "townName2": "Las Vegas",
		        "bulletClass": "lastBullet"
		    },
		    {
		        "date": "2012-01-15"
		    }
		];
		var chart = AmCharts.makeChart("CSSAnimationChart", {
			type: "serial",
			fontSize: 12,
			fontFamily: "Open Sans",
			dataDateFormat: "YYYY-MM-DD",
			dataProvider: chartData,

			addClassNames: true,
			startDuration: 1,
			color: "#6c7b88",
			marginLeft: 0,

			categoryField: "date",
			categoryAxis: {
			    parseDates: true,
			    minPeriod: "DD",
			    autoGridCount: false,
			    gridCount: 50,
			    gridAlpha: 0.1,
			    gridColor: "#FFFFFF",
			    axisColor: "#555555",
			    dateFormats: [{
			        period: 'DD',
			        format: 'DD'
			    }, {
			        period: 'WW',
			        format: 'MMM DD'
			    }, {
			        period: 'MM',
			        format: 'MMM'
			    }, {
			        period: 'YYYY',
			        format: 'YYYY'
			    }]
			},

			valueAxes: [{
			    id: "a1",
			    title: "distance",
			    gridAlpha: 0,
			    axisAlpha: 0
			},{
			    id: "a2",
			    position: "right",
			    gridAlpha: 0,
			    axisAlpha: 0,
			    labelsEnabled: false
			},{
			    id: "a3",
			    title: "duration",
			    position: "right",
			    gridAlpha: 0,
			    axisAlpha: 0,
			    inside: true,
			    duration: "mm",
			    durationUnits: {
			        DD: "d. ",
			        hh: "h ",
			        mm: "min",
			        ss: ""
			    }
			}],
			graphs: [{
			    id: "g1",
			    valueField:  "distance",
			    title:  "distance",
			    type:  "column",
			    fillAlphas:  0.7,
			    valueAxis:  "a1",
			    balloonText:  "[[value]] miles",
			    legendValueText:  "[[value]] mi",
			    legendPeriodValueText:  "total: [[value.sum]] mi",
			    lineColor:  "#08a3cc",
			    alphaField:  "alpha",
			},{
			    id: "g2",
			    valueField: "latitude",
			    classNameField: "bulletClass",
			    title: "latitude/city",
			    type: "line",
			    valueAxis: "a2",
			    lineColor: "#786c56",
			    lineThickness: 1,
			    legendValueText: "[[description]]/[[value]]",
			    descriptionField: "townName",
			    bullet: "round",
			    bulletSizeField: "townSize",
			    bulletBorderColor: "#02617a",
			    bulletBorderAlpha: 1,
			    bulletBorderThickness: 2,
			    bulletColor: "#89c4f4",
			    labelText: "[[townName2]]",
			    labelPosition: "right",
			    balloonText: "latitude:[[value]]",
			    showBalloon: true,
			    animationPlayed: true,
			},{
			    id: "g3",
			    title: "duration",
			    valueField: "duration",
			    type: "line",
			    valueAxis: "a3",
			    lineAlpha: 0.8,
			    lineColor: "#e26a6a",
			    balloonText: "[[value]]",
			    lineThickness: 1,
			    legendValueText: "[[value]]",
			    bullet: "square",
			    bulletBorderColor: "#e26a6a",
			    bulletBorderThickness: 1,
			    bulletBorderAlpha: 0.8,
			    dashLengthField: "dashLength",
			    animationPlayed: true
			}],

			chartCursor: {
			    zoomable: false,
			    categoryBalloonDateFormat: "DD",
			    cursorAlpha: 0,
			    categoryBalloonColor: "#e26a6a",
			    categoryBalloonAlpha: 0.8,
			    valueBalloonsEnabled: false
			},
			legend: {
			    bulletType: "round",
			    equalWidths: false,
			    valueWidth: 120,
			    useGraphSettings: true,
			    color: "#6c7b88"
		  	}
		});
	}

	var handleAmChartMap = function() {
		// svg path for target icon
		var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
		// svg path for plane icon
		var planeSVG = "M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z";

		var map = AmCharts.makeChart( "mapChart", {
		  type: "map",
		  "theme": "light",
		  pathToImages: "../../assets/global/plugins/amcharts/ammap/images/",

		  dataProvider: {
		    map: "worldLow",
		    linkToObject: "london",
		    images: [ {
		        id: "london",
		        color: "#009dc7",
		        svgPath: targetSVG,
		        title: "London",
		        latitude: 51.5002,
		        longitude: -0.1262,
		        scale: 1.5,
		        zoomLevel: 2.74,
		        zoomLongitude: -20.1341,
		        zoomLatitude: 49.1712,

		        lines: [ {
		          latitudes: [ 51.5002, 50.4422 ],
		          longitudes: [ -0.1262, 30.5367 ]
		        }, {
		          latitudes: [ 51.5002, 46.9480 ],
		          longitudes: [ -0.1262, 7.4481 ]
		        }, {
		          latitudes: [ 51.5002, 59.3328 ],
		          longitudes: [ -0.1262, 18.0645 ]
		        }, {
		          latitudes: [ 51.5002, 40.4167 ],
		          longitudes: [ -0.1262, -3.7033 ]
		        }, {
		          latitudes: [ 51.5002, 46.0514 ],
		          longitudes: [ -0.1262, 14.5060 ]
		        }, {
		          latitudes: [ 51.5002, 48.2116 ],
		          longitudes: [ -0.1262, 17.1547 ]
		        }, {
		          latitudes: [ 51.5002, 44.8048 ],
		          longitudes: [ -0.1262, 20.4781 ]
		        }, {
		          latitudes: [ 51.5002, 55.7558 ],
		          longitudes: [ -0.1262, 37.6176 ]
		        }, {
		          latitudes: [ 51.5002, 38.7072 ],
		          longitudes: [ -0.1262, -9.1355 ]
		        }, {
		          latitudes: [ 51.5002, 54.6896 ],
		          longitudes: [ -0.1262, 25.2799 ]
		        }, {
		          latitudes: [ 51.5002, 64.1353 ],
		          longitudes: [ -0.1262, -21.8952 ]
		        }, {
		          latitudes: [ 51.5002, 40.4300 ],
		          longitudes: [ -0.1262, -74.0000 ]
		        } ],

		        images: [ {
		          label: "Flights from London",
		          svgPath: planeSVG,
		          left: 100,
		          top: 45,
		          labelShiftY: 5,
		          color: "#d93d5e",
		          labelColor: "#d93d5e",
		          labelRollOverColor: "#d93d5e",
		          labelFontSize: 20
		        }, {
		          label: "show flights from Vilnius",
		          left: 106,
		          top: 70,
		          labelColor: "#6c7b88",
		          labelRollOverColor: "#d93d5e",
		          labelFontSize: 11,
		          linkToObject: "vilnius"
		        } ]
		      },

		      {
		        id: "vilnius",
		        color: "#009dc7",
		        svgPath: targetSVG,
		        title: "Vilnius",
		        latitude: 54.6896,
		        longitude: 25.2799,
		        scale: 1.5,
		        zoomLevel: 4.92,
		        zoomLongitude: 15.4492,
		        zoomLatitude: 50.2631,

		        lines: [ {
		          latitudes: [ 54.6896, 50.8371 ],
		          longitudes: [ 25.2799, 4.3676 ]
		        }, {
		          latitudes: [ 54.6896, 59.9138 ],
		          longitudes: [ 25.2799, 10.7387 ]
		        }, {
		          latitudes: [ 54.6896, 40.4167 ],
		          longitudes: [ 25.2799, -3.7033 ]
		        }, {
		          latitudes: [ 54.6896, 50.0878 ],
		          longitudes: [ 25.2799, 14.4205 ]
		        }, {
		          latitudes: [ 54.6896, 48.2116 ],
		          longitudes: [ 25.2799, 17.1547 ]
		        }, {
		          latitudes: [ 54.6896, 44.8048 ],
		          longitudes: [ 25.2799, 20.4781 ]
		        }, {
		          latitudes: [ 54.6896, 55.7558 ],
		          longitudes: [ 25.2799, 37.6176 ]
		        }, {
		          latitudes: [ 54.6896, 37.9792 ],
		          longitudes: [ 25.2799, 23.7166 ]
		        }, {
		          latitudes: [ 54.6896, 54.6896 ],
		          longitudes: [ 25.2799, 25.2799 ]
		        }, {
		          latitudes: [ 54.6896, 51.5002 ],
		          longitudes: [ 25.2799, -0.1262 ]
		        }, {
		          latitudes: [ 54.6896, 53.3441 ],
		          longitudes: [ 25.2799, -6.2675 ]
		        } ],

		        images: [ {
		          label: "Flights from Vilnius",
		          svgPath: planeSVG,
		          left: 100,
		          top: 45,
		          labelShiftY: 5,
		          color: "#d93d5e",
		          labelColor: "#d93d5e",
		          labelRollOverColor: "#d93d5e",
		          labelFontSize: 20
		        }, {
		          label: "show flights from London",
		          left: 106,
		          top: 70,
		          labelColor: "#009dc7",
		          labelRollOverColor: "#d93d5e",
		          labelFontSize: 11,
		          linkToObject: "london"
		        } ]
		      }, {
		        svgPath: targetSVG,
		        title: "Brussels",
		        latitude: 50.8371,
		        longitude: 4.3676
		      }, {
		        svgPath: targetSVG,
		        title: "Prague",
		        latitude: 50.0878,
		        longitude: 14.4205
		      }, {
		        svgPath: targetSVG,
		        title: "Athens",
		        latitude: 37.9792,
		        longitude: 23.7166
		      }, {
		        svgPath: targetSVG,
		        title: "Reykjavik",
		        latitude: 64.1353,
		        longitude: -21.8952
		      }, {
		        svgPath: targetSVG,
		        title: "Dublin",
		        latitude: 53.3441,
		        longitude: -6.2675
		      }, {
		        svgPath: targetSVG,
		        title: "Oslo",
		        latitude: 59.9138,
		        longitude: 10.7387
		      }, {
		        svgPath: targetSVG,
		        title: "Lisbon",
		        latitude: 38.7072,
		        longitude: -9.1355
		      }, {
		        svgPath: targetSVG,
		        title: "Moscow",
		        latitude: 55.7558,
		        longitude: 37.6176
		      }, {
		        svgPath: targetSVG,
		        title: "Belgrade",
		        latitude: 44.8048,
		        longitude: 20.4781
		      }, {
		        svgPath: targetSVG,
		        title: "Bratislava",
		        latitude: 48.2116,
		        longitude: 17.1547
		      }, {
		        svgPath: targetSVG,
		        title: "Ljubljana",
		        latitude: 46.0514,
		        longitude: 14.5060
		      }, {
		        svgPath: targetSVG,
		        title: "Madrid",
		        latitude: 40.4167,
		        longitude: -3.7033
		      }, {
		        svgPath: targetSVG,
		        title: "Stockholm",
		        latitude: 59.3328,
		        longitude: 18.0645
		      }, {
		        svgPath: targetSVG,
		        title: "Bern",
		        latitude: 46.9480,
		        longitude: 7.4481
		      }, {
		        svgPath: targetSVG,
		        title: "Kiev",
		        latitude: 50.4422,
		        longitude: 30.5367
		      }, {
		        svgPath: targetSVG,
		        title: "Paris",
		        latitude: 48.8567,
		        longitude: 2.3510
		      }, {
		        svgPath: targetSVG,
		        title: "New York",
		        latitude: 40.43,
		        longitude: -74
		      }
		    ]
		  },

		  zoomControl: {
		        buttonFillColor: "#15A892"
		    },

		  areasSettings: {
		    unlistedAreasColor: "#15A892"
		  },

		  imagesSettings: {
		    color: "#d93d5e",
		    rollOverColor: "#d93d5e",
		    selectedColor: "#009dc7"
		  },

		  linesSettings: {
		    color: "#d93d5e",
		    alpha: 0.4
		  },


		  backgroundZoomsToTop: true,
		  linesAboveImages: true,

		  "export": {
		    "enabled": true,
		    "libs": {
		      "path": "https://www.amcharts.com/lib/3/plugins/export/libs/"
		    }
		  }
		} );
	}

	var handleMorrisCharts = function() {
        if (Morris.EventEmitter) {
            // Use Morris.Area instead of Morris.Line
            dashboardMainChart = Morris.Area({
                element: 'sales_statistics',
                padding: 0,
                behaveLikeLine: false,
                gridEnabled: false,
                gridLineColor: false,
                axes: false,
                fillOpacity: 1,
                data: [{
                    period: '2011 Q1',
                    sales: 1400,
                    profit: 400
                }, {
                    period: '2011 Q2',
                    sales: 1100,
                    profit: 600
                }, {
                    period: '2011 Q3',
                    sales: 1600,
                    profit: 500
                }, {
                    period: '2011 Q4',
                    sales: 1200,
                    profit: 400
                }, {
                    period: '2012 Q1',
                    sales: 1550,
                    profit: 800
                }],
                lineColors: ['#399a8c', '#92e9dc'],
                xkey: 'period',
                ykeys: ['sales', 'profit'],
                labels: ['Sales', 'Profit'],
                pointSize: 0,
                lineWidth: 0,
                hideHover: 'auto',
                resize: true
            });

        }
    }

	var handleSparklineCharts = function() {
        $("#sparkline_bar").sparkline([8, 9, 10, 11, 10, 10, 12, 10, 10, 11, 9, 12, 11], {
            type: 'bar',
            width: '100',
            barWidth: 6,
            height: '45',
            barColor: '#F36A5B',
            negBarColor: '#e02222'
        });

        $("#sparkline_bar2").sparkline([9, 11, 12, 13, 12, 13, 10, 14, 13, 11, 11, 12, 11], {
            type: 'bar',
            width: '100',
            barWidth: 6,
            height: '45',
            barColor: '#5C9BD1',
            negBarColor: '#e02222'
        });
    }

    return {

        //main function
        init: function () {
            handleAmChart();
            handleAmChartMap();
            handleSparklineCharts();
            handleMorrisCharts();
        }

    };

}();

jQuery(document).ready(function() {    
   Index.init(); // init metronic core componets
});