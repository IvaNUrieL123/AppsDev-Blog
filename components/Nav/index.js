import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.nav`
  padding: 30px;
  border-bottom: 1px solid #ddd;
  display: flex;
  background: rgb(1,114,175);
  background: linear-gradient(90deg, rgba(1,114,175,1) 00%, rgba(34,109,245,1) 0%, rgba(116,254,189,1) 100%);

  a {
    padding: 0 15px;
    color: #FFF;
    text-align: center;
  }
  
`

const Nav = () => (
  <Wrapper>
    <Link href='/'><a>Home</a></Link> |
    <Link href='/about' prefetch><a>About</a></Link> |
    <Link href='/contact' prefetch><a>Contact</a></Link>
  </Wrapper>
)



export default Nav
