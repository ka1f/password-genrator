const lengthp = document.querySelector(" .inputlength");
const uppercase = document.querySelector("#inputuppercase");
const lowercase = document.querySelector("#inputlowercase");
const numbers = document.querySelector("#inputnumbers");
const symbols = document.querySelector("#inputsymbols");
const genrate = document.querySelector(".btn");
const placehd = document.querySelector(".placehd");
const copybtn = document.querySelector(".copy");
const checkbox= document.querySelectorAll(".checkbox");

const uppercasestr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercasestr = "abcdefghijklmnopqrstuvwxyz";
const numbersstr = "01234567890123456789";
const symbolstr = "!@#$%^&*()_+";
str = "";

genrate.addEventListener("click", () => {
    if (!uppercase.checked && !lowercase.checked && !numbers.checked && !symbols.checked) {
        alert("Please select atleast one option for STRONG PASSWORD");
        return;
    }
    if (uppercase.checked) {
        str  += uppercasestr;
    }
    if (lowercase.checked) {
        str += lowercasestr;
    }
    if (numbers.checked) {
        str += numbersstr;
    }
    if (symbols.checked) {
        str += symbolstr;
    }
    let password = "";
    for (let i = 0; i < lengthp.value; i++) {
       let index = Math.floor(Math.random() * str.length);
       password += str.charAt(index);
       console.log(str.length);
    //    console.log(str[index]);
    //    console.log(str);
    }
    placehd.value = password;
    
});
    
copybtn.addEventListener('click', () => {
    navigator.clipboard.writeText(placehd.value)
        .then(() => {
            alert("Content copied to clipboard!");
        })
});