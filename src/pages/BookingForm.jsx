import React, { useState } from "react";
import "./BookingForm.css";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    pickupPoint: "",
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 1,
    tripType: "Family",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Submitted Successfully for ${formData.fullName}!`);
  };

  return (
    <section className="bookingPage-fullpage">
    <title>Booking | Shreeji Holidays</title>

  <div className="bookingPage-bg"></div>

  <div className="bookingPage-container">
    <h2>
      Plan Your <span className="bookingPage-highlight">Dream Trip</span>
    </h2>
    <p>Customize your perfect travel experience with our expert planning.</p>

    <form className="bookingPage-form" onSubmit={handleSubmit}>
      {/* Full Name */}
      <div className="bookingPage-group">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email + Contact */}
      <div className="bookingPage-row">
        <div className="bookingPage-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="bookingPage-group">
          <label>Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            placeholder="Enter your mobile number"
            pattern="[0-9]{10}"
            maxLength="10"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Pickup + Destination */}
      <div className="bookingPage-row">
        <div className="bookingPage-group">
          <label>Pick-up Point</label>
          <input
            type="text"
            name="pickupPoint"
            placeholder="Enter your pick-up location"
            value={formData.pickupPoint}
            onChange={handleChange}
            required
          />
        </div>
        <div className="bookingPage-group">
          <label>Destination</label>
          <input
            type="text"
            name="destination"
            placeholder="Enter your destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Dates */}
      <div className="bookingPage-row">
        <div className="bookingPage-group">
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="bookingPage-group">
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Travelers + Trip Type */}
      <div className="bookingPage-row">
        <div className="bookingPage-group">
          <label>Travelers</label>
          <input
            type="number"
            name="travelers"
            min="1"
            max="20"
            value={formData.travelers}
            onChange={handleChange}
          />
        </div>
        <div className="bookingPage-group">
          <label>Trip Type</label>
          <select
            name="tripType"
            value={formData.tripType}
            onChange={handleChange}
          >
            <option>Family</option>
            <option>Adventure</option>
            <option>Honeymoon</option>
            <option>Luxury</option>
            <option>Group</option>
          </select>
        </div>
      </div>

      {/* Notes */}
      <div className="bookingPage-group">
        <label>Special Requests</label>
        <textarea
          name="notes"
          placeholder="Add preferences or special requests..."
          value={formData.notes}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <button type="submit" className="bookingPage-btn">
        Book Now
      </button>
    </form>
  </div>
</section>

  );
}
