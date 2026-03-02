import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Contact = () => {
  const { theme, user } = useContext(AppContext);

  const bgColor = theme === 'light' ? '#fff' : '#2d2d2d';
  const textColor = theme === 'light' ? '#212529' : '#f8f9fa';
  const inputBgColor = theme === 'light' ? '#f8f9fa' : '#1a1a1a';
  const borderColor = theme === 'light' ? '#dee2e6' : '#495057';

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Message sent successfully! We will get back to you soon.');
  };

  return (
    <div className="container-fluid py-5">
      <h1 className="mb-4">📧 Contact Us</h1>

      <div className="row g-4">
        <div className="col-lg-6">
          <div
            className="card"
            style={{
              backgroundColor: bgColor,
              color: textColor,
              border: 'none',
              borderRadius: '12px',
              padding: '40px',
            }}
          >
            <h3 className="mb-4">Get in Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your name"
                  style={{
                    backgroundColor: inputBgColor,
                    color: textColor,
                    border: `1px solid ${borderColor}`,
                  }}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="your@email.com"
                  style={{
                    backgroundColor: inputBgColor,
                    color: textColor,
                    border: `1px solid ${borderColor}`,
                  }}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="What is this about?"
                  style={{
                    backgroundColor: inputBgColor,
                    color: textColor,
                    border: `1px solid ${borderColor}`,
                  }}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Your message..."
                  style={{
                    backgroundColor: inputBgColor,
                    color: textColor,
                    border: `1px solid ${borderColor}`,
                  }}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-custom w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-6">
          <div
            className="card"
            style={{
              backgroundColor: bgColor,
              color: textColor,
              border: 'none',
              borderRadius: '12px',
              padding: '40px',
            }}
          >
            <h3 className="mb-4">Contact Information</h3>

            <div style={{ marginBottom: '30px' }}>
              <h5>📍 Address</h5>
              <p>123 Tech Street, Silicon Valley, CA 94025</p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h5>📞 Phone</h5>
              <p>+1 (555) 123-4567</p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h5>📧 Email</h5>
              <p>contact@experiment5.com</p>
              <p>support@experiment5.com</p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h5>🕐 Business Hours</h5>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            <div
              style={{
                backgroundColor: inputBgColor,
                padding: '20px',
                borderRadius: '8px',
                marginTop: '30px',
              }}
            >
              <h5>Current User (from Context)</h5>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Role:</strong> {user.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
