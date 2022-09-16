import React, { Component } from 'react'
import axios from 'axios'

class getList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log('Axuios response get - ', res);
                this.setState({ posts: res.data })

            })
            .catch(err => {
                console.log('Axuios error get - ', err);
            })
    }

    render() {
        const { posts } = this.state
        return (<div>
            list of data -
            {/* {JSON.stringify(posts)} */}
            
            {posts.length?
            posts.map(post => <div key={post.id}>{post.id}</div>):
            null
            }

        </div>)
    }
}


export default getList