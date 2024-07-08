
import {Component, SyntheticEvent} from 'react';
import Wrapper from "../Wrapper";
import axios from 'axios';
import {Navigate} from 'react-router-dom';
import ImageUpload from "../components/ImageUpload";
import {Product} from "../../classes/product";
//FIXME: Fix edit component so that we able to get the id instead of undefined
class ProductEdit extends Component<{ match: any }> {
    state = {
        title: '',
        description: '',
        image: '',
        price: 0,
        redirect: false
    }
    id = 0;
    title = '';
    description = '';
    image = '';
    price = 0;

    componentDidMount = async () => {
        this.id = this.props.match.params.id;

        const response = await axios.get(`products/${this.id}`);

        const product: Product = response.data.data;

        this.setState({
            title: product.title,
            description: product.description,
            image: product.image,
            price: product.price
        })
    }


    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put(`products/${this.id}`, {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            price: this.state.price,
        });

        this.setState({
            redirect: true
        })
    }

    imageChanged = (image: string) => {
        this.image = image;

        this.setState({
            image: this.image
        })
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to={'/products'} replace  />;
        }

        return (
            <Wrapper>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" name="title"
                               defaultValue={this.state.title}
                               onChange={e => this.setState({title: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" name="description"
                                  defaultValue={this.state.description}
                                  onChange={e => this.setState({description: e.target.value})}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <ImageUpload value={this.image = this.state.image} imageChanged={this.imageChanged}/>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="number" className="form-control" name="price"
                               value={this.price = this.state.price}
                               onChange={e => this.setState({price: e.target.value})}
                        />
                    </div>

                    <button className="btn btn-outline-secondary">Save</button>
                </form>
            </Wrapper>
        );
    }
}

export default ProductEdit;
