$(function() {
  var originalInput, answer = "";
  $("#puzzle").submit(function(){
    event.preventDefault();

    originalInput = $("#puzzle-input").val()
    var characters = originalInput.split("");

    for (var i = 0; i < characters.length; i++) {
      var letter = characters[i];
      if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        characters[i] = "-";
      }
    }
    var finalString = characters.join("");

    $("h2").text(finalString);
    $("form#puzzle")[0].reset();
  });

  $("#answer").submit(function(){
    event.preventDefault();
    answer = $("#answer-input").val();

    if (answer === originalInput) {
      alert("YOU WIN!!!")
    } else {
      alert("Please try again.")
    }
  });
});
