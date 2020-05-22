import React from 'react';
import {Link} from "react-router-dom";
import '../ComponentsStyle/category.css';


class Category extends React.Component {

    render() {

        return (
            <Link
                to={{
                    pathname: `/playlists/${this.props.id}`,
                    state: {
                        categoryName: this.props.name
                    }
                }}
            >
                <div className="categories__wrapper">
                    <section className="category">
                        <h3 className="title">{ this.props.name }</h3>
                        <img className="image" src={this.props.url} alt={`Image for ${this.props.name}`}/>
                    </section>
                </div>
            </Link>
        );
    }
}

export default Category;

