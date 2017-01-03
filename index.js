function genPeople() {
  var numPeople = document.getElementById("numPeople").value;
  parseInt(numPeople);
  console.log(numPeople);
  for (i = 0; i < numPeople; i++) {
    var personNumber = i.toString();
    var objectName = "Person" + personNumber;
    var Person = {
      index: objectName,
      initials: "XX",
      shareG: "XX",
      shareR: "XX",
    };
    console.log(Person);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    document.body.appendChild(x);

  };
}
