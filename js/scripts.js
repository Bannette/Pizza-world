$(document).ready(function(){
    $(".tgl p").hide();
  $("#delivery").click(function(){
      $("#delivery img").toggle();
     $("#delivery p").toggle();
  });
  $("#choose").click(function(){
    $("#choose img").toggle();
   $("#choose p").toggle();
});
$("#receive").click(function(){
    $("#receive img").toggle();
   $("#receive p").toggle();
});

$("#addit").click(function(){
  var productId = $("#productId").val();
  var productName = $("#productName").val();
  var productQuantity = $("#productQuantity").val();
  var data = {
    'product_id': productId,
    'product_name': productName,
    'quantity': productQuantity
  };

  $.post("/cart/add", data, showDone);
 });
 
 var showDone = function() {
  /* Make something happen here*/
 }

// $('.like-btn').on('click', function() {
//   $(this).toggleClass('is-active');
// });

// $('.minus-btn').on('click', function(e) {
//   e.preventDefault();
//   var $this = $(this);
//   var $input = $this.closest('div').find('input');
//   var value = parseInt($input.val());

//   if (value &ampgt; 1) {
//       value = value - 1;
//   } else {
//       value = 0;
//   }

// $input.val(value);

// });

// $('.plus-btn').on('click', function(e) {
//   e.preventDefault();
//   var $this = $(this);
//   var $input = $this.closest('div').find('input');
//   var value = parseInt($input.val());

//   if (value &amp;lt; 100) {
//       value = value + 1;
//   } else {
//       value =100;
//   }

//   $input.val(value);
// });
// });

// var taxRate = 0.05;
// var shippingRate = 15.00; 
// var fadeTime = 300;

// $('.product-quantity input').change( function() {
//   updateQuantity(this);
// });

// $('.product-removal button').click( function() {
//   removeItem(this);
// });


// function recalculateCart()
// {
//   var subtotal = 0;
  
//   $('.product').each(function () {
//     subtotal += parseFloat($(this).children('.product-line-price').text());
//   });
  
//   var tax = subtotal * taxRate;
//   var shipping = (subtotal > 0 ? shippingRate : 0);
//   var total = subtotal + tax + shipping;
  
//   $('.totals-value').fadeOut(fadeTime, function() {
//     $('#cart-subtotal').html(subtotal.toFixed(2));
//     $('#cart-tax').html(tax.toFixed(2));
//     $('#cart-shipping').html(shipping.toFixed(2));
//     $('#cart-total').html(total.toFixed(2));
//     if(total == 0){
//       $('.checkout').fadeOut(fadeTime);
//     }else{
//       $('.checkout').fadeIn(fadeTime);
//     }
//     $('.totals-value').fadeIn(fadeTime);
//   });
// }

// function updateQuantity(quantityInput)
// {
//   var productRow = $(quantityInput).parent().parent();
//   var price = parseFloat(productRow.children('.product-price').text());
//   var quantity = $(quantityInput).val();
//   var linePrice = price * quantity;
  
//   productRow.children('.product-line-price').each(function () {
//     $(this).fadeOut(fadeTime, function() {
//       $(this).text(linePrice.toFixed(2));
//       recalculateCart();
//       $(this).fadeIn(fadeTime);
//     });
//   });  
// }


// function removeItem(removeButton)
// {
//   var productRow = $(removeButton).parent().parent();
//   productRow.slideUp(fadeTime, function() {
//     productRow.remove();
//     recalculateCart();
//   }
//   });