import { useEffect, useState } from "react"
import Bookingbtn from './Bookingbtn'
import {buttonToOrange, sideBarNavy, logoSRC, menuSRC, navySide} from '../functions/colorChanges'
import scrollToTop from '../functions/scrollToTop'
import {fetchBlogPost} from '../functions/dataFetch'
import { Link, useParams } from "react-router-dom"
import logo from '../icons/logo-grey.svg'
import menuGrey from '../icons/menuGrey.svg'
import fbIcon from '../icons/fb-navy.svg'
import inIcon from '../icons/in-navy.svg'

const Blogs = () => {

    
    // sets sate for blogs that will populate page
    const [blog, setBlog] = useState({title: ''});

    let  { blogRef} = useParams()
    let blogNumber = Number(blogRef)



    const convertDate = (timeStamp) => {
        let date = new Date(timeStamp)
        let day = date.getDate()
        let month = date.toLocaleString('default', { month: 'long' });
        let year = date.getFullYear()
        let dateString = `${day} ${month} ${year}`
        return dateString
    }

    const listTags = (tags) => {
        let tagString = ''
        tags.forEach(tag => tagString =  tagString + tag + ', ')
        let SlicedTagString = tagString.slice(0, -2)
        return SlicedTagString
    }
   

    useEffect(()=>{
        navySide()
        buttonToOrange()
        sideBarNavy()
        logoSRC(logo)
        menuSRC(menuGrey)
        scrollToTop()

        // pulls blog information based on blogTitle
        const getBlogPost = async () =>{

            const blogData = await fetchBlogPost(blogNumber)

            setBlog(blogData)

            // setBlog({blogID: 2, date: 1602495843000, footer: "This site is still in development and this blog post was taken from the old TSB blog.", imgCred: "John Smith", imgSRC: "www.google.com", lower: "Mentor No 4: The Anchor This person doesn’t have to work in your industry — in fact, it could be a friend or family member. While your champion supports you to achieve specific career goals, your anchor is a confidante and a sounding board. We’re all going to hit speed bumps and go through uncertainty in life, so we need someone who can give us a psychological lift and help us see light through the cracks during challenging times. Because the anchor is keeping your overall best interests in mind, they can be particularly insightful when it comes to setting priorities, achieving work-life balance, while not losing sight of your values. Mentor No 5: The Reverse Mentor Pay attention to learning from the people you’re mentoring, even though they may have fewer years in the workplace than you. Use the opportunity to collect feedback on your leadership style, engage with the younger generation, and keep your perspectives fresh and relevant.", published: true, quote: "If you know you want to be the best in your field — ask, Who are the most iconic figures in that area?", subtitle: "#SupportWhenYouNeedIt", tags: ["Mentors", "Learning", "Leadership"], theme: "Mentorship", title:"Identify your Mentors", upper:"Mentor No 1: The Master of Craft  If you know you want to be the best in your field — ask, Who are the most iconic figures in that area?  This person can function as your personal inspiration, someone who’s accumulated their wisdom through years of experience and who can provide insight into your industry and fine-tuning your skills. Turn to this person when you need advice about launching a new initiative or brainstorming where you should work next. They should help you identify, realize and hone your strengths towards the closest state of perfection as possible. Mentor No 2: The champion of my Cause  This mentor is someone who will talk you up to others, and it’s important to have one of these in your current workplace. These are people who are advocates and who have your back. But they’re more than just boosters — often, they can be connectors too, introducing you to useful people in your industry. Mentor No 3: The Co-pilot  Another name for this type is your best work bud. The co-pilot is the colleague who can talk you through projects, advise you in navigating the personalities at your company, and listen to you vent over coffee. This kind of mentoring relationship is best when it’s close to equally reciprocal -  peers committed to supporting each other, collaborating with each other, and holding each other accountable. And when you have a co-pilot, both the quality of your work and your engagement level improve. "})

        }
        
        getBlogPost()
        
    }, [blogNumber])


    return (

        <div>
            { blog.title !== '' &&
            <main className='post-container'>
                <div className="date-theme-container">
                    <p className="post-date">{ convertDate(blog.date) }</p>
                    <p className="post-theme">{blog.theme}</p>
                </div>
                <div className="blog-post-title-container">
                    <h2 className="post-title">{blog.title}</h2>
                </div>
                <div className="blog-post-subtitle-container">
                    <h3 className="post-subtitle">{blog.subtitle}</h3>
                </div>
                <div className="blog-post-img-container">
                    <img className="blog-post-img" src={blog.imgSRC} alt=""/>
                </div>
                <div className="blog-post-upper-container">
                    <p className="post-upper">{blog.upper}</p>
                </div>
                <div className="blog-post-quote-container">
                    <p className="post-quote">"{blog.quote}"</p>
                </div>
                <div className="blog-post-lower-container">
                    <p className="post-lower">{blog.lower}</p>
                </div>
                <div className="blog-post-footer-container">
                    <p className="post-footer">{blog.footer}</p>
                </div>
                <div className="blog-post-tags-container">
                    <p className="post-tags tags">
                        Tags: {listTags(blog.tags)}
                    </p>
                    <p className="post-tags img-credit">
                        Image credit: {blog.imgCred}
                    </p>
                    <p className="post-tags img-link">
                        Image link: {blog.imgLink}
                    </p>
                </div>
                <div className="blog-post-info-share-container">
                    <div className="post-info">
                        <p className="post-author">By Mona Eames</p>
                        <p className="post-date">{convertDate(blog.date)}</p>
                    </div>
                    <div className="post-share-container">
                        <p className="post-share">
                            Visit
                            <a href={blog.fblink} target="_blank" rel="noreferrer">
                                <img className="share-icon" src={fbIcon} alt="Facebook"/>
                            </a>
                            or
                            <a href={blog.inlink} target="_blank" rel="noreferrer">
                                <img className="share-icon" src={inIcon} alt="LinkedIn"/>
                            </a>
                            to share or comment
                        </p>
                    </div>
                </div>
                <div className="blog-post-nav-container">
                    <Link to='/blog'>
                        <p className="post-nav link no-mob">Return to Blog Feed</p>
                    </Link>
                    {/* <Link to='/tsb'>
                        <p className="post-nav">Visit The Sounding Board Home</p>
                    </Link> */}
                </div >
            </main>
            }
            <Bookingbtn/>
        </div>
     );
}
 
export default Blogs;