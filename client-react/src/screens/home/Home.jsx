import React from 'react';
import HeroSection from './components/HeroSection';
import Blogs from "../../components/HomeBlogs"

function Home() {
	return (
		<>
			<HeroSection />
			<div className="main">
			<div className="container">
				<Blogs/>
			</div>
			</div>
		</>
	);
}

export default Home;
