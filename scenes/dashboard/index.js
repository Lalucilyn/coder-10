import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Counter} from './counter';
import {increment, decrement, addMore} from '../../store/actions';

const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: center;
`;

function DashboardScene (props) {
  const {counter, increment, decrement, customAdd} = props;

  const addMore = count => {
    customAdd (count);
  };

  return (
    <Container>
      <Counter
        addMore={addMore}
        increment={increment}
        decrement={decrement}
        value={counter}
      />
    </Container>
  );
}
const mapStateToProps = ({counter}) => {
  return {
    counter,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    decrement: () => dispatch (decrement),
    increment: () => dispatch (increment),
    customAdd: count => dispatch (addMore (count)),
  };
};
export default connect (mapStateToProps, mapDispatchToProps) (DashboardScene);
