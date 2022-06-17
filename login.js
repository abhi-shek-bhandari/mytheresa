let form = document.querySelector("#firstform");
   let userData=JSON.parse(localStorage.
   getItem("userData"))||[];
   form.addEventListener("submit", function(event){
       event.preventDefault(); 
       let data ={
           fname:form.fname.value,
           lname:form.lname.value,
           email:form.email.value,
           password:form.password.value,
       }
       console.log(data)
       if(checkEmails(data.email)===true){
           userData.push(data);
           localStorage.setItem("userData",
           JSON.stringify(userData));
       }else{
           alert("Account Already Exists")
       }
   })

   function checkEmails(email){
       let filtered = userData.filter(function(element){
           return email === element.email;
       })
       if(filtered.length >0){
           return false;
       }else{
           return true;
       }
   }
   