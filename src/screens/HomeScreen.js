import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardSection } from '../components/common';

class HomeScreen extends React.Component {   
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Button
                        text="Todos"
                        violet
                        onPress={() => this.props.navigation.navigate('Todos')}
                    />
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
  return (
      {
          user: state.auth.user
      }
  );
};

export default connect(
  mapStateToProps,
  null
)(HomeScreen);
