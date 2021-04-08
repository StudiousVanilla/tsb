import {fetchBlogs, fetchBlogThemes} from '../functions/dataFetch'

const Test = () => {

    return ( 
        <div>
            <button onClick={fetchBlogs}>
                fetch blogs
            </button>
            <button onClick={fetchBlogThemes}>
                fetch blog themes
            </button>
        </div>
     );
}
 
export default Test;