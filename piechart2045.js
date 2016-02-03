
zingchart.THEME="classic";

var myConfig = {
    "type":"pie",
    "background-color":"#F2F2F0",
    "title":{
        "text":"2045",
        "background-color":"none",
        "color":"#333",

    },
    "plot":{
        "slice":50,
        "shadow":0,
        "border-width":"5px",
        "border-color":"#F2F2F0",
        "value-box":{
            "placement":"out",
            "font-size":"10px",
            "font-color":"#333"
        },
        "animation":{
            "effect":"2",
            "delay":"1000",
            "speed":"500",
            "method":"5",
            "sequence":"1"
        }
    },
    "tooltip":{
        "fontSize":15,
        "align":"left",
        "borderRadius":3,
        "borderWidth":2,
        "borderColor":"%color-1",
        "backgroundColor":"#fff",
        "alpha":0.9,
        "padding":10,
        "color":"#000",
        "negation":"currency",
        "thousandsSeparator":",",
        "shadow":0,
                       
                "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
                "bgColor": "#ffffff",
                "showBorder": "0",
                "use3DLighting": "0",
                "showShadow": "0",
                "enableSmartLabels": "0",
                "startingAngle": "0",
                "showPercentValues": "1",
                "showPercentInTooltip": "0",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0",
                "toolTipColor": "#ffffff",
                "toolTipBorderThickness": "0",
                "toolTipBgColor": "#000000",
                "toolTipBgAlpha": "80",
                "toolTipBorderRadius": "2",
                "toolTipPadding": "5",
                "showHoverEffect":"1",
                "showLegend": "1",
                "legendBgColor": "#ffffff",
                "legendBorderAlpha": '0',
                "legendShadow": '0',
                "legendItemFontSize": '10',
                "legendItemFontColor": '#666666',
        "text":"<b style=\"color:%color\">%negation%node-value</b> people"
    },
    "series":[
        {
            "text":"Children 0-19"+"<br>" + "23%",
            "values":[2339624],
            "background-color":"#CE8580"
        },
        {
            "text":"Workforce 20-63" + "<br>" + "50,9%",
            "values":[5170691],
            "background-color":"rgba(0, 0, 0, 0.7)"
        },
        {
            "text":"Elderly 64+" +"<br>"+"26,1%",
            "values":[2652733],
            "background-color":"#C4473F"
        }
    ]
};




zingchart.render({ 
	id : 'chart4', 
	data : myConfig, 
	height: 300, 
	width: 300 
});

