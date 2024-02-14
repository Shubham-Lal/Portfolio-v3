import { createContext, useState, useEffect } from 'react'
import useWindowWidth from './hooks/useWindowWidth';

export const Context = createContext();

const Provider = ({ children }) => {
    const windowWidth = useWindowWidth();

    const [tab, setTab] = useState(parseInt(localStorage.getItem("tab")) || 0);
    const [showMedia, setShowMedia] = useState(false);
    const [mediaSrc, setMediaSrc] = useState({
        id: null,
        category: "",
        type: "",
        src: ""
    });

    useEffect(() => {
        if (windowWidth > 1200) {
            if (tab === 0) setTab(1);
            else if (tab === 1) setTab(1);
            else if (tab === 2) setTab(2);
        }
    }, [windowWidth, tab]);

    useEffect(() => {
        if (showMedia) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
    }, [showMedia]);

    return (
        <Context.Provider value={{
            tab, setTab,
            showMedia, setShowMedia,
            mediaSrc, setMediaSrc
        }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;