import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogDetail } from '../redux/actions/blog.actions';
import moment from 'moment';

function BlogDetail({ match, history }) {
	const blogDetail = useSelector((state) => state.blog.blogDetail);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getBlogDetail(match.params.id));
	}, []);
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-lg-10 offset-lg-1'>
					<article class='single-post'>
						<header class='post-header'>
							<h1 class='post-title'>{blogDetail.title}</h1>
							<div class='post-meta flex'>
								<div class='author-list flex'>
									<a
										class='author-image'
										href='/author/harini/'
										aria-label='Harini Banerjee'>
										<img
											src={blogDetail.image}
											loading='lazy'
											alt='Harini Banerjee'
										/>
									</a>
									<a href='/author/harini/' class='author-name'>
										{blogDetail.creator}
									</a>
									&nbsp;
								</div>
								<time class='post-date' datetime='2021-03-28'>
									{moment(blogDetail.createdAt).format('ll')}
								</time>
								<span class='read-time'>
									{' '}
									{moment(blogDetail.createdAt).fromNow()}
								</span>
							</div>
						</header>
						<div class='featured-image-wrap'>
							<img
								class='featured-image'
								loading='lazy'
								src={blogDetail.image}
								alt='The mind and body are not separate. what affects one, affects the other'
							/>
						</div>
						<div class='post-content'>
							<p>{blogDetail.description}</p>
						</div>
					</article>
				</div>
			</div>
		</div>
	);
}

export default BlogDetail;
