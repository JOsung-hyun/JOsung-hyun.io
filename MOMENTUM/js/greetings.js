const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// const link = document.querySelector("a")


function onLoginSubmit(event) {
    // 아래의 function은 addEventListener 함수의 첫번째 argument(event) 안에 있는 function이다.
    // JS는 첫번째 argument로 발생된 event에 대한 정보를 준다. 필요없다면 비워둬도 괜찮다.
    // event로 작성하는게 일반적인 관행이다.
    event.preventDefault(); // preventDefault()는 브라우저의 기본동작(form의 기본동작은 submit)을 막는 function이다.
    loginForm.classList.add(HIDDEN_CLASSNAME)
        // const username = loginInput.value;
    const typedUsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY, typedUsername);
    // greeting.innerText = "Hello" + username;
    // 위의 방법을 아래와 같이 합칠 수 있다.
    paintGreetings(typedUsername)

}

loginForm.addEventListener("submit", onLoginSubmit)
    // addEventListener를 할때, function(onLoginSubmit)에 ()를 추가하지 않는 것은 바로 자동으로 실행되는 것을 원치 않기 때문이다.
    // "submit"이라는 이벤트가 발생했을 때 실행되길 원한다. 
    // form의 submit이후 새로고침은 브라우저의 기본동작이다.

// onLoginSubmit() // ()안의 브라우저 내의 event에서 정보를 잡아내서 onLoginSubmit function을 실행한다.

// function handleLinkClick(event) {
//     event.preventDefault();
//     console.dir(event)
//     alert("clicked!")
// }
// a 태그의 기본동작은 link된 페이지로 이동하는 것인데, handleLinkClick로 alert를 이용해서 기본동작을 막고 있다.
// ** addEventListener 안에 있는 함수는 직접 실행하지 않는다. 브라우저가 실행하면서 안에 정보를 담고 있다.
// link.addEventListener("click", handleLinkClick)

function paintGreetings(username) {
    greeting.innerText = `"hello, ${username}!"`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}


const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername)

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername)
}