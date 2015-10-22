
var userInputType = {
        1: {
          input: 0.05e2,
          result: [1, 2, "ping", 4, "pong"]
          }, 
        2: {
          input: -3.45 ,
          result: ["error"]
          }, 
        3: {
          input: "-" ,
          result: ["error"]
          }, 
        4: {
          input: "e",
          result: ["error"]
          },
        5: {
          input: -1, 
          result: ["error"]
          },
        6: {
          input: 1,
          result: [1]
          },
        7: {
          input: 15,
          result: [1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "ping pong"]
          },
      8: {
          input: "-e",
          result: ["error"]
          },
      9: {
          input: ".",
          result: ["error"]
          },
      10: {
          input: 0.25,
          result: ["error"]
          },  
}; 
       
var successRun = 0;
var failedRun = 0; 
var totalRun = 0;


document.addEventListener("DOMContentLoaded", function(){
 
  Object.keys(userInputType).forEach( function ( testkey ) {
    
   
      var testObject = userInputType[testkey];
      var tLabel = testObject.input ;
      var tDiv = document.createElement("ul");
      document.getElementById('data').appendChild(tDiv);
  
      var testlabel = document.createElement("li");
      testlabel.for = testkey;
      testlabel.innerHTML = tLabel;
      testlabel.className = 't-labels';
      tDiv.appendChild(testlabel);
  
  });

});
 
 

function Test() {
         
  Object.keys(userInputType).forEach( function(testKey) {
            
    window.testObject = userInputType[testKey];
    window.inputs = testObject.input;
    window.list = []; 
          
    if (window.inputs >= 1) {
            
      for (i=1; i <= window.inputs; i++) {
        if (i % 3 === 0 && i%5 !== 0) {
          window.list.push("ping");
        }
        else if (i % 5 === 0 && i%3 !== 0) {
          window.list.push("pong");
        }
        else if (i % 3 === 0 && i % 5 ===0) {
          window.list.push("ping pong");
        }
        else {
          window.list.push(i);
        }
      }
             
    }
    
    else {
      window.list.push("error");
    }
            
      
  Array.prototype.equals = function (array) {
  
    if (!array)
      return false;
    if (this.length != array.length)
      return false;
          
    for (var i = 0, l=this.length; i < l; i++) {
      if (this[i] instanceof Array && array[i] instanceof Array) {
        if (!this[i].equals(array[i]))
          return false;       
        }           
        else if (this[i] != array[i]) { 
          return false;   
        }           
      }       
        return true;
    };   
            
    
    if (window.list.equals(testObject.result)) {
      successRun ++;
      totalRun ++;
    }
    else {
      failedRun ++ ;
      totalRun ++;
    }
  });
          
  $("#result1").append("out of total " + totalRun + " tests" + ", " + successRun + " passed.");
  $("#result2").append("out of total " + totalRun + " tests" + ", " + failedRun + " failed.");
 
}

