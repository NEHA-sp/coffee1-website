document.addEventListener("DOMContentLoaded", function() {
    var link = 'http://127.0.0.1:5500/menu.html'; 
    var qr = new QRious({
      element: document.getElementById('qrcode'),
      size: 200,
      value: link
    });
  });