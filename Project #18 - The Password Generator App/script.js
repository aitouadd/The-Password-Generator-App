const rangeCharacters = document.getElementById("range-char");
const numberCharacters = document.getElementById("number-char");
const formCantainer = document.querySelector("#password-form");
const numberEL = document.querySelector("#number");
const symbolsEL = document.querySelector("#symbols");
const uppercaseEL = document.querySelector("#uppercase");
const passwordDisplay = document.querySelector(".password-display");

     
/* Inserting the Character Codes into arrays
Character Cheatsheet -> https://www.petefreitag.com/cheatsheets/ascii-codes/
*/
// 4
const lowercaseCharCodes = arrayLowToHigh(97, 122);
const numberCharCodes = arrayLowToHigh(48, 57);
const symbolCharCodes = arrayLowToHigh(33, 47)
  .concat(58, 64)
  .concat(91, 96)
  .concat(123,126);
const uppercaseCharCodes = arrayLowToHigh(65, 90);

// 1
rangeCharacters.addEventListener("input" , Thesame);
numberCharacters.addEventListener("input", Thesame);

       function Thesame(e){
           const valuescharacters = e.target.value;
           rangeCharacters.value = valuescharacters;
           numberCharacters.value = valuescharacters;
           
           
       }
    //    2
       formCantainer.addEventListener("submit" ,function(e){
            e.preventDefault();
          const characterAmount = numberCharacters.value;
          const includeNumbers = numberEL.value;
          const includesymbols = symbolsEL.value;
          const includeuppercase = uppercaseEL.value;
          
            const password = generatepassword(
                characterAmount,
               includeNumbers,
               includesymbols,
               includeuppercase
            );
// 6
            passwordDisplay.innerText = password;
       })
// 5
 function generatepassword(characterAmount,includeNumbers,includesymbols,includeuppercase){

    let charcodes = lowercaseCharCodes ;
    if(includeNumbers) charcodes = charcodes.concat(numberCharCodes);
    if(includesymbols) charcodes = charcodes.concat(symbolCharCodes);
    if(includeuppercase) charcodes = charcodes.concat(uppercaseCharCodes);

    const passwordcharacters = [];
    for(let h =0 ; h < characterAmount ; h++){
        let charactercodes = charcodes[Math.floor(Math.random() * charcodes.length)];
        passwordcharacters.push(String.fromCharCode(charactercodes))
    }
    return passwordcharacters.join("");
    };
    // 3
    function arrayLowToHigh(low , high){
        const array = [];
      for(let i = low ; i <= high ; i++){
          array.push(i);
      }
      return array;
    }