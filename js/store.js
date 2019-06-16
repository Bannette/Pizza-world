var removeCartItemButtons=document.getElementsByClassName("btn-danger")
console.log(removeCartItemButtons)
for (var i=0;i<removeCartItemButtons.length; i++){
    var button=removeCartItemButtons[i]
    button.addEventListener("click," function(event){
        var buttonClicked=event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
        // console.log("clicked")
    
    })
}
function updateCartTotal(){
    var cartItemContainer=document.getElementsByClassName("cart-items")[0]
    var cartRows=cartItemsContainer.getElementsByClassName("cart-row")
    for (var i=0; i<cartRows.length; i++){
        var cartRow=cartRows[i]
        var priceElement=cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement=cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price=parseFloat(priceElement.innerText.replace('Ksh'.""))
        var quantity= quantityElement.value
        console.log(price)
    }
}