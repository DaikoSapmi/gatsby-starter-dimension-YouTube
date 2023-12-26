import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// Assuming the name of your JSON file is posts.json
import postsData from '../imagges/posts.json';

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
      <h1>{currentPost.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
      {currentPost.previousId && (
        <Link to="#" onClick={() => goToPost(currentPost.previousId)}>Previous Post</Link>
      )}
      {currentPost.nextId && (
        <Link to="#" onClick={() => goToPost(currentPost.nextId)}>Next Post</Link>
      )}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Blog
