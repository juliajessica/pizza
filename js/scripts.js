//business logic
function PizzaSize(size) {
  this.size = size;
}

function PizzaToppings(toppings) {
  this.topping = [];
// this.name = [];
}

PizzaSize.prototype.pizzaOrder = function() {
  return this.size;
}

PizzaToppings.prototype.pizzaorder2 = function() {
  return this.topping;
}


function resetFields () {
  $("select#pizzaSize").val("");
  $("input#toppings").val("");
}

//user interface
$(document).ready(function() {
 $("form#pizzaForm").submit(function(event) {
   event.preventDefault();

   var pizzaSizeInput = $("select#pizzaSize").val("");

   var newPizzaOrderPt1 = new PizzaSize (pizzaSizeInput);

   $("#toppingSelection").each(function() {

    var toppingInput = $(this).find("input#toppings").val();

    var newPizzaOrderPt2 = new PizzaTopping (toppingInput);
    newPizzaOrderPt1.topping.push(newPizzaorderPt2);
  });

  $()





 }); //close submit function
}); //close document ready function
