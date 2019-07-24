function changeVocals (str) {
    //code di sini
    let result = "";
    let abe = "abefijopuvABEFIJOPUV"
    for (let i = 0; i < str.length; i++) {
        let newStr = "";
        let isVowel = str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U';

        if (isVowel) {
            for (let j = 0; j < abe.length; j++) {
                if (str[i] === abe[j]) {
                    newStr = abe[j+1];
                }
            }
        } else {
            newStr = str[i];
        }
        result += newStr;
    }
    return result;
  }

//   console.log(changeVocals("Sergei DrAgunOv"));
  
  function reverseWord (str) {
    //code di sini
    if (str.length === 0) return "";
    return str[str.length - 1] + reverseWord(str.slice(0, str.length -1));
  }

//   console.log(reverseWord("igun"))

  /**
   * igun     
   * igu    n
   * ig     nu
   * i      nug
   *        nugi
   * 
   */
  
  function setLowerUpperCase (str) {
    //code di sini
    let a = "";

    if (str.length === 0) return "";
    if (str[0] === str[0].toUpperCase()) a = str[0].toLowerCase();
    if (str[0] === str[0].toLowerCase()) a = str[0].toUpperCase();
    return a + setLowerUpperCase(str.slice(1));
  }

//   console.log(setLowerUpperCase("iGuN"))

  /**
   * iGuN
   * GuN       I
   * uN        Ig
   * N         IgU
   *           IgUn
   */
  
  function removeSpaces (str) {
    //code di sini
    let a = "";
    if (str.length === 0) return "";
   
    if (str[0] === " ") a = "";
    else a = str[0];

    return a + removeSpaces(str.slice(1));
  }

//   console.log(removeSpaces("Sergei Dragunov"))
  
  function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) return "Minimal karakter yang diinputkan adalah 5 karakter";

    let vocalChanged = changeVocals(name);
    let wordReversed = reverseWord(vocalChanged);
    let lowerUpperChanged = setLowerUpperCase(wordReversed);
    let spacesRemoved = removeSpaces(lowerUpperChanged);

    return spacesRemoved;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'