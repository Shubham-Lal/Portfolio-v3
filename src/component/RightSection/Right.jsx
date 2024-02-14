import './style.css'
import useWindowWidth from '../../hooks/useWindowWidth'
import { useContext } from 'react'
import { Context } from '../../Provider'
import { photo } from '../../data/photo'
import { graphic } from '../../data/graphic'
import useRearrangedImg from '../../hooks/useRearrangedImg'
import About from '../About'
import Links from '../Links'

const Right = () => {
    const windowWidth = useWindowWidth();
    const { tab, setTab } = useContext(Context);

    return (
        <div className='right__container'>
            <div className="all__left__buttons">
                {!(windowWidth > 1200) && (
                    <button
                        className={`${tab === 0 && "active"}`}
                        onClick={() => {
                            localStorage.setItem("tab", 0);
                            setTab(0);
                        }}
                    >
                        Info
                    </button>
                )}
                <button
                    className={`${tab === 1 && "active"}`}
                    onClick={() => {
                        localStorage.setItem("tab", 1);
                        setTab(1);
                    }}
                >
                    Photography
                </button>
                <button
                    className={`${tab === 2 && "active"}`}
                    onClick={() => {
                        localStorage.setItem("tab", 2);
                        setTab(2);
                    }}
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
        <div className="information__container">
            <Links />
            <About />
        </div>
    )
}

const Photography = () => {
    const { setShowMedia, setMediaSrc } = useContext(Context);
    const rearrangedImages = useRearrangedImg(photo);

    return (
        <div className="right__image__container">
            <div className="right__image__wrapper">
                {rearrangedImages.map(item => item && (
                    <div
                        key={item.id}
                        className="right__image__card"
                        onClick={() => {
                            if (item.image) {
                                setMediaSrc({
                                    id: item.id - 1,
                                    category: "photo",
                                    type: "image",
                                    src: item.image
                                });
                            }
                            else if (item.video) {
                                setMediaSrc({
                                    id: item.id - 1,
                                    category: "photo",
                                    type: "video",
                                    src: item.video
                                });
                            }
                            setShowMedia(true);
                        }}
                    >
                        {item?.image ? (
                            <img src={`${item.image}&w=600&lazy=load`} alt="" key={item.id} />
                        ) : item?.video && (
                            <video src={item.video} autoPlay loop muted></video>
                        )}
                        <div className="card__info photo">
                            <div className="info__top">
                                <div>{item.date}</div>
                                <div>
                                </div>
                            </div>
                            <div className="info__bottom">
                                Name section ({item.name})
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const GraphicDesign = () => {
    const { setShowMedia, setMediaSrc } = useContext(Context);
    const rearrangedImages = useRearrangedImg(graphic);

    return (
        <div className="right__image__container">
            <div className="right__image__wrapper">
                {rearrangedImages.map(item => item && (
                    <div
                        key={item.id}
                        className="right__image__card"
                        onClick={() => {
                            setMediaSrc({
                                id: item.id - 1,
                                category: "graphic",
                                type: "image",
                                src: item.image
                            });
                            setShowMedia(true);
                        }}
                    >
                        {item.image && (
                            <img src={item.image} alt="" key={item.id} />
                        )}
                        <div className="card__info graphic">
                            <div className="info__top">
                                <div>{item.date}</div>
                                <div>
                                    {/* Used section */}
                                </div>
                            </div>
                            <div className="info__bottom">
                                {item.name}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Right