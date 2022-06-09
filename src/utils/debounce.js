import {useRef} from "react";

export const debounce = function (callback, delay) {
    let timerRef = useRef();
    return function () {    
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => callback(), delay);
    };
};
