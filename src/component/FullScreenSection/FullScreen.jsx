import './style.css'
import { useContext, useEffect, useMemo, useState } from 'react'
import { Context } from '../../Provider'
import { photo } from '../../data/photo'
import { graphic } from '../../data/graphic'
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'

const FullScreen = () => {
    const { setShowMedia, mediaSrc, setMediaSrc, } = useContext(Context);
    const [currIndex, setCurrIndex] = useState(mediaSrc.id);
    const [loading, setLoading] = useState(false);

    const revPhotoArr = useMemo(() => [...photo].reverse(), []);
    const revGraphicArr = useMemo(() => [...graphic].reverse(), []);

    const handlePrev = () => {
        if (mediaSrc.category === "photo") {
            if (currIndex >= photo.length - 1) return;
            setCurrIndex(prev => prev + 1);
            setLoading(true);
        }
        else {
            if (currIndex >= graphic.length - 1) return
            setCurrIndex(prev => prev + 1);
            setLoading(true);
        }
    };

    const handleNext = () => {
        if (currIndex <= 0) return
        setCurrIndex(prev => prev - 1);
        setLoading(true);
    }

    useEffect(() => {
        if (currIndex !== mediaSrc.id) {
            if (mediaSrc.category === "photo") {
                if (currIndex !== 51) {
                    setMediaSrc({
                        id: currIndex,
                        category: "photo",
                        type: "image",
                        src: revPhotoArr[currIndex].image
                    });
                }
                else {
                    setMediaSrc({
                        id: currIndex,
                        category: "photo",
                        type: "video",
                        src: revPhotoArr[currIndex].video
                    });
                }
            }
            else {
                setMediaSrc({
                    id: currIndex,
                    category: "graphic",
                    type: "image",
                    src: revGraphicArr[currIndex].image
                });
            }
            setLoading(false);
        }
    }, [currIndex, mediaSrc.id, mediaSrc.category, setMediaSrc, revPhotoArr, revGraphicArr]);

    return (
        <div className="view__image">
            <div
                className="close__button"
                onClick={() => {
                    setMediaSrc({
                        id: null,
                        category: "",
                        type: "",
                        src: ""
                    });
                    setShowMedia(false);
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
            </div>
            <div>
                <button
                    onClick={handlePrev}
                    disabled={mediaSrc.category === "photo" ? (
                        currIndex >= photo.length - 1
                    ) : currIndex >= graphic.length - 1}
                >
                    <BiSolidLeftArrow />
                </button>
                <button
                    onClick={handleNext}
                    disabled={currIndex <= 0}
                >
                    <BiSolidRightArrow />
                </button>
            </div>
            <div className="image__gallery">
                <div className="waiting__logo">
                    <svg width="30" height="30" viewBox="0 0 16 16" fill="none" data-view-component="true">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" vectorEffect="non-scaling-stroke" fill="none"></circle>
                        <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke"></path>
                    </svg>
                </div>
                {!loading && (
                    mediaSrc.category === "photo" ? mediaSrc.type === "image" ? (
                        <img src={mediaSrc.src} alt="" />
                    ) : (
                        <video src={mediaSrc.src} autoPlay loop controls></video>
                    ) : mediaSrc.category === "graphic" && <img src={mediaSrc.src} alt="" />
                )}
            </div>
        </div>
    )
}

export default FullScreen