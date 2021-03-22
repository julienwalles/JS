var languagesArrayCreation = function () {
  
  var languages = ["Html","CSS","Java","PHP"];
    return languages;

}

var numbersArrayCreation = function () {
  var number = [0, 1, 2, 3, 4, 5]
    return number;
}

var ElementReplacement = function (languages) {
  languages[2] = "Javascript";
    return languages;
}

var AddElementToLanguagesArray = function (languages) {
  languages.push("Ruby", "Python");
  return languages ;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-2, -1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  languages.shift();
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.pop()
  return languages;
}

var stringToArray = function (socialMediaInString) {
  var x = socialMediaInString.split(",");
  return x;
}

var arrayToString = function (languages) {
  var x = languages.toString();
  return x ;
}

var arraySort = function (socialMedia) {
  var x = socialMedia.sort();
  return x ;
}

var arrayInvert = function (languages){
  var x = languages.reverse();
  return x ;
}
