let slideIndex;
let amountItems = 0;
let imgsrc;
let id_number;
let productname;
let productprice;

$( document ).ready(function() {
 
    $('#sortFunction').val( 'default' );

$( function() {
    $( "#flurry-container").flurry({
        character: "❄",
        color: "white",
        frequency: 90,
        speed: 10000,
        small: 8,
        large: 35,
        wind: 60,
        windVariance: 20,
        rotation: 0,
        rotationVariance: 90
    });
});

const slider = tns({
    container: '.slideshow-container',
    loop: true,
    items: 1,
    slideBy: 'page',    
    autoplay: true,
    autoplayButton: '.autoplayButton',
    speed: 1000, 
    controls: false,
    nav: true,
    navContainer: '.slideshow-nav-container',
    navPosition: "bottom",
    autoplayPosition: "bottom",
})

$(document).on('click', '.product', function() {

    imgsrc=$(event.target).attr('src');
    $(".postImg").attr('src', imgsrc);
    $("#thumb-img1").attr('src', imgsrc); 

    id_number = parseInt(imgsrc.match(/\d+/g));
    $("#thumb-img2").attr('src', 'images/' + 'product' + id_number + '-first' + '.jpg'); 
    $("#thumb-img2").parent().show();

    $("img").bind("error",function() {
        $(this).parent().hide();
    });

    productname= $(this).find(".pName").text();
    $(".productDescription").find("h2").replaceWith(function() {
        return '<h2>' + productname + '</h2>';
    });

    productprice = $(this).find(".price").text();
    $(".productDescription").find("p2").replaceWith(function() {
        return '<p2>' + productprice + '</p2>';
    });
   
    $("#itemPage").css("display","block");
    $("#mainPage").css("display","none");
    $("#shoppingCart").css("display","none");

    $(window).scrollTop(0);
})

$(document).on('click', '.buyButton', function() { 
      add(id_number, imgsrc, productname, productprice);
    
    $('input[type="number"]').niceNumber({
    
        autoSize:true,
        autoSizeBuffer: 1,
        buttonPosition:'around',
      
      });
    }); 
  
$("#homeIcon").click(function() {
    $("#mainPage").css("display","block");
    $("#shoppingCart").css("display","none");
    $("#itemPage").css("display","none");
    $(window).scrollTop(0);
})

$("#cartIcon").click(function() {
    $("#mainPage").css("display","none");
    $("#itemPage").css("display","none");
    $("#shoppingCart").css("display", "block");
    $(window).scrollTop(0);
})

$(document).on("change", "#sortFunction", function() {

    let sortingMethod = $(this).val();

    if(sortingMethod == 'default') {
        sortProductsDefault();
    }

    else if(sortingMethod == 'low-to-high')
    {
        sortProductsPriceAscending();
       
    }
    else if(sortingMethod == 'high-to-low')
    {
        sortProductsPriceDescending();
    } 
    else if(sortingMethod == 'name') 
    {
        sortProductsName();
    }

});

function sortProductsPriceAscending()
{
    let products = $('.products-sort > .product');
    
  

    products.sort(function(a, b) { 
        
        let contentA =parseInt( $(a).data('value'));
        let contentB =parseInt( $(b).data('value'));
        return (contentB > contentA) ? -1 : (contentB < contentA) ? 1 : 0;
        
    });
    
    $(".products-sort").html(products);

}

function sortProductsPriceDescending()
{
    
    let products = $('.products-sort > .product');
   
    products.sort(function(a, b) { 
        let contentA =parseInt( $(a).data('value'));
        let contentB =parseInt( $(b).data('value'));
        return (contentA > contentB) ? -1 : (contentA < contentB) ? 1 : 0;
        
    });
   
    $('.products-sort').html(products);

}

function sortProductsName() 
{
    let products = $('.products-sort > .product');

    products.sort(function(a,b) {

        let contentA = $(a).data('name');
        let contentB = $(b).data('name');
        
        return contentA > contentB ? 1: -1;
    });
    $('.products-sort').html(products);
}

function sortProductsDefault()
{
    let products = $('.products-sort > .product');

    products.sort(function(a,b) {
        let contentA =parseInt( $(a).data('default'));
        let contentB =parseInt( $(b).data('default'));

        return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
    });
    $('.products-sort').html(products);
}

});

function add(productId, imageName, productName, price) {
let exists = false;

$('.quantifier').each(function(index, element){ 
    if ($(element).attr('name') == productId) {
        exists = true
    }
    });

if (exists == false) {
amountItems = amountItems + 1; 
document.getElementById("numberCart").innerHTML = amountItems;

if (amountItems != 0) {
    document.getElementById("cartHeader").innerHTML = "Items in your bag";
}


let productAdded = '<div id = "wholeItem' + productId + '"value="' + productId +
    '"><div id = "itemCart"><img src="' + imageName +
    '"class="cartImg"><div id = "itemInfo"><h2>' + productName +
    '</h2><p>Delivery: In stock</p></div><input type="number" class = "quantifier" name ="' +
    productId +
    '"value="1" min="0" max="100" step="1"><div id = "itemRemove"><h3 data-value = "' +
    price.match(/\d+/g) + '" id = "price' + productId + '">' + price +
    '</h3><p></p><button onclick="removing(' + productId +
    ')" class="remove">Remove</button></div></div><hr /></div></div>';

productInfo.insertAdjacentHTML('beforeend', productAdded);
$("#checkoutInfo").css("display","block");
let total = 0;  
  $('.quantifier').each(function(index, element) {;
        if ($(element).val() == 0) {
            removing($(element).attr('name'));
        }
        else {
        let price = document.getElementById("price" + $(element).attr('name')).dataset.value;
        
        let val = parseFloat($(element).val() * price);
        if( !isNaN( val )){
           total += val;
        }
        }
    });
    document.getElementById("totalPrice").innerHTML = total + " kr";
    document.getElementById("subPrice").innerHTML = total + " kr";
}
}

function removing(n) {
    $("#wholeItem" + n).remove();
    amountItems = amountItems - 1;
    document.getElementById("numberCart").innerHTML = amountItems;   
    if (amountItems == 0) {
    document.getElementById("numberCart").innerHTML = "";   
    $("#checkoutInfo").css("display","none");
    document.getElementById("cartHeader").innerHTML = "No items in your bag";
    }
    let total = 0;  
  $('.quantifier').each(function(index, element) {
        if ($(element).val() == 0) {
            removing($(element).attr('name'));
        }
        else {
        let price = document.getElementById("price" + $(element).attr('name')).dataset.value;
        let val = parseFloat($(element).val() * price);
        if( !isNaN( val )){
           total += val;
        }
        }
    });
    document.getElementById("totalPrice").innerHTML = total + " kr";
    document.getElementById("subPrice").innerHTML = total + " kr";
}
  

  $(document).on("input", ".quantifier", function() {
    let total = 0;  
    $('.quantifier').each(function(index, element) {
        if ($(element).val() == 0) {
            removing($(element).attr('name'));
        }
        else {
        let price = document.getElementById("price" + $(element).attr('name')).dataset.value;
        document.getElementById("price" + $(element).attr('name')).innerHTML =  price * $(element).val() + " kr";
        let val = parseFloat($(element).val() * price);
        if( !isNaN( val )){
           total += val;
        }
        }
        
    });
    document.getElementById("totalPrice").innerHTML = total + " kr";
    document.getElementById("subPrice").innerHTML = total + " kr";
    });


function thumbFunction() {
    let thumbsrc = $(event.target).attr('src');
    $('.postImg').attr('src', thumbsrc);
}





