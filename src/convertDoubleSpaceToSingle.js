//Given a string, "convertDoubleSpaceToSingle" returns the passed in string, 
//with all the double spaces converted to single spaces.




const convertDoubleSpaceToSingle = str => {
  let firstString = str.split("  ");
  let returnString = firstString.join(" ");
  return returnString;
};