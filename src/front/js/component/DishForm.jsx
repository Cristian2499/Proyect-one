import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const DishForm = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();


    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        if (category && name && price && city && image) {
            const response = await actions.registerDish(category, name, price, description, image);
            console.log(category, name, price, description, image);
        }
    };

    return (
        <div className="container mt-4">
            <div className="tab-content">
                <form onSubmit={handleSubmitRegister}>
                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <input type="email" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image</label>
                        <input type="text" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary">add</button>
                </form>
            </div>
        </div>
    );
};

export default DishForm;