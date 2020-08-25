import React from "react";
import { Switch, Route, withRouter } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader"

import Category from "../components/Category";
import Playlists from "./Playlists";

import { checkAndReturnToken } from '../Utils';



class Categories extends React.Component {

    state = {
        categories: [],
        isLoading: false
    };

    componentDidMount() {
        try {
            const token = checkAndReturnToken(this.props.history);

            if (token === null) {
                return;
            }

            this.setState({
                isLoading: true
            });

            const getCategories = async () => {
                const categories = await fetch('https://api.spotify.com/v1/browse/categories?country=RO', {
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
                    categories: categoriesMap,
                    isLoading: false
                });
            };
            getCategories();
        } catch (error) {
            console.log(error);
            throw new Error('Failed to fetch categories')
        } finally {
            console.log('I am at the end of categories');
            this.setState({

                })
        }
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
                    {
                        this.state.isLoading ?
                            <ScaleLoader
                                color="#21D4FD"
                                css={{
                                    margin: '0 auto'
                                }}
                            /> : (
                        this.state.categories && this.state.categories.length > 0 ?
                        this.state.categories.map((category, index) => {
                            return (
                                <Category
                                    key={`Category ${index}`}
                                    name={category.name}
                                    id={category.id}
                                    url={category.url}
                                />
                            )
                        }) : 'Nici o categorie gasita.')
                    }
            </div>
                </Route>
            </Switch>
        );
    }
}

export default withRouter(Categories)
