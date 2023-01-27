import React from 'react';
import { useState,useEffect } from 'react';
import { useSelector,connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Home(props) {
    console.log(props);
    const blogList = useSelector(state=>state);

    const [blogArray, setBlogArray]= useState([]);

    useEffect(() => {   
        if(props?.user?.items?.length > 0)
        {
            setBlogArray(props.user.items);
        }
    },[]);
    const generateTable = () => {
        console.log("BlogDetails",blogArray);
        let array = [];
        blogArray.map((user,index) => {
            array.push(<tr key={index}>
                <td><Link to={`showBlog/${user.id}`} ><button className="blog-list-btn">{user.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="blog-category">{user.category}</span></button></Link></td>
            </tr>)
        });
        return array;
    };


    return (<>

        <div className="container blog-container shadow mt-5">
            <h1>Blogs</h1>
            <table style={{ width: "500px" }}>
                <tbody>
                {generateTable()}
                </tbody>
            </table>
        </div>
    </>)
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps)(Home);
