import "./Newsletter.css";

function Newsletter() {
    return (
        <div className="newsletter__container">

            <div className="newsletter__contact">
                <h5 className="newsletter__title">Join Our Newsletter</h5>
                <form>
                    <label className="newsletter__email-label">Email</label>
                    <input className="newsletter__email-input" type="text"></input>
                    <button className="newsletter__button">Join</button>
                </form>
            </div>



        </div>
    )
}

export default Newsletter;