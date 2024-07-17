const editButton = document.querySelectorAll("#editBtn");
editButton[0].addEventListener("click", editButtonHandler);


const deleteButton = document.querySelectorAll("#deleteBtn");
deleteButton[0].addEventListener("click", deletePostHandler);


async function deletePostHandler(event) {
    event.preventDefault();

    let blogPostId = event.target.getAttribute("data-id");
    const response = await fetch(`/api/posts/${blogPostId}`, {
        method: "DELETE",
    });

    if (response.ok) {
        document.location.assign(`/dashboard`);
    } else {
        alert(response.statusText);
    }
};

async function editButtonHandler(event) {
    event.preventDefault();

    const title = document.querySelector("#titleInput").value.trim();
    const content = document.querySelector("#bodyInput").value.trim();

    var response;

    let blogPostId = event.target.getAttribute("data-id");

    if (title && content) {
        response = await fetch(`/api/posts/${blogPostId}`, {
            method: "PUT",
            body: JSON.stringify({
                title,
                content: content,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            alert(response.statusText);
        }
        else {
            document.location.assign("/dashboard");
        }
    }
}