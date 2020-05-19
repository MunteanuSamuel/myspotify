import React from 'react';
import {Link} from "react-router-dom";
import '../style/category.css';

/*
function Category ({categories}) {
    console.log(`inside the category ${categories}`);
    return(
        <div>
            <h1>{categories.name}</h1>
            <p>{categories.id}</p>
        </div>
    )
}
*/


class Category extends React.Component {

    /*componentDidMount() {
        const token = localStorage.getItem('token');
        const parsedToken = JSON.parse(token);


            fetch('https://api.spotify.com/v1/browse/categories/{category_id}/playlists', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${parsedToken.token}`
                }
            }).then(result => {
                console.log(result);
                return result.json()
            });
        console.log(this.props);
    }
*/
    render() {

        // const categoryId = this.props.match !== null ? this.props.match.params.id : 'Unknown';
        //
        // return (
        //     <div>
        //         {`Category page for ${ this.props.match !== null ? this.props.match.params.id : 'Unknown' }`}
        //     </div>
        // )

        return (
            <div className="category">
                <Link
                    to={{
                        pathname: `/playlists/${this.props.id}`,
                        state: {
                            categoryName: this.props.name
                        }
                    }}
                >
                    { this.props.name }
                    <img src={this.props.url} alt={`Image for ${this.props.name}`}/>
                </Link>
            </div>
        );
    }
}

export default Category;

