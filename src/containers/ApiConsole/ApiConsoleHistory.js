import React, {Component} from 'react';
import Header from "../../components/Header/Header";
import ActionChip from "../../components/ActionChip/ActionChip";
import Scroll from "../../components/Scroll/Scroll";
import ClearHistory from "../../components/ClearHistory/ClearHistory";
import DropDownMenu from "../../components/DropDownMenu/DropDownMenu";
import Overlay from "../../components/Overlay/Overlay";


class ApiConsoleHistory extends Component {

    state = {
        actions: [
            {
                id: 1,
                title: 'track.first'
            },
            {
                id: 2,
                title: 'track.get',
                status: 1
            },
            {
                id: 3,
                title: 'track.gedfst',
                status: 1
            },
            {
                id: 4,
                title: 'track.gesdft',
                status: 1
            },
            {
                id: 5,
                title: 'track.gsdfet',
                status: 2
            },
            {
                id: 6,
                title: 'tracsdfk.get',
                status: 2
            },
            {
                id: 7,
                title: 'track.gsdfet',
                status: 2
            },
            {
                id: 8,
                title: 'trasdck.gsdet',
                status: 2
            },
            {
                id: 9,
                title: 'track.gdset',
                status: 2
            }, {
                id: 10,
                title: 'track.get',
                status: 1
            },
            {
                id: 11,
                title: 'tracssk.get',
                status: 2
            }, {
                id: 12,
                title: 'sddtrack.get',
                status: 1
            }, {
                id: 13,
                title: 'track.ddget',
                status: 1
            },
            {
                id: 14,
                title: 'trasck.get',
                status: 1
            },
            {
                id: 15,
                title: 'trasdfdck.last',
                status: 1
            },


        ],
        scroll: true,
        menuParams: {}
    }

    menuParamsHandler = (menuParams) => {
        this.setState(prevState => {
            let scroll = prevState.menuParams.left === menuParams.left && !prevState.scroll
            return {
                scroll,
                menuParams
            }
        })
    }

    scrollHandler = () => {
        this.setState(prevState => {
            let scroll = !prevState.scroll
            return {
                scroll,
            }
        })
    }
    closeMenuHandler = () => {
        this.setState({scroll: true})
    }


    render() {

        const {actions, scroll, menuParams} = this.state

        return (
            <Header>
                <Scroll scroll={scroll}>

                    {
                        actions.map(action => {
                            return (
                                <ActionChip key={action.id}
                                            action={action}
                                            scroll={scroll}
                                            closeMenuHandler={this.closeMenuHandler}
                                            menuParamsHandler={this.menuParamsHandler}/>
                            )
                        })
                    }

                </Scroll>

                <DropDownMenu {...menuParams} scroll={scroll}/>

                <ClearHistory/>
                <Overlay scroll={scroll} scrollHandler={this.scrollHandler}/>
            </Header>
        );
    }
};

export default ApiConsoleHistory;

