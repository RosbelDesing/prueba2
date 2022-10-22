let categoryContent = document.getElementById('category');
var category = new Array();

//Añadir las categorias de productos
category[0] = ['<ion-icon name="fast-food-outline"></ion-icon> Aperitivos '];
category[1] = ['<i class="fa-solid fa-martini-glass-citrus"></i> Jugos '];
category[2] = ['<ion-icon name="pizza-outline"></ion-icon> Pizza'];
category[3] = ['</p><i class="fa-solid fa-cake-candles"></i> Cake '];

localStorage.setItem('category', JSON.stringify(category));

if(categoryContent){
    for(i = 0; i<category.length; i++)
    {
        var selector = 'category-name lang name--selector-' + (i+1);
        let categoryName = document.createElement('p'); //Nombre de categoria
        categoryName.setAttribute('class',selector);
        var key = 'key-' + (i+1);
        categoryName.setAttribute('key',key);
        categoryName.innerHTML = category[i][0];
        categoryContent.appendChild(categoryName);
    }
};



