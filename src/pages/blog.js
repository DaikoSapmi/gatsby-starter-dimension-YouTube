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

  const script1 = document.createElement('script');
  script1.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
  document.body.appendChild(script1);

  const script2 = document.createElement('script');
  script2.src = "https://mediafiles.botpress.cloud/f8f2e85a-f875-47c1-bc29-905772e262c7/webchat/config.js";
  script2.defer = true;
  document.body.appendChild(script2);

  return (
    <Layout>
      <div className="logo">
            <Link to="/"><img src={pic01} alt="Logo Rune Fjellheim AS" style={{ width: '25%' }}/></Link>
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
    document.body.removeChild(script1);
    document.body.removeChild(script2);
  )
}

export default Blog
