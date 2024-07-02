import {Component, PropsWithChildren} from 'react';
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import axios from 'axios';
import { redirect } from 'react-router-dom';

class Wrapper extends Component<PropsWithChildren<any>> {
    state = {
        redirect: false
    }

    componentDidMount = async () => {
        try {
            await axios.get('user');
        } catch(e) {
            this.setState({
                redirect: true
            })
        }
    }

    render() {
        if (this.state.redirect) {
            redirect('/login')
            return
        }
        return (
            <>
                <Nav/>

                <div className="container-fluid">
                    <div className="row">
                        <Menu/>

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            {this.props.children}
                        </main>
                    </div>
                </div>
            </>
        );
    }
}

export default Wrapper;