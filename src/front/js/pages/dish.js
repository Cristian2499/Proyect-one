import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import DishForm from "../component/DishForm.jsx";

export const Dish = () => {
    return (
        <div className="container">
            <DishForm />
        </div>
    );
};
