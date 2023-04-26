let allMemo = JSON.parse(localStorage.getItem("allMemo"));
allMemo = allMemo ?? [];
render();

function saveNote() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    allMemo.push({ title, content, len: allMemo.length });

    localStorage.setItem("allMemo", JSON.stringify(allMemo));
    render();

    document.getElementById("title").value = ""
    document.getElementById("content").value = ""
}

function render() {
    const display = document.getElementById("display");
    display.innerHTML = "";

    for (const item of allMemo) {
        const titleBox = document.createElement("div");
        const saveTitle = document.createElement("h2");
        const saveContent = document.createElement("p");
        const saveId = document.createElement("p");
        const deleteMemoBtn = document.createElement("button");

        saveTitle.textContent = item.title;
        saveContent.textContent = item.content;
        saveId.textContent = item.len + 1;
        deleteMemoBtn.textContent = "Delete";
        deleteMemoBtn.setAttribute("id", item.len);
        deleteMemoBtn.setAttribute("onclick", "remove()");

        display.appendChild(titleBox);
        // titleBox.appendChild(saveId);
        titleBox.appendChild(saveTitle);
        display.appendChild(saveContent);
        display.appendChild(deleteMemoBtn);

    }
}

function remove() {
    const idx = allMemo.find(
        (item) => item.len == event.srcElement.id
    );
    if (idx) {
        allMemo.splice(
            allMemo.findIndex((item) => item.len == idx.len),
            1
        );
    }
    localStorage.setItem("allMemo", JSON.stringify(allMemo));
    render();
}