
function play() {    
    $("#output").empty();
    list = []; 
    window.input = document.getElementById("num").value; 
    
    if (window.input >= 1) {
    
      for (i=1; i <= window.input; i++) {
        if (i % 3 === 0 && i%5 !== 0) {
          list.push("ping");
        }
        else if (i % 5 === 0 && i%3 !== 0) {
          list.push("pong");
        }
        else if (i % 3 === 0 && i % 5 ===0) {
          list.push("ping pong");
        }
        else {
          list.push(i);
        }
      }
      
      for (i = 0; i < list.length; i++) {
        var vPool = "<li>" + list[i] + "</li>";
        $('#output').append(vPool);
      }
    
      list.length = 0;
    
    } else {
      window.confirm("Error! You entry is not a valid number. Please confirm and re-enter.");
    }
  
}


