function signup(){

    let savedNickname = document.getElementById('Username').value; //vaule 가져온다.
    let savedPassword = document.getElementById('Password').value;
    console.log(savedNickname);
    console.log(savedPassword);

    localStorage.setItem("userNickname",savedNickname);
    localStorage.setItem("userPassword",savedPassword);
    
}

signup();