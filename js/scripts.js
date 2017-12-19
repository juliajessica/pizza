//business logic
var pizzaBasePrice = 10;

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.pizzaPrototype = function() {
  if(this.size == "Small") {
    var pizzaPrice = pizzaBasePrice;
  }
  if(this.size == "Medium") {
    var pizzaPrice = pizzaBasePrice += 1;
  }
  if(this.size == "Large") {
    var pizzaPrice = pizzaBasePrice += 2;
  }
  if(this.size == "Family-Size") {
    var pizzaPrice = pizzaBasePrice += 4;
  }
  if(this.topping.length > 0) {
    var pizzaPrice = pizzaBasePrice + (this.topping.length + .75);
  }
  else {
    alert("Please complete your order before you continue!");
  }
  return pizzaPrice
}

//user interface
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    var toppingArray = [];

    var pizzaSizeInput = $("#pizzaSize").val();
    $("input:checkbox[name=userToppingChoice]:checked").each(function() {
     var pizzaToppings = $(this).val();
     toppingArray.push(" " + pizzaToppings);

   });

    var newPizzaOrder = new Pizza(pizzaSizeInput, toppingArray);

    var finalPrice = newPizzaOrder.pizzaPrototype();
    $("ul#showOrderDetails").append("<li><span class='sendtoHtml'>" + newPizzaOrder.size + "<span></li>");
    $("#showOrderDetails").show();
    $("#showOrderDetails").append("your price is: " + "$" + finalPrice);

    // var orderfinal = newPizzaOrder.pizzaOptionsPrototype();

      $(".sendtoHtml").last().click(function() {
      $("#showOrderDetails").fadeIn();
      $(".outputSize").text(newPizzaOrder.size);
      $(".outputToppings").text(newPizzaOrder.topping);
      $(".price").text(finalPrice);
    });
  });
});


//   if(this.topping === "Pepperoni" || this.topping === "Meatballs") {
//     var chosenToppings = meat;
//   } else {
//     var chosenToppings = veggie;
//   }
//   if(this.size === "Family-Size") {
//     var chosenToppings = meat;
//   } else {
//     var chosenToppings = veggie;
//   }
//   if(this.size === "Family-Size" && this.topping === "Pepperoni" || this.size === "Family-Size" && this.topping === "Meatballs") {
//     var chosenToppings = xlmeat;
//   } else {
//     var chosenTopping = veggie;
//   }
//   return chosenToppings;
// }
