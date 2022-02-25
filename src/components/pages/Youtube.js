import "./Youtube.css"

function Youtube() {
    return (
        <div className="youtube__container">
            <div>
                <h2 className="youtube__playlist-title">Mat's garage</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL89dbUGwPeWtfagWqIdkNR2HY-rE3sZPz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                <h2 className="youtube__playlist-title">Resume de livre</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL89dbUGwPeWu8AitARHf3M3jYEuPMlhvv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                <h2 className="youtube__playlist-title">F5 programming technique</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL89dbUGwPeWuaT9ZLFh3uEWM5uQcrVtuX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                <h2 className="youtube__playlist-title">Archives Podcast</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL89dbUGwPeWtNALorEaK0A3VQm3VfLWJ9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                <h2 className="youtube__playlist-title">F5 programming lifestyle</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL89dbUGwPeWvJX71qmaeDziH5fZH3FPi_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </div>
    )
}

export default Youtube;