import React from "react";
import {withRouter} from 'react-router-dom';

class Category extends React.Component {

    componentDidMount() {
      console.log(this.props);
    };

    render () {
        return (
            <div>
                <h1>Category Page</h1>
                {`category page for ${ this.props.match !==null ? this.props.match.params.id : 'unknown' }`}
            </div>
        )
    }
}

export default withRouter(Category);