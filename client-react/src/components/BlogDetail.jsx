import React from 'react'

function BlogDetail() {
    return (
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
            <article class="single-post">
                    <header class="post-header">
                        <h1 class="post-title">
                            The mind and body are not separate. what affects one, affects the other
                        </h1>
                        <div class="post-meta flex">
                            <div class="author-list flex">
                                    <a class="author-image" href="/author/harini/" aria-label="Harini Banerjee">
                                        <img src="/content/images/size/w250/2021/05/harini.jpg" loading="lazy" alt="Harini Banerjee"/>
                                    </a>
                                <a href="/author/harini/" class="author-name">Harini Banerjee</a>&nbsp;
                                
                            </div>
                            <time class="post-date" datetime="2021-03-28">Mar 28, 2021</time>
                            <span class="read-time">3 min read</span>
                        </div>
                    </header>
                    <div class="featured-image-wrap">
                        <img class="featured-image" loading="lazy"
                            srcset="/content/images/size/w400/2021/05/timur-romanov-VfOx0mL70xU-unsplash.jpg 400w,
                                /content/images/size/w600/2021/05/timur-romanov-VfOx0mL70xU-unsplash.jpg 600w,
                                /content/images/size/w1000/2021/05/timur-romanov-VfOx0mL70xU-unsplash.jpg 1000w,"
                            sizes="(max-width: 432px) 400px, (max-width: 696px) 600px, 1000px"
                            src="/content/images/size/w1000/2021/05/timur-romanov-VfOx0mL70xU-unsplash.jpg" alt="The mind and body are not separate. what affects one, affects the other"/>
                    </div>
                    <div class="post-content">
                        <p>his recital put the Captain into an ecstasy; he went from the lady to the gentleman, and from the gentleman to the lady, to enjoy alternately the sight of their distress. He really shouted with pleasure; and, shaking Monsieur Du Bois strenuously by the hand, wished him joy of having touched English ground; and then he held a candle to Madame Duval, that he might have a more complete view of her disaster, declaring repeatedly, that he had never been better pleased in his life.</p><p>The rage of poor Madame Duval was unspeakable; she dashed the candle out of his hand, stamping upon the floor, and, at last, spat in his face.</p>



                    </div>
                
                </article>
            </div>
        </div>
    )
}

export default BlogDetail
