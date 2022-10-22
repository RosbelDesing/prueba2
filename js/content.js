//Crear los array de Categorias y productos correspondientes

tag_1 = 'apertivos';
var apertivos = new Array();
apertivos[0] = ['image/aperitivo_1.png','Patatas bravas','4.00','Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nam!'];
apertivos[1] = ['image/aperitivo_1.png','Pinchos de tortilla de patatas','2.99','Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nam!'];
apertivos[2] = ['image/aperitivo_1.png','Boquerones en vinagre','3.25','Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nam!'];
apertivos[3] = ['image/aperitivo_1.png','Papas fritas','8','Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nam!'];
localStorage.setItem(tag_1, JSON.stringify(apertivos));

tag_2 = 'jugos';
var jugo = new Array();
jugo[0] = ['image/jugo_1.png','Naranja','10','Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nam!'];
jugo[1] = ['image/jugo_2.png','Limón','5','Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nam!'];
jugo[2] = ['image/jugo_1.png','Manzana','12','Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nam!'];
jugo[3] = ['image/jugo_2.png','Melón','8','Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nam!'];
localStorage.setItem(tag_2, JSON.stringify(jugo));

tag_3 = 'pizza';
var pizza = new Array();
pizza[0] = ['image/food.png','Pizza de chorizo','10','Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nam!'];
pizza[1] = ['image/food.png','Pizza de jamón','5','Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nam!'];
pizza[2] = ['image/food.png','Pizza de cebolla','12','Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nam!'];
pizza[3] = ['image/food.png','Pizza de atún','8','Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nam!'];
localStorage.setItem(tag_3, JSON.stringify(pizza));


tag_4 = 'cake';
var cake = new Array();
cake[0] = ['image/cake_1.png','Cheesecak','10','Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nam!'];
cake[1] = ['image/cake_2.png','Tiramisú','5','Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nam!'];
cake[2] = ['image/cake_3.png','Tres leches','12','Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nam!'];
cake[3] = ['image/cake_4.png','Tarta de Santiago','8','Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nam!'];
localStorage.setItem(tag_4, JSON.stringify(cake));




