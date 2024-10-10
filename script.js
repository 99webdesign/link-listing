document.addEventListener("DOMContentLoaded", () => {
    const blogs = [
        { title: "How Website Design Helps Business", url: "https://99webdesign.net/blog" },
        { title: "Learn WordPress for Free", url: "https://riteshacademy.com/blog" },
        { title: "Best Practices of SEO in Website Designing", url: "https://riteshacademy.com/blog" }
    ];

    const blogList = document.getElementById('blog-list');

    blogs.forEach(blog => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');
        listItem.innerHTML = `<a href="${blog.url}" target="_blank">${blog.title}</a>`;
        blogList.appendChild(listItem);
    });
});
