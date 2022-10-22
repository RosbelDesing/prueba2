//Marcador de categorias
addMarkerCategory();

//Declarar las funciones para armar la seccion de Categorias y productos
pizzas = callProduct(tag_1);
addProducto(1,pizzas,1);

jugos = callProduct(tag_2);
addProducto(2,jugos,2);

pizza = callProduct(tag_3);
addProducto(3,pizza,3);

cake = callProduct(tag_4);
addProducto(4,cake,4);


function setDefaultVisible(){
    //Aumentra numero de contadores para añadir mas categorias
    const productContent_1 = document.querySelector('.category-content-1');
    const productContent_2 = document.querySelector('.category-content-2');
    const productContent_3 = document.querySelector('.category-content-3');
    const productContent_4 = document.querySelector('.category-content-4');

    productContent_1.style.display = "flex";
    productContent_2.style.display = "none";
    productContent_3.style.display = "none";
    productContent_4.style.display = "none";

}

function setProductVisible(){
    const category_1 = document.querySelector('.name--selector-1');
    const category_2 = document.querySelector('.name--selector-2');
    const category_3 = document.querySelector('.name--selector-3');
    const category_4 = document.querySelector('.name--selector-4');

    const productContent_1 = document.querySelector('.category-content-1');
    const productContent_2 = document.querySelector('.category-content-2');
    const productContent_3 = document.querySelector('.category-content-3');
    const productContent_4 = document.querySelector('.category-content-4');

    
    category_1.addEventListener("click", () =>{
        productContent_1.style.display = "flex";
        productContent_2.style.display = "none";
        productContent_3.style.display = "none";
        productContent_4.style.display = "none";
    });

    category_2.addEventListener("click", () =>{
        productContent_1.style.display = "none";
        productContent_2.style.display = "flex";
        productContent_3.style.display = "none";
        productContent_4.style.display = "none";
    });

    category_3.addEventListener("click", () =>{
        productContent_1.style.display = "none";
        productContent_2.style.display = "none";
        productContent_3.style.display = "flex";
        productContent_4.style.display = "none";
    });


    category_4.addEventListener("click", () =>{
        productContent_1.style.display = "none";
        productContent_2.style.display = "none";
        productContent_3.style.display = "none";
        productContent_4.style.display = "flex";
    });

}

setCategoryDefault()
setDefaultVisible();
setProductVisible();