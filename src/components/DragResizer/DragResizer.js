import React, {useEffect, useRef} from 'react';
import classes from './DragResizer.module.scss'
import Menu from "../../svg/Menu";

const DragResizer = () => {

    const dragResizerRef = useRef();

    useEffect(() => {

        let startX, parentWidth, startWidth, panelsContainerWidth;
        const dragResizer = dragResizerRef.current
        dragResizer.addEventListener('mousedown', initDrag, false);

        const parent = dragResizer.parentElement;
        const leftPanel = parent.previousElementSibling;
        const rightPanel = parent.nextElementSibling;
        const panelsContainer = parent.parentElement;

        function initDrag(e) {
            startX = e.clientX;
            startWidth = parseInt(document.defaultView.getComputedStyle(leftPanel).width, 10);
            parentWidth = parseInt(document.defaultView.getComputedStyle(parent).width, 10);
            panelsContainerWidth = parseInt(document.defaultView.getComputedStyle(panelsContainer).width, 10);
            document.documentElement.addEventListener('mousemove', doDrag, false);
            document.documentElement.addEventListener('mouseup', stopDrag, false);
        }

        function doDrag(e) {
            let leftWidth = startWidth + e.clientX - startX;
            let rightWidth = panelsContainerWidth - parentWidth - leftWidth;
            let limitWidth = panelsContainerWidth - 98 - parentWidth;
            if (leftWidth < limitWidth) {
                leftPanel.style.minWidth = leftPanel.style.width = leftWidth + 'px';
                rightPanel.style.minWidth = rightPanel.style.width = rightWidth + 'px';
            }
        }

        function stopDrag(e) {
            localStorage.setItem('leftWidth', document.defaultView.getComputedStyle(leftPanel).width);
            localStorage.setItem('rightWidth', document.defaultView.getComputedStyle(rightPanel).width);
            document.documentElement.removeEventListener('mousemove', doDrag, false);
            document.documentElement.removeEventListener('mouseup', stopDrag, false);
        }

    });

    return (
        <div className={classes.dragResizer}>
            <div id='dragResizer' ref={dragResizerRef}>
                <Menu/>
            </div>
        </div>
    );
};

export default DragResizer;

