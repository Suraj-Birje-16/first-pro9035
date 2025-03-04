import React from "react";
import "./App.css";
import { LoginRoutes, Routes } from "./routes/MainRoutes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
	const routes = createBrowserRouter([LoginRoutes, Routes]);
	return (
	// 	<Router> 
	// 	  <div className="App">
	// 	    <Routes>
	// 	      <Route path="/" element={<LoginPage />}  />
	// 	      <Route path="/login" element={<LoginPage />} />
	// 	      <Route path="/register" element={<RegisterPage />} />
	// 	      <Route path="/dashboard" element={<Dashboard />} />
	// 	      <Route path="/about" element={<About />} />

	// 	    </Routes>
	// 	  </div>
	// 	</Router>
		<RouterProvider router={routes} />
	);
}