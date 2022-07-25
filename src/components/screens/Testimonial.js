import React, {useState,useEffect} from 'react';
import styled from 'styled-components'; 
import axios from 'axios'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
function Testimonial() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios.get('https://traveller.talrop.works/api/v1/blog/')
        .then(function (response) {
            setBlogs(response.data.data);
            console.log(response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, []);

    const renterItems = () => (

        blogs.map((blog) => (
            <List key = {blog.id}>
               <Link className = "link" to ={`/user/${blog.id}`}>
                    <TestimonialContainer>
                        <ImageContainer>
                            <Image src = {blog.author.image} alt = {"User"+blog.author.name} />
                        </ImageContainer>
                        <InnerHeading>Alpine Hackathon Reportback</InnerHeading>
                        <InnerPara>A guest post by<ParaLink> meskio </ParaLink>{blog.posted_date}</InnerPara>
                        <MiniPara>{blog.description}</MiniPara>
                        <ParaLink>Read More...</ParaLink>
                    </TestimonialContainer>
               </Link>
            </List>
        ))
        
    )
    return(
        <>
            <TestimonialMain>
                <Wrapper>
                    <Cover>
                        <Heading>Blog Posts</Heading>
                        {renterItems()}
                    </Cover>
                </Wrapper>
            </TestimonialMain>
        </>
    )
}
export default Testimonial;

const TestimonialMain = styled.section`
    padding: 4% 23%;
    background-color: #f7f7f7;
`
const Wrapper = styled.section`
    
`
const Heading = styled.h2`
    text-align: center;
    font-size: 50px;
    font-weight: 500;
    margin-bottom: 80px;
    color: #000;
`
const TestimonialContainer = styled.div`
    background-color: #fff;
    position: relative;
    padding: 11% 20%;
    cursor: pointer;
`
const ImageContainer = styled.div`
    width: 10%;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: 44%;
    bottom: 91%;
`
const Image = styled.img`
    display: block;
    width: 100%;
`
const InnerHeading = styled.h3`
    font-size: 36px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 30px;
    color: #000;
`
const InnerPara = styled.p`
    text-align: center;
    font-size: 20px;
    color: #7e7e7e;
    margin-bottom: 40px;
`
const MiniPara = styled.p`
    font-size: 18px;
    height: 170px;
    overflow: hidden;
    color: #000;
    margin-bottom: 20px;
    line-height: 1.6em;

`
const ParaLink = styled.span`
    color: #4c70a9;
`
const Cover = styled.ul`
    list-style: none;
`
const List = styled.li`
    margin-bottom: 135px;
    height: 530px;
    
`