
 
  var config = {
    apiKey: "AIzaSyCtArTdHOTBlIhFViCS6yPjW0whXEnz5Cw",
    authDomain: "trainssssss-1ca58.firebaseapp.com",
    databaseURL: "https://trainssssss-1ca58.firebaseio.com",
    projectId: "trainssssss-1ca58",
    storageBucket: "trainssssss-1ca58.appspot.com",
    messagingSenderId: "559621271372"
  };
  firebase.initializeApp(config);


  var database = firebase.database();

  var trainName = "";
  var destination = "";
  var frequency = 0 ;
  var nextArrival = 0;
  var minutesAway = 0;


  $("button").on("click", function(event){
    event.preventDefault();

    var trainName = $("#newTrainName").val().trim();
    var destination = $("#newDestination").val().trim();
    var frequency = parseInt($("#newFrequency").val().trim());
    var nextArrival = 0;
    var minutesAway = 0;

    console.log(trainName);
    console.log(destination);
    console.log(frequency);

    database.ref().set({
      name: trainName,
      destination: destination,
      frequency: frequency
    });


    
  });

  database.ref().on("value", function(snapshot) {
  
    console.log(snapshot.val());
    
    console.log(snapshot.val().name);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().frequency);
    // Change the HTML
    $("#newFrequency").append($("<tr>"), $("<td>").html(snapshot.val().name), $("<td>").html(snapshot.val().destination), $("<td>").html(snapshot.val().frequency));
    
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });