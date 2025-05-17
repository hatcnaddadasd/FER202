import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NamePerson from './namePerson';
import PeopleList from './PeopleList';
import FirstTeenager from './FirstTeenager';
import AreAllTeenagers from './AreAllTeenagers';
import SortedByOccupationAndAge from './SortedByOccupationAndAge';
import GroupedByOccupation from './GroupedByOccupation';
import OldestAndYoungest from './OldestAndYoungest';
import AverageAgeByOccupation from './AverageAgeByOccupation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson/>
    <PeopleList/>
    <FirstTeenager/>
    <AreAllTeenagers/>
    <SortedByOccupationAndAge/>
    <GroupedByOccupation/>
    <OldestAndYoungest/>
    <AverageAgeByOccupation/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
