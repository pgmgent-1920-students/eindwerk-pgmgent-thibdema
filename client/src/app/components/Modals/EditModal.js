import React, { useEffect, useState } from 'react';
import { useHistory} from 'react-router-dom';
import {useFirestore} from '../../services';


const EditModal = ({streamID, content}) => {
  const history = useHistory();
  const {editLivestream, getGenres} = useFirestore();
  const [genres, setGenres] = useState(false);
  const [inputValues, setInputValues] = useState({
    txtTitle: '',
    txtEmbLink: '',
    txtImgLink: '',
    txtEnd: 0,
    txtGenre: '',
    txtDescription: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGenres();
      setGenres(data);
    };
    const setNewData = () => {
      const newData = {
        txtTitle: content.title,
        txtEmbLink: content.iframe,
        txtImgLink: content.thumbnail,
        txtEnd: content.expirationDate,
        txtGenre: content.genre,
        txtDescription: content.description
      };
      setInputValues(newData);
    };

    setNewData();
    fetchData();
  }, [getGenres, content.title, content.iframe, content.thumbnail, content.startDate, content.expirationDate, content.genre, content.description]);

  const editStream = async (e) => {
    await editLivestream(streamID, inputValues);
    history.go();
  };

  const convertDate = (date) => {
    const newDate = Date.parse(date);
    return newDate;
  };

  const handleChanges = (e) => {
    const form = document.querySelector('#editModal');
    let formData = new FormData(form);
    const newData = {
      txtTitle: formData.get('title'),
      txtEmbLink: formData.get('embeddedLink'),
      txtImgLink: formData.get('thumbnailLink'),
      txtEnd: convertDate(formData.get('expirationDate')),
      txtGenre: formData.get('genre'),
      txtDescription: formData.get('description')
    };
    setInputValues(newData);
  };

  const setOriginalData = () => {
    const newData = {
      txtTitle: content.title,
      txtEmbLink: content.iframe,
      txtImgLink: content.thumbnail,
      txtEnd: content.expirationDate,
      txtGenre: content.genre,
      txtDescription: content.description
    };
    setInputValues(newData);
  };

  return(
    <form className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Edit</h5>
            <button onClick={(ev) => setOriginalData(ev)} type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="inputTitle">Title</label>
              <input onChange={(e) => handleChanges(e)} required type="text" minLength="5" maxLength="150" name="title" className="form-control" id="inputTitle" placeholder="Title" value={inputValues.txtTitle} />
            </div>
            <div className="form-group">
              <label htmlFor="streamLink">Embedded link</label>
              <input onChange={(e) => handleChanges(e)} required type="text" minLength="10" maxLength="1000" name="embeddedLink" className="form-control" id="streamLink" placeholder="Embedded link of the stream" value={inputValues.txtEmbLink} />
            </div>
            <div className="form-group">
              <label htmlFor="thumbnailStream">Image link</label>
              <input onChange={(e) => handleChanges(e)} required type="text" minLength="8" maxLength="200" name="thumbnailLink" className="form-control" id="thumbnailStream" placeholder="Thumbnail for the stream" value={inputValues.txtImgLink} />
            </div>
            <div className="form-group">
              <label htmlFor="expirationDate">Expiration date</label>
              <input onChange={(e) => handleChanges(e)} required type="datetime-local" name="expirationDate" className="form-control" id="expirationDate" />
            </div>
            <div className="form-group">
              <label htmlFor="inputGenre">Genre</label>
              <select onChange={(e) => handleChanges(e)} value={inputValues.txtGenre} id="inputGenre" name="genre" className="form-control">
                {(!!genres) ? genres.map((e, index) => <option key={index}>{e.genre}</option>) : '' }
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea onChange={(e) => handleChanges(e)} required className="form-control" minLength="30" maxLength="500" name="description" id="description" placeholder="Type here your description ..." value={inputValues.txtDescription}></textarea>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center align-items-center">
            <button onClick={(ev) => setOriginalData(ev)} type="button" className="btn btn-secondary" data-dismiss="modal">No thanks</button>
            <button onClick={(e) => editStream(e)} type="button" className="btn btn-primary" data-dismiss="modal">Save changes</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default EditModal;