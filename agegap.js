angular
  .module('app', ['n3-line-chart'])
       
  .controller('MainCtrl', function($scope) {
    $scope.data = {
      dataset: [
        {x: new Date("2015-01-01"), y: 0, val_2: 0, val_3: 0},
        {x: new Date("2025-01-01"), y: 38113, val_2: -89588, val_3: 127701},
        {x: new Date("2035-01-01"), y: 693191, val_2: -238239, val_3: 931430},
        {x: new Date("2045-01-01"), y: 754199,val_2: -334779, val_3: 1088978},
       ]
     };

    $scope.options = {
      axes: {
        x: {
          key: "x",
            type: "date",
           ticks: ("2015, 2025, 2035, 2045")
        },
          y: {
              max: 1100000,
              min: -400000,
             
          },
    
      },
        grid: {
            x: true,
            y: true,
        },
      tooltipHook: function(d){
        return {
          abscissas: "Population growth",
          rows:  d.map(function(s){
            return {
              label: s.series.label,
              value: s.row.y1,
              color: s.series.color,
              id: s.series.id  
            }
          })
        }
      },
      series: [
               {
          dataset: "dataset",
          key: 'y',
          type: ['line', 'dot', 'area'],
          label: 'No Workforce',
          color: "rgb(235, 12, 12)",
          interpolation: {mode: 'cardinal', tension: 0.7}
        },
        {
          dataset: "dataset", 
          key: 'val_2', 
          label: 'Workforce', 
          type: ['line', 'dot', 'line', 'area'],
          color: "rgb(0, 0, 0)",
          interpolation: {mode: 'cardinal', tension: 0.7}
        },
          {
              dataset: "dataset",
              key: 'val_3',
              label: 'GAP',
              color: "rgb(111, 111, 222)",
              type: ['']
          },
    
          
          ]
       
    };
 
  
});
    