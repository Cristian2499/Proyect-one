import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const RestaurantForm = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();


    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [department, setDepartment] = useState("");
    const [city, setCity] = useState("");
    const [schedule, setSchedule] = useState("");
    const [cuisine_type, setCuisine_type] = useState("");
    const [exact_address, setExact_address] = useState("");
    const [social_networks, setSocial_networks] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");


    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        if (email && username && department && city && schedule && cuisine_type && exact_address && social_networks && phone && description) {
            const response = await actions.registerRestaurant(email, username, department, city, schedule, cuisine_type, exact_address, social_networks, phone, description);
            console.log(email, username, department, city, schedule, cuisine_type, exact_address, social_networks, phone, description);
        }
    };

    return (
        <div className="restaurantform container mt-4">
            <div className="tab-content">
                <form onSubmit={handleSubmitRegister}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Deparment</label>
                        <input type="text" className="form-control" value={department} onChange={(e) => setDepartment(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Schedule</label>
                        <input type="text" className="form-control" value={schedule} onChange={(e) => setSchedule(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Schedule</label>
                        <input type="text" className="form-control" value={schedule} onChange={(e) => setSchedule(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cuisine Type</label>
                        <input type="text" className="form-control" value={cuisine_type} onChange={(e) => setCuisine_type(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Restaurant Address</label>
                        <input type="text" className="form-control" value={exact_address} onChange={(e) => setExact_address(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Social Networks</label>
                        <input type="text" className="form-control" value={social_networks} onChange={(e) => setSocial_networks(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Restaurant Description</label>
                        <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary">edit</button>
                </form>
            </div>
        </div>
    );
};

export default RestaurantForm;