import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import pic01 from '../images/pic01logo.png';
import postsData from '../images/posts.json';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    setPosts(postsData);
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

  const findPostTitleById = (postId) => {
    const post = posts.find(post => post.id === postId);
    return post ? post.title : '';
  }

  return (
    <Layout>
      <div className="logo">
        <span className="image main">
            <Link to="/"><img src={pic01} alt="Logo Rune Fjellheim AS" style={{ width: '30%' }}/></Link>
        </span>
      </div>
      <h1>{currentPost.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginRight:'70px' }}>
        {currentPost.previousId && (
          <Link to="#" onClick={() => goToPost(currentPost.previousId)} style={{ float: 'left' }}>
            {findPostTitleById(currentPost.previousId)}
          </Link>
        )}
        {currentPost.nextId && (
          <Link to="#" onClick={() => goToPost(currentPost.nextId)} style={{ float: 'right' }}>
            {findPostTitleById(currentPost.nextId)}
          </Link>
        )}
      </div>
    </Layout>
  )
}

export default Blog
