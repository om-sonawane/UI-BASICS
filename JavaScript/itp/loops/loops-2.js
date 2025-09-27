function Getgrade(score) {
  if (score >= 90) {
    return "A+";
  } else if (score >= 80) {
    return "A";
  } else if (score >= 70) {
    return "B+";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 50) {
    return "C+";
  } else if (score >= 40) {
    return "C";
  } else if (score >= 33) {
    return "D";
  } else {
    return "F";
  }


}
  console.log(Getgrade(78));