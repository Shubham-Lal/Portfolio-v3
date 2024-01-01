import './style.css'

const Left = () => {
    return (
        <div className="left__container">
            <div className="image__container">
                <img src="/Pratik.jpeg" alt="Pratik" />
            </div>
            <div className="info__conatiner">
                <p className="name">Pratik Prasad</p>
                <p className="profession">Photography & Graphic Design</p>
                <a className="website" href="/">www.pratikprasad.com</a>
                <p className="location">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4808 -20688 14.286 20" fill="#959595" width="8px" style={{ marginRight: "5px", transform: "translateY(1px)" }}><g><path d="M-4800.857-20688a7.143 7.143 0 0 0-7.143 7.143c0 5.714 7.143 12.857 7.143 12.857s7.143-7.143 7.143-12.857a7.142 7.142 0 0 0-7.143-7.143zm0 10a2.857 2.857 0 1 1 2.857-2.859 2.858 2.858 0 0 1-2.857 2.859z"></path></g></svg>
                    Kolkata, India
                </p>
            </div>
            <div className='buttons__container'>
                <a
                    href='https://instagram.com/pratikprsd'
                    target="_blank" rel="noopener noreferrer"
                >
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" style={{ width: "18px", fill: "#f5f8ff", backgroundColor: "#0057ff", borderRadius: "20px", marginRight: "7px" }}><path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm5,8.5a.5.5,0,0,1-.5.5H10v3.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V10H4.5A.5.5,0,0,1,4,9.5v-1A.5.5,0,0,1,4.5,8H8V4.5A.5.5,0,0,1,8.5,4h1a.5.5,0,0,1,.5.5V8h3.5a.5.5,0,0,1,.5.5Z"></path></svg>
                    Follow
                </a>
                <a
                    href='https://api.whatsapp.com/send?phone=8910503408&text=Namaste Pratik'
                    target="_blank" rel="noopener noreferrer"
                >
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" style={{ width: "18px", fill: "#0057ff", marginRight: "7px" }}><path d="M9,10.094l9-6.7615v-.75A.5735.5735,0,0,0,17.4375,2H.5625A.57351.57351,0,0,0,0,2.5835V3.318Z"></path><polygon points="12.389 8.981 18 13.184 18 6.667 18 4.771"></polygon><path d="M11.433,9.7,9.645,11.047a1.086,1.086,0,0,1-1.29,0L6.541,9.6875,0,14.534v.883A.573.573,0,0,0,.5625,16h16.875A.573.573,0,0,0,18,15.417v-.795Z"></path><polygon points="5.582 8.969 0 4.756 0 6.667 0 13.097"></polygon></svg>
                    Message
                </a>
            </div>
        </div>
    )
}

export default Left