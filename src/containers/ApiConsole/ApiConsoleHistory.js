import React, {Component} from 'react';
import Header from "../../components/Header/Header";
import ActionChip from "../../components/ActionChip/ActionChip";
import Scroll from "../../components/Scroll/Scroll";
import ClearHistory from "../../components/ClearHistory/ClearHistory";
import DropDownMenu from "../../components/DropDownMenu/DropDownMenu";
import Overlay from "../../components/Overlay/Overlay";
import {CSSTransition} from 'react-transition-group';


class ApiConsoleHistory extends Component {

    state = {
        actions: [
            {
                id: 1,
                title: 'track.get'
            },
            {
                id: 3453453453453453453451,
                title: 'track.get',
                status: 1
            },
            {
                id: 54345345343531,
                title: 'track.gedfst',
                status: 1
            },
            {
                id: 13454534543,
                title: 'track.gesdft',
                status: 1
            },
            {
                id: 1234234234,
                title: 'track.gsdfet',
                status: 2
            },
            {
                id: 2342342341,
                title: 'tracsdfk.get',
                status: 2
            },
            {
                id: 123423434234,
                title: 'track.gsdfet',
                status: 2
            },
            {
                id: 1234234,
                title: 'trasdck.gsdet',
                status: 2
            },
            {
                id: 34534534534531,
                title: 'track.gdset',
                status: 2
            }, {
                id: 134242453434,
                title: 'track.get',
                status: 1
            },
            {
                id: 12386768642342342,
                title: 'tracssk.get',
                status: 2
            }, {
                id: 1236784234,
                title: 'sddtrack.get',
                status: 1
            }, {
                id: 12342,
                title: 'track.ddget',
                status: 1
            },
            {
                id: 16786363667834,
                title: 'trasck.get',
                status: 1
            },
            {
                id: 1678363667834,
                title: 'trasck.get',
                status: 1
            },
            {
                id: 1673636867834,
                title: 'trasck.get',
                status: 1
            },
            {
                id: 16783636367834,
                title: 'trasck.get',
                status: 1
            },
            {
                id: 1678636363834,
                title: 'trasck.get.sdf',
                status: 1
            },
            {
                id: 16766336867834,
                title: 'tradfdfsck.get',
                status: 1
            },
            {
                id: 167864547834,
                title: 'tradfdfsck.get',
                status: 1
            },
            {
                id: 167864554547834,
                title: 'tradfdsck.get',
                status: 1
            },
            {
                id: 167855467834,
                title: 'trasdfdck.get',
                status: 1
            },


        ],
        scroll: true,
        menuParams: {}
    }

    menuParamsHandler = (menuParams) => {
        this.setState(prevState => {
            // let scroll = prevState.menuParams.left === menuParams.left && !prevState.scroll
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

