async function fetchBlogPosts() {
    try {
        const response = await fetch("https://your-backend-service-url.com/api/blog-posts");
        if (response.ok) {
            const blogPosts = await response.json();
            displayBlogPosts(blogPosts);
        } else {
            throw new Error("Failed to fetch blog posts");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

function displayBlogPosts(blogPosts) {
    const container = document.getElementById("blog-posts-container");

    if (blogPosts.length === 0) {
        container.innerHTML = "<p>No blog posts found.</p>";
        return;
    }

    blogPosts.forEach(post => {
        const postElement = `
            <section class="blog-post">
                <article>
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                </article>
                <aside>
                    <p class="category">Category: ${post.category}</p>
                    <p class="date">Published on: ${post.date}</p>
                </aside>
            </section>
        `;
        container.innerHTML += postElement;
    });
}

fetchBlogPosts();

