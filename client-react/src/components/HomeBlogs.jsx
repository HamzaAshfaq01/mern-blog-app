import React from 'react';
import Star from '../assests/star.svg';
import Author from '../assests/hamza.jpg';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Avatar from 'react-avatar';

function HomeBlogs({ blog }) {
	const { title, description, creator, image, createdAt, _id } = blog;
	return (
		<>
			<article class='post-card flex'>
				<Link to={`/blog/detail/${_id}`} class='post-img-wrap'>
					<img
						class='post-img'
						loading='lazy'
						src={image}
						alt='Self-observation is the first step of inner unfolding'
					/>
				</Link>
				<div class='post-info-wrap'>
					<div class='flex post-top-meta' style={{ alignItems: 'center' }}>
						<div class='posted-by'>
							{/* <img src={Author} /> */}
							<Avatar
								color={Avatar.getRandomColor('sitebase', [
									'red',
									'green',
									'blue',
								])}
								size='45' 
								round={true}
								name={creator}
							/>
						</div>
						<p style={{ margin: '0  5px', fontSize: '1.4rem' }}>
							{creator}
						</p>
						<div class='featured-icon' aria-label='Featured post icon'>
							<img src={Star} />
						</div>
					</div>
					<h2 class='h3 post-title'>
						<Link to={`/blog/detail/${_id}`}>{title}</Link>
					</h2>
					<div class='post-excerpt'>{description}</div>
					<div class='post-meta flex' style={{ alignItems: 'center' }}>
						<time class='post-date' datetime='2021-05-02'>
							{moment(createdAt).format('ll')}
						</time>
						<span class='read-time'>{moment(createdAt).fromNow()}</span>
						<span class='visibility'>Public</span>
					</div>
				</div>
			</article>
		</>
	);
}

export default HomeBlogs;
