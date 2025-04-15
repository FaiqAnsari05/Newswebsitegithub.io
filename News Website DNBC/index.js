// Navbar

document.getElementById("nav").innerHTML +=
    `
<div class="logo">DNBC News  
            
        </div>
        <div>

            <nav>

                <ul class="navbar">

                    <li><a href="index.html">Home</a></li>
                    <li><a href="About us.html">About us</a></li>
                    <li><a href="Today.html">Today</a></li>
                    <li><a href="World.html">World</a></li>
                    <li><a href="Sports.html">Sports</a></li>
                    <li><a href="Business.html">Business</a></li>
                    <li><a href="Contact us.html">Contact us</a></li>
                </ul>


            </nav>
        </div>


        <div class="search-box">
            <input type="text" placeholder="Search...">
            <button type="submit">Search</button>

            <a href="#" class="usericon">
    <i class="fa-solid fa-bell"></i>
</a>

<a href="Signup page.html" class="usericon2">
    <i class="fa-solid fa-user"></i>
</a>



        </div>

`




// contact info

function datasave() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("phone", phone)
    localStorage.setItem("message", message)

}


// Footer

document.getElementById("footer").innerHTML +=

    `
 <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="About us.html">About us</a></li>
                <li><a href="Today.html">Today</a></li>
                <li><a href="World.html">World</a></li>
                <li><a href="Sports.html">Sports</a></li>
                <li><a href="Business.html">Business</a></li>
                <li><a href="Contact us.html">Contact us</a></li>
                <li><a href="Privacy Policy.html">Privacy Policy</a></li>
            </ul>
        </nav>



        <div class="social-media">
            <a href="https://www.facebook.com"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.linkedin.com"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.youtube.com"><i class="fa-brands fa-youtube"></i></a>

        </div>

        <p class="copyright">&copy; 2024 <span> Muhammad Faiq</span>. All Rights Reserved.</p>

`



// Signuppage


let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');



signInBtn.addEventListener('click', () => {
    nameField.style.maxHeight = '0'; // Hides the nameField by setting max-height to 0
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});

signUpBtn.addEventListener('click', () => {
    nameField.style.maxHeight = '60px'; // Hides the nameField by setting max-height to 0
    title.innerHTML = 'Sign Up';
    text.innerHTML = 'Forgot password';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
});


// Data save


function datasave() {
    // Get the values from the input fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Save the details to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);



}

// show and hide password

const ShowPassword= document.querySelector("#show-password");
const Password= document.querySelector("#password");


ShowPassword.addEventListener("click", function(){
    this.classList.toggle("fa-eye");
    const type= Password.getAttribute("type")=== "password" ? "text"
    :"password";
    Password.setAttribute("type",type);
})



















