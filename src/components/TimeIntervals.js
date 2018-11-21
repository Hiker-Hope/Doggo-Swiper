import React from 'react'
import styled from 'styled-components'
// import TimeIntervalItem from './TimeIntervalItem'

const Container = styled.div`
    margin: 0 10px;
    display: flex;
    align-items: stretch;
`

class TimeIntervals extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { animated: false };
    // }

    // componentDidMount() {
    //     this.setState({ animated: true });
    // }

    render(){
        return (
            <Container>
                {/* { Array.from(Array(this.props.itemsCount), (e, i) => {
                    return <TimeIntervalItem key={ i } 
                    // animated={this.state.animated}
                    />
                }) } */}
            </ Container>
        )
    }
}

export default TimeIntervals
