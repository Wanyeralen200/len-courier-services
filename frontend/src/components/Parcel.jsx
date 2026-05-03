import React, { useState, useEffect } from 'react';
import { parcelAPI, paymentAPI } from '../api/endpoints';
import { Input, Button, message, Table } from 'antd';
import '../styles/tracking.css';

export const ParcelTracking = () => {
  const [trackingId, setTrackingId] = useState('');
  const [parcel, setParcel] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async () => {
    if (!trackingId) {
      message.warning('Please enter tracking ID');
      return;
    }

    setLoading(true);
    try {
      const response = await parcelAPI.getParcelByTrackingId(trackingId);
      setParcel(response.data);
      message.success('Parcel found');
    } catch (error) {
      message.error('Parcel not found');
      setParcel(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tracking-container">
      <h2>Track Your Parcel</h2>
      <div className="tracking-input">
        <Input
          placeholder="Enter Tracking Number (e.g., LEN-MLD-0001)"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          onPressEnter={handleTrack}
        />
        <Button type="primary" onClick={handleTrack} loading={loading}>
          Track Now
        </Button>
      </div>

      {parcel && (
        <div className="parcel-details">
          <h3>Parcel Details</h3>
          <table>
            <tbody>
              <tr>
                <td>Tracking ID:</td>
                <td>{parcel.trackingId}</td>
              </tr>
              <tr>
                <td>Status:</td>
                <td className={`status-${parcel.status}`}>{parcel.status}</td>
              </tr>
              <tr>
                <td>Receiver:</td>
                <td>{parcel.receiver.name}</td>
              </tr>
              <tr>
                <td>Location:</td>
                <td>{parcel.receiver.address}</td>
              </tr>
              <tr>
                <td>Weight:</td>
                <td>{parcel.weight} kg</td>
              </tr>
              <tr>
                <td>Delivery Type:</td>
                <td>{parcel.deliveryType}</td>
              </tr>
              <tr>
                <td>Price:</td>
                <td>KES {parcel.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export const CreateParcel = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    sender: { name: '', phone: '', email: '', address: '' },
    receiver: { name: '', phone: '', email: '', address: '' },
    weight: '',
    contents: '',
    deliveryType: 'standard',
    price: ''
  });

  const handleCreateParcel = async () => {
    setLoading(true);
    try {
      await parcelAPI.createParcel(form);
      message.success('Parcel created successfully');
      setForm({
        sender: { name: '', phone: '', email: '', address: '' },
        receiver: { name: '', phone: '', email: '', address: '' },
        weight: '',
        contents: '',
        deliveryType: 'standard',
        price: ''
      });
    } catch (error) {
      message.error('Failed to create parcel');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-parcel-container">
      <h2>Book a Delivery</h2>
      <form>
        <h3>Sender Details</h3>
        <Input placeholder="Name" onChange={(e) => setForm({...form, sender: {...form.sender, name: e.target.value}})} />
        <Input placeholder="Phone" onChange={(e) => setForm({...form, sender: {...form.sender, phone: e.target.value}})} />
        <Input placeholder="Email" onChange={(e) => setForm({...form, sender: {...form.sender, email: e.target.value}})} />
        <Input placeholder="Address" onChange={(e) => setForm({...form, sender: {...form.sender, address: e.target.value}})} />

        <h3>Receiver Details</h3>
        <Input placeholder="Name" onChange={(e) => setForm({...form, receiver: {...form.receiver, name: e.target.value}})} />
        <Input placeholder="Phone" onChange={(e) => setForm({...form, receiver: {...form.receiver, phone: e.target.value}})} />
        <Input placeholder="Email" onChange={(e) => setForm({...form, receiver: {...form.receiver, email: e.target.value}})} />
        <Input placeholder="Address" onChange={(e) => setForm({...form, receiver: {...form.receiver, address: e.target.value}})} />

        <h3>Parcel Details</h3>
        <Input placeholder="Weight (kg)" type="number" onChange={(e) => setForm({...form, weight: e.target.value})} />
        <Input placeholder="Contents" onChange={(e) => setForm({...form, contents: e.target.value})} />
        <select onChange={(e) => setForm({...form, deliveryType: e.target.value})}>
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="same_day">Same Day</option>
        </select>
        <Input placeholder="Price" type="number" onChange={(e) => setForm({...form, price: e.target.value})} />

        <Button type="primary" onClick={handleCreateParcel} loading={loading} block>
          Book Delivery
        </Button>
      </form>
    </div>
  );
};
