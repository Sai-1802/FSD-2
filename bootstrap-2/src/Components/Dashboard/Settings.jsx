import React from 'react';

const Settings = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">Settings</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5>Profile Settings</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" defaultValue="John Doe" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" defaultValue="john@example.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input type="tel" className="form-control" defaultValue="+1234567890" />
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5>Preferences</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="notifications" defaultChecked />
                  <label className="form-check-label" htmlFor="notifications">
                    Email Notifications
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="darkMode" />
                  <label className="form-check-label" htmlFor="darkMode">
                    Dark Mode
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Language</label>
                <select className="form-select">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <button type="button" className="btn btn-success">Update Preferences</button>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-header">
              <h5>Security</h5>
            </div>
            <div className="card-body">
              <button className="btn btn-warning mb-2 w-100">Change Password</button>
              <button className="btn btn-info w-100">Enable 2FA</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;