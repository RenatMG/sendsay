import React, {useEffect, useState} from 'react';
import classes from './DropDownMenu.module.scss';
import Divider from "../Divider/Divider";
import {CSSTransition, Transition} from "react-transition-group";

const DropDownMenu = ({top = 0, left = 0, right, width = 0, scroll}) => {

    const [leftOffset, setLeftOffset] = useState(left)

    const scrollActions = (el, top) => {
        el.scrollTo({
            top,
            behavior: "smooth"
        });
    }

    useEffect(() => {

        const actions = document.getElementById('scrollActions')

        if (width + left > window.innerWidth - 50) {
            scrollActions(actions, actions.scrollTop + width)
            setLeftOffset(left - width - (133 - width) + 1)
            //последний элемент глючит, поправить

        } else if (left < 25) {
            let offset = actions.scrollTop + left - 20
            scrollActions(actions, offset)
            setLeftOffset(20)
        } else {
            setLeftOffset(left - (133 - width))
        }



    }, [left, right, width])


    return (
        <Transition in={!scroll} timeout={300} >
            {
                state => {
                    console.log(state)
                    return (
                        <div id='dropMenu' className={`${classes.menu} dropDownMenu_${state}`}
                             style={{top: top + 30, left: leftOffset}}>
                            <div className='d-flex flex-column'>
                                <div className={classes.item + ' ' + classes.primary}>Выполнить</div>
                                <div className={classes.item + ' ' + classes.primary}>Скопировать</div>
                                <Divider marginY={5}/>
                                <div className={classes.item + ' ' + classes.danger}>Удалить</div>
                            </div>
                        </div>
                    )
                }
            }

        </Transition>
    );
};

export default DropDownMenu;