import axios from 'axios';
import React, {Component} from 'react';
import Pagination from "react-js-pagination";
import "./Products.css";
import Featured from "./Featured";


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
            axios.get(`http://ebso-env-1.eba-skn6z3ga.us-east-2.elasticbeanstalk.com/api/v1/products?categoryId=${localStorage.getItem("category")}&page=${page}&size=9`)
                .then(response => {
                    const totalPages = response.data.body.totalPages;
                    const itemsPerPage = response.data.body.size;
                    const totalItems = response.data.body.totalElements;


                    this.setState({totalPages: totalPages});
                    this.setState({itemsPerPage: itemsPerPage});
                    this.setState({totalItems: totalItems});


                    const products = response.data.body.content; // products


                    this.setState({products: products});
               

                    // localStorage.removeItem("category")
                    // console.log('Removed localStorage.getItem("currCategory"): ',localStorage.getItem("category"))

                });
        } else {
            axios.get(`http://ebso-env-1.eba-skn6z3ga.us-east-2.elasticbeanstalk.com/api/v1/products?page=${page}&size=9`)
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
                 <div className= 'banner'>
                    <img   
                            src="https://i.ibb.co/YcjFb9s/TECHNOLOGY.png"
                            alt=""
                    />
                </div>
            <div className="product_list">
                {this.state.products.map((product, index) => {
                    return (<ul key={index}>
                           
                            <Featured 
                                            title={product.displayName}
                                            image={product.photoUrl}
                                            price={product.price}
                                            stock={product.stockQuantity}
                                        />
                                
                              
                        
                        
                        </ul>
                    )

                })}
                </div>
                <div className="product-pages">

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

//     render(){ // Jennie's version
//
//         return(
//
//             <div>
//                 <Header />
//
//                 <div className= 'banner'>
//                     <img
//                         src="https://i.ibb.co/YbJC1Nd/TECHNOLOGY.png"
//                         alt=""
//                     />
//                 </div>
//                 <div className="product_list">
//                     {
//                         this.state.products.map(
//                             (product, index) => {
//                                 return (
//                                     <ul key={index} id={product.id}>
//                                         <Featured
//                                             id={product.id}
//                                             title={product.displayName}
//                                             image={product.photoUrl}
//                                             price={product.price}
//                                         />
//                                     </ul>
//                                 )
//                             }
//                         )
//                     }
//                 </div>
//
//
//                 <div>
//                     <div className="product-pages">
//                         <Pagination
//                             activePage={this.state.activePage}
//                             itemsCountPerPage={this.state.itemsPerPage}
//                             totalItemsCount={this.state.totalItems}
//                             itemClass='page-item'
//                             linkClass='btn btn-light'
//                             onChange={this.onPageChange}
//
//                         />
//                     </div>
//                 </div>
//             </div>
//
//         )
//     }
// }
// export default Products;






