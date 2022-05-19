import { Create } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import "./Feed.css";
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Post from '../posts/Post';
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';
import { selectUser } from '../../features/counter/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';


function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),
        }
      )))
    ))
  }, [])
  
  const sendPost = e => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
          <div className="feed__input">
              <Create />
              <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
          </div>
          <div className="feed__inputOptions">
            <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"  />
            <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"  />
            <InputOption Icon={EventIcon} title="Event" color="#C0CbCD"  />
            <InputOption Icon={EventNoteIcon} title="Write Article" color="#7FC15E"  />
          </div>
      </div>
      <FlipMove>      
        {posts.map(({ id, data: { name, description, message, photoURL}}) => (
          <Post 
            key={id}
            name={name}
            description={description}
            message={message}
            photoURL={photoURL}
          />
        ))}
        </FlipMove>
    </div>
  )
}

export default Feed
