import { useEffect, useState } from "react"
import Bookingbtn from './Bookingbtn'
import {buttonToOrange, sideBarNavy, logoSRC, navySide} from '../functions/colorChanges'
import scrollToTop from '../functions/scrollToTop'
import {fetchBlogs} from '../functions/dataFetch'
import { Link } from "react-router-dom"
import logo from '../icons/logo-grey.svg'

const Blogs = () => {

    // sets sate for blogs that will populate page
    const [blogs, setBlogs] = useState('');

    // pulls blog information based on number of blogs to fetch
    const getData = async () =>{

        const blogData = await fetchBlogs()

        setBlogs(blogData)

        // setBlogs([{blogID: 2, date: 1602495843000, footer: "This site is still in development and this blog post was taken from the old TSB blog.", imgCred: "John Smith", imgSRC: "www.google.com", lower: "Mentor No 4: The Anchor This person doesn’t have to work in your industry — in fact, it could be a friend or family member. While your champion supports you to achieve specific career goals, your anchor is a confidante and a sounding board. We’re all going to hit speed bumps and go through uncertainty in life, so we need someone who can give us a psychological lift and help us see light through the cracks during challenging times. Because the anchor is keeping your overall best interests in mind, they can be particularly insightful when it comes to setting priorities, achieving work-life balance, while not losing sight of your values. Mentor No 5: The Reverse Mentor Pay attention to learning from the people you’re mentoring, even though they may have fewer years in the workplace than you. Use the opportunity to collect feedback on your leadership style, engage with the younger generation, and keep your perspectives fresh and relevant.", published: true, quote: "If you know you want to be the best in your field — ask, Who are the most iconic figures in that area?", subtitle: "#SupportWhenYouNeedIt", tags: ["Mentors", "Learning", "Leadership"], theme: "Mentorship", title:"Identify your Mentors", upper:"Mentor No 1: The Master of Craft  If you know you want to be the best in your field — ask, Who are the most iconic figures in that area?  This person can function as your personal inspiration, someone who’s accumulated their wisdom through years of experience and who can provide insight into your industry and fine-tuning your skills. Turn to this person when you need advice about launching a new initiative or brainstorming where you should work next. They should help you identify, realize and hone your strengths towards the closest state of perfection as possible. Mentor No 2: The champion of my Cause  This mentor is someone who will talk you up to others, and it’s important to have one of these in your current workplace. These are people who are advocates and who have your back. But they’re more than just boosters — often, they can be connectors too, introducing you to useful people in your industry. Mentor No 3: The Co-pilot  Another name for this type is your best work bud. The co-pilot is the colleague who can talk you through projects, advise you in navigating the personalities at your company, and listen to you vent over coffee. This kind of mentoring relationship is best when it’s close to equally reciprocal -  peers committed to supporting each other, collaborating with each other, and holding each other accountable. And when you have a co-pilot, both the quality of your work and your engagement level improve. "}, {blogID: 2, date: 1602495843000, footer: "This site is still in development and this blog post was taken from the old TSB blog.", imgCred: "John Smith", imgSRC: "www.google.com", lower: "Mentor No 4: The Anchor This person doesn’t have to work in your industry — in fact, it could be a friend or family member. While your champion supports you to achieve specific career goals, your anchor is a confidante and a sounding board. We’re all going to hit speed bumps and go through uncertainty in life, so we need someone who can give us a psychological lift and help us see light through the cracks during challenging times. Because the anchor is keeping your overall best interests in mind, they can be particularly insightful when it comes to setting priorities, achieving work-life balance, while not losing sight of your values. Mentor No 5: The Reverse Mentor Pay attention to learning from the people you’re mentoring, even though they may have fewer years in the workplace than you. Use the opportunity to collect feedback on your leadership style, engage with the younger generation, and keep your perspectives fresh and relevant.", published: true, quote: "If you know you want to be the best in your field — ask, Who are the most iconic figures in that area?", subtitle: "#SupportWhenYouNeedIt", tags: ["Mentors", "Learning", "Leadership"], theme: "stress management", title:"Identify your Mentors", upper:"Mentor No 1: The Master of Craft  If you know you want to be the best in your field — ask, Who are the most iconic figures in that area?  This person can function as your personal inspiration, someone who’s accumulated their wisdom through years of experience and who can provide insight into your industry and fine-tuning your skills. Turn to this person when you need advice about launching a new initiative or brainstorming where you should work next. They should help you identify, realize and hone your strengths towards the closest state of perfection as possible. Mentor No 2: The champion of my Cause  This mentor is someone who will talk you up to others, and it’s important to have one of these in your current workplace. These are people who are advocates and who have your back. But they’re more than just boosters — often, they can be connectors too, introducing you to useful people in your industry. Mentor No 3: The Co-pilot  Another name for this type is your best work bud. The co-pilot is the colleague who can talk you through projects, advise you in navigating the personalities at your company, and listen to you vent over coffee. This kind of mentoring relationship is best when it’s close to equally reciprocal -  peers committed to supporting each other, collaborating with each other, and holding each other accountable. And when you have a co-pilot, both the quality of your work and your engagement level improve. "}])

    }

    const convertDate = (timeStamp) => {
        let date = new Date(timeStamp)
        let day = date.getDate()
        let month = date.toLocaleString('default', { month: 'long' });
        let year = date.getFullYear()
        let dateString = `${day} ${month} ${year}`
        return dateString
    }
    

    useEffect(()=>{
        navySide()
        buttonToOrange()
        sideBarNavy()
        logoSRC(logo)
        scrollToTop()
        getData()
    }, [])


    return ( 
        <main className='blogs-container'>
            <div className="blogs-title-container">
                <h2 className="blogs-title">TSB Blog</h2>
            </div>
            
            
            {blogs.length>=1 && blogs.map((blog)=>(
                <div className="blog-post-container" key={blog.title}>
                    {/* sends blog title to post component as a BlogRef */}
                    <Link to={'/blog/'+blog.blogID}>
                        <div className="blog-img-container">
                            <img className='blog-img' src={blog.imgSRC} alt=""/>
                        </div>
                    </Link>
                    <div className='blog-info-container'>
                        <div className="blog-date-theme">
                            <span>{convertDate(blog.date)}</span>
                            <span>|</span>
                            <span>{blog.theme}</span>
                        </div>
                        <Link to={'/blog/'+blog.blogID}>
                            <p className="blog-title">
                                {blog.title}
                            </p>
                        </Link>
                        <p className="blog-upper">
                            {blog.upper.substring(0, 300)}...
                        </p>
                        <Link to={'/blog/'+blog.blogID}>
                            <p className="read-more-link">Read more</p>
                        </Link>
                    </div>
                </div>
            ))}
                <Bookingbtn/>
        </main>
     );
}
 
export default Blogs;