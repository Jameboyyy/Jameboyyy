import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import sanityClient from '../sanityClient';
import './blogs.css';

Modal.setAppElement('#root');

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const blogsQuery = `*[_type == "post" && "Blogs" in categories[]->title]{
      _id,
      title,
      publishedAt,
      body
    }`;

    sanityClient.fetch(blogsQuery)
      .then(data => {
        console.log('Fetched Blogs:', data); // Add this line to check if data is fetched correctly
        setBlogs(data);
      })
      .catch(console.error);
  }, []);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div id="blogs__container">
      <h1 className="blogs__title">Blogs</h1>
      <div className="blogs__list">
        {blogs.map(blog => (
          <div key={blog._id} className="blog__item" onClick={() => openModal(blog)}>
            <h2>{blog.title}</h2>
            <p>{new Date(blog.publishedAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
      {selectedBlog && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Blog Details"
          className="modal"
          overlayClassName="overlay"
        >
          <h2>{selectedBlog.title}</h2>
          <p>{new Date(selectedBlog.publishedAt).toLocaleDateString()}</p>
          <div className="modal__content">
            {selectedBlog.body && selectedBlog.body.map((block, index) => (
              <p key={index}>{block.children[0].text}</p>
            ))}
          </div>
          <button onClick={closeModal} className="modal__close-button">Close</button>
        </Modal>
      )}
    </div>
  );
};

export default Blogs;
