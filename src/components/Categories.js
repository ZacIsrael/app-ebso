import axios from 'axios';
import React, {Component} from 'react';

class Categories extends Component {

    constructor(props){
        super(props)
        this.state = {
            categories : []
        }
    }

    componentDidMount(){
       this.getCategories()
       .then(response => {

           console.log('Categories response.data.body: ', response.data.body);

           
           this.setState({categories : response.data.body})
       })
    }

    getCategories(){
        return axios.get('http://localhost:8080/api/v1/categories/withproducts')
    };

    render() {

      return (    
        <div>
            <ul>
                {this.state.categories.map((category, index) => {
                        return (<li key={index}>
                            <div className="featProduct">
                                    <a href="http://localhost:3000/products" onClick={() => localStorage.setItem("category", category.id)}>
                                   {category.displayName}</a>

                            </div>
                            
                        </li>
                        )
                })}
            </ul>
        </div>
      ) 
    }
}

export default Categories;
