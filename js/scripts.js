//business logic
function PizzaSize(size) {
  this.size = size;
}

function PizzaToppings(toppings) {
  this.topping = [];
// this.name = [];
}

PizzaSize.prototype.pizzaSizePrototype = function() {
  return this.size;
}

PizzaToppings.prototype.pizzaToppingPrototype = function() {
  return this.topping;

}


// function resetFields () {
//   $("input#first-name").val("");
//   // $("select#pizzaSize").val("");
//   // $("input#toppings").val("");
// }

//user interface
$(document).ready(function() {
 $("form#pizzaForm").submit(function(event) {
   event.preventDefault();

   var pizzaSizeInput = $("select#pizzaSize").val(""); //might not let me use select

   var newPizzaOrderPt1 = new PizzaSize(pizzaSizeInput);

   $("#toppingSelection").each(function() {

    var toppingInput = $(this).find("input#toppings").val();

    var newPizzaOrderPt2 = new PizzaTopping(toppingInput);
    newPizzaOrderPt1.topping.push(newPizzaorderPt2);
  });

  $("#toppingSelection").remove(); //removes the users input
  $("ul#showOrderDetails").append("<li><span class='sendtoHtml'>" + newPizzaOrderPt2.pizzaToppingPrototype() + "<span><li>"); //send toppings to list

  $(".sendtoHtml").last().click(function() {
    $(this).hide().slideDown('slow'); //adding style
    $("#show-order").show();
    $(".outputSize").text(newPizzaOrderPt1.size);
    $(".outputToppings").text(newPizzaOrderPt2.toppings);
    // newPizzaOrderpt1.topping.forEach(function(topping) {
    // // $("ulToppings").append("<li>" + PizzaToppings.pizzaToppingPrototype() + "</li>");
    // //   });
    // // });
    // $("input#first-name").val(""); //taking in the input if the name

)};






 }); //close submit function
}); //close document ready function
