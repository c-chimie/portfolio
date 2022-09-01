import React from 'react'
import "./Projects.css";
import reelreviews from './reelreviews.png'

const Projects = () => {
    return (
        <div id="project" className='project'>
            <h1 className='project-header'>Portfolio:</h1>
            <div className='project-container'>
                <div className="card mb-3">
                    <img src={reelreviews} className="card-img-top" alt="Reel Reviews" />
                    <div className="card-body">
                        <p className="card-text">A movie watchlist app where you can discover top trending movies, search for any movie, generate a random movie, create your own personal watchlist, and keep track of what you’ve watched.</p>
                        <div className="buttons">
                            <a className='anchor' href="https://reelreviews.vercel.app/" target="_blank">Live</a>
                            <a className='anchor' href="https://github.com/c-chimie/Movie-Website-Final-Project/tree/master" target="_blank">Repo</a>
                            <a className='anchor' href="https://www.youtube.com/watch?v=L4fWYJLL3Oc&t=1s" target="_blank">Demo</a>
                        </div>
                    </div>
                </div>
            </div >
        </div >


    )
}

export default Projects;