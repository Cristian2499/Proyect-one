import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import RestaurantForm from "../component/RestaurantForm.jsx";

export const Single = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Restaurant Form</h1>
			<RestaurantForm />
		</div>
	);
};


