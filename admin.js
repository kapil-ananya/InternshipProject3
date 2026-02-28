document.addEventListener("DOMContentLoaded", function () {

  const modalEl = document.getElementById("myModal");
  const form = document.getElementById("form");
  const deleteAllBtn = document.getElementById("deleteAll");
  const userData = document.getElementById("userData");

  let users = [];

  // 🔹 When modal closes → focus back to Add User button
  modalEl.addEventListener("hidden.bs.modal", function () {
    const triggerBtn = document.querySelector('[data-bs-target="#myModal"]');
    if (triggerBtn) {
      triggerBtn.focus();
    }
  });

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let likes = document.getElementById("likes").value;
  let comments = document.getElementById("comments").value;
  let img = document.getElementById("file").value;

  users.push({ name, likes, comments, img });

  showUsers();
  form.reset();

  document.activeElement.blur();  // remove focus from Save button

  const modal = bootstrap.Modal.getInstance(modalEl);
  modal.hide();
});

  // 🔹 Show Users in table
  function showUsers() {
    let data = "";

    users.forEach((u, i) => {
      data += `
        <tr>
          <td>${u.name}</td>
          <td>${u.likes}</td>
          <td>${u.comments}</td>
          <td><img src="${u.img}" width="60"></td>
          <td>
            <button class="btn btn-sm btn-danger" onclick="delUser(${i})">
              close
            </button>
          </td>
        </tr>
      `;
    });

    userData.innerHTML = data;
  }

  // 🔹 Delete One
  window.delUser = function (i) {
    users.splice(i, 1);
    showUsers();
  };

  // 🔹 Delete All
  deleteAllBtn.addEventListener("click", function () {
    users = [];
    showUsers();
  });

});