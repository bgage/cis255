function checkUsername(element, id) {                // Declare function
  feedback = 'feedback'+element.id[element.id.length -1];
  var elMsg = document.getElementById(feedback);    // Get feedback element
  if (element.value.length < 5) {                        // If username too short
    elMsg.textContent = 'Username must be 5 characters or more';  // Set msg
  } else {                                            // Otherwise
    elMsg.textContent = '';                           // Clear message
  }
}

var elUsernames = document.getElementsByClassName('username'); // Get username input
 
for(i = 0; i < elUsernames.length; i++) {
  document.getElementById(elUsernames[i].id).onblur = function() {
    checkUsername(this);
    console.log(this);
  };
}
