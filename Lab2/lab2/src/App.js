import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function App() {
  const banners = [
    { src: '/pizza1.jpg', caption: 'Neapolitan Pizza', desc: 'If you are looking for traditional Italian pizza, the Neapolitan is the best option!' },
    { src: '/pizza2.jpg', caption: 'Pizza2', desc: 'HEHE.' },
    { src: '/pizza3.jpg', caption: 'Pizza3', desc: 'HIHI.' },
    { src: '/pizza4.jpg', caption: 'Pizza4', desc: 'HUHU.' },
    { src: '/pizza5.jpg', caption: 'Pizza5', desc: 'HOHO.' }
  ];

  const menuItems = [
    { title: 'Margherita Pizza', price: 24.00, oldPrice: 40.00, label: 'SALE', image: '/menu1.jpg' },
    { title: 'Mushroom Pizza', price: 25.00, image: '/menu2.jpg' },
    { title: 'Hawaiian Pizza', price: 30.00, label: 'NEW', image: '/menu3.jpg' },
    { title: 'Pesto Pizza', price: 16.00, oldPrice: 50.00, label: 'SALE', image: '/menu4.jpg' },
  ];

  return (
    <div>
        {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Pizza House</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-danger" type="submit">🔍</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {banners.map((item, i) => (
            <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
              <div className="hero-slide text-white text-center" style={{ backgroundImage: `url(${item.src})` }}>
                <h1>{item.caption}</h1>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Menu Section */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="mb-4">Our Menu</h2>
          <div className="row">
            {menuItems.map((item, i) => (
              <div className="col-md-3 mb-4" key={i}>
                <div className="card h-100">
                  {item.label && <span className="badge bg-warning position-absolute m-2">{item.label}</span>}
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5>{item.title}</h5>
                    <p>
                      {item.oldPrice && <s className="text-muted me-2">${item.oldPrice.toFixed(2)}</s>}
                      <strong className={item.oldPrice ? 'text-warning' : ''}>${item.price.toFixed(2)}</strong>
                    </p> 
                    <button className="btn btn-dark w-100">Buy</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="text-center mb-4">Book Your Table</h2>
          <form>
            <div className="row mb-3">
              <div className="col-md-4">
                <input type="text" className="form-control" placeholder="Your Name *" required />
              </div>
              <div className="col-md-4">
                <input type="email" className="form-control" placeholder="Your Email *" required />
              </div>
              <div className="col-md-4">
                <select className="form-select" required>
                  <option value="">Select a Service</option>
                  <option>Dine In</option>
                  <option>Takeaway</option>
                  <option>Delivery</option>
                </select>
              </div>
            </div>
            <textarea className="form-control mb-3" rows="4" placeholder="Please write your comment"></textarea>
            <button className="btn btn-warning px-4">Send</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
