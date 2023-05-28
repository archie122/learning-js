function bmi(weight, height) {
    bmi_index = weight / (height * height);    

    if (bmi_index <= 18.5) {
        return "Underweight";
    } else if(bmi_index <= 25.0 ){
        return "Normal";
    } else if(bmi_index <= 30.0){
        return "Overweight";
    } else {
        return "Obese";
    }
}

console.log(bmi(75, 1.75));