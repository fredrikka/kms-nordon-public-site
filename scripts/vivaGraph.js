function drawVind() {
  var jsonData = $.ajax({
      url: "https://services.viva.sjofartsverket.se:8080/output/vivaoutputservice.svc/vivastationhistory/byvind/69",
      dataType: "json",
      async: false
      }).responseText;
  var jsonDataMedel = $.ajax({
      url: "https://services.viva.sjofartsverket.se:8080/output/vivaoutputservice.svc/vivastationhistory/medelvind/69",
      dataType: "json",
      async: false
      }).responseText;
  var jsonDataRiktning = $.ajax({
      url: "https://services.viva.sjofartsverket.se:8080/output/vivaoutputservice.svc/vivastationhistory/riktning/69",
      dataType: "json",
      async: false
      }).responseText;
  var jsonObj = JSON.parse(jsonData);
  var jsonObjMedel = JSON.parse(jsonDataMedel);
  var jsonObjRiktning = JSON.parse(jsonDataRiktning);
  var data = new google.visualization.DataTable();
  data.addColumn('datetime','Tid'); 
  data.addColumn('number','Byvind');
  data.addColumn('number','Medelvind');
  data.addColumn('number','Rikning');
  for(i=0;i<jsonObj.GetHistoryResult.StationHistory.length;i++){
  var currentObj = jsonObj.GetHistoryResult.StationHistory[i];
  var currentObjMedel = jsonObjMedel.GetHistoryResult.StationHistory[i];
  var currentObjRiktning = jsonObjRiktning.GetHistoryResult.StationHistory[i];
   data.addRow([new Date(currentObj.Time.split(" ")[0]+"T"+currentObj.Time.split(" ")[1]),Number(currentObj.Value),Number(currentObjMedel.Value),Number(currentObjRiktning.Value)]);
  }
  var formatter = new google.visualization.DateFormat({pattern:'yyyy-mm-dd HH:mm'});
  formatter.format(data,0);
  var chart = new google.visualization.LineChart(document.getElementById('VIVAvind'));
  var options = {
            title: 'Vind Marstrand, senaste dygnet',
            series: {0: {targetAxisIndex:0},
                   1:{targetAxisIndex:0},
                   2:{targetAxisIndex:1},
                  },
            vAxes: {0:{ title: "m\/s" },
            //1: {viewWindow:{max:360 ,min:0},
            1:{maxValue:360,minValue:0,
            title: "Grader"}},
            //vAxis:{title:"m\/s"},
            //legend: {position: 'none'},
            tooltip: {format: 'yyyy-MM-dd HH:mm'},
            hAxis: {
                format: 'yyyy-MM-dd HH:mm'
            }
        };
  chart.draw(data, options);
  //chart.draw(data);
}
//google.charts.load('current', {packages: ['corechart', 'line']});
//google.charts.setOnLoadCallback(drawBasic);

function drawVattenstand() {
  var jsonData = $.ajax({
      url: "https://services.viva.sjofartsverket.se:8080/output/vivaoutputservice.svc/vivastationhistory/vattenst\u00E5nd/69",
      dataType: "json",
      async: false
      }).responseText;
  var jsonObj = JSON.parse(jsonData);
  var data = new google.visualization.DataTable();
  data.addColumn('datetime','Tid'); 
  data.addColumn('number','Vattenst\u00E5nd');
  for(i=0;i<jsonObj.GetHistoryResult.StationHistory.length;i++){
  var currentObj = jsonObj.GetHistoryResult.StationHistory[i];
  data.addRow([new Date(currentObj.Time.split(" ")[0]+"T"+currentObj.Time.split(" ")[1]),Number(currentObj.Value)]);
  }
  var formatter = new google.visualization.DateFormat({pattern:'yyyy-mm-dd HH:mm'});
  formatter.format(data,0);
  var chart = new google.visualization.LineChart(document.getElementById('VIVAvattenstand'));
  var options = {
            title: 'Vattenst\u00E5nd Marstrand, senaste dygnet',
            vAxis: { title: "cm" },
            //vAxis:{title:"m\/s"},
            //legend: {position: 'none'},
            tooltip: {format: 'yyyy-MM-dd HH:mm'},
            hAxis: {
                format: 'yyyy-MM-dd HH:mm'
            }
        };
  chart.draw(data, options);
  //chart.draw(data);
}
function drawVattentemp() {
  var jsonData = $.ajax({
      url: "https://services.viva.sjofartsverket.se:8080/output/vivaoutputservice.svc/vivastationhistory/vattentemp/69",
      dataType: "json",
      async: false
      }).responseText;
  var jsonObj = JSON.parse(jsonData);
  var data = new google.visualization.DataTable();
  data.addColumn('datetime','Tid'); 
  data.addColumn('number','Vattentemperatur');
  for(i=0;i<jsonObj.GetHistoryResult.StationHistory.length;i++){
  var currentObj = jsonObj.GetHistoryResult.StationHistory[i];
  data.addRow([new Date(currentObj.Time.split(" ")[0]+"T"+currentObj.Time.split(" ")[1]),Number(currentObj.Value)]);
  }
  var formatter = new google.visualization.DateFormat({pattern:'yyyy-mm-dd HH:mm'});
  formatter.format(data,0);
  var chart = new google.visualization.LineChart(document.getElementById('VIVAvattentemp'));
  var options = {
            title: 'Vattentemperatur Marstrand, senaste dygnet',
            vAxis: { title: "\u00BAC" },
            //vAxis:{title:"m\/s"},
            //legend: {position: 'none'},
            tooltip: {format: 'yyyy-MM-dd HH:mm'},
            hAxis: {
                format: 'yyyy-MM-dd HH:mm'
            }
        };
  chart.draw(data, options);
  //chart.draw(data);
}