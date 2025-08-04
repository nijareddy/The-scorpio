import React from 'react';
import './index.css';
import NavBar from '../../components/NavBar';

const ProfilePage = () => {
    return (
        <div>
            <NavBar />
            <div className="profile-page">
                <h1>My Profile</h1>
                <div className='layout'>
                {/* Top Row */}
                <div className="profile-top">

                    {/* Personal Information */}
                    <div className="personal-info box-shadow">
                        <h2>👤 Personal Information</h2>

                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" defaultValue="John" />
                            </div>

                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" defaultValue="Doe" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" defaultValue="john@example.com" />
                            </div>

                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" defaultValue="+91 98765 43210" />
                            </div>
                        </div>

                        <button className="update-btn">Update Information</button>
                    </div>
                    <div className="addresses box-shadow">
                        <h2>📍 Addresses</h2>

                        <div className="address-card">
                            <strong>Home</strong>
                            <p>123 Business Street, Corporate Area, Mumbai, 400001</p>
                        </div>

                        <button className="add-address-btn">Add New Address</button>
                    </div>

                    {/* Size Details */}

                </div>
                {/* Addresses BELOW */}
                <div className='address'>
                    <div className="size-details box-shadow">
                        <h2>🖊️ Size Details</h2>
                        <p className="subtext">Manage sizes for different people in your account</p>

                        <div className="size-profile">
                            <strong>John Doe</strong><br />
                            Suit: 42R, Shirt: L, Waist: 34
                        </div>

                        <button className="add-size-btn">Add Size Profile</button>

                        {/* Measurement Guide */}
                        <div className="measurement-guide box-shadow">
                            <h3>Measurement Guide</h3>
                            <div className="guide-image">
                                <img
                                    src="/images/size chart.png"
                                    alt="Measurement Guide"
                                />
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="quick-actions box-shadow">
                            <h3>Quick Actions</h3>
                            <button className="quick-action-btn">My Orders</button>
                            <button className="quick-action-btn">Track Order</button>
                            <button className="quick-action-btn">Returns & Exchanges</button>
                        </div>
                    </div>


                </div>
                </div>
            </div>


        </div>
    );
};

export default ProfilePage;
