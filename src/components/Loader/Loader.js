import React from 'react';
import classes from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={classes.loader}>
            <svg
                 width="28px" height="28px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="rotate(0 50 50)">
                    <rect x="46" y="5" rx="4" ry="7.5" width="8" height="30" fill="#ffffff">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.875s"
                                 repeatCount="indefinite"></animate>
                    </rect>
                </g>
                <g transform="rotate(45 50 50)">
                    <rect x="46" y="5" rx="4" ry="7.5" width="8" height="30" fill="#ffffff">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s"
                                 repeatCount="indefinite"></animate>
                    </rect>
                </g>
                <g transform="rotate(90 50 50)">
                    <rect x="46" y="5" rx="4" ry="7.5" width="8" height="30" fill="#ffffff">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.625s"
                                 repeatCount="indefinite"></animate>
                    </rect>
                </g>
                <g transform="rotate(135 50 50)">
                    <rect x="46" y="5" rx="4" ry="7.5" width="8" height="30" fill="#ffffff">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s"
                                 repeatCount="indefinite"></animate>
                    </rect>
                </g>
                <g transform="rotate(180 50 50)">
                    <rect x="46" y="5" rx="4" ry="7.5" width="8" height="30" fill="#ffffff">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.375s"
                                 repeatCount="indefinite"></animate>
                    </rect>
                </g>
                <g transform="rotate(225 50 50)">
                    <rect x="46" y="5" rx="4" ry="7.5" width="8" height="30" fill="#ffffff">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s"
                                 repeatCount="indefinite"></animate>
                    </rect>
                </g>
                <g transform="rotate(270 50 50)">
                    <rect x="46" y="5" rx="4" ry="7.5" width="8" height="30" fill="#ffffff">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.125s"
                                 repeatCount="indefinite"></animate>
                    </rect>
                </g>
                <g transform="rotate(315 50 50)">
                    <rect x="46" y="5" rx="4" ry="7.5" width="8" height="30" fill="#ffffff">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s"
                                 repeatCount="indefinite"></animate>
                    </rect>
                </g>
            </svg>
        </div>
    );
};

export default Loader;