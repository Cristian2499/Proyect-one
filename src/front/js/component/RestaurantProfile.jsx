import React from "react";
import { useNavigate } from "react-router-dom";

const RestaurantProfile = () => {
    const navigate = useNavigate();

    // Datos del perfil (sin API, datos estáticos)
    const profile = {
        username: "Delicioso Restaurant",
        department: "Antioquia",
        city: "Medellín",
        schedule: "Monday - Sunday: 10 AM - 10 PM",
        cuisine_type: "Italian",
        exact_address: "Calle 123 #45-67",
        phone: "+57 312 345 6789",
        description: "A cozy restaurant offering the best Italian dishes in town.",
        image: "https://i.pinimg.com/236x/59/b5/91/59b591cbaee5d0b308648cfbae25d78a.jpg",
        social_networks: [
            { platform: "facebook", url: "https://facebook.com/restaurante" },
            { platform: "instagram", url: "https://instagram.com/restaurante" }
        ]
    };

    return (
        <div className="container mt-5">
            <div className="profile-card text-center p-4 bg-white shadow rounded">
                {/* Imagen de perfil */}
                <img
                    src={profile.image}
                    alt="Profile"
                    className="profile-img rounded-circle mb-3"
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
                <h2>{profile.username}</h2>
                <p className="text-muted">@{profile.username.toLowerCase()}</p>

                {/* Información del perfil */}
                <div className="row mt-4 text-start">
                    <div className="col-md-6">
                        <p><strong>Departamento:</strong> {profile.department}</p>
                        <p><strong>Ciudad:</strong> {profile.city}</p>
                        <p><strong>Dirección:</strong> {profile.exact_address}</p>
                        <p><strong>Teléfono:</strong> {profile.phone}</p>
                    </div>
                    <div className="col-md-6">
                        <p><strong>Horario:</strong> {profile.schedule}</p>
                        <p><strong>Tipo de Cocina:</strong> {profile.cuisine_type}</p>
                        <p><strong>Descripción:</strong> {profile.description}</p>
                    </div>
                </div>

                {/* Redes Sociales */}
                <div className="social-icons mt-3">
                    {profile.social_networks.map((network, index) => (
                        <a key={index} href={network.url} className="me-3" target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-${network.platform} fa-2x text-primary`}></i>
                        </a>
                    ))}
                </div>

                {/* Botones de navegación */}
                <div className="mt-4">
                    <button className="btn btn-primary me-3" onClick={() => navigate("/dish")}>
                        Add Dish
                    </button>
                    <button className="btn btn-success" onClick={() => navigate("/single")}>
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RestaurantProfile;

