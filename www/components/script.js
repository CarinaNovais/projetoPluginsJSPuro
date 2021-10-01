// This is a JavaScript file

window.onload = function (){
  document.querySelector("#alerta1").addEventListener("click", function (){
    function retorno(){

    }
    navigator.notification.alert("alarme de teste",
    retorno,
    "titulo do alerta", 
    "SIM");
  });

   document.querySelector("#alerta2").addEventListener("click", function (){
    function verifica(buttonIndex){
      if (buttonIndex==1){
        navigator.notification.alert("Escolheu a opção A");
      }else{
        navigator.notification.alert("Escolheu a opção B");
      }

    }
      navigator.notification.confirm("Escolha A ou B", 
        verifica,
          "Opções de escolha",
             ['A','B'], 
      );
    });

    document.querySelector("#beep").addEventListener("click", function (){
      navigator.notification.beep(2);
    });

    document.querySelector("#vibrar").addEventListener("click", function (){
      navigator.vibrate(3000)
    });

    document.querySelector("#code").addEventListener("click", function (){

      cordova.plugins.barcodeScanner.scan(
      function (result) {
        if (result.cancelled){
          navigator.notification.alert("cancelado");
        }else{
           document.querySelector("#resultado").textContent = result.text;
        }

          /*alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);*/
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
    });

      document.querySelector("#rede").addEventListener("click", function(){
        function checkConnection() {
          var networkState = navigator.connection.type;

          var states = {};
          states[Connection.UNKNOWN]  = 'Unknown connection';
          states[Connection.ETHERNET] = 'Ethernet connection';
          states[Connection.WIFI]     = 'WiFi connection';
          states[Connection.CELL_2G]  = 'Cell 2G connection';
          states[Connection.CELL_3G]  = 'Cell 3G connection';
          states[Connection.CELL_4G]  = 'Cell 4G connection';
          states[Connection.CELL]     = 'Cell generic connection';
          states[Connection.NONE]     = 'No network connection';

          alert('Connection type: ' + states[networkState]);
      }

          checkConnection();

      });


      document.querySelector("#local").addEventListener("click", function(){
        
        // onSuccess Callback
        // This method accepts a Position object, which contains the
        // current GPS coordinates
        //
        var onSuccess = function(position) {
            alert('Latitude: '          + position.coords.latitude          + '\n' +
                  'Longitude: '         + position.coords.longitude         + '\n' +
                  'Altitude: '          + position.coords.altitude          + '\n' +
                  'Accuracy: '          + position.coords.accuracy          + '\n' +
                  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                  'Heading: '           + position.coords.heading           + '\n' +
                  'Speed: '             + position.coords.speed             + '\n' +
                  'Timestamp: '         + position.timestamp                + '\n');
        };

        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);

      });
}