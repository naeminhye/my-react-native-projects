import React from 'react';
import {
    View,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import TODOList from '../TODOApp/TODOList';

export default class TODOScreen extends React.Component {
    
    static navigationOptions = {
        header: null
    }

    render() {
        return(
            <Provider store={store}>
                <View
                    style={{ flex: 1, backgroundColor: 'white', alignSelf: 'stretch' }}>
                    <TODOList />
                </View>
            </Provider>
        );
    }
}

// defaultState
const defaultState = {
    tasks: [
        { id: 1, name: 'do homework', done: true },
        { id: 2, name: 'call Mom', done: false },
        { id: 3, name: 'visit dentist', done: false },
        { id: 4, name: 'go shopping', done: false },
    ],
    filterStatus: 'SHOW_ALL',
    isAdding: false
};

// reducer 
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'FILTER_SHOW_ALL':
            return { ...state, filterStatus: 'SHOW_ALL' };
        case 'FILTER_DONE':
            return { ...state, filterStatus: 'DONE' };
        case 'FILTER_UNDONE':
            return { ...state, filterStatus: 'UNDONE' };
        case 'TOGGLE_DONE':
            return {
                ...state,
                tasks: state.tasks.map(e => {
                    if (e.id != action.id)
                        return e;
                    return { ...e, done: !e.done };
                })
            };
        case 'TOGGLE_ADDING':
            return {
                ...state,
                isAdding: !state.isAdding,
            };
        case 'ADD_NEW_TASK':
            return {
                ...state,
                tasks: state.tasks.concat({ 
                    id: state.tasks.length + 1, 
                    name: action.name, 
                    done: false 
                })
            };
        default:
            break;
    }
    return state;  
};

// store
const store = createStore(reducer);

// integrate it into react ?
