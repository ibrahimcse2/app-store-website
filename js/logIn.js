// variable declaration 
const userName = document.getElementById('username')
const userPassword = document.getElementById('password')
const mentorName = ['creativeit','creativeitinstitute','creativeituttara','creativeitdhammondi','creativeitchattogram','Md Mehedi Hasan'] 
const mentorPassword = ['creativeit','creativeitinstitute','01624666000','01624888444','01990779999','01913382360']

// logIn button function 
function logInFunction(){
    // create incorrect message 
    let div = document.createElement('div')
    div.classList.add('incpassword')
    // filter Array Name
    findMentorByName = mentorName.filter(function(item){
        return item == userName.value
    })
    // filter Array password
    spcfcPasswordMentor = mentorPassword.filter(function(item){
        return item == userPassword.value
    })

    if(userName.value == findMentorByName && userPassword.value == spcfcPasswordMentor){
        window.location.href = 'pages/home.html'
    }else if(userName.value != findMentorByName && userPassword.value != spcfcPasswordMentor){
        div.innerHTML = 'your name & password is incorrect'
        incorrectPassFun(userName,div)
        incorrectPassFun(userPassword,div)
    }
    else if(userName.value != findMentorByName){
        div.innerHTML = 'your name is incorrect'
        incorrectPassFun(userName,div)
        incorrectPassFun(userPassword,div)
    }else if(userPassword.value != spcfcPasswordMentor){
        div.innerHTML = 'your password is incorrect'
        incorrectPassFun(userName,div)
        incorrectPassFun(userPassword,div)
    }
    // incorrect messge append 
    document.getElementById('formItem').appendChild(div)
}
// password Show
function passwordShow(){
    userPassword.type = 'text'
}
// password hide
function passwordHide(){
    userPassword.type = 'password'
}
// incorrect message 
function incorrectPassFun(inputField,inctext){
    inputField.addEventListener('click',function(){
        inctext.innerHTML = ''
    })
}
// sign Up pop up 
const signup = document.getElementById('newAccount')
signup.addEventListener('click',function(){
    // create popup
    popup = document.createElement('div')
    popup.classList.add('popup')
    popup.innerHTML = `
<section id="signUp">
    <div class="container">
        <div class="row m-0">
            <div class="main p-0 d-flex align-items-center justify-content-center">
                <div class="item w-100">
                    <div class="head top w-100">
                        <button onclick="closepopup()"><i class="fa-solid fa-xmark"></i></button>
                        <h3>Sign Up</h3>
                        <p class="m-0">It's quick and easy.</p>
                    </div>
                    <div class="form w-100">
                        <div class="name my-3">
                            <input type="text" required placeholder="First Name">
                            <input type="text" required placeholder="Surename">
                        </div>
                        <div class="contctandpass my-3">
                            <input type="text" class="w-100 mb-2" required placeholder="Mobile number or email address">
                            <input type="text" class="w-100" required placeholder="New Password">
                        </div>
                        <div class="date">
                            <label for="date" class="d-block">Date Of Birth ?</label>
                            <input type="date" class="w-100" id="date">
                        </div>
                        <label for="gender" class="d-block mt-3 mb-1">Gender?</label>
                        <div class="gender">
                            <span>
                                <label for="male" >Male </label>
                                <input type="radio" id="male" name="gender">
                            </span>
                            <span>
                                <label for="female" >Female </label>
                                <input type="radio" id="female" name="gender">
                            </span>
                            <span>
                                <label for="other" >Other</label>
                                <input type="radio" id="other" name="gender">
                            </span>
                        </div>
                        <div class="privacy mt-3">
                            <p>People who use our service may have uploaded your contact information to pageName. <a href="#">Learn more</a>.</p>
                            <p>By clicking Sign Up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.                                </p>
                        </div>
                        <input type="submit" class="w-100 mb-4 submit" value="Submit">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`
// incorrect message append 
    document.getElementById('body').appendChild(popup) 
})
// closing sign up popup 
function closepopup(){
    document.getElementById('body').removeChild(popup)
}