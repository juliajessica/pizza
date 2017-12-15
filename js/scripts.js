//business logic
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  // this.name = [];
}

Pizza.prototype.pizzaOrder = function () {
  return this.size + " " + this.topping;
}

function resetFields () {
  $("select#pizzaSize").val("");
  $("input#toppings").val("");
}

//user interface
$(document).ready(function() {


}
)
