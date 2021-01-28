document.addEventListener("DOMContentLoaded", function () {
  let container = document.createElement("div");
  container.className = "header-container";
  document.body.appendChild(container);

  let h1 = document.createElement("h1");
  h1.appendChild(document.createTextNode("This is an h1"));
  h1.className = "h1";
  container.appendChild(h1);

  let h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode("This is an h2"));
  h2.className = "h2";
  container.appendChild(h2);

  let h3 = document.createElement("h3");
  h3.appendChild(document.createTextNode("This is an h3"));
  h3.className = "h3";
  container.appendChild(h3);

  let h4 = document.createElement("h4");
  h4.appendChild(document.createTextNode("This is an h4"));
  h4.className = "h4";
  container.appendChild(h4);

  let h5 = document.createElement("h5");
  h5.appendChild(document.createTextNode("This is an h5"));
  h5.className = "h5";
  container.appendChild(h5);

  let h6 = document.createElement("h6");
  h6.appendChild(document.createTextNode("This is an h6"));
  h6.className = "h6";
  container.appendChild(h6);

  let headings = [h1, h2, h3, h4, h5, h6];

  headings.forEach((heading) => {
    heading.addEventListener("dblclick", function () {
      let colors = [
        "blue",
        "green",
        "red",
        "purple",
        "orange",
        "yellow",
        "beige",
        "white",
      ];

      let randomNum = Math.floor(Math.random() * colors.length);

      heading.style.color = colors[randomNum];
    });
  });

  let listBtn = document.getElementsByClassName("li-btn")[0];
  let liNum = 1;
  listBtn.addEventListener("click", function () {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("This is list item " + liNum));
    container.appendChild(li);

    li.addEventListener("click", function () {
      let colors = [
        "blue",
        "green",
        "red",
        "purple",
        "orange",
        "yellow",
        "beige",
        "white",
      ];

      let randomNum = Math.floor(Math.random() * colors.length);

      li.style.color = colors[randomNum];
    });

    li.addEventListener("dblclick", function(){
        li.remove()
    })
    liNum++;
  });
});
