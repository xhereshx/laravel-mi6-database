import React from 'react';
import PeopleList from './PeopleList.jsx';
 
export default class App extends React.Component {
    render() {
        return (
            <>
                <h1>MI6 component</h1>
                <PeopleList />
            </>
        )
    }
}