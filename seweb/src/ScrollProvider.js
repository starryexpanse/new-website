import React, { Component, createContext } from 'react';
import throttle from 'lodash/throttle';

const { Consumer, Provider } = createContext(0);

export const ScrollConsumer = Consumer;

export class ScrollProvider extends Component {
    subscription = null;

    constructor(props) {
        super(props);
        this.state = {
            scroll: window.scrollY,
        };
    }

    componentDidMount() {
        this.subscription = window.addEventListener('scroll', evt => {
            this.scroll();
        });
    }

    scroll = throttle(() => {
        this.setState({
            scroll: window.scrollY,
        });
    }, 3);

    render() {
        const { props, state } = this;

        return <Provider value={state.scroll}>{props.children}</Provider>;
    }
}