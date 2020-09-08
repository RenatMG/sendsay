import React, {useEffect, useState} from 'react';
import classes from './DropDownMenu.module.scss';
import {Divider} from "../../../../components";
import {Transition} from "react-transition-group";

import {CopyToClipboard} from "react-copy-to-clipboard";
import {useConsole} from "../../context/ApiConsoleContext";
import {useConnect} from "../../context/ApiConsoleConnect";


const DropDownMenu = () => {


    const {menuParams, scroll, setScroll, setCopyElementId, action} = useConsole();
    const {sendRequest} = useConnect();
    let {id, top, left, width} = menuParams

    const [leftOffset, setLeftOffset] = useState(left)
    const [chipId, setChipId] = useState(id)
    const [open, setOpen] = useState(!scroll)

    const scrollActions = (el, left) => {
        el.scrollTo({
            left,
            behavior: "smooth"
        });
    }


    useEffect(() => {
        const actions = document.getElementById('scrollActions');

        if (width + left > window.innerWidth - 50) {
            setLeftOffset(left - width - (133 - width) + 1);
        } else if (left < 25) {
            let offset = actions.scrollLeft + left - 20;
            scrollActions(actions, offset);
            setLeftOffset(20);
        } else {
            setLeftOffset(left - (133 - width));
        }


    }, [left, width]);

    useEffect(() => {

        if (chipId && id !== chipId) {
            setOpen(false);
            setChipId(id);
            setTimeout(() => {
                setOpen(true);
            }, 200)

        } else {
            setOpen(!scroll);
        }


    }, [id, chipId, scroll]);

    const styles = {
        top: top + 30 || 0,
        left: leftOffset || 0
    }

    const actionDoHandler = () => {
        const actions = document.getElementById('scrollActions');
        if (actions.scrollLeft > 0) {
            scrollActions(actions, 0);
        }
        sendRequest(JSON.stringify(action.request))
        setScroll(true)
    };

    const actionCopyHandler = () => {
        setCopyElementId(id)
        setScroll(true)
        setTimeout(() => {
            setCopyElementId(null)
        }, 2000)
    };

    return (
        <Transition in={open} timeout={200}>
            {
                state => {
                    return (
                        <div id='dropMenu' className={`${classes.menu} dropDownMenu_${state}`}
                             style={styles}>
                            <div className='d-flex flex-column'>
                                <div className={classes.item + ' ' + classes.primary}
                                     onClick={actionDoHandler}>Выполнить
                                </div>
                                <CopyToClipboard text={JSON.stringify(action.request)}
                                                 onCopy={() => actionCopyHandler()}>
                                    <div className={classes.item + ' ' + classes.primary}>Скопировать</div>
                                </CopyToClipboard>
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