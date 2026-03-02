const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>ShopHub</h5>
            <p>Modern E-Commerce with Advanced State Management</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#cart">Cart</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Contact</h5>
            <p>Email: info@experiment5.com</p>
            <p>Phone: +1 234 567 8900</p>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>&copy; 2026 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
