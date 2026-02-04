import React from 'react';

const Contact = () => {
  return (
    <div className="container-fluid">
      {/* Header Section */}
      <div className="row py-5" style={{background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'}}>
        <div className="col-12 text-center text-white">
          <h1 className="display-3">Get In Touch</h1>
          <p className="lead">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="row py-5">
        <div className="col-12 text-center mb-5">
          <h2 className="text-white">Contact Methods</h2>
        </div>
        <div className="col-md-4 mb-4">
          <div className="text-center text-white">
            <div className="mb-3" style={{fontSize: '3rem', color: '#4facfe'}}>📧</div>
            <h4>Email Us</h4>
            <p>contact@dashboard.com</p>
            <p>support@dashboard.com</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="text-center text-white">
            <div className="mb-3" style={{fontSize: '3rem', color: '#43e97b'}}>📞</div>
            <h4>Call Us</h4>
            <p>+1 (555) 123-4567</p>
            <p>+1 (555) 987-6543</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="text-center text-white">
            <div className="mb-3" style={{fontSize: '3rem', color: '#f093fb'}}>📍</div>
            <h4>Visit Us</h4>
            <p>123 Tech Street</p>
            <p>Silicon Valley, CA 94000</p>
          </div>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="row py-5">
        <div className="col-lg-8 mb-4">
          <div className="card text-white" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'}}>
            <div className="card-body">
              <h3 className="mb-4">Send us a Message</h3>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" style={{backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: 'white'}} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" style={{backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: 'white'}} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-control" style={{backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: 'white'}} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" style={{backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: 'white'}} />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <select className="form-control" style={{backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: 'white'}}>
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Business Partnership</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="6" style={{backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: 'white'}} placeholder="Tell us about your project or inquiry..."></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn text-white px-5 py-2" style={{background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', border: 'none', fontSize: '1.1rem'}}>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card text-white mb-4" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', border: 'none', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'}}>
            <div className="card-body">
              <h5>Business Hours</h5>
              <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
              <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
              <p><strong>Emergency Support:</strong> 24/7</p>
            </div>
          </div>
          
          <div className="card text-white" style={{background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', border: 'none', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'}}>
            <div className="card-body">
              <h5>Follow Us</h5>
              <div className="d-flex justify-content-around mt-3">
                <div style={{fontSize: '2rem'}}>📘</div>
                <div style={{fontSize: '2rem'}}>🐦</div>
                <div style={{fontSize: '2rem'}}>📷</div>
                <div style={{fontSize: '2rem'}}>💼</div>
              </div>
              <p className="mt-3 text-center">Stay connected with us on social media</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="row py-5" style={{background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'}}>
        <div className="col-12 text-center mb-5">
          <h2 className="text-white">Frequently Asked Questions</h2>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card text-white" style={{background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)'}}>
            <div className="card-body">
              <h6>How quickly do you respond to inquiries?</h6>
              <p>We typically respond within 2-4 hours during business hours.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card text-white" style={{background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)'}}>
            <div className="card-body">
              <h6>Do you offer custom solutions?</h6>
              <p>Yes, we specialize in creating tailored solutions for your specific needs.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card text-white" style={{background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)'}}>
            <div className="card-body">
              <h6>What's your project timeline?</h6>
              <p>Project timelines vary, but most projects are completed within 2-12 weeks.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card text-white" style={{background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)'}}>
            <div className="card-body">
              <h6>Do you provide ongoing support?</h6>
              <p>Yes, we offer comprehensive support and maintenance packages.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;