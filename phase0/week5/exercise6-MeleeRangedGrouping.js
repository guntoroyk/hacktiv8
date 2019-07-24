function meleeRangedGrouping (str) {
    //your code here
    let result = [];
    let arrStr = str.split(",")
    // console.log(arrStr)
    //  [  'Razor-Ranged',
    //     'Invoker-Ranged',
    //     'Meepo-Melee',
    //     'Axe-Melee',
    //     'Sniper-Ranged' ]
    let nameAndGroup = []
    for (let i = 0; i < arrStr.length; i++) {
        let temp = arrStr[i].split("-");
        let tempObj = {
            name: temp[0],
            group: temp[1]
        }
        nameAndGroup.push(tempObj);
    }
    // console.log(nameAndGroup)
    //   [ { name: 'Razor', group: 'Ranged' },
    //     { name: 'Invoker', group: 'Ranged' },
    //     { name: 'Meepo', group: 'Melee' },
    //     { name: 'Axe', group: 'Melee' },
    //     { name: 'Sniper', group: 'Ranged' } ]

    let rangedGroup = [];
    let meleeGroup = [];
    for (let i = 0; i < nameAndGroup.length; i++) {
        if (nameAndGroup[i].group === "Ranged") {
           rangedGroup.push(nameAndGroup[i].name);
        } else if (nameAndGroup[i].group === "Melee") {
            meleeGroup.push(nameAndGroup[i].name);
        }
    }
    if (str.length > 1) {
        result.push(rangedGroup);
        result.push(meleeGroup);
    }
    return result;
 }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []