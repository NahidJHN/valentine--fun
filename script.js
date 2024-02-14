const acceptRejectHandler = (answer) => {
  const parenDiv = document.getElementsByClassName("wrapper")[0];
  if (answer === "accept") {
    parenDiv.innerHTML = `<h1>
    Ohuuu!, You accept me, I am very happy
    <img width="100px" src="happy.png" alt="" />
  </h1>
  <div>
    <img width="100%" src="accept.gif" alt="" />
  </div>`;
  } else {
    parenDiv.innerHTML = ` <h1>
    Ohhhhh!, You break my heart,
    <img width="100px" src="sad.png" alt="" />
  </h1>
  <div style="width: 40vw">
    <img width="100%" src="reject.gif" alt="" />
  </div>`;
  }
};
