import axios from 'axios';
import React, {Component} from 'react';
import Pagination from "react-js-pagination";
import "./Products.css";


class Products extends Component{

    constructor(props){
        super(props);
        this.state = {
            products: [],
            activePage: 0,
            totalPages: null,
            itemsPerPage: null, // items per page
            totalItems: null // total number of categories in the databse 
        };

        this.onPageChange = this.onPageChange.bind(this);
        this.fetchProducts = this.fetchProducts.bind(this);

    }

    fetchProducts(page){
        if(localStorage.getItem("category")){
            axios.get(`http://localhost:8080/api/v1/products?categoryId=${localStorage.getItem("category")}&page=${page}&size=10`)
                .then(response => {
                    const totalPages = response.data.body.totalPages;
                    const itemsPerPage = response.data.body.size;
                    const totalItems = response.data.body.totalElements;


                    this.setState({totalPages: totalPages});
                    this.setState({itemsPerPage: itemsPerPage});
                    this.setState({totalItems: totalItems});


                    const products = response.data.body.content; // products


                    this.setState({products: products});
                    console.log('localStorage.getItem("currCategory"): ',localStorage.getItem("category"))
                    console.log('response.data.body.content[0].category.id', products[0].category.id)
                    console.log('response.data: ', response.data);
                    console.log('products = response.data.body.content: ', products);
                    console.log('response.data.body: ', response.data.body);
                    console.log('activePage = ', this.state.activePage);
                    console.log('max number of items that can be on a page: ', this.state.itemsPerPage);

                    // localStorage.removeItem("category")
                    // console.log('Removed localStorage.getItem("currCategory"): ',localStorage.getItem("category"))

                });
        } else {
            axios.get(`http://localhost:8080/api/v1/products?page=${page}&size=10`)
                .then(response => {
                    const totalPages = response.data.body.totalPages;
                    const itemsPerPage = response.data.body.size;
                    const totalItems = response.data.body.totalElements;


                    this.setState({totalPages: totalPages});
                    this.setState({itemsPerPage: itemsPerPage});
                    this.setState({totalItems: totalItems});


                    const products = response.data.body.content; // products


                    this.setState({products: products});
                    console.log('localStorage.getItem("currCategory"): ',localStorage.getItem("category"))
                    console.log('response.data.body.content[0].category.id', products[0].category.id)
                    console.log('response.data: ', response.data);
                    console.log('products = response.data.body.content: ', products);
                    console.log('response.data.body: ', response.data.body);
                    console.log('activePage = ', this.state.activePage);
                    console.log('max number of items that can be on a page: ', this.state.itemsPerPage);
                    // localStorage.removeItem("category")
                    // console.log('Removed localStorage.getItem("currCategory"): ',localStorage.getItem("category"))
                });
        }
    }

    componentDidMount(){
        this.fetchProducts(this.state.activePage);
    }

    onPageChange(pageNumber){
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
        this.fetchProducts(pageNumber-1);
    }
    render(){
        
        return(

            <div>
                 {this.state.products.map((product, index) => {
                    return (<li key={index}>
                        <div className="featProduct">
                            <img className="photo" src={product.photoUrl} alt={`${product.photoUrl} not loading`} />
                            <p className="product_title">{product.displayName} </p>
                            <p className="product_price">${product.price}</p>
                            <p>In stock: {product.stockQuantity}</p>
                            <button className="button"> Add to cart</button>
                        </div>
                    </li>
                    )
                })}
               

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
export default Products;




