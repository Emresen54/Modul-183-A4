const initializeAPI = async (app) => {
  app.post("/api/login", login);
  app.get("/api/posts", getPosts);
  db = await initializeDB();
};


const login = async (req, res) => {
  const { username, password } = req.body;

  const answer = `
    <h1>Answer</h1>
    <p>Username: ${username}</p>
    <p>Password: ${password}</p>
  `;

if (input) {
return res.status(400).send(
input.error.issues.map(({ message }) => {
return { message };
})
);
}


  res.send(answer);
};

const getPosts = (req, res) => {
  const posts = [
    {
      id: 1,
      title: "Introduction to JavaScript",
      content:
        "JavaScript is a dynamic language primarily used for web development...",
    },
    {
      id: 2,
      title: "Functional Programming",
      content:
        "Functional programming is a paradigm where functions take center stage...",
    },
    {
      id: 3,
      title: "Asynchronous Programming in JS",
      content:
        "Asynchronous programming allows operations to run in parallel without blocking the main thread...",
    },
  ];
  res.send(posts);
};

export default initializeAPI;
