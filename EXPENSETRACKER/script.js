function savetoLocalstorage(event) {
    event.preventDefault();
    
let userDetails = {
    My_Expense_Amount : document.getElementById('amount').value,
    Description: document.getElementById('des').value,
    category :document.getElementById('cat').value 
}

let userDetails_serialized=JSON.stringify(userDetails)  

localStorage.setItem(userDetails.My_Expense_Amount , userDetails_serialized)
showNewUseronScreen(userDetails)


axios.post("https://crudcrud.com/api/2a2e2371d1f848619f1d63f27a465669/user", userDetails).then((response)=>{
//console.log(response)
})
.catch((err)=>{
   // console.log(err)
})}
function showNewUseronScreen(userDetails){
    
const d=document.getElementById('ul')
const li=document.createElement('li')
let data=axios.get("https://crudcrud.com/api/2a2e2371d1f848619f1d63f27a465669/user")

.then((response)=>{
    console.log(response)
   
   
    for(let i=0;i<response.data.length;i++)
    {
  li.innerHTML= `<li id="${userDetails. My_Expense_Amount}"> '${userDetails.My_Expense_Amount}','${userDetails.Description}','${userDetails.category}'
  <button onclick = editUser('${ response.data[i].My_Expense_Amount}','${response.data[i].Description}','${response.data[i].category}')> Edit </button> 
  <button onclick = deleteUserfromApi('${response.data[i]._id}')> Delete </button> 
   </li>`
   d.append(li);
   // showNewUseronScreen(response[i].My_Expense_Amount,response[i].Description,response[i].category);
    }
    })
    .catch((err)=>{
        console.log(err)
    })
}

    
// function showNewUseronScreen(ele1,ele2,ele3){
 
//     const d=document.getElementById('ul')
    //ul .li .li .li ul
//  const li= `<li id="${userDetails. My_Expense_Amount}"> '${userDetails.My_Expense_Amount}','${userDetails.Description}','${userDetails.category}'
//   <button onclick = editUser('${ userDetails.My_Expense_Amount}','${userDetails.Description}','${userDetails.category}')> Edit </button> 
//   <button onclick = deleteUser('${userDetails.My_Expense_Amount}')> Delete </button> 
//    </li>`

// const li= `<li> "${ele1}" '${ele2}','${ele3}'<button onclick = editUser('${ele1}','${ele2}','${ele3}')> Edit </button> 
//   <button onclick = deleteUser('${ele1}')> Delete </button> 
//    </li>`
// d.innerHTML=d.innerHTML + li
// }

function deleteUserfromApi(id)
{
    console.log(id)
axios.delete(`https://crudcrud.com/api/2a2e2371d1f848619f1d63f27a465669/user/${id}`).then((response)=>{
    console.log(response)
     deleteUser(id);
    })
    .catch((err)=>{
        console.log(err)
    })}

function deleteUser(id) {
   const parentNode=document.getElementById('ul')
     const deletechild= document.getElementById('id')
     if(deletechild ){
        parentNode.removeChild(deletechild);
     }
       
    // let child = document.getElementById()
    // let parent=document.getElementById('ul')
    // parent.removeChild(child)
    // localStorage.removeItem(amount)
}



function editUser(amount,description,category) {
document.getElementById('amount').value=amount;// a=b    b=a
document.getElementById('des').value=description;
document.getElementById('cat').value=category;

// deleteUser(amount)

}