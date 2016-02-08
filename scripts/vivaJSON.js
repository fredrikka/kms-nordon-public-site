function processData2(data) {
  // taking care of data
  //var myData = data.replace("/\\/g", "").replace("/\\n/g","");
  //var mydata= data.replace("n", "t");
  //document.getElementById("Vader").innerHTML =mydata
  //var newdata = data.replace('<pre>', '');
  //var newdata2 = newdata.replace('</pre>', '');
  var myObject = JSON.parse(data);
  document.getElementById("viva").innerHTML = 
  "Uppdaterades: "+ myObject.GetSingleStationResult.Samples[0].Updated+"<br>"+
  "<strong>Medelvind: </strong>"+myObject.GetSingleStationResult.Samples[1].Value+ " "+myObject.GetSingleStationResult.Samples[1].Unit+"<br>"+
  "<strong>Byvind: </strong>"+myObject.GetSingleStationResult.Samples[0].Value+ " "+myObject.GetSingleStationResult.Samples[0].Unit+"<br>"+
  "<strong>Vattenst&aring;nd: </strong>"+myObject.GetSingleStationResult.Samples[2].Value+ " "+myObject.GetSingleStationResult.Samples[2].Unit+"<br>"+
  "<strong>Vattentemp: </strong>"+myObject.GetSingleStationResult.Samples[3].Value+ " "+myObject.GetSingleStationResult.Samples[3].Unit+"C<br>";
  //document.getElementById("id01").innerHTML = "Temp";
}

function handler2() {
  if(this.status == 200 &&
    this.responseText != null) {
    // success!
    processData2(this.responseText);
  } else {
    // something went wrong
    document.getElementById("viva").innerHTML = "Fel"
  }
}

function readVIVA() {
var client = new XMLHttpRequest();
client.onload = handler2;
//client.open("GET", "http://www.kmsnordon.se/webvind.json");
client.open("GET", "https://services.viva.sjofartsverket.se:8080/output/vivaoutputservice.svc/vivastation/69");
//client.open("GET", "http://www.old.kmsnordon.se/wp-content/themes/twentysixteen-child/scripts/webvind.json");
client.send();
}
//readJSON()
