$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    $("#quiz").hide();
    $("#outputMessages").show();

    var animalCount = 0;
    var countryCount = 0;
    var charCount = 0;
    var relationshipCount = 0;

    $("input:checkbox[name=animals]:checked").each(function() {
      var animals = $(this).val();
      $("#animalsOutput").append(animals + "<br>");
      animalCount ++;
      console.log(animalCount);
    })

    $("input:checkbox[name=countries]:checked").each(function() {
      var countries = $(this).val();
      $("#countriesOutput").append(countries + "<br>");
      countryCount ++;
    })

    $("input:checkbox[name=character]:checked").each(function() {
      var character = $(this).val();
      $("#characterOutput").append(character + "<br>");
      charCount ++; 
    })

    $("input:checkbox[name=relationships]:checked").each(function() {
      var relationships = $(this).val();
      $("#relationshipsOutput").append(relationships + "<br>");
      relationshipCount ++;
    })

    $("#aura").show();

    if ((animalCount + countryCount + charCount + relationshipCount)<6){
      //blue
      $("#aura").append(`<p id="blue"> BLUE</p>`);
    } else if ((charCount>3) && (relationshipCount>3)) {
      //gold
      $("#aura").append(`<p id="gold"> GOLD</p>`);
    } else if ((animalCount>3) && (countryCount>relationshipCount)){
      //pink
      $("#aura").append(`<p id="pink"> PINK</p>`);
    } else {
      //gray
      $("#aura").append(`<p id="gray"> GRAY</p>`);
    }

  })
})