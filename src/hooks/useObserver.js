import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef(); // не терять от рендера к рендеру

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        var cb = function (entries, observer) {
          if (entries[0].isIntersecting && canLoad) {
             callback();
          }
        };
        // console.log('render UE observe', Date.now());
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current);
    }, [isLoading]);
}