var vowels=["a","e","i","o","u"];

$(document).ready(function(){
  $("form button").click(function(event) {
    event.preventDefault();

    var userInput = $("#userInput").val();
    var userInputs = userInput.split("");

    for (i = 0; i < userInput.length; i++) {
      for (v = 0; v < vowels.length; v++) {
        if (userInputs[i] === vowels[v]) {
          userInputs[i] = "-";
        }
      }
    }
    
    var output = userInputs.join("");
    alert(output);
  });
});
