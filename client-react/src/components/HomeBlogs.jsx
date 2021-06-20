import React from 'react'
import Star from "../assests/star.svg"
import Author from "../assests/hamza.jpg"

function HomeBlogs() {
    return (
        <>
       	<div class="row">
						<div class="col-lg-10 offset-lg-1 js-post-list-wrap">
							<h2 class="h4 section-title">
								<span>Blogs.</span>
							</h2>
							<article class="post-card flex">
								<a
									href="/self-observation-is-the-first-step-of-inner-unfolding/"
									class="post-img-wrap"
								>
									<img
										class="post-img"
										loading="lazy"
										srcset="
											/content/images/size/w250/2021/05/tengyart-pNq5uxt-f7k-unsplash.jpg   250w,
											/content/images/size/w400/2021/05/tengyart-pNq5uxt-f7k-unsplash.jpg   400w,
											/content/images/size/w600/2021/05/tengyart-pNq5uxt-f7k-unsplash.jpg   600w,
											/content/images/size/w1000/2021/05/tengyart-pNq5uxt-f7k-unsplash.jpg 1000w
										"
										sizes="(max-width:432px) 400px, (max-width:696px) 600px, (max-width:767px) 671px, 400px"
										src="/content/images/size/w250/2021/05/tengyart-pNq5uxt-f7k-unsplash.jpg"
										alt="Self-observation is the first step of inner unfolding"
									/>
								</a>
								<div class="post-info-wrap">
									<div class="flex post-top-meta" style={{alignItems:"center"}}>
										<div class="tag-wrap">
											<a href="/tag/lifestyle/">Lifestyle</a>
										</div>
										<div
											class="featured-icon"
											aria-label="Featured post icon"
										>
                                    
											<img src={Star}/>
										</div>
									</div>
									<h2 class="h3 post-title">
										<a
											href="/self-observation-is-the-first-step-of-inner-unfolding/"
											>Self-observation is the first step of
											inner unfolding</a
										>
									</h2>
									<div class="post-excerpt">
										Almost instantly the whole truth of the
										transaction seemed to rush upon her mind, and
										her wrath was inconceivably violent. She
										asked me a thousand questions in a breath;
										but, fortunately, was too vehement to attend
										to my embarrassment, which must otherwise
										have betrayed my knowledge of the deceit.
										Revenge
									</div>
									<div class="post-meta flex" style={{alignItems:"center"}}>
                                    	<div
											class="posted-by"
											
										>
                                    
											<img src={Author}/>
										</div>
										<time class="post-date" datetime="2021-05-02"
											>May 02, 2021</time
										>
										<span class="read-time">3 min read</span>
										<span class="visibility">Public</span>
									</div>
								</div>
							</article>
							
						</div>
					</div>
                    	<div class="row">
					<div class="col">
						<div
							class="pagination-wrap text-center"
							id="pagination-wrap"
						>
							<button class="btn" id="load-more">
								<span>Show more posts</span>
							</button>
						</div>
					</div>
				</div>
                    </>
    )
}

export default HomeBlogs
