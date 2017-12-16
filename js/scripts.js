//business logic
var veggie = 10;
var meat = 12;
var xlmeat = 15;

function PizzaOptions(size, topping) {
  this.size = size;
  this.topping = topping;
}

PizzaOptions.prototype.pizzaOptionsPrototype = function() {

  if(this.topping === "Pepperoni" || this.topping === "Meatballs") {
    var chosenToppings = meat;
  } else {
    var chosenToppings = veggie;
  }
  if(this.size === "Family-Size") {
    var chosenToppings = meat;
  } else {
    var chosenToppings = veggie;
  }
  if(this.size === "Family-Size" && this.topping === "Pepperoni" || this.size === "Family-Size" && this.topping === "Meatballs") {
    var chosenToppings = xlmeat;
  } else {
    var chosenTopping = veggie;
  }
  return chosenToppings;
}

//user interface
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();

    var pizzaSizeInput = $("#pizzaSize").val();
    var toppingInput = $("input[name=userToppingChoice]:checked").val();
    // var toppingInput = $(this).find("input#toppings").val();
    var newPizzaOrder = new PizzaOptions(pizzaSizeInput, toppingInput);
    var finalPrice = newPizzaOrder.pizzaOptionsPrototype();
    $("ul#showOrderDetails").append("<li><span class='sendtoHtml'>" + newPizzaOrder.size + "<span></li>");

    var orderfinal = newPizzaOrder.pizzaOptionsPrototype();
    $("#showOrderDetails").show();
    $("#showOrderDetails").append("your price is: " + "$" + orderfinal);

    $(".sendtoHtml").last().click(function() {
      $("#showOrderDetails").fadeIn();
      $(".outputSize").text(newPizzaOrder.size);
      $(".outputToppings").text(newPizzaOrder.topping);
      $(".price").text(finalPrice);

      // $("#pizzabutton").click(function(event) {
      //   event.preventDefault();
      //   newPizzaOrder = new PizzaOptions();
      //   $("#showOrderDetails").append(newPizzaOrder.size + newPizzaOrder.topping);
      // });
    });
  }); //close submit function
}); //close document ready function
