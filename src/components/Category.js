import React from 'react';
import {Link} from "react-router-dom";
import '../ComponentsStyle/category.css';


class Category extends React.Component {

    render() {

        return (
            <div className="col-2 category__wrapper">
                <Link
                    to={{
                        pathname: `/categories/${this.props.id}`,
                        state: {
                            categoryName: this.props.name
                                }
                    }}
                >
                    <section className="category__main">
                        <h3 className="category__title">{ this.props.name }</h3>
                        <img className="category__image" src={this.props.url} alt={`Image for ${this.props.name}`}/>
                    </section>
                </Link>
            </div>
        );
    }
}

export default Category;

