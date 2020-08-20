import React, {Component} from 'react';
import classes from './ActionChip.module.scss'
import Menu from "../../svg/Menu";


class ActionChip extends Component {
    state = {
        params: {}
    }
    chip = React.createRef()

    setParamsHandler = () => {
        const {top, left, width} = this.chip.current.getBoundingClientRect();
        this.setState({params: {top, left, width}});
    }

    blockWheel = (evt) => {
        evt.preventDefault();
    };


    componentDidMount = () => {

        const chip = this.chip.current

        this.setParamsHandler()
        chip.parentElement.addEventListener('scroll', (evt) => {
            this.setParamsHandler()
        });

        if (!this.props.scroll) {
            chip.addEventListener('wheel', this.blockWheel)
        }
        return () => {
            chip.removeEventListener('wheel', this.blockWheel)
        }

    }


    render() {
        const {action: {id, title, status}, menuParamsHandler} = this.props

        return (
            <div ref={this.chip} id={id} className={classes.actionChip}
                 onClick={() => menuParamsHandler(this.state.params)}>
                <div className={`${classes.actionChip__status} ${status === 1 ? 'success' : 'danger'}`}/>
                <div className={classes.actionChip__title}>{title}</div>
                <div className={classes.actionChip__menu}>
                    <Menu/>
                </div>
            </div>
        );
    }
}


export default ActionChip;

