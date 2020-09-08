import React from 'react';
import classes from './Scroll.module.scss'

class Scroll extends React.Component {

    initScroll = () => {
        const scrollActions = this.scrollRef.current
        scrollActions.addEventListener('wheel', this.doScroll);
        scrollActions.addEventListener('mouseleave', this.stopScroll);
    }

    doScroll = (e) => {
        if (this.props.scroll) {
            const scrollActions = this.scrollRef.current
            let delta = e.deltaY || e.detail || e.wheelDelta;
            let step = delta > 0 ? 40 : -40

            if (scrollActions.scrollLeft + step < 0) {
                scrollActions.scrollLeft = 0
            } else {
                scrollActions.scrollLeft = scrollActions.scrollLeft + step;
            }
        }
    }

    stopScroll = () => {
        const scrollActions = this.scrollRef.current
        scrollActions.removeEventListener('wheel', this.doScroll, false);
    }

    // scrollToStart = () => {
    //     const scrollActions = this.scrollRef.current
    //     scrollActions.scrollTo({
    //         left: 0,
    //         behavior: "smooth"
    //     });
    // }

    componentDidMount() {
        const scrollActions = this.scrollRef.current
        if (this.props.scroll) {
            scrollActions.addEventListener('mouseenter', this.initScroll);
        }
    }


    scrollRef = React.createRef()

    render() {
        const {children, scroll} = this.props

        return (
            <div id='scrollActions'
                 ref={this.scrollRef}
                 className={classes.scroll}
                 style={{pointerEvents: scroll ? 'auto' : 'none'}}>
                {children}
                <div className={classes.plug}/>
            </div>
        );
    }
};

export default Scroll;


