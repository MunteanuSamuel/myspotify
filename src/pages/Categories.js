import React from "react";
import { Switch, Route, withRouter } from 'react-router-dom';
import Category from "../components/Category";
import { checkAndReturnToken } from '../Utils';
import Playlists from "./Playlists";


class Categories extends React.Component {

    state = {
        categories: []
    };

    componentDidMount() {

        const token = checkAndReturnToken(this.props.history);

        if (token === null) {
            return;
        }

        const getCategories = async () => {
            const categories = await fetch('https://api.spotify.com/v1/browse/categories', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const categoriesResp = await categories.json();
            const categoriesMap = categoriesResp.categories.items.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    url: item.icons && item.icons.length > 0 ? item.icons[0].url : '',
                };
            });
            this.setState({
                categories: categoriesMap});
        };

        getCategories();

    }

    render(){
        return (
            <Switch>
                <Route
                    path={`${this.props.match.path}/:id`}
                    component={Playlists}
                />
                <Route
                    path={`${this.props.match.path}*`}
            >
            <div className="row">
                    {this.state.categories.map(category => {
                            return (
                                <Category
                                    key={category.name}
                                    name={category.name}
                                    id={category.id}
                                    url={category.url}
                                />
                            )
                        })
                    }
            </div>
                </Route>
            </Switch>
        );
    }
       /* return this.state.categories.map(category => {
            return (
                <Category
                    key={category.name}
                    name={category.name}
                    id={category.id}
                    url={category.url}
                />
            )
        });*/
}

export default withRouter(Categories)
