import { createContext, useState, useEffect } from 'react'
import useWindowWidth from './hooks/useWindowWidth';

export const Context = createContext();

const Provider = ({ children }) => {
    const windowWidth = useWindowWidth();

    const [tab, setTab] = useState(0);

    useEffect(() => {
        if (windowWidth > 1200) {
            if (tab === 0) setTab(1);
            else if (tab === 1) setTab(1);
            else if (tab === 2) setTab(2);
        }
    }, [windowWidth, tab]);

    return (
        <Context.Provider value={{ tab, setTab }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;