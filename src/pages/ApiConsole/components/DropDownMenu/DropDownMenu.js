import React, {useEffect, useState} from 'react';
import classes from './DropDownMenu.module.scss';
import {Divider} from "../../../../components";
import {Transition} from "react-transition-group";

import {CopyToClipboard} from "react-copy-to-clipboard";
import {useConsole} from "../../context/ApiConsoleContext";
import {connect} from "react-redux";
import {deleteAction, sendRequest, sendRequestError, setEdit} from "../../../../store/actions/apiConsoleActions";


const DropDownMenu = ({actions, sendRequest, deleteAction, setEdit, sendRequestError}) => {

    const {menuParams, scroll, setScroll, setCopyElementId, currentActionId, setCurrentActionId, scrollActions} = useConsole();
    let {id, top, left, width} = menuParams;

    const [leftOffset, setLeftOffset] = useState(left);
    const [chipId, setChipId] = useState(id);
    const [open, setOpen] = useState(!scroll);
    const [request, setRequest] = useState('');


    useEffect(() => {
        const menuWidth = 133;
        // Вычисляем расстояние слева от экрана до меню
        const chips = document.getElementById('scrollActions');
        if (left < 25) {
            let offset = chips.scrollLeft + left - 20;
            scrollActions(chips, offset);
            setLeftOffset(20);
        } else {
            setLeftOffset(left - (menuWidth - width));
        }

    }, [left, width, scrollActions]);


    useEffect(() => {

        // закрыть/открыть меню
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
    };

    useEffect(() => {
        if (currentActionId && actions.length) {
            const action = actions.find(action => action.id === +currentActionId);
            if (action) {
                setRequest(action.request);
            }
        }

    }, [currentActionId, actions]);

    // выполнить
    const actionDoHandler = () => {
        // плавно прокрутить вначало
        const chips = document.getElementById('scrollActions');
        if (chips.scrollLeft > 0) {
            scrollActions(chips, 0);
        }

        try {
            sendRequest(JSON.parse(JSON.stringify(request)));

            setEdit(false);
            setCurrentActionId(null);
        } catch (e) {
            const {name, message} = e;
            console.log('Request error n: ', e.message);
            sendRequestError({name, message});
        }
        setScroll(true);
    };

    // копировать
    const actionCopyHandler = () => {
        setCopyElementId(id);
        setTimeout(() => {
            setCopyElementId(null)
        }, 2000)
        setEdit(false);
        setScroll(true);
    };

    // Удалить
    const actionDeleteHandler = () => {
        deleteAction(id);
        setCurrentActionId(null);
        setEdit(false);
        setScroll(true);
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
                                <CopyToClipboard text={JSON.stringify(request)}
                                                 onCopy={() => actionCopyHandler()}>
                                    <div className={classes.item + ' ' + classes.primary}>Скопировать</div>
                                </CopyToClipboard>
                                <Divider marginY={5}/>
                                <div className={classes.item + ' ' + classes.danger}
                                     onClick={actionDeleteHandler}>Удалить
                                </div>
                            </div>
                        </div>
                    )
                }
            }

        </Transition>
    );
};
const mapState = state => {
    return {
        actions: state.apiConsole.actions
    }
};
const actions = {
    sendRequest,
    deleteAction,
    setEdit,
    sendRequestError
};

export default connect(mapState, actions)(DropDownMenu);