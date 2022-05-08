window.onload = function () {
    document.getElementById("btn").onclick = function () {
        const string1 = document.querySelector('input').value
        if (string1 != '') {
            var intext = document.createElement("p");
            intext.className = "from-me"

            intext.innerHTML = string1;
            document.querySelector('input').value = ''

            var body1 = document.getElementById("container");
            var body2 = (body1.getElementsByClassName("imessage")[0])
            
            
            body2.appendChild(intext);
            good_response()
    
        }

    }
    var input = document.getElementById("myInput");

    // Execute a function when the user presses a key on the keyboard
    input.addEventListener("keypress", function (event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("btn").click();
        }
    })
}

function good_response(){
    var intext = document.createElement("p");
    intext.className = "from-them"
    const items = ["Im so sorry you had to experience that" , "you didn't deserve that, and you deserve support now", "I want you to know youre not alone",
]
    var item = items[Math.floor(Math.random()*items.length)];
    intext.innerHTML = item;

    var body1 = document.getElementById("container");
    var body2 = (body1.getElementsByClassName("imessage")[0])
    body2.appendChild(intext);
}
