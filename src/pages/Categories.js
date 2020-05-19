import React from "react";
import { withRouter } from 'react-router-dom';
import Category from "../components/Category";
import { checkAndReturnToken } from '../Utils';

/*function Categories () {
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    },[]);

    const getCategories = async () => {
        const token = localStorage.getItem('token');
        const parsedToken = JSON.parse(token);

        const response = await fetch('https://api.spotify.com/v1/browse/categories', {
            method:'GET',
            headers: {
                Authorization: `Bearer ${parsedToken.token}`
            }})
        const data = await response.json();
        setCategories = data;
        console.log(data)
    }
    return (
        <div className="categories">
            <h1>hello</h1>
            <div>
            {categories.map(category => (
                <Category
                    name = {category.name}
                    id = {category.id}
                    url = {category.url}
                />
            ))}
            </div>
        </div>
    );
}
export default Categories*/

class Categories extends React.Component {

    state = {
        categories: []
    };

    componentDidMount() {


        const token = checkAndReturnToken(this.props.history);

        if (token === null) {
            return;
        }

        fetch('https://api.spotify.com/v1/browse/categories', {
            method:'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(result => {
            console.log(result);
            return result.json()
        }).then(data => {
            const categories = data.categories.items.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    url: item.icons && item.icons.length > 0 ? item.icons[0].url : '',
                };
            });
            this.setState({
                categories: categories});
        });

    }

    render() {
        return this.state.categories.map(category => {
            return (
                <Category
                    name={category.name}
                    id={category.id}
                    url={category.url}
                />
            )
        });
    }
}

export default withRouter(Categories)
