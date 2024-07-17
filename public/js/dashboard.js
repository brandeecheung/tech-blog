async function submitButtonHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#titleInput").value.trim();
  const content = document.querySelector("#bodyInput").value.trim();

  var response;

  if (title && content) {
    response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        title,
        content: content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  if (!response.ok) {
    alert(response.statusText);
  }
  else {
    document.location.assign("/dashboard");
  }
}

// Event Listener
document
  .querySelector(".createBlogPost")
  .addEventListener("submit", submitButtonHandler);