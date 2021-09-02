import React, {createContext, useContext, useMemo, useState} from 'react';
import FullPageLoader from "../../components/FullPageLoader";

type valueType = {
    isLoader: boolean,
    setIsLoader: Function,
}

const initStates: valueType = {isLoader: false, setIsLoader: () => {}};

const FullPageLoaderContext = createContext({isLoader: initStates.isLoader} as valueType);

export const useFullPageLoaderContext = () => useContext(FullPageLoaderContext);

interface providerProps {
    children: [React.ReactNode] | React.ReactNode
}

const FullPageLoaderProvider: React.FC<providerProps> = ({children}: providerProps) => {
    const [isLoader, setIsLoader] = useState<boolean>(initStates.isLoader);

    const value: valueType = useMemo((): valueType => ({isLoader, setIsLoader}), [isLoader]);

    return <>
        <FullPageLoaderContext.Provider value={value}>
            <FullPageLoader/>
            {children}
        </FullPageLoaderContext.Provider>
    </>

}

export default FullPageLoaderProvider;
