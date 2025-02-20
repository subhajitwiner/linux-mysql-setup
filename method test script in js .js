const fs = require("fs");
let dataArray;
// Read the JSON file
/** 
* 
  @param {string} fileName 
*/
async function getFiles(fileName) {
  /**
   * @type {Array<string>()}
   */
  let filedata = [];
  try {
    // Read the file synchronously and parse the JSON data
    const data = fs.readFileSync(fileName, "utf8");

    // Parse the JSON data and assign it to filedata
    filedata = JSON.parse(data);
  } catch (err) {
    console.error("Error reading or parsing the file:", err);
  }
  // Example usage
  //measureExecutionTime(validatesDeed1, dataArray);
  //measureExecutionTime(validatesDeed2, dataArray);
  //measureExecutionTime(validatesDeed3, dataArray);
  // Now the `dataArray` holds the array from the JSON file
  // console.log(dataArray);
  return filedata;
}

function measureExecutionTime(fn, inputArray) {
  const start = performance.now(); // Get the start time

  // Call the function with the provided array
  fn(inputArray);

  const end = performance.now(); // Get the end time
  const executionTime = end - start; // Calculate the execution time

  console.log(`Execution Time: ${executionTime} milliseconds`);
}
function validatesDeed1(axz) {
  console.log(`selecting isValidDeedNo`);
  axz.forEach((element) => {
    isValidDeedNo(element);
  });
}
function validatesDeed2(axz) {
  console.log(`selecting isValidDeedNo2`);
  axz.forEach((element) => {
    isValidDeedNo2(element);
  });
}
function validatesDeed3(axz) {
  console.log(`selecting isValidDeedNo3`);
  axz.forEach((element) => {
    isValidDeedNo3(element);
  });
}
// Example function to test
function isValidDeedNo(deedNo) {
  // write the rules in comments
  const rule = /^[0-9]{4}[0-9A-Z]$/;
  return deedNo !== "00000" && rule.test(deedNo);
}
function isValidDeedNo2(deedNo) {
  // Rule 1: Must be exactly 5 characters
  if (!deedNo || deedNo.length !== 5) return false;

  // Rule 3: The first 4 characters must be digits
  for (let i = 0; i < 4; i++) {
    if (!(deedNo[i] >= "0" && deedNo[i] <= "9")) {
      return false;
    }
  }

  // Rule 4: The last character must be a digit or an uppercase letter
  const lastChar = deedNo[4];
  if (
    !(
      (
        (lastChar >= "0" && lastChar <= "9") || // Digit
        (lastChar >= "A" && lastChar <= "Z")
      ) // Uppercase letter
    )
  ) {
    return false;
  }

  // Rule 5: The entire deedNo cannot be "00000"
  if (deedNo === "00000") {
    return false;
  }

  // Passed all rules
  return true;
}
function isValidDeedNo3(deedNo) {
  // Rule 1: Must be exactly 5 characters
  if (!deedNo || deedNo.length !== 5) return false;
  // Rule 5: The entire deedNo cannot be "00000"
  if (deedNo === "00000") return false;
  if (!(deedNo[0] >= "0" && deedNo[0] <= "9")) return false;
  if (!(deedNo[1] >= "0" && deedNo[1] <= "9")) return false;
  if (!(deedNo[2] >= "0" && deedNo[2] <= "9")) return false;
  if (!(deedNo[3] >= "0" && deedNo[3] <= "9")) return false;
  if (
    !(
      (deedNo[4] >= "0" && deedNo[4] <= "9") ||
      (deedNo[4] >= "A" && deedNo[4] <= "Z")
    )
  )
    return false;

  // Passed all rules
  return true;
}
function calculateEstimate(fileName) {
  getFiles(fileName)
    .then((res) => {
      console.log(fileName);
      console.log('ammount of value: '+res.length);
      
      measureExecutionTime(validatesDeed1, res);
      measureExecutionTime(validatesDeed2, res);
      measureExecutionTime(validatesDeed3, res);
    })
    .catch((e) => {
      console.log(e);
    });
}
calculateEstimate("randomStrings.json");
calculateEstimate("validStrings.json");
calculateEstimate("mixedStrings.json");
