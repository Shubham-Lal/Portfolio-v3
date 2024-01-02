import './style.css'
import useWindowWidth from '../../hooks/useWindowWidth';
import { useContext } from 'react'
import { Context } from '../../Provider'
import { webLinks } from '../../data/webLinks';
import { links } from '../../data/links';

const Right = () => {
    const windowWidth = useWindowWidth();
    const { tab, setTab } = useContext(Context);

    return (
        <div className='right__container'>
            <div className="all__left__buttons">
                {!(windowWidth > 1200) && (
                    <button
                        className={`${tab === 0 && "active"}`}
                        onClick={() => setTab(0)}
                    >
                        Info
                    </button>
                )}
                <button
                    className={`${tab === 1 && "active"}`}
                    onClick={() => setTab(1)}
                >
                    Photography
                </button>
                <button
                    className={`${tab === 2 && "active"}`}
                    onClick={() => setTab(2)}
                >
                    Graphic Design
                </button>
            </div>

            {tab === 0 ? <Info /> : tab === 1 ? <Photography /> : tab === 2 ? <GraphicDesign /> : <></>}
        </div>
    )
}

const Info = () => {
    return (
        <>
            <div className="webLinks__container">
                <p>ON THE WEB</p>
                <div className="icon__conatiner">
                    {webLinks.map((item, i) => (
                        <a
                            title={item.name}
                            href={item.link}
                            target="_blank" rel="noopener noreferrer"
                            className="icon"
                            key={i}
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
            <div className="links__container">
                <p>LINKS</p>
                <div className="link__conatiner">
                    {links.map((item, i) => (
                        <a
                            title={item.name}
                            href={item.link}
                            target="_blank" rel="noopener noreferrer"
                            className={`link ${(links.length - 1) !== i && "not-last"}`}
                            key={i}
                        >
                            <p>{item.name}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.125 15.194" aria-labelledby="IconBase-title-5e94d183-b161-4668-be42-569a5fcf3c5c IconBase-description-5e94d183-b161-4668-be42-569a5fcf3c5c" role="graphics-symbol img" width="100%" height="100%" fill="none"><desc id="IconBase-description-5e94d183-b161-4668-be42-569a5fcf3c5c">opens in a new tab or window</desc><g><path d="M12.657 3.475H7.501A1.875 1.875 0 005.626 5.35v2.344 M9.844 6.288l2.813-2.812L9.844.663 M10.782 9.1v4.688a.938.938 0 01-.937.938H1.407a.938.938 0 01-.937-.937v-7.5a.938.938 0 01.938-.937h1.405"></path></g></svg>
                        </a>
                    ))}
                </div>
            </div>
            <div className="about__container">
                <p>ABOUT</p>
                <p>
                    Hello I am Pratik Prasad.
                    <br />
                    <br />
                    My compassion for my gear and making moments alive with my camera is the spirit which has kept me alive, and I really want to keep my vigour burning with this attitude till I meet my grave and put to rest.
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
        </>
    )
}

const Photography = () => {
    return (
        <div>
            This is Photography section.
        </div>
    )
}

const GraphicDesign = () => {
    return (
        <div>
            This is Graphic Design section.
        </div>
    )
}

export default Right