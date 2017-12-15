//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  // this.pizza = [];
}

function PizzaOptions(size) {
  this.size = size;
  this.topping = [];
}

// function PizzaToppings(toppings) {
// }

Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}

PizzaOptions.prototype.pizzaOptionsPrototype = function() {
  return this.size + " " + this.topping;
}

// PizzaToppings.prototype.pizzaToppingPrototype = function() {
//   return this.topping;
//
// }


function resetFields () {
  $("input#first-name").val("");
//   // $("select#pizzaSize").val("");
//   // $("input#toppings").val("");
}

//user interface
$(document).ready(function() {
  event.preventDefault();
    $("form#pizzaForm").each(function() {

     var inputtedFirstName = $("input#first-name").val();
     var inputtedLastName = $("input#last-name").val();

     var newContact = new Contact(inputtedFirstName, inputtedLastName);


   ///NEED IT'S OWN FUNCTION
    $("#toppingSelection").each(function() {

      var pizzaSizeInput = $("select#pizzaSize").val(""); //might not let me use select
      var toppingInput = $(this).find("input#toppings").val();
      var newPizzaOrder = new PizzaOptions(pizzaSizeInput, toppingInput);
      // var newPizzaOrderPt2 = new PizzaTopping();
      newPizzaOrder.topping.push(newPizzaorderPt2);
  });

  $("#toppingSelection").remove(); //removes the users input
  // $("ul#showOrderDetails").append("<li><span class='sendtoHtml'>" + newPizzaOrderPt2.pizzaToppingPrototype() + "<span><li>"); //send toppings to list
  $("ul#showOrderDetails").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

  $(".sendtoHtml").last().click(function() {
    $(this).hide().slideDown('slow'); //adding style
    $("#showOrderDetails").show();
    $("#showOrderDetails h4").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $(".outputSize").text(newPizzaOrderPt1.size);
    $(".outputToppings").text(newPizzaOrderPt2.toppings);
    // newPizzaOrderpt1.topping.forEach(function(topping) {
    // // $("ulToppings").append("<li>" + PizzaToppings.pizzaToppingPrototype() + "</li>");
    // //   });
    // // });
    $("input#first-name").val(""); //taking in the input if the name
    $("input#new-last-name").val("");
)};


var checkboxes = document.getElementsByName('employee');////allows you to select multiple checkboxes
var selected = [];
for (var i=0; i<checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
        selected.push(checkboxes[i].value + ' ');
    }
}
// if(userAnswer === "Pepperoni")
//   push.Pepperoni










  }); //close submit function
}); //close document ready function
