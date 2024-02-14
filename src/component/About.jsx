import { useState } from 'react'

const About = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="about__container">
            <p>ABOUT</p>
            <p>
                Passionate about turning ideas into visual masterpieces, I am Pratik Prasad, a dedicated graphic designer with a keen eye for detail and a love for creative expression.
                {showMore && (
                    <> My mission is to bring your vision to life through stunning and effective design. I believe that design goes beyond aesthetics; it&apos;s about telling a story, conveying a message, and creating a lasting impression. I strive to blend innovation with timeless principles to deliver designs that resonate with your audience.</>
                )}
                <span
                    onClick={() => setShowMore(!showMore)}
                    style={{ fontWeight: 'bold', cursor: 'pointer', marginLeft: '3px', textDecoration: showMore && "underline" }}
                >
                    {showMore ? 'Show less' : 'Read More...'}
                </span>
                <br />
                <br />
                Contact:
                <br />
                <a
                    href="https://api.whatsapp.com/send?phone=+918910503408&text=Hello Pratik, how was your day?"
                    target="_blank" rel="noopener noreferrer"
                >
                    +91 8910503408
                </a>
                <br />
                <a
                    href="mailto:prasadpratik31082001@gmail.com"
                    target="_blank" rel="noopener noreferrer"
                >
                    prasadpratik31082001@gmail.com
                </a>
            </p>
        </div>
    )
}

export default About