
const fetchBlogs = async () => {

    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    try {
        const response = await fetch('https://tsb-mailer.herokuapp.com/blogs', requestOptions)

        // response will be a success or error message
        const data = await response.json()

        // sets formMessage state to response (positive or negative)
        return data
        
    } catch (error) {
        console.log(error);
        // sets formMessage state due to error )
    }
}

const fetchBlogThemes = async () => {

   

    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    try {
        const response = await fetch('https://tsb-mailer.herokuapp.com/blogthemes', requestOptions)

        // response will be a success or error message
        const data = await response.json()

        return data
        
    } catch (error) {
        console.log(error);
        // sets formMessage state due to error )
    }
}

const fetchBlogPost = async (blogNumber) => {

    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    try {
        const response = await fetch(`https://tsb-mailer.herokuapp.com/blogpost/${blogNumber}`, requestOptions)

        // response will be a success or error message
        const data = await response.json();

        // sets formMessage state to response (positive or negative)
        return data
        
    } catch (error) {
        console.log(error);
        // sets formMessage state due to error )
    }
}

const fetchFilteredBlogs = async (theme) => {

    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    try {
        const response = await fetch(`https://tsb-mailer.herokuapp.com/blogfilter/${theme}`, requestOptions)

        // response will be a success or error message
        const data = await response.json()

        // sets formMessage state to response (positive or negative)
        return data
        
    } catch (error) {
        console.log(error);
        // sets formMessage state due to error )
    }
}

export {fetchBlogs, fetchBlogThemes, fetchBlogPost, fetchFilteredBlogs}