import './style.css'
import { useContext } from 'react'
import { Context } from '../../Provider'

const FullScreen = () => {
    const { showImage, setShowImage, imageSrc, setImageSrc, videoSrc, setVideoSrc } = useContext(Context);

    if (showImage && (imageSrc || videoSrc)) {
        return (
            <div className="view__image">
                <div
                    className="close__button"
                    onClick={() => {
                        setImageSrc("");
                        setVideoSrc("");
                        setShowImage(false);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg"  height="20" width="20" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </div>
                <div className="image__gallery">
                    <div className="waiting__logo">
                        <svg width="30" height="30" viewBox="0 0 16 16" fill="none" data-view-component="true">
                            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" vectorEffect="non-scaling-stroke" fill="none"></circle>
                            <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke"></path>
                        </svg>
                    </div>
                    {imageSrc ? (
                        <img src={imageSrc} alt="" />
                    ) : videoSrc && (
                        <video src={videoSrc} autoPlay loop controls></video>
                    )}
                </div>
            </div>
        )
    }
}

export default FullScreen