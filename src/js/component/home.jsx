import React from "react";
//include images into your bundle
import Jumbotron from "./Jumbotron";
import { appName, logoUrl } from "./appName";
import Cards from "./cards";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<>
		  <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{ color: "white" }}>
                        <img src={logoUrl} alt="Bootstrap" width="30" height="24" />
                        {appName}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ color: "white" }}>
                        <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" style={{ color: "white" }}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "gray" }}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "gray" }}>Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "gray" }}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>	

		<div className="container mt-4">
			<Jumbotron />
		</div>

		<div className="container mt-4">
			<Cards />  
		</div>

		<div className="container mt-4">
			<Footer />  
		</div>

		</>
	)

};


export default Home;
