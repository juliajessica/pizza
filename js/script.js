//business logic
var veggie = 10;
var meat = 12;

function PizzaOptions(size) {
  this.size = size;
  this.topping = topping;
}


PizzaOptions.prototype.pizzaOptionsPrototype = function() {

  if(this.topping == "Pepperoni") {
    var chosenToppings = meat;
  } else {
    var chosenToppings = veggie;
  }
  return chosenToppings;

  // return this.size + " " + this.topping;
}

//user interface
$(document).ready(function(event) {
  $("form#pizzaForm").submit(function() {
    event.preventDefault();

    var pizzaSizeInput = $("#pizzaSize").val();
    var toppingInput = $("input[name=age]:checked").val();
    // var toppingInput = $(this).find("input#toppings").val();
    var newPizzaOrder = new PizzaOptions(pizzaSizeInput, toppingInput);
    var finalPrice = newPizzaOrder.pizzaOptionsPrototype();
    $("ul#showOrderDetails").append("<li><span class='sendtoHtml'>" + newPizzaOrder.size + "<span></li>");
    console.log(PizzaOptions);

    // var checkboxes = document.getElementsByName(form);////allows you to select multiple checkboxes
    // var selected = [];
    // for (var i=0; i<checkboxes.length; i++) {
    //   if (checkboxes[i].checked == true) {
    //       selected.push(checkboxes[i].value + ' ');
    //
    //   }
    // }
    var orderfinal = newPizzaOrder.pizzaOptionsPrototype();
    $("#showOrderDetails").show();
    $("#showOrderDetails").append("your price is: " + "$" + orderfinal);
    $(".sendtoHtml").last().click(function() {
    $("#showOrderDetails").fadeIn();
    // $("#showOrderDetails h4").text(newPizzaOrder.size);
    $(".outputSize").text(newPizzaOrder.size);
    $(".outputToppings").text(newPizzaOrder.topping);
    $(".price").text(finalPrice);

    });
  }); //close submit function
}); //close document ready function

    // $("#toppingSelection").remove(); //removes the users input
    // $("ul#showOrderDetails").append("<li><span class='sendtoHtml'>" + newPizzaOrderPt2.pizzaToppingPrototype() + "<span><li>"); //send toppings to list
    // $("ul#showOrderDetails").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");


      // $(this).hide().slideDown('slow'); //adding style
      // $(".outputSize").text(newPizzaOrderPt1.size);
      // $(".outputToppings").text(newPizzaOrderPt2.toppings);
    // newPizzaOrderpt1.topping.forEach(function(topping) {
    // // $("ulToppings").append("<li>" + PizzaToppings.pizzaToppingPrototype() + "</li>");
    // //   });
    // // });
