//business logic
// function Contact(first, last, order) {
//   this.firstName = first;
//   this.lastName = last;
//   this.order = [];
// }

function PizzaOptions(size) {
  this.size = size;
  this.topping = [];
}


PizzaOptions.prototype.pizzaOptionsPrototype = function() {
  return this.size + " " + this.topping;
}

// PizzaToppings.prototype.pizzaToppingPrototype = function() {
//   return this.topping;
//
// }

//user interface
$(document).ready(function(event) {
  $("form#pizzaForm").submit(function() {
    event.preventDefault();

    var pizzaSizeInput = $("#pizzaSize").val(); //might not let me use select
    var toppingInput = $("input[name=age]:checked").val();
    // var toppingInput = $(this).find("input#toppings").val();
    var newPizzaOrder = new PizzaOptions(pizzaSizeInput, toppingInput);
      // var newPizzaOrderPt2 = new PizzaTopping();
    // newContact.order.push(newPizzaOrder);
    // });

    var checkboxes = document.getElementsByName(form);////allows you to select multiple checkboxes
    var selected = [];
    for (var i=0; i<checkboxes.length; i++) {
      if (checkboxes[i].checked == true) {
          selected.push(checkboxes[i].value + ' ');
      }
    }

    $("#toppingSelection").remove(); //removes the users input
    $("ul#showOrderDetails").append("<li><span class='sendtoHtml'>" + newPizzaOrderPt2.pizzaToppingPrototype() + "<span><li>"); //send toppings to list
    // $("ul#showOrderDetails").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $(".sendtoHtml").last().click(function() {
      $(this).hide().slideDown('slow'); //adding style
      $(".outputSize").text(newPizzaOrderPt1.size);
      $(".outputToppings").text(newPizzaOrderPt2.toppings);
    // newPizzaOrderpt1.topping.forEach(function(topping) {
    // // $("ulToppings").append("<li>" + PizzaToppings.pizzaToppingPrototype() + "</li>");
    // //   });
    // // });












  }); //close submit function
}); //close document ready function
