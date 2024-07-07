async function getData() {
  const url = "https://jsonplaceholder.typicode.com/comments";
  try {
    let data = await fetch(url);
    let dataJson = await data.json();
    let tbody = document.querySelector(".tbody");
    console.log(dataJson);
    render(dataJson, tbody);
  } catch {
    console.error("your network is lose");
  }
}

getData();

function render(array, container) {
  console.log("start");
  container.innerHTML = "";
  7;
  console.log(2);
  array.forEach((element) => {
    console.log(3);
    let tr = document.createElement("tr");
    console.log(4);
    let title = element.name.split(" ")[0]
    tr.classList.add(
      "bg-[#F7E7DC]",
      "border-b",
      "flex",
      "w-full",
      "justify-around"
    );
    tr.innerHTML = `
    <td class="py-3 px-4 w-1/3 text-center">${element.id}</td>
    <td class="py-3 px-4 w-1/3 text-center">${element.postId}</td>
    <td class="py-3 px-4 w-1/3 text-center">${title}</td>
  `;
    container.appendChild(tr);
  });
  return;
}
