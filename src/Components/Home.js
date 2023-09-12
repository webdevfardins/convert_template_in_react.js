import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
           <div className="container">
        <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div className="post-preview">
                    <Link to="post">
                        <h2 className="post-title">
                            Man must explore, and this is exploration at its greatest
                        </h2>
                        <h3 className="post-subtitle">
                            Problems look mighty small from 150 miles up
                        </h3>
                    </Link>
                    <p className="post-meta">Posted by <Link to="/post">Start Bootstrap</Link> on September 24, 2014</p>
                </div>
                <hr/>
                <div className="post-preview">
                    <Link to="post.html">
                        <h2 className="post-title">
                            I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
                        </h2>
                    </Link>
                    <p className="post-meta">Posted by <Link to="/post">Start Bootstrap</Link> on September 18, 2014</p>
                </div>
                <hr/>
                <div className="post-preview">
                    <Link to="/post">
                        <h2 className="post-title">
                            Science has not yet mastered prophecy
                        </h2>
                        <h3 className="post-subtitle">
                            We predict too much for the next year and yet far too little for the next ten.
                        </h3>
                    </Link>
                    <p className="post-meta">Posted by <Link to="/post">Start Bootstrap</Link> on August 24, 2014</p>
                </div>
                <hr/>
                <div className="post-preview">
                    <Link to="/post">
                        <h2 className="post-title">
                            Failure is not an option
                        </h2>
                        <h3 className="post-subtitle">
                            Many say exploration is part of our destiny, but it’s actually our duty to future generations.
                        </h3>
                    </Link>
                    <p className="post-meta">Posted by <Link to="/post">Start Bootstrap</Link> on July 8, 2014</p>
                </div>
                <hr/>
                
                <ul className="pager">
                    <li className="next">
                        <Link to="/post">Older Posts &rarr;</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <hr/>
    </div>
  )
}
