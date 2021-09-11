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

}