// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmiCal = weight / (height * height);
  if (bmiCal <= 18.5) {
    return "Underweight";
  } else if (bmiCal <= 25.0) {
    return "Normal";
  } else if (bmiCal <= 30.0) {
    return "Overweight";
  } else if (bmiCal > 30) {
    return "Obese";
  }
}
