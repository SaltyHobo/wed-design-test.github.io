/*
Return true if the passed string looks like a valid US phone number.
The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
*/

// second attempt, easier to comprehend.
function telephoneCheck(str) {
  //conditions
  let tenDigit = false;
  let elevenDigit = false;
  let startOne = false;
  let permitChars = false;
  let correctParentheses = false;
  // check
  if (str.match(/\d/g).length == 10) {
    tenDigit = true
  };
  if (str.match(/\d/g).length == 11) {
    elevenDigit = true;
    if (str.match(/\d/g)[0] == 1) {
      startOne = true;
    }
  }
  if (!/[^()0-9- ]/.test(str)) {
    permitChars = true;
  }
  if (str.match(/\d/g).length == 10) {
    if (str.length == 10) {
      correctParentheses = true;
    } else if (str.length == 12) {
      if (str[3]
      && str[7] == "-") {
        correctParentheses = true;
      } else if (str[3]
      && str[7] == " ") {
        correctParentheses = true;
      }
    } else if (str.length == 13) {
      if (str[0] == "("
      && str[4] == ")") {
        correctParentheses = true;
      }
    }
  }
  else if (str.match(/\d/g).length == 11) {
    if (str.match(/\d/g)[0] == 1) {
      if (str[1] == " "
      && str[5] == " ") {
        correctParentheses = true;
      } else if (str[1] == " "
      && str[5] == "-") {
        correctParentheses = true;
      } else if (str[1] == " "
      && str[2] == "("
      && str[6] == ")"
      && str[7] == " ") {
        correctParentheses = true;
      }
      else if (str[1] == "("
      && str[5] == ")") {
        correctParentheses = true;
      }
    }
  }
  //results
  if (!tenDigit && !elevenDigit) {
    console.log("false: doesn't have correct number of digits");
    return false;
  } else if (!permitChars || !correctParentheses) {
    console.log("false: has nonpermitted characters or incorrect parentheses");
    return false;
  } else if (elevenDigit && !startOne) {
    console.log("false: 11 digits but doesn't start with '1'")
    return false;
  } else {
    console.log("true")
    return true;
  }
}

// tests:
telephoneCheck("555-555-5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("5555555555");
telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("555-5555");
telephoneCheck("5555555");
telephoneCheck("1 555)555-5555");
telephoneCheck("1 555 555 5555");
telephoneCheck("1 456 789 4444");
telephoneCheck("123**&!!asdf#");
telephoneCheck("55555555");
telephoneCheck("(6054756961)");
telephoneCheck("2 (757) 622-7382");
telephoneCheck("0 (757) 622-7382");
telephoneCheck("-1 (757) 622-7382");
telephoneCheck("2 757 622-7382");
telephoneCheck("10 (757) 622-7382");
telephoneCheck("27576227382");
telephoneCheck("(275)76227382");
telephoneCheck("2(757)6227382");
telephoneCheck("2(757)622-7382");
telephoneCheck("555)-555-5555");
telephoneCheck("(555-555-5555");
telephoneCheck("(555)5(55?)-5555");
