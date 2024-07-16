import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/jumbotron";
import Card from "../components/card";
import Footer from "../components/footer";

//create your first component


const Home = () => {
	return (
		<div >
			<Navbar />
			<div class="container" >			
			<Header />
			< div className="d-flex  justify-content-between mt-5">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			
			</div>

			<div className=" d-flex flex-column min-vh-100 ">
			<Footer  />
			</div>


			
		</div>
	);
};

export default Home;
