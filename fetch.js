const text = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(response);
  let result = await response.json();
  console.log(result[10].body);
};

text();

let data = {
  id: 0,
  body: "lorem",
};

console.log(data.body);
