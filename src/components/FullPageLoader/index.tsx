import React, {useEffect} from 'react';
import './styles.css';
import {useFullPageLoaderContext} from "../../context/fullPageLoader";

interface propTypes {
}

const FullPageLoader: React.FC<propTypes> = (props: propTypes) => {

    const {isLoader} = useFullPageLoaderContext();

    useEffect(
        (): void => {
            document.getElementsByTagName('body')[0].style.overflow = isLoader ? "hidden" : "unset"
        },
        [isLoader]
    )

    return <>
        {
            isLoader &&
			<div className="full-page-loader">
				loading...
			</div>
        }
    </>
};

export default FullPageLoader
