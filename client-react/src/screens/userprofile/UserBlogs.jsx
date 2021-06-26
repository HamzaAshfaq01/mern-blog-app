import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Star from '../../assests/star.svg';
import Author from '../../assests/hamza.jpg';
import { getUserBlog } from '../../redux/actions/blog.actions';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';

function UserBlogs() {
	const dispatch = useDispatch();
	const userBlogs = useSelector((state) => state.blog.userblogs);
	const loader = useSelector((state) => state.loading.loader);

	console.log(userBlogs);

	React.useEffect(() => {
		dispatch(getUserBlog());
	}, []);
	return (
		<div className='container my-5'>
			<div class='row'>
				<div class='col-lg-10 offset-lg-1 js-post-list-wrap'>
					<h2 class='h4 section-title'>
						<span>My Blogs.</span>
					</h2>
					{loader && <Loader />}
					{userBlogs.length > 0 ? (
						userBlogs.map((blog) => (
							<article class='post-card flex'>
								<Link
									to={`/blog/detail/${blog._id}`}
									class='post-img-wrap'>
									<img
										class='post-img'
										loading='lazy'
										src={blog.image}
									/>
								</Link>
								<div class='post-info-wrap'>
									<div
										class='flex post-top-meta'
										style={{ alignItems: 'center' }}>
										<div class='posted-by'>
											<Avatar
												color={Avatar.getRandomColor(
													'sitebase',
													['red', 'green', 'blue']
												)}
												size='45'
												round={true}
												name={blog.creator}
											/>
										</div>
										<p
											style={{
												margin: '0  5px',
												fontSize: '1.4rem',
											}}>
											{blog.creator}
										</p>
										<div
											class='featured-icon'
											aria-label='Featured post icon'>
											<img src={Star} />
										</div>
									</div>
									<h2 class='h3 post-title'>
										<Link to={`/blog/detail/${blog._id}`}>
											{blog.title}
										</Link>
									</h2>
									<div class='post-excerpt'>
										{blog.description}
									</div>
									<div
										class='post-meta flex'
										style={{ alignItems: 'center' }}>
										<time
											class='post-date'
											datetime='2021-05-02'>
											May 02, 2021
										</time>
										<span class='read-time'>3 min read</span>
										<span class='visibility'>Public</span>
									</div>
								</div>
							</article>
						))
					) : (
						<h1>No Posts</h1>
					)}
				</div>
			</div>
		</div>
	);
}

export default UserBlogs;
