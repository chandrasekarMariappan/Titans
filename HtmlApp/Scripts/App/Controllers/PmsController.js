
var PmsController = function ($rootScope, $scope, PmsFactory) {

    $scope.TestValue = 'test';
    $scope.standardItems = [
       { sizeX: 2, sizeY: 1, row: 0, col: 0 ,id:'1'},
       { sizeX: 2, sizeY: 2, row: 0, col: 2,id:'2' },
      
    ];
    $scope.myInvestmentData = [
       { col: 0, row: 0, sizeY: 2, sizeX: 4, height: "100%", id: "1", "name": "Performance Tile" },
       { col: 0, row: 1, sizeY: 2, sizeX: 4, height: "100%", id: "2", "name": "Performance Tile" },

    ];
    $scope.gridsterOptions = {
        margins: [20, 20],
        columns: 4,
        colWidth: 275,
        rowHeight: 275,

        resizable: {
            enabled: false,
           
        },
        draggable: {
            handle: 'h3',
            enabled: true
        }
    };
  
};
app.controller('PmsController', PmsController);