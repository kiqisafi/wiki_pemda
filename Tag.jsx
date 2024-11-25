import React from 'react';

const Tag = () => {
  return (
    <div className="wiki-pemda-container">
      <div className="wiki-pemda-item">
        <div className="title-container">
          <h4 className="blue-text">Prosedur perizinan pengusahaan air tanah</h4>
          <p className="blue-text last-updated">Last updated 6 months ago</p>
        </div>
        <p className="description">Deskripsi singkat tentang prosedur ini.</p><br></br>
        <hr className="divider" />
        <p className="description">Deskripsi singkat tentang prosedur ini.</p>
      </div>
      <div className="wiki-pemda-item">
        <div className="title-container">
          <h4 className="blue-text">Prosedur perizinan reklamasi</h4>
          <p className="blue-text last-updated">Last updated 4 months ago</p>
        </div>
        
        <p className="description">Deskripsi singkat tentang prosedur reklamasi.</p><br></br>
        <hr className="divider" />
        <p className="description">Deskripsi singkat tentang prosedur reklamasi.</p>
      </div>
      <div className="wiki-pemda-item">
        <div className="title-container">
          <h4 className="blue-text">Prosedur izin mendirikan bangunan</h4>
          <p className="blue-text last-updated">Last updated 2 months ago</p>
        </div>
        
        <p className="description">Deskripsi singkat tentang izin mendirikan bangunan.</p><br></br>
        <hr className="divider" />
        <p className="description">Deskripsi singkat tentang prosedur reklamasi.</p>

      </div>
    </div>
  );
};

export default Tag;