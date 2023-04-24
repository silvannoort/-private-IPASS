document.getElementById("blog-post-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const category = document.getElementById("category").value;

    const blogPostData = {
        title,
        content,
        category
    };

    try {
        const response = await fetch("https://your-backend-service-url.com/api/blog-posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blogPostData)
        });

        if (response.ok) {
            alert("Blog post successfully added!");
            document.getElementById("blog-post-form").reset();
        } else {
            throw new Error("Failed to add blog post");
        }
    } catch (error) {
        alert("Error: " + error.message);
            
    
