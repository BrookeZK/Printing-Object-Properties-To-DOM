// Getting objects values printed to the DOM is two-stepped:
// 1. Accessing objects via bracket or dot notation
// 2. Using jQuery methods to print to the DOM 

// I am using object literals for this example
let favoriteThingsOnMondays = {
  mon1: "toys",
  mon2: "the dog park",
  mon3: "food"
}

let favoriteThingsOnTuesdays = {
  tues1: "food",
  tues2: "naps",
  tues3: "more naps"
}

let dog = {
  name: "Frufru",
  age: 9,
  colors: ["black", "white", "brown"],
  favThingsByDayOfWeek: [favoriteThingsOnMondays, favoriteThingsOnTuesdays]
}

$(document).ready(function() {
  $("p").click(function(){
    // .text() method won't process HTML tags. Output: "<em>hello world</em>"
    $("h1#title").text("<em>hello world</em>"); 
    // .html() method will process HTML tags and add content withint existing html tags
    $("h6").html("heeellllllooooooo");
    // .append() and .prepend methods will process HTML tags and add content within existing html tags
    $("ul#output").append("<li>Howdy, folks!</li>");
    $("ul#output").append("<li>This is my very wonderful dog</li>");
  });

  // targeting dynamically created elements
  $("ul#output").on("click", "li", function() {
    $("ul#output").append("<li>" + dog.name + "</li>");
    // dog.age === dog["age"] // true
    $("ul#output").append("<li>" + dog["age"] + "</li>");
    dog.colors.forEach(function(color) {
      $("ul#output").append("<li>" + color + "</li>");
    });

    const favMonThingsKeys = Object.keys(favoriteThingsOnMondays); 
    // [ "mon1", "mon2", "mon3"]
    const favTuesThingsKeys = Object.keys(dog.favThingsByDayOfWeek[1]); 
    // [ "tues1", "tues2", "tues3"]
    favMonThingsKeys.forEach(function(key){
      $("ul#output").append("<li>" + key + ": " + dog.favThingsByDayOfWeek[0][key] + "</li>");
    }) // "mon1: toys", "mon2: the dog park", "mon3: food"
    favTuesThingsKeys.forEach(function(key){
      $("ul#output").append("<li>" + key + ": " + dog.favThingsByDayOfWeek[1][key] + "</li>");
    }) // "tues1: food", "tues2: naps", "tues3: more naps"
  });
});



