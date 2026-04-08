let users = []
let firstName ; 
let middleName
let lastName
let department; 
const handlechange = () => {
   //const inputField = {} ;  
   firstName = document.getElementById("firstname").value; 
   middleName = document.getElementById("middlename").value; 
   lastName = document.getElementById("lastname").value; 
}; 
const handleSubmit = () => { 
department = document.getElementById('departmentSelect').value; 
const inputField = {}
inputField.firstName = firstName; 
inputField.middleName = middleName; 
inputField.lastName = lastName; 
inputField.department = department; 
users.push(inputField); 
console.log(users); 
const result = document.getElementById('result')
 alert(department); 
result.innerHTML = JSON.stringify(users);
}
