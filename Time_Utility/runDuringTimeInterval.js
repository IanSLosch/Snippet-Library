function runFunctionInDateTimeInterval(startDateTime, endDateTime, callbackFunction) {
  // Parse the start and end date-times
  let start = moment(startDateTime, "YYYY-MM-DD HH:mm");
  let end = moment(endDateTime, "YYYY-MM-DD HH:mm");
  let now = moment();

  // Check if current date-time is within the range
  if (now.isBetween(start, end)) {
    // If it is, run the callback function
    console.log("Running function, current date-time is within the given interval.");
    callbackFunction();
  } else {
    console.log("Current date-time is not within the given interval.");
  }
}

// Example usage:
$(document).ready(function() {
  runFunctionInDateTimeInterval("2023-04-01 09:00", "2023-04-01 17:00", function() {
    console.log("This is the callback function being run.");
  });
});
