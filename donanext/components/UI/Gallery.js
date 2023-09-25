import React, { useState } from "react";
import classes from "./Gallery.module.css";
import Button from "./Button";
export default function Gallery(props) {
  const { gallery, text } = props;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <section>
      <div className={classes.text}>
        <h1>{text}</h1>
      </div>
      <div className={classes.photoGallery}>
        {gallery.map((photo, id) => (
          <div key={id} className={classes.photoItem}>
            <img
              src={photo.src}
              alt={photo.alt}
              onClick={() => openModal(photo)}
            />
          </div>
        ))}
        {selectedPhoto && (
          <div className={classes.modal}>
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
            <div className={classes.caption}>
              <h4>{selectedPhoto.alt}</h4>
            </div>
            <Button onClick={closeModal}>Close</Button>
          </div>
        )}
      </div>
    </section>
  );
}
