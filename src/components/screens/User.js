import styled from 'styled-components';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function User() {

    const [users, setUsers] = useState([]);
    const [authors, setauthors] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://traveller.talrop.works/api/v1/blog/article/${id}`)
        .then(function (response) {
            setUsers(response.data.data)
            setauthors(response.data.data.author)

        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    return(     
        <>
            <UserMain>
                <Wrapper>
                    <ImageContainer>
                        <Image src = {authors.image} alt = "User" />
                    </ImageContainer>
                    <Heading>{users.title}</Heading>
                    <HeadingPara><ParaLink>moxie0 </ParaLink>on {users.posted_date}</HeadingPara>
                    <SecPara>{users.description}</SecPara>
                </Wrapper>

            </UserMain>
        </>
    )
}

export default User;

const UserMain = styled.section`
    background-color: #f7f7f7;
    padding: 3% 28%;
`
const Wrapper = styled.section`
    
`
const ImageContainer = styled.div`
    width: 10%;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 60px;
`
const Image = styled.img`
    display: block;
    width: 100%;
`
const Heading = styled.h3`
    font-size: 40px;
    text-align: center;
    margin-bottom:40px ;
`
const HeadingPara = styled.p`
    text-align: center;
    margin-bottom: 30px;
    color: #7a7a7a;
    
`
const ParaLink = styled.a`
    color: #5271a0;
`
const SecPara = styled.p`
    font-size: 16px;
    line-height:1.8em;
`