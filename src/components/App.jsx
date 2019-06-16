/* @flow */
import React from 'react';
import {connect} from 'react-redux';
import type {State} from 'types';

type Props = {||};

const App = (props: Props) => {
  return (
    <div className="mainApp">
    </div>
  );
}

const mapStateToProps = (state: State) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);