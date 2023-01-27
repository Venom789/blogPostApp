import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link,useNavigate} from 'react-router-dom'
import shortid from 'shortid';
import { addBlog } from '../redux/action/action';

function AddBlog() {
    const blogs = useSelector((state)=>state);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    let newBlog = {
        id : 1,title : '',category:'',content:'',isLiked:false
    }
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!title||!category||!content){
            return alert("Please fill all fields");
        }

        newBlog.id = shortid.generate();
        newBlog.title = title;
        newBlog.category = category;
        newBlog.content = content;
        dispatch(addBlog(newBlog));
        navigate("/");
        console.log(newBlog);
        
    };


    return (<>
        
        <div className="container blog-container shadow mt-5">
            <h4 className='mb-3 mx-3'>Add New Blog</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 mx-3">
                    <label className="form-label">Title&nbsp;:</label>
                    <input value = {title} onChange = {(e) => setTitle(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 mx-3">
                    <label className="form-label">Category&nbsp;:</label>
                    <input value = {category} onChange = {(e) => setCategory(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 mx-3">
                    <label className="form-label">Blog Content&nbsp;:</label>
                    <textarea value = {content} onChange = {(e) => setContent(e.target.value)} style={{ height: "130px", overflow:"scroll", resize:"none" }} type="text" className="form-control" id="textArea" />
                </div>
                <button type="submit" className="btn btn-primary mx-3">Submit</button>
                <Link to="/" className="btn btn-primary mx-3">Cancel</Link>
            </form>
            
        </div>
    </>)
}

export default AddBlog
