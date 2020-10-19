import React from 'react';

import './styles.css';

function Bolo({ children, image, imageURL, profile, profileURL, ...rest }) {
  function changeImage(event) {
      event = event? event : window.event;
      event.preventDefault();

      let imagem = document.getElementById('image');
      let inputImage = document.getElementsByClassName('image')[0];
      let newImageURL = URL.createObjectURL(imagem.files[0]);
      inputImage.style.backgroundImage = 'url('+newImageURL+')';
  }

  function changeProfile(event) {
      event = event? event : window.event;
      event.preventDefault();

      let profile = document.getElementById('profile');
      let profileImage = document.getElementsByClassName('profile')[0];
      let newImageURL = URL.createObjectURL(profile.files[0]);
      profileImage.style.backgroundImage = 'url('+newImageURL+')';
  }

  return (
    <>
      <form {...rest} className="styled-form">
        <div className="form-container">
          {
            image && 
            <p className="image" style={{backgroundImage: `url("${imageURL}")`}}>
                <label htmlFor="image"></label>
                <input type="file" name="imagem" id="image" onChange={changeImage} />
            </p>
          }
          {
            profile && 
            <p className="profile">
                <label htmlFor="profile" style={{backgroundImage: `url("${profileURL}")`}}></label>
                <input type="file" name="profile" id="profile" onChange={changeProfile} />
            </p>
          }
          { children &&  (children) }
        </div>
      </form>
    </>
  );
}

export default Bolo;
