import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
      <div className="container">
        <header className="header">
          <nav className="nav">
          <a href="#" className="nav-link">
          <img src="logojogja.png" alt="Logo Pemda DIY" className="logo" />
          Wiki Pemda DIY</a>
           

            <Link to="/Lamanspbe.jsx" className="nav-link">Home</Link> {/* Tautan ke halaman Lamanspbe */}
            
            <a href="https://api.whatsapp.com/send/?phone=6282133576291&text=Hello&type=phone_number&app_absent=0" className="nav-link">FAQ</a>
            <a href="https://api.whatsapp.com/send/?phone=6282133576291&text=Hello&type=phone_number&app_absent=0" className="nav-link">Helpdesk</a>
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <button>
              <img src="search.png" alt="Search" className="search-icon" />
              </button>
            </div>
            <div className="profile">
              <img src="user.png" alt="Profile" />
            </div>
          </nav>
        </header>
  
        <main className="main">
    <div className="sidebar">
      <div className="sidebar-box">
        <h2></h2>
        <p></p>
        <ul>
            <div className="small-box">
            <h5 className="tags-title">PAGE CONTENTS</h5>
              
              <ul className="link-list2">
              <li><a href="#welcome">Selamat datang di Wiki Pemda</a></li>
        <li><a href="#bidang">Bidang Pengetahuan</a></li>
        <li><a href="#organisasi">Organisasi Perangkat</a></li>
        <li><a href="#dokumen">Jenis Dokumen</a></li>
              </ul></div><br></br>      
  
              <ul>

              <div className="small-box2">
      <h5 className="tags-title">TAGS</h5>
      <ul className="link-list">
        <li>
          <img src="tag.png" alt="Tag" className="tag-icon" />
          <a href="#">Home</a>
        </li>
        <li>
          <img src="tag.png" alt="Tag" className="tag-icon" />
          <a href="#">Special Page</a>
        </li>
        <li>
          <img src="tag.png" alt="Tag" className="tag-icon" />
          <a href="#">lain</a>
        </li>
      </ul>
    </div><br></br>
  
              
  
  
              <div className="small-box3">
              <h5 className="tags-title">LAST EDITED BY</h5>
             
              <ul className="link-list">
                <br></br>
                <p>Doni Rusdiyanto</p>
                <p style={{ color: '#808080' }}>07/19/2024</p>
                
                
                
              </ul></div><br></br>   
              
        </ul>    
        </ul>
      
      </div>
  
      
    </div>
  
    <div className="content">
    <div className="sidebar-box">
        <h2 id="welcome">Wiki Pemda DIY</h2>
        <p>Knowledge Management system Pemda DIY untuk berbagi pengetahuan</p>
        <ul>
          {/* Add more links as needed */}
        </ul>
      </div>
      
      <h1 >Selamat datang di Wiki Pemda DIY</h1>
      <p>Selamat datang di wiki Pemda DIY! Disini anda akan menemukan banyak informasi, panduan dan petunjuk terkait SPBE (Sistem Pemerintahan Berbasis Elektronik) di lingkungan Pemerintah Daerah DIY.</p>
      <h2 id="bidang">Bidang Pengetahuan</h2>
      <p>Sistem Pemerintahan Berbasis Elektronik (SPBE) adalah konsep dan praktik penerapan teknologi informasi (TIK) dalam proses pemerintahan untuk meningkatkan efisiensi, efektivitas, transparansi, dan akuntabilitas pelayanan publik. Lingkup SPBE yang kita jalankan saat ini terjadi atas (6) bidang/domain yaitu:</p>
      <p>1. Domain proses bisnis; </p>
      <p>2. Domain data dan informasi; </p>
      <p>3. Domain infrastruktur SPBE; </p>
      <p>4. Domain aplikasi SPBE; </p>
      <p>5. Domain layanan SPBE; </p>
      <h2 id="organisasi">Organisasi Perangkat Daerah Pemda DIY</h2>
      <ul>

        <li><a href="#">Dinas Komunikasi dan Informatika</a></li>
        <li><a href="#">Badan Kepegawaian Daerah</a></li>
        <li><a href="#">Badan Kesatuan Bangsa dan Politik</a></li>
        <li><a href="#">Badan Penanggulangan Bencana Daerah</a></li>
        <li><a href="#">Badan Pendidikan dan Pelatihan</a></li>
        <li><a href="#">Badan Pengelolaan Keuangan dan Aset</a></li>
        <li><a href="#">Badan Penghubungan Daerah</a></li>
        <li><a href="#">Badan Perancangan Pembangunan Daerah</a></li>
        <li><a href="#">Badan Administrasi Perekonomian dan Sumber Daya Alam</a></li>
        <li><a href="#">Biro Bina Mental Spiritual</a></li>
        <li><a href="#">Biro Pemberdayaan Masyarakat</a></li>
        <li><a href="#">Biro Hukum</a></li>
        <li><a href="#">Biro Pengembangan Infrastruktur Wilayah dan Pembiayaan Pembangunan</a></li>
        <li><a href="#">Biro Tata Pemerintahan</a></li>
        <li><a href="#">Biro Umum, Hubungan Masyarakat dan Protokol</a></li>
        <li><a href="#">Dinas Kebudayaan (Kudhan Kebudayaan)</a></li>
        {/* Add more list items as needed */}
      </ul>
      <h2 id="dokumen">Organisasi Perangkat Daerah Pemda DIY</h2>
      <li><a href="#">Manual book</a></li>
      <li><a href="#">Kajian</a></li>
    </div>
  </main>
  
  <footer className="footer">
      <div className="footer-content">
        <p className="footer-logo">
          <img src="logo.png" alt="" className="logo" />
          &copy; 2024 Pemda DIY. All rights reserved.
        </p>
      </div>
    </footer>
  
        
      </div>
  
      
    );
  
  }
  export default Header