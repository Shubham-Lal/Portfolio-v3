import './style.css'
import About from '../About'
import Links from '../Links'

const Left = () => {
    return (
        <div className="left__container">
            <div className="image__container">
                <img src="/Pratik.jpeg" alt="Pratik" />
            </div>
            <div className="info__conatiner">
                <p className="name">Pratik Prasad</p>
                <p className="profession">Photography & Graphic Design</p>
                <a className="website" href="https://www.linkedin.com/in/pratik-prasad/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/pratik-prasad
                </a>
                <p className="location">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4808 -20688 14.286 20" fill="#959595" width="8px" style={{ marginRight: "5px", transform: "translateY(1px)" }}><g><path d="M-4800.857-20688a7.143 7.143 0 0 0-7.143 7.143c0 5.714 7.143 12.857 7.143 12.857s7.143-7.143 7.143-12.857a7.142 7.142 0 0 0-7.143-7.143zm0 10a2.857 2.857 0 1 1 2.857-2.859 2.858 2.858 0 0 1-2.857 2.859z"></path></g></svg>
                    Kolkata, India
                </p>
            </div>
            <div className="buttons__container">
                <a
                    href='https://instagram.com/pratikprsd'
                    target="_blank" rel="noopener noreferrer"
                >
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" style={{ width: "18px", fill: "#f5f8ff", backgroundColor: "#0057ff", borderRadius: "20px", marginRight: "7px" }}><path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm5,8.5a.5.5,0,0,1-.5.5H10v3.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V10H4.5A.5.5,0,0,1,4,9.5v-1A.5.5,0,0,1,4.5,8H8V4.5A.5.5,0,0,1,8.5,4h1a.5.5,0,0,1,.5.5V8h3.5a.5.5,0,0,1,.5.5Z"></path></svg>
                    Follow
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=+918910503408&text=Hello Pratik, how was your day?"
                    target="_blank" rel="noopener noreferrer"
                >
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" style={{ width: "18px", fill: "#0057ff", marginRight: "7px" }}><path d="M9,10.094l9-6.7615v-.75A.5735.5735,0,0,0,17.4375,2H.5625A.57351.57351,0,0,0,0,2.5835V3.318Z"></path><polygon points="12.389 8.981 18 13.184 18 6.667 18 4.771"></polygon><path d="M11.433,9.7,9.645,11.047a1.086,1.086,0,0,1-1.29,0L6.541,9.6875,0,14.534v.883A.573.573,0,0,0,.5625,16h16.875A.573.573,0,0,0,18,15.417v-.795Z"></path><polygon points="5.582 8.969 0 4.756 0 6.667 0 13.097"></polygon></svg>
                    Message
                </a>
            </div>
            <div className="hire__container">
                <p className="hire__text">Hire Pratik</p>
                <a
                    className="hire__button"
                    href="https://api.whatsapp.com/send?phone=+918910503408&text=Hello Pratik, how was your day?"
                    target="_blank" rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g transform="translate(0.625 0.625)"><g transform="translate(0 0)"><path d="M14.375,8.759A5.625,5.625,0,1,1,8.75,14.384,5.631,5.631,0,0,1,14.375,8.759Zm0,10A4.375,4.375,0,1,0,10,14.384,4.38,4.38,0,0,0,14.375,18.759Z" transform="translate(-0.625 -0.634)"></path><path d="M16.585,15.009h-2.21a.625.625,0,0,1-.625-.625v-2.21a.625.625,0,0,1,1.25,0v1.585h1.585a.625.625,0,0,1,0,1.25Z" transform="translate(-0.625 -0.634)"></path><path d="M8.75,9.384H4.375a.625.625,0,0,1,0-1.25H8.75a.625.625,0,0,1,0,1.25Z" transform="translate(-0.625 -0.634)"></path><path d="M6.875,12.509h-2.5a.625.625,0,0,1,0-1.25h2.5a.625.625,0,0,1,0,1.25Z" transform="translate(-0.625 -0.634)"></path><path d="M6.875,15.634h-2.5a.625.625,0,0,1,0-1.25h2.5a.625.625,0,0,1,0,1.25Z" transform="translate(-0.625 -0.634)"></path><path d="M8.125,20.009H1.875A1.875,1.875,0,0,1,0,18.134V5.009A1.877,1.877,0,0,1,1.875,3.134H4.427a3.751,3.751,0,0,1,7.4,0h2.552A1.877,1.877,0,0,1,16.25,5.009V6.884a.625.625,0,1,1-1.25,0V5.009a.626.626,0,0,0-.625-.625H11.25a.625.625,0,0,1-.625-.625,2.5,2.5,0,0,0-5,0A.625.625,0,0,1,5,4.384H1.875a.626.626,0,0,0-.625.625V18.134a.625.625,0,0,0,.625.625h6.25a.625.625,0,0,1,0,1.25Z" transform="translate(-0.625 -0.634)"></path><path d="M8.125,4.384a.937.937,0,1,1,.938-.937A.939.939,0,0,1,8.125,4.384Z" transform="translate(-0.625 -0.634)"></path></g></g></svg>
                    <div className="hire__button__text">
                        <p>Freelance/Internship</p>
                        <p>Availability: Immediate</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13.42" viewBox="0 0 8 13.42"><path d="M1.28,0a1.07,1.07,0,0,1,.25,0L1.77.1A.91.91,0,0,1,2,.21,1.2,1.2,0,0,1,2.2.38L7.62,5.8a1.52,1.52,0,0,1,.28.43,1.15,1.15,0,0,1,.1.48,1.16,1.16,0,0,1-.1.49,1.34,1.34,0,0,1-.28.42L2.2,13a1.42,1.42,0,0,1-.43.29,1.32,1.32,0,0,1-.48.09,1.37,1.37,0,0,1-.49-.09A1.1,1.1,0,0,1,.38,13a1.34,1.34,0,0,1-.28-.42,1.23,1.23,0,0,1,0-1,1.34,1.34,0,0,1,.28-.42L4.9,6.72.38,2.18A1.34,1.34,0,0,1,.1,1.76a1.23,1.23,0,0,1,0-1A1.34,1.34,0,0,1,.38.38L.58.21A.65.65,0,0,1,.8.1L1,0a1,1,0,0,1,.24,0Z"></path></svg>
                </a>
            </div>
            <div className="info__container">
                <Links />
                <About />
            </div>
        </div>
    )
}

export default Left