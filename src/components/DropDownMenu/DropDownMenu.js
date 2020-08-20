import React from 'react';
import classes from './DropDownMenu.module.scss';
import Divider from "../Divider/Divider";

const DropDownMenu = ({top = 0, left = 0, width = 0, scroll}) => {

    return (
        <div className={classes.menu} style={{top: top + 30, left, width, display: scroll ? 'none' : 'block'}}>
            <div className='d-flex flex-column'>
                <div className={classes.item}>Выполнить</div>
                <div className={classes.item}>Скопировать</div>
                <Divider/>
                <div className={classes.item}>Удалить</div>
            </div>
        </div>
    );
};

export default DropDownMenu;