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
         //  console.log('response.data.body.content: ', response.data.body.content);
           console.log('Categories response.data.body: ', response.data.body);
          // console.log('response.data.body.content.length: ', response.data.body.content.length);
           
           this.setState({categories : response.data.body})
       })
    }

    getCategories(){
        return axios.get('http://localhost:8080/api/v1/categories/withproducts')
    };

     getProductsWithID(id){
        console.log('clicked')
        const url = axios.get(`http://localhost:8080/api/v1/products?categoryId=${id}`)
        window.location(url);
    }
    


    render() {
      return (    
        <div>
            <ul>
                {this.state.categories.map((category, index) => {
                        return (<li key={index}>
                            <div className="featProduct">
                               <a href="http://localhost:3000/products">{category.displayName}</a>
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



/*

class Categories extends Component{

    constructor(props){
        super(props);
        this.state = {
            categories: [],
            activePage: 0,
            totalPages: null,
            itemsPerPage: null, // categories per page
            totalItems: null, // total number of categories in the databse 
        };

        this.onPageChange = this.onPageChange.bind(this);
        this.fetchCategories = this.fetchCategories.bind(this);

    }

    fetchCategories(page){
        axios.get(`http://localhost:8080/api/v1/categories?page=${page}&size=10`)
        .then(response => {
            const totalPages = response.data.body.totalPages;
            const itemsPerPage = response.data.body.size;
            const totalItems = response.data.body.totalElements;
        

            this.setState({totalPages: totalPages});
            this.setState({itemsPerPage: itemsPerPage});
            this.setState({totalItems: totalItems});
            

            const categories = response.data.body.content; // categories


            this.setState({categories: categories});
            console.log('categories = response.data.body.content: ',  categories);
            console.log('response.data.body: ',  response.data.body);
            console.log('activePage = ', this.state.activePage);
            console.log('number of categories on this page: ', this.state.itemsPerPage);

        });
    }

    componentDidMount(){
        this.fetchCategories(this.state.activePage);
    }

    onPageChange(pageNumber){
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
        this.fetchCategories(pageNumber-1);
    }

    noProductsMessage(){
        alert('There are no products in this category')
    }

    render(){
        
        return (    
            <div>
                <ul>
                    {this.state.categories.map((category, index) => {
                        if(category.displayName !== 'Shoes'){
                            // I know this isn't dynamic but I only have products in the database are a part of the 
                            // 'Shoes' category
                            return (<li key={index}>
                                <div className="featProduct">
                                    <button className="button" onClick={this.noProductsMessage} > {category.displayName}</button>
                                </div>
                            </li>
                            )
    
                        } else{
                            
                        return (<li key={index}>
                            <div className="featProduct">
                                <button className="button"> {category.displayName}</button>
                            </div>
                        </li>
                        )
                        }
                    })}
                </ul>
                <div>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsPerPage}
                    totalItemsCount={this.state.totalItems}
                    itemClass='page-item'
                    linkClass='btn btn-light'
                    onChange={this.onPageChange}
                    
                    />
                </div>

            </div>
          )
    }
}
export default Categories;


*/


