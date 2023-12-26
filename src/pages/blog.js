import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import pic01 from '../images/pic01logo.png'


// Assuming the name of your JSON file is posts.json
import postsData from '../images/posts.json';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    // Load your posts data here
    setPosts(postsData);
    // Set the first post as the current post
    if(postsData.length > 0) {
      setCurrentPost(postsData[0]);
    }
  }, []);

  const goToPost = (postId) => {
    const post = posts.find(post => post.id === postId);
    if(post) {
      setCurrentPost(post);
    }
  }

  if(!currentPost) return <p>Loading...</p>;

  return (
    <Layout>
    <div className="logo">
    <span className="image main">
            <img src={pic01} alt="Logo Rune Fjellheim AS" style={{ width: '60%' }}/>
          </span>
    </div>
      <Link to="/">Go back to the homepage</Link>
      <h1>{currentPost.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        {currentPost.previousId && (
          <Link to="#" onClick={() => goToPost(currentPost.previousId)} style={{ float: 'left' }}>Previous Post</Link>
        )}
        {currentPost.nextId && (
          <Link to="#" onClick={() => goToPost(currentPost.nextId)} style={{ float: 'right' }}>Next Post</Link>
        )}
      </div>
    </Layout>
  )
}

export default Blog