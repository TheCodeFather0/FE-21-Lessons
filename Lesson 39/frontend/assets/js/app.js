const URL = "http://localhost:3000/users/";
const userContainer = document.getElementById("userContainer");
const addUserForm = document.getElementById("addUserForm");

let users = [];
const getAllUsers = () => {
  userContainer.innerHTML = "";
  axios.get(URL).then(({ data }) => {
    users = data;
    data.forEach(({ id, name, surname, age, src, description }) => {
      userContainer.innerHTML += `<div class="col-12 col-md-6 col-lg-4 my-2">
            <div class="card">
              <div class="card-header">${name} ${surname} - ${age} years old</div>
              <div class="card-body">
                <img class="w-100" src="${src}"/>
               <p>${description}</p>
              </div>

              <div class="card-footer">
                <button class="px-4 btn btn-danger" onclick="deleteUser(${id})">❌</button>
                <button class="px-4 btn btn-warning" onclick="editUser(${id})">🖊</button>
              </div>
            </div>
          </div>`;
    });
  });
};
getAllUsers();

//new user
const postData = (e) => {
  e.preventDefault();
  const nameInputValue = document.getElementById("nameInput").value;
  const surnameInputValue = document.getElementById("surnameInput").value;
  const ageInputValue = document.getElementById("ageInput").value;
  const imgSrcInputValue = document.getElementById("imgSrcInput").value;
  const descriptionInputValue =
    document.getElementById("descriptionInput").value;

  const data = {
    name: nameInputValue,
    surname: surnameInputValue,
    age: ageInputValue,
    src: imgSrcInputValue,
    description: descriptionInputValue,
  };

  axios.post(URL, data).then(({ statusText }) => {
    if (statusText === "Created") {
      Swal.fire({
        title: "Good job!",
        text: "User added!",
        icon: "success",
      });
      document.getElementById("nameInput").value = "";
      document.getElementById("surnameInput").value = "";
      document.getElementById("ageInput").value = "";
      document.getElementById("imgSrcInput").value = "";
      document.getElementById("descriptionInput").value = "";
      getAllUsers();
    }
  });
};
addUserForm.addEventListener("submit", postData);

//delete user
const deleteUser = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(URL + id).then(({ statusText }) => {
        if (statusText === "OK") {
          Swal.fire({
            title: "Deleted!",
            text: "This user has been deleted.",
            icon: "success",
          });
          getAllUsers();
        }
      });
    }
  });
};

// edit user
const editUser = (id) => {
  const editedUser = users.filter((user) => user.id === id);
  const { name, surname, src, age, description } = editedUser[0];
  Swal.fire({
    title: "Edit User",
    html: `
    <label>
        Name: <br />
         <input id="name" class="swal2-input" value="${name}">
    </label>
    <label>
        Surname: <br />
         <input id="surname" class="swal2-input" value="${surname}">
    </label>
    <label>
        Age: <br />
         <input id="age" class="swal2-input" value="${age}">
    </label>
    <label>
        Image Source: <br />
        <input id="src" class="swal2-input" value="${src}">
</label>
    <label>
        Description: <br />
         <input id="description" class="swal2-input" value="${description}">
    </label>
  `,
    focusConfirm: false,
    preConfirm: () => {
      const nameValue = document.getElementById("name").value;
      const surnameValue = document.getElementById("surname").value;
      const ageValue = document.getElementById("age").value;
      const srcValue = document.getElementById("src").value;
      const descriptionValue = document.getElementById("description").value;
      const data = {
          name: nameValue,
          surname: surnameValue,
          src: srcValue,
        age: ageValue,
        description: descriptionValue,
      };

      axios.put(URL + id, data).then(({ statusText }) => {
        if (statusText === "OK") {
          Swal.fire({
            title: "Good job!",
            text: "User edited!",
            icon: "success",
          });
          getAllUsers();
        }
      });
    },
  });
};
