import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import RestaurantProfile from "../component/RestaurantProfile.jsx";

export const Demo = () => {
	return (
		<div className="container">
			<RestaurantProfile />
		</div>
	);
};
