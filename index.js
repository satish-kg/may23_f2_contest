const userList = [
    {
        id:1,
        name:"John",
        age:"18",
        profession:"developer"
    },
    {
        id:2,
        name:"Jack",
        age:"20",
        profession:"developer"
    },
    {
        id:3,
        name:"Karen",
        age:"19",
        profession:"admin"
    }
]
const filterButton = document.getElementById("filter");
const select = document.getElementsByTagName("select")[0];
const container = document.getElementById("cards-container");
const form = document.getElementById("user-form");
function filterUsers(){
    const selectedProfession = select.value;
    if(!selectedProfession){
        alert("Please select a profession");
        return;
    }

    container.innerHTML = '';

    const result = userList.filter((user) => {
        if(user.profession === selectedProfession) return true;
        return false;
    })

    const createParaWithInnerText = (label, value) => {
        const p = document.createElement("p");
        p.innerText = `${label} : ${value}`
        return p;
    }
    result.forEach((user, index) => {
        const div = document.createElement("div");
        div.className = "user-card";
        const p1 = document.createElement("p");
        p1.innerText = (index + 1) + ".";
        let paraList = [p1];
        for(let i in user){
            if(i !== "id"){
                paraList.push(createParaWithInnerText(i, user[i]));
            }
        }
        paraList.forEach((p) => {
            div.appendChild(p);
        })
        container.appendChild(div);
    })
}
function addNewUser(e){
    e.preventDefault();
    const user = {
        name : e.target.name.value,
        age : e.target.age.value,
        profession : e.target.profession.value
    }
    if(user.profession === "developer" || user.profession === "admin"){
        userList.push(user);
        filterUsers();
    }
    filterUsers();
}
filterButton.addEventListener("click", filterUsers);
form.addEventListener("submit", addNewUser);
