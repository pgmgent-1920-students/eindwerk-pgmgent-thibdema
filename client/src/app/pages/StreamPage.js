import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { useAuth, useFirestore } from '../services';
import * as Routes from '../routes';
import BotIMG from '../images/bot.png'

const StreamPage = () => {
  const {currentUser} = useAuth();
  const {getGenres, addLivestream} = useFirestore();

  const [genres, setGenres] = useState(false);
  const [inputData, setInputData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGenres();
      setGenres(data);
    }

    fetchData();    
  }, [getGenres]);

  const convertDate = (date) => {
    const newDate = Date.parse(date);
    return newDate;
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = document.querySelector('form');
    let formData = new FormData(form);
    const data = {
      title: formData.get('title'),
      iframe: formData.get('embeddedLink'),
      thumbnail: formData.get('thumbnailLink'),
      genre: formData.get('genre'),
      description: formData.get('description'),
      startDate: convertDate(formData.get('startDate')),
      expirationDate: convertDate(formData.get('expirationDate')),
      owner: currentUser.displayName,
      ownerID: currentUser.uid,
      ownerThumbnail: currentUser.photoURL,
      chat: [
        {
          message: 'The chat has started',
          created_At: Date.now(),
          displayName:  'Corona-BOT',
          ownerThumbnail: BotIMG,
          userID: currentUser.uid
        }
      ]
    };

    console.log(data);
    const getBack = addLivestream(data);
    setInputData(data);
  };

  return(
    <div className="page stream">
      {(!!currentUser) ? '' : <Redirect to={Routes.AUTH_SIGN_IN} /> }
      <div className="container">
        <form className="niceDesignedForm" onSubmit={(ev) => handleSubmit(ev)}>
          <h1>Add stream</h1>
          <div className="form-group">
            <label htmlFor="inputTitle">Title</label>
            <input required type="text" minLength="5" maxLength="150" name="title" className="form-control" id="inputTitle" placeholder="Title"/>
          </div>
          <div className="form-group">
            <label htmlFor="streamLink">Embedded link</label>
            <input required type="text" minLength="10" maxLength="1000" name="embeddedLink" className="form-control" id="streamLink" placeholder="Embedded link of the stream"/>
          </div>
          <div className="form-group">
            <label htmlFor="thumbnailStream">Image link</label>
            <input required type="text" minLength="8" maxLength="200" name="thumbnailLink" className="form-control" id="thumbnailStream" placeholder="Thumbnail for the stream"/>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="startDate">Start date</label>
              <input required type="datetime-local" name="startDate" className="form-control" id="startDate"/>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="expirationDate">Expiration date</label>
              <input required type="datetime-local" name="expirationDate" className="form-control" id="expirationDate"/>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputGenre">Genre</label>
              <select id="inputGenre" name="genre" className="form-control">
                <option required defaultValue>Not specified</option>
                {(!!genres) ? genres.map((e, index) => <option key={index}>{e.genre}</option>) : '' }
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea required className="form-control" minLength="30" maxLength="500" name="description" id="description" placeholder="Type here your description ..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Go live</button>
        </form>
      </div>
    </div>
  );
}

export default StreamPage;