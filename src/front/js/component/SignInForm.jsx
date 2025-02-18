import React, { useState } from "react";


const SignInForm = () => {

    const [formData, setFormData] = useState({
        userType: "client",
        email: "",
        password: "",
        username: "",
        country: "",
        department: "",
        city: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUserTypeChange = (type) => {
        setFormData({ ...formData, userType: type });
    };

    const handleSubmit = (e) => {
        e.preventDefault();  
        console.log("Datos enviados:", formData);  
    };
    
    return (
        <div className="container mt-4">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${formData.userType === "client" ? "active" : ""}`}
                        onClick={() => handleUserTypeChange("client")}
                        type="button"
                    >
                        Cliente
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${formData.userType === "restaurant" ? "active" : ""}`}
                        onClick={() => handleUserTypeChange("restaurant")}
                        type="button"
                    >
                        Restaurante
                    </button>
                </li>
            </ul>

            <div className="tab-content">
                <div className={`tab-pane fade ${formData.userType === "client" ? "show active" : ""}`}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Correo Electrónico</label>
                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nombre de Usuario</label>
                            <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">País</label>
                            <input type="text" className="form-control" name="country" value={formData.country} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Departamento</label>
                            <input type="text" className="form-control" name="department" value={formData.department} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Ciudad</label>
                            <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Registrarse</button>
                    </form>
                </div>

                <div className={`tab-pane fade ${formData.userType === "restaurant" ? "show active" : ""}`}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Correo Electrónico</label>
                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nombre de Restaurante</label>
                            <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">País</label>
                            <input type="text" className="form-control" name="country" value={formData.country} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Departamento</label>
                            <input type="text" className="form-control" name="department" value={formData.department} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Ciudad</label>
                            <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
