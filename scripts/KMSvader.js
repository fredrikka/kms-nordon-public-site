function KMSvader() {
  var jsonData = $.ajax({
      url: "http://www.kmsnordon.se/webvind.json",
      dataType: "text",
      crossDomain: true,
      cache: false,
      contentType: "text/plain; charset=windows-1252",
      async: false
      }).responseText;
  //var jData2 = String(jsonData);
  //var fixedResponse = jData2.replace(/\\/g, "");
  //var myObject = JSON.parse(fixedResponse);
  var myObject = $.parseJSON(jsonData);
  //var myObject = $.parseJSON(fixedResponse);
  document.getElementById("KMSvader").innerHTML = 
  "Uppdaterades: "+ myObject.date+" "+myObject.time+"<br>"+
  "<strong>Temperatur: </strong>"+myObject.temp.outside.current+" &ordm;C"+"<br>"+
  "<strong>Vind: </strong>"+myObject.wind.direction+" "+myObject.wind.speed.average.current+myObject.units.wind+"<br>"+
  "<strong>Byvind: </strong>"+myObject.wind.direction+" "+myObject.wind.speed.max.current+myObject.units.wind+"<br>"+
  "<strong>Lufttryck: </strong>"+myObject.barometer.current+myObject.units.barometer+"<br>"+
  "<strong>Nederb&ouml;rd: </strong>"+myObject.rain.lasthour+myObject.units.rain+"<br>"+
  "<strong>Luftfuktighet: </strong>"+myObject.humidity.current+myObject.units.humidity;
}
function KMSvaderW() {
  var jsonData = $.ajax({
      url: "http://www.kmsnordon.se/webvind.json",
      dataType: "text json",
      async: false
      }).responseText;
  //var jData2 = String(jsonData);
  //var fixedResponse = jData2.replace(/\\/g, "");
  //var myObject = JSON.parse(fixedResponse);
  var myObject = $.parseJSON(jsonData);
  //var myObject = $.parseJSON(fixedResponse);
  document.getElementById("KMSvaderW").innerHTML = 
  "Uppdaterades: "+ myObject.date+" "+myObject.time+"<br>"+
  "<strong>Temperatur: </strong>"+myObject.temp.outside.current+" &ordm;C"+"<br>"+
  "<strong>Vind: </strong>"+myObject.wind.direction+" "+myObject.wind.speed.average.current+myObject.units.wind+"<br>"+
  "<strong>Byvind: </strong>"+myObject.wind.direction+" "+myObject.wind.speed.max.current+myObject.units.wind+"<br>"+
  "<strong>Lufttryck: </strong>"+myObject.barometer.current+myObject.units.barometer+"<br>"+
  "<strong>Nederb&ouml;rd: </strong>"+myObject.rain.lasthour+myObject.units.rain+"<br>"+
  "<strong>Luftfuktighet: </strong>"+myObject.humidity.current+myObject.units.humidity;
}
