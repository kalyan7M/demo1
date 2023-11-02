import { Link } from "react-router-dom"
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./App.css"

let Nav=()=>{
    return(
        <nav>
            <div className="logo">
                <img src="https://img.freepik.com/premium-vector/portfolio-illustration-transparent-background_565844-153.jpg?w=2000" alt=""/>
            </div>
            <div className="link">
                <Link to="/">Home</Link>
                <AnchorLink href="#skills">Skills</AnchorLink>
                <AnchorLink href="#education">Education</AnchorLink>
                <AnchorLink href="#contact">Contact</AnchorLink>
            </div>
            <div className="icons">
                <Link to="https://www.linkedin.com/in/deepala-pavan-kalyan-b239b6233/"><i class="fa-brands fa-linkedin"></i></Link>
                <Link to="https://www.hackerrank.com/profile/pavankalyandeep2"><i class="fa-brands fa-hackerrank"></i></Link>
            </div>
        </nav>
    )
}
export default Nav