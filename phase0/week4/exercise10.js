function changeMe(arr) {
    // you can only write your code here!
    
    for (let i = 0; i < arr.length; i++) {
        let myObj = new Object();
        let firstName = arr[i][0];
        let lastName = arr[i][1];
        let gender = arr[i][2];
        let birth = arr[i][3];

        
        myObj.firstName = firstName;
        myObj.lastName = lastName;
        myObj.gender = gender;
        
        
        if (birth === undefined || birth > 2019) {
            myObj.age = 'Invalid Birth Year';
        } else {
            myObj.age = 2019 - birth;
        }
        
        console.log(i + 1 + ". " + firstName + " " + lastName + ":");
        console.log(myObj);

    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""