//Funcion para añadir categrias y productos 
//id:marcador para diferenciar los contenedores de categorias
//content:array del contendio
//numblang: es el indicador para garantizar keys diferentes en el cambio de lenguaje

function addProducto(id,content,numbLang){
    let menu = document.getElementById('menu-content');
    if(menu){
        let createCategory = document.createElement('div');
        var id = 'category--select category-content-' + id;
        createCategory.setAttribute('class', id);
        menu.appendChild(createCategory);

        if(createCategory){
            for(i = 0; i<content.length; i++){
                //Crear elementos HTML
                let createCard = document.createElement('div');  //Contenedor del producto completo
                let productImg = document.createElement('img'); //Imagen del producto
                let productInfo = document.createElement('div'); //Contenedor de la info del producto:nombre,precio y descripcion
                let productName = document.createElement('p') //Nombre del producto
                let productPrice = document.createElement('p') //Precio del producto
                let productDesc = document.createElement('p') //Descripción del producto
        
                //Añadir las clases
                createCard.setAttribute('class','card');
                productImg.setAttribute('class','product-img');
                productInfo.setAttribute('class','product-info');
                productName.setAttribute('class','product-name lang');
                productPrice.setAttribute('class','product-price');
                productDesc.setAttribute('class','product-desc lang');

                //Añadir Key para cambio de idioma
                var name_lang = 'name--lang-' + (i+1) + '-' + numbLang;
                var desc_lang = 'desc--lang-' + (i+1) + '-' + numbLang;
                productName.setAttribute('key', name_lang);
                productDesc.setAttribute('key', desc_lang);
        
                //Asignar valores a los elementos HTML
                productImg.setAttribute('src',content[i][0]);
                productName.innerHTML = content[i][1];
                productPrice.innerHTML = content[i][2] + ' <ion-icon name="logo-euro"></ion-icon>';
                productDesc.innerHTML = content[i][3];
        
                //Armar la esctrucutra HTML
                createCategory.appendChild(createCard);
                createCard.appendChild(productImg);
                createCard.appendChild(productInfo);
                productInfo.appendChild(productName);
                productInfo.appendChild(productPrice)
                createCard.appendChild(productDesc);
        
            }
        };

        
    }

}

//Funcion para llamar el array de productos desde el localStorage
function callProduct(string){
    var content = localStorage.getItem(string);
    content = JSON.parse(content);
    return content;
}

//Marcador al seleccionr categorias
function addMarkerCategory(){
    $(document).ready(function(){
        $('.category-name').on('click',function(){
            $(this).siblings().removeClass('cat-active');
            $(this).addClass('cat-active');
        })
    })
}

//Establecer categorias marcada por defecto1
function setCategoryDefault(){
    const markerDefaultt = document.querySelector('.name--selector-1');
    markerDefaultt.classList.add("cat-active");
};


