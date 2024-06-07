import React, { useEffect, useState} from 'react';
import './blogs.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data.docs))
      .catch(error => console.error('Error fetching blogs:', error));

    }, []);

    return (
        <div className="blogs__container">
        <h1 className="blogs__title">Blogs</h1>
        <div className="blogs__list">
          {blogs.map(blog => (
            <div key={blog.id} className="blog__item">
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Blogs;
