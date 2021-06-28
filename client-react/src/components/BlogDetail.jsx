import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogDetail } from '../redux/actions/blog.actions';
import moment from 'moment';
import htmlToText from 'html-react-parser';
import Loader from './Loader';

function BlogDetail({ match, history }) {
	const blogDetail = useSelector((state) => state.blog.blogDetail);
	const loader = useSelector((state) => state.loading.loader);
	const dispatch = useDispatch();
	const { title, description, creator, image, createdAt, _id } = blogDetail;
	console.log(typeof description, description && htmlToText(description));
	console.log(Object.keys(blogDetail).length == 0, 'blog');

	React.useEffect(() => {
		dispatch(getBlogDetail(match.params.id));
	}, []);
	return (
		<div className='container'>
			<div className='row justify-content-center'>
				<div className='col-lg-11'>
					{loader && <Loader />}
					{Object.keys(blogDetail).length > 0 && !loader && (
						<article class='single-post'>
							<header class='post-header'>
								<h1 class='post-title'>{title}</h1>
								<div class='post-meta flex'>
									<div class='author-list flex'>
										<a
											class='author-image'
											href='/author/harini/'
											aria-label='Harini Banerjee'>
											<img
												src={image}
												loading='lazy'
												alt='Harini Banerjee'
											/>
										</a>
										<a
											href='/author/harini/'
											class='author-name'>
											{creator}
										</a>
										&nbsp;
									</div>
									<time class='post-date' datetime='2021-03-28'>
										{moment(createdAt).format('ll')}
									</time>
									<span class='read-time'>
										{' '}
										{moment(createdAt).fromNow()}
									</span>
								</div>
							</header>
							<div class='featured-image-wrap'>
								<img
									class='featured-image'
									loading='lazy'
									src={image}
									alt='The mind and body are not separate. what affects one, affects the other'
								/>
							</div>
							<div class='post-content'>
								{htmlToText(blogDetail.description)}
							</div>
						</article>
					)}
				</div>
			</div>
		</div>
	);
}

export default BlogDetail;
