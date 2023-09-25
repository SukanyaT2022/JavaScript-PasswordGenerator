function generatePassword(){
    var firstName = document.getElementById("fName").value
    var lastName = document.getElementById("lName").value 
    var dob = document.getElementById("DOB").value
    var showPassword = document.getElementById('showPasswordBox');
    //we use slice and position to pick only first 2 letter of name
    //part 1 get first 2 alphabets
    var part1 = firstName.slice(0,2)
    //we get last 2 alphabet of last name
    var l = lastName.length
    var part2 = lastName.slice(l-2)// l-2 means from pick only last 2 character
console.log(dob)
    //we splie date from / is separator s0 3 part 
    //position 0 month - position 1 date- position 2 is year
    var date = dob.split("-")
    var part3 = date[0]
    var part4 = Math.floor(Math.random() * (300 - 100) + 100);
// alert(part1+part2+part3+part4)

showPassword.innerText = part1+part2+part3+part4

}