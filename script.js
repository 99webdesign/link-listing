document.addEventListener("DOMContentLoaded", () => {
    const blogs = [
        { title: "How Website Design Helps Business", url: "https://99webdesign.net/blog" },
        { title: "Best Practices in Website SEO", url: "https://99webdesign.net/blog" },
        { title: "Why Responsive Design Matters", url: "https://99webdesign.net/blog" },
        { title: "Advanced Digital Marketing Quiz", url: "https://riteshacademy.com/blog" },
        { title: "Digital Marketing Strategies", url: "https://riteshacademy.com/blog" },
        { title: "Learn WordPress Basics", url: "https://riteshacademy.com/blog" },
        { title: "Why Blogging is Important", url: "https://riteshacademy.com/blog" }
    ];

    const blogList = document.getElementById('blog-list');

    blogs.forEach(blog => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');
        listItem.innerHTML = `<a href="${blog.url}" target="_blank">${blog.title}</a>`;
        blogList.appendChild(listItem);
    });
});
