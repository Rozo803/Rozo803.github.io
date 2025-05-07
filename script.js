// Sample blog post data
const posts = [
    {
        id: 1,
        title: "Welcome to My Blog!",
        date: "May 07, 2025",
        summary: "This is the first post on my blog!",
        content: `<p>Excited to start this journey. I'll be sharing updates, insights, and more!</p>`
    },
    {
        id: 2,
        title: "Learning JavaScript",
        date: "May 06, 2025",
        summary: "Let's explore the basics of JavaScript.",
        content: `<p>JavaScript helps make websites dynamic! Variables, loops, and event listeners make things interactive.</p>`
    }
];

// Display list of posts
function displayPosts() {
    const postsSection = document.getElementById("posts");
    postsSection.innerHTML = "";

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.date}</p><p>${post.summary}</p>`;
        postElement.addEventListener("click", () => showPost(post.id));
        postsSection.appendChild(postElement);
    });
}

// Show a specific blog post
function showPost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        document.getElementById("posts").classList.add("hidden");
        document.getElementById("post-content").classList.remove("hidden");

        document.getElementById("postTitle").innerText = post.title;
        document.getElementById("postDate").innerText = post.date;
        document.getElementById("postBody").innerHTML = post.content;
    }
}

// Show posts list again
function showPostsList() {
    document.getElementById("post-content").classList.add("hidden");
    document.getElementById("posts").classList.remove("hidden");
}

// Add event listener for back button
document.getElementById("backBtn").addEventListener("click", showPostsList);

// Load posts when the page is ready
document.addEventListener("DOMContentLoaded", displayPosts);