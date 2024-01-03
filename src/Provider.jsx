import { createContext, useState, useEffect } from 'react'
import useWindowWidth from './hooks/useWindowWidth';

export const Context = createContext();

const Provider = ({ children }) => {
    const windowWidth = useWindowWidth();

    const [tab, setTab] = useState(parseInt(localStorage.getItem("tab")) || 0);
    const [showImage, setShowImage] = useState(false);
    const [imageSrc, setImageSrc] = useState("");
    const [videoSrc, setVideoSrc] = useState("");

    useEffect(() => {
        if (windowWidth > 1200) {
            if (tab === 0) setTab(1);
            else if (tab === 1) setTab(1);
            else if (tab === 2) setTab(2);
        }
    }, [windowWidth, tab]);

    useEffect(() => {
        if (showImage) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
    }, [showImage]);

    return (
        <Context.Provider value={{
            tab, setTab,
            showImage, setShowImage,
            imageSrc, setImageSrc,
            videoSrc, setVideoSrc
        }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;