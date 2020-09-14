import React, {useEffect, useState} from 'react';
import './Rules.scss';
import {connect} from "react-redux";
import {Button, Decor, Divider, Header, Title, GitLink, Input} from "../../components";
import Checked from "../../svg/Checked";
import Plus from "../../svg/Plus";
import {getRulesData, setRulesData} from "../../store/actions/firebaseActions";


const Rules = (props) => {

    const {transition, onClickHandler, getRulesData, setRulesData, title, type, list, loading, tasks, git} = props;

    const [control, setControl] = useState({
        id: 'rule',
        value: ''
    });
    const [rules, setRules] = useState(list);
    const [createRule, setCreateRule] = useState(false);

    useEffect(() => {
        getRulesData(type)
    }, [getRulesData, type]);

    useEffect(() => {
        if (list[type]) {
            setRules(list[type])
        }
    }, [list, type]);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        setRulesData({
            type,
            rule: event.target.rule.value
        });
        setControl({...control, value: ''});
        setCreateRule(false);
    };

    const inputHandler = (evt) => {
        setControl({...control, value: evt.target.value})
    };

    return (
        <div className={`Rules ${transition}`}>
            <div className='Rules__content'>
                <div>
                    <Header>
                        <Title size={'lg'}>{title}</Title>
                    </Header>
                    <Divider/>
                </div>

                <div className='p-4'>
                    {tasks[type + 'Task']}
                </div>
                {
                    !!Object.keys(rules).length &&
                    <ul className='Rules__list p-4'>
                        {
                            Object.keys(rules).map((key, idx) => {
                                    const rule = rules[key];
                                    return (
                                        <li key={key} className='row border-bottom border-light'>
                                            <div className='col-10 border-right border-light py-2'>{idx + 1}. {rule.rule}</div>
                                            <div className='col-2 py-2 d-flex justify-content-center align-items-center'>
                                                {
                                                    rule.done &&
                                                    <Checked/>
                                                }
                                            </div>
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                }
                <div className='p-4'>
                    {
                        createRule
                            ?
                            <form onSubmit={formSubmitHandler} autoComplete={'on'}>
                                <div className='d-flex align-items-center justify-content-between'>
                                    {
                                        <Input
                                            inputHandler={inputHandler}
                                            control={control}/>
                                    }
                                    <div className='px-1'/>
                                    <Button title='Отправить' loading={loading}/>
                                </div>
                            </form>
                            :
                            <div className='Rules__link' onClick={() => setCreateRule(true)}>
                                <Plus/>
                                <span className='ml-2'>Создать правило</span>
                            </div>
                    }
                </div>
                <div className='p-4 d-flex flex-column justify-content-between align-items-center'>
                    <Title size={'sm'}>
                        <div className='d-flex'>
                            GitHub:
                            <a href={`https://github.com/${git}`} rel="noopener noreferrer"
                               target='_blank'>&nbsp;@{git}</a>
                        </div>
                    </Title>
                    <GitLink
                        title='Назад к заданию'
                        onClickHandler={onClickHandler}
                    />
                    <Decor/>
                </div>
            </div>
        </div>
    );
};

const mapState = state => {
    return {
        list: state.firebase.rules,
        tasks: state.firebase.tasks,
        loading: state.firebase.loading,
        git: state.firebase.git
    }
}

const actions = {
    getRulesData,
    setRulesData
}


export default connect(mapState, actions)(Rules);