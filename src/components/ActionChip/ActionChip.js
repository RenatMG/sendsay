import React, {Component} from 'react';
import classes from './ActionChip.module.scss'
import Menu from "../../svg/Menu";


class ActionChip extends Component {
    state = {
        top: 0,
        left: 0,
        width: 0
    }
    chip = React.createRef()

    setParamsHandler = () => {
        const {top, left, width} = this.chip.current.getBoundingClientRect();
        this.setState({top, left, width, id: this.chip.current.id});
    }

    scrollActions = (el, left) => {
        el.scrollTo({
            left,
            behavior: "smooth"
        });
    }

    chipHandler = () => {
        const {left, width} = this.state
        const chip = this.chip.current
        if (width + left > window.innerWidth - 50) {
            this.scrollActions(chip.parentElement, chip.parentElement.scrollLeft - ((window.innerWidth - 55) - (width + left)))
        } else if (left < 25) {
            let offset = chip.parentElement.scrollLeft + left - 20
            this.scrollActions(chip.parentElement, offset)
        }
        if (!this.props.scroll) {
            this.props.closeMenuHandler()
        }
    }

    componentDidMount = () => {
        const chip = this.chip.current
        this.setParamsHandler()
        chip.parentElement.addEventListener('scroll', (evt) => {
            this.setParamsHandler()
        });
    }


    render() {
        const {action: {id, title, status}, menuParamsHandler} = this.props

        return (
            <div ref={this.chip} id={id} className={classes.actionChip}>
                <div className={classes.actionChip__click} onClick={this.chipHandler}>
                    <div className={`${classes.actionChip__status} ${status === 1 ? 'success' : 'danger'}`}/>
                    <div className={classes.actionChip__title}>{title}</div>
                </div>
                <div className={classes.actionChip__menu} onClick={() => menuParamsHandler(this.state)}>
                    <Menu/>
                </div>
            </div>
        );
    }
}


export default ActionChip;

