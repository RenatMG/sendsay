import React, {useEffect} from 'react';
import classes from './Scroll.module.scss'

const Scroll = ({children, scroll = true, drag = true}) => {

    useEffect(() => {
        const scrollActions = document.getElementById('scrollActions')
        if (scroll && drag) {
            scrollActions.addEventListener('mousedown', initDrag, false);
        }
        let startX;

        function initDrag(e) {
            if (e.target.id === 'scrollActions') {
                startX = e.clientX;
                document.documentElement.addEventListener('mousemove', doDrag, false);
                document.documentElement.addEventListener('mouseup', stopDrag, false);
            }
        }


        function doDrag(e) {
            let step = e.clientX > startX ? -(e.clientX - startX) : (startX - e.clientX);
            scrollActions.scrollTop = scrollActions.scrollTop + step;
            startX = e.clientX;
        }

        function stopDrag() {
            document.documentElement.removeEventListener('mousemove', doDrag, false);
            document.documentElement.removeEventListener('mouseup', stopDrag, false);
        }

        return () => {
            scrollActions.removeEventListener('mousedown', initDrag, false);
        }


    }, [scroll])

    const cls = [classes.scroll]
    cls.push(scroll ? 'drag' : '');
    return (

        <div id='scrollActions'
             className={cls.join(' ')}
            // className={classes.scroll}

             style={{pointerEvents: scroll ? 'auto' : 'none'}}>
            {children}
        </div>

    );
};

export default Scroll;

