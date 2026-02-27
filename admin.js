// menu toggle
document.getElementById("hamburger").onclick = () =>{
  document.getElementById("menu").classList.toggle("show");
};


// data array
let users = [];

// add user
document.getElementById("form").onsubmit = function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let likes = document.getElementById("likes").value;
  let comments = document.getElementById("comments").value;
  let img = document.getElementById("file").value;

  users.push({name,likes,comments,img});

  showUsers();
  this.reset();
};


// show table
function showUsers(){
  let data = "";
  users.forEach((u,i)=>{
    data += `
      <tr>
        <td>${u.name}</td>
        <td>${u.likes}</td>
        <td>${u.comments}</td>
        <td><img src="${u.img}" width="60"></td>
        <td><button onclick="del(${i})">❌</button></td>
      </tr>
    `;
  });

  document.getElementById("userData").innerHTML = data;
}


// delete one
function del(i){
  users.splice(i,1);
  showUsers();
}


// delete all
document.getElementById("deleteAll").onclick = ()=>{
  users=[];
  showUsers();
};