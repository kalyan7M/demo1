import "./App.css"
import img from "./images/profile1.jpeg"

let Home = () => {
    return (
        <>
            <div className="home">
                <div className="text">
                    <h1>Hi,i am </h1>
                    <h1>Pavan Kalyan</h1>
                    <p>i am a</p>
                    <p>
                        Front-end Web Developer
                    </p>
                    <button className="resume">Check Resume</button>
                </div>
                <div className="photo">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="skills" id="skills">
                <h1 className="skill-title">Skills</h1>
                <p>I have worked on a wide range of projects for web apps. Here are some of my projects.</p>
                <div className="cards">
                    <div className="card1">
                        <div className="skill-tag">Frontend</div>
                        <div className="skill">
                            <i class="fa-brands fa-html5"></i>
                            <h3>HTML</h3>
                        </div>
                        <div className="skill">
                            <i class="fa-brands fa-css3-alt"></i>
                            <h3>CSS</h3>
                        </div>
                        <div className="skill">
                            <i class="fa-brands fa-js"></i>
                            <h3>Javascript</h3>
                        </div>
                        <div className="skill">
                            <i class="fa-brands fa-react"></i>
                            <h3>Reactjs</h3>
                        </div>
                        <div className="skill">
                            <i class="fa-brands fa-bootstrap"></i>
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="skill-tag">Backend</div>
                        <div className="skill">
                            <i class="fa-brands fa-node"></i>
                            <h3>NodeJs</h3>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="skill-tag">Database</div>
                        <div className="skill">
                            <i class="fa-solid fa-database"></i>
                            <h3>Mysql</h3>
                        </div>
                        <div className="skill">
                            <i class="fa-solid fa-server"></i>
                            <h3>MongoDB</h3>
                        </div>

                    </div>
                    <div className="card1">
                        <div className="skill-tag">Others</div>
                        <div className="skill">
                            <i class="fa-brands fa-python"></i>
                            <h3>Python</h3>
                        </div>
                        <div className="skill">
                            <i class="fa-brands fa-java"></i>
                            <h3>Java</h3>
                        </div>
                        <div className="skill">
                            <i class="fa-solid fa-sitemap"></i>
                            <h3>DSA</h3>
                        </div>
                        <div className="skill">
                            <i class="fa-brands fa-github"></i>
                            <h3>Git hud</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="education" id="education">
                <h1>Education</h1>
                <p>My education has been a journey of self-discovery and growth. My educational details are as follows</p>
                <div className="edu-tech">
                    <div className="edu">
                        <div className="edu-eng">
                            <div className="edu-eng-title">
                                <div>
                                    <i class="fa-solid fa-graduation-cap"></i>
                                </div>
                                <div>
                                    <p className="eng-clg">Vignan's Lara Institute Of Technology & Science</p>
                                    <p className="eng-br">Bachelor of Technology- B.Tech, Electrical & Electronics Engineering</p>
                                    <p className="eng-year">Jun 2018 - Aug 2022</p>
                                </div>
                            </div>
                            <div>
                                I have complated Bachelor's degree in Information Technology at Zeal College and research, pune. My CGPA is 7.6
                            </div>
                        </div>
                        <div className="edu-eng">
                            <div className="edu-eng-title">
                                <div>
                                    <i class="fa-solid fa-graduation-cap"></i>
                                </div>
                                <div>
                                    <p className="eng-clg">Sri Nagarjuna Junior College</p>
                                    <p className="eng-br">Secondary (XII)</p>
                                    <p className="eng-year">Jun 2016 - Mar 2028</p>
                                </div>
                            </div>
                            <div>
                                I completed my class 12 high school education at Hutatma Rajguru Mahavidyalaya, Rajguru Nagar, where I studied Science with Computer Science.
                            </div>
                        </div>
                        <div className="edu-eng">
                            <div className="edu-eng-title">
                                <div>
                                    <i class="fa-solid fa-school"></i>
                                </div>
                                <div>
                                    <p className="eng-clg">Z.P.High School </p>
                                    <p className="eng-br">Secondary(X)</p>
                                    <p className="eng-year">Jun 2015 - Aug 2016</p>
                                </div>
                            </div>
                            <div>
                                I completed my class 10 education at New English School, Kalus , where I studied Science with Computer Application.
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr className="line"></hr>
                    </div>
                </div>
            </div>
            <div className="contact" id="contact">
                <h1>Contact</h1>
                <p>Feel free to reach out to me htmlFor any questions or opportunities!</p>
                <div className="contact-card">
                    <p className="email">Email Me  <i class="fa-solid fa-rocket"></i></p>
                    <input type="text" placeholder="Your Name *" className="contact-name" />
                    <input type="email" placeholder="Your Email *" />
                    <input type="text" placeholder="Subject" />
                    <textarea rows={5} cols={20} placeholder="Write your thoughts here *">

                    </textarea>
                    <button>Send</button>
                </div>

            </div>
        </>
    )
}
export default Home
