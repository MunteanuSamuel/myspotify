import React from "react";
import {Link} from "react-router-dom";
import category from "./category";

class Categories extends React.Component {

    

    componentDidMount() {

        const token = localStorage.getItem('token');
        const parsedToken = JSON.parse(token);

        fetch('https://api.spotify.com/v1/browse/categories', {
            method:'GET',
            headers: {
                Authorization: `Bearer ${parsedToken.token}`
            }
        }).then(result => {
            console.log(result)
            return result.json()
        }).then(data => {
            const categories = data.categories.items.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    url: item.icons && item.icons.length > 0 ? item.icons[0].url : ''
                }
            });
            this.setState({
                categories: categories
            })
        })
    }

    /*componentDidMount() {
        fetch('https://api.example.com/items')
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        name: result.name,
                        id: result.id,
                        icon: result.icon
                    })
                }
            )
    }
*/
        render(){
            return this.state.categories.map(category => {
                return (
                    <div>{category.name}</div>
                )
            })
        }
}

export default Categories;