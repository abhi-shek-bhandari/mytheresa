
    let form1 = document.querySelector("#secondform");
    let userData1=JSON.parse(localStorage.getItem("userData")) ||[];
    form1.addEventListener("submit", function(event){
        event.preventDefault();
        let data = {
            email:form1.email.value,
            password:form1.pass.value,
        
        }

        if(checkSignin(data.email,data.password)===true){
            localStorage.setItem("signin",
            JSON.stringify(data));
            alert("Sign in Successful");
            window.location.href="index.html"
        }else{
            alert("Wrong UserName or Password");
        }
    })
    function checkSignin(email,password){
        let filter = userData.filter(function(element){
            return element.email === email &&
            element.password === password;
        })
        if(filter.length>0){
            return true;
        }else{
            return false;
        }
    }