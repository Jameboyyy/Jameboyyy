import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './blogs.css';

Modal.setAppElement('#root'); // Set the app root for accessibility

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const apiUrl = process.env.REACT_APP_PAYLOAD_API_URL;

    useEffect(() => {
        console.log('REACT_APP_PAYLOAD_API_URL:', apiUrl);
        if (apiUrl) {
            fetch(`${apiUrl}/posts`)
                .then(response => response.json())
                .then(data => {
                    console.log('Fetched Blogs:', data.docs);
                    setBlogs(data.docs);
                })
                .catch(error => console.error('Error fetching blogs:', error));
        } else {
            console.error('API URL is not defined');
        }
    }, [apiUrl]);

    const openModal = (blog) => {
        setSelectedBlog(blog);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedBlog(null);
    };

    return (
        <div className="blogs__container">
            <h1 className="blogs__title">Blogs</h1>
            <div className="blogs__list">
                {blogs.map(blog => (
                    <div key={blog.id} className="blog__item" onClick={() => openModal(blog)}>
                        <h2>{blog.title}</h2>
                        <p>{new Date(blog.publishedAt).toLocaleDateString()}</p>
                        {blog.hero && blog.hero.richText && blog.hero.richText.map((block, index) => (
                            <p key={index}>{block.children[0].text}</p>
                        ))}
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
                        {selectedBlog.layout && selectedBlog.layout.map((block, index) => (
                            <div key={index}>
                                {block.blockType === 'content' && block.columns.map((column, colIndex) => (
                                    <div key={colIndex}>
                                        {column.richText && column.richText.map((textBlock, textIndex) => (
                                            <p key={textIndex}>{textBlock.children[0].text}</p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <button onClick={closeModal} className="modal__close-button">Close</button>
                </Modal>
            )}
        </div>
    );
};

export default Blogs;
