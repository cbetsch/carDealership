$(
  function generateInventory() {
    let carExample = document.querySelector('#cars');
    let prdTemplate = document.querySelector('#producttemplate');
    let clone = document.importNode(prdTemplate.content, true);
    clone.querySelector('#lblName').textContent = 'Batmobile';
    clone.querySelector('#pimage').src='img/batmobile.png';
    clone.querySelector('#pdesc').textContent = "Why be you when you can be Batman... drive the Batmobile!!!";
    document.body.appendChild(clone);
  });

/*function generateInventory() {
  var inventory = [
    {"car": "BB-8", "carImage": "img/bb8,jpg", "carDescription": "He is one of a kind!"}
  ];
  var inventoryList = document.getElementById('inventory');
  for (var i = 0; i < inventory.length; i++) {
    var item = inventory[i];
    var clone = document.getElementById('producttemplate').content.cloneNode(true);
    clone.querySelector('#lblName').textContent = item.car;
    clone.querySelector('#pimage').src = item.carImage;
    clone.querySelector('#pdesc').textContent = item.carDescription;
    document.body.appendChild(clone);
  }
  }
