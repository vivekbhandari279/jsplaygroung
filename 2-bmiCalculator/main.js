const reset = document.querySelector("#reset");
const age = document.querySelector("#age");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const male = document.querySelector("#male");

reset.addEventListener("click", function (e) {
  age.value = 2;
  height.value = "";
  weight.value = "";
  male.checked = true;
});

const result = document.querySelector("#calculate_bmi");
const resultValue = document.querySelector("#result");
const resultTag = document.querySelector("#result_tag");
const resultBox = document.querySelectorAll(".result_box");

result.addEventListener("click", function (e) {
    
    if ((age.value.length > 0) && (height.value.length > 0) && (weight.value.length > 0)) {
        const totalHeight = Number (height.value)/100;
        const bmi = (weight.value)/(totalHeight*totalHeight);

        console.log(resultBox);
        resultBox.forEach((box) => {box.style.display = "block"});

        resultValue.innerText = bmi.toFixed(2);
        const resulttagValue =  `${classifyBMI(bmi)}`;
        resultTag.innerHTML = resulttagValue;
    } else {
        alert("All fields are mendatory");
    }
});

// BMI Classification based on ranges
function classifyBMI(bmi) {
    let classification = "";
    
    switch (true) {
        case bmi < 16:
            classification = "Severe Thinness";
            break;
        case bmi >= 16 && bmi < 17:
            classification = "Moderate Thinness";
            break;
        case bmi >= 17 && bmi < 18.5:
            classification = "Mild Thinness";
            break;
        case bmi >= 18.5 && bmi < 25:
            classification = "Normal";
            break;
        case bmi >= 25 && bmi < 30:
            classification = "Overweight";
            break;
        case bmi >= 30 && bmi < 35:
            classification = "Obese Class I";
            break;
        case bmi >= 35 && bmi < 40:
            classification = "Obese Class II";
            break;
        default:
            classification = "Obese Class III";
            break;
    }
    
    return classification;
}