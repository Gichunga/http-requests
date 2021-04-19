const posts = [
  { title: "Post One", body: "Post One Body" },
  { title: "Post Two", body: "Post Two Body" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

async function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 1000);
}

async function init() {
  await createPost({ title: "Post Three", body: "This is post thre body" });
  getPosts();
}

//===================
/*async/await/fetch*/
//===================
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = res.json();
  console.log(data);
}

fetchUsers();
