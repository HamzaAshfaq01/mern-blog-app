import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeroSection from './components/HeroSection';
import Blogs from '../../components/HomeBlogs';
import { getAllBlogs } from '../../redux/actions/blog.actions';
import Loader from '../../components/Loader';

function Home() {
	const dispatch = useDispatch();
	const allBlogs = useSelector((state) => state.blog.allBlogs);
	const loader = useSelector((state) => state.loading.loader);

	React.useEffect(() => {
		dispatch(getAllBlogs());
	}, []);
	return (
		<>
			<HeroSection />
			<div className='main'>
				<div className='container'>
					<div class='row'>
						<div class='col-lg-10 offset-lg-1 js-post-list-wrap'>
							<h2 class='h4 section-title'>
								<span>Blogs.</span>
							</h2>
							{loader && <Loader />}
							{allBlogs.length > 0 &&
								allBlogs.map((blog) => <Blogs blog={blog} />)}
							{!loader && allBlogs.length == 0 && <h1>No Post</h1>}
						</div> 
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
