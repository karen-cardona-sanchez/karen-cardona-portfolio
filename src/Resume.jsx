export function Resume() {
    return (
        <div class="resume-body">
            <header class="resume-header">
                <h1>Karen Cardona-Sanchez</h1>
                <h4>Northern, NJ | kcs683@bu.edu</h4>
            </header>
            <main class="resume-main">
                <div id="bio">
                    <h3>Hi, I'm Karen!</h3>
                    <img src="../public/assets/Karen.png"></img>

                    <p>I am currently studying for my Master of Science in Computer Information Systems. I have a background in
                        administrative work and am looking to go into full-stack development in the healthcare field. I have programming
                        experience using Python, Java, and Javascript and am working on developing those skills further through various
                        projects. I've recently been introduced to working with database development and scripting for data analysis.
                    </p>
                </div>

                <div id="experience">
                    <h3>Experience</h3>
                    <div class="experience-group">
                        <p class="job-title">Medical Office Associate</p>
                        <p class="company-name">Atlantic Rehabilitation</p>
                        <ul class="job-description">
                            <li>Schedule appointments and communicate with patients to ensure high quality care in outpatient clinic
                            </li>
                            <li>Accurately update and maintain patient records</li>
                            <li>Translate and update patient forms to better comply with standards and assist Spanish-speaking patients
                            </li>
                        </ul>
                    </div>
                    <div class="experience-group">
                        <p class="job-title">Teacher & Education Coordinator</p>
                        <p class="company-name">C2 Education</p>
                        <ul class="job-description">
                            <li>Tutor and track progress of students to best help them achieve academic success</li>
                            <li>Collaborate with class schedule to ensure appropriate staff support for each session</li>
                            <li>Provided marketing support through phone and email communication to current and prospective families
                            </li>
                            <li>Develop list of community contacts to expand C2’s presence across Chatham and surrounding areas</li>
                        </ul>
                    </div>
                    <div class="experience-group">
                        <p class="job-title">Administrative Assistant</p>
                        <p class="company-name">Affiliated Monitoring</p>
                        <ul class="job-description">
                            <li>Developed social media marketing strategy resulting in an increase of 200 LinkedIn followers in 2 months
                            </li>
                            <li>Maintained editorial calendar for company LinkedIn</li>
                            <li>Participated in special projects including legal research and copyediting for marketing materials
                            </li>
                            <li>Calendar management and planning for organization executives</li>
                        </ul>
                    </div>
                </div>


                <div id="skills-contact-education">
                    <div id="skills">
                        <h3>Skills</h3>
                        <div id="skills-flex">
                            <div class="skill-group">
                                <img class="skill-sticker" src="../public/assets/HTML.png"></img>
                                <label>HTML</label>
                            </div>
                            <div class="skill-group">
                                <img class="skill-sticker" src="../public/assets/CSS.png"></img>
                                <label>CSS</label>
                            </div>
                            <div class="skill-group">
                                <img class="skill-sticker" src="../public/assets/React.png"></img>
                                <label>React</label>
                            </div>
                            <div class="skill-group">
                                <img class="skill-sticker" src="../public/assets/PostgreSQL.png"></img>
                                <label>PostgreSQL</label>
                            </div>
                            <div class="skill-group">
                                <img class="skill-sticker" src="../public/assets/Python.png"></img>
                                <label>Python</label>

                            </div>
                            <div class="skill-group">
                                <img class="skill-sticker" src="../public/Assets/Java.png"></img>
                                <label>Java</label>
                            </div>
                        </div>
                    </div>

                    <div id="contact">
                        <h3>Contact</h3>
                        <ul>
                            <li>Email: <a href="mailto:kcs683@bu.edu" class="contact-link">kcs683@bu.edu</a></li>
                            <li>LinkedIn: <a href="https://linkedin.com/in/karen-cardona-sanchez" class="contact-link">Karen
                                Cardona-Sanchez</a></li>
                            <li>GitHub: <a href="https://github.com/karen-cardona-sanchez" class="contact-link">karen-cardona-sanchez</a>
                            </li>
                        </ul>
                    </div>


                    <div id="education">
                        <h3>Education</h3>
                        <div class="education-group">
                            <p class="school-title">Cornell University</p>
                            <p class="school-title">College of Arts and Sciences</p>
                            <p class="degree-title">Bachelor of Arts in English</p>
                        </div>
                        <div class="education-group">
                            <p class="school-title">Boston University</p>
                            <p class="school-title">Metropolitan College</p>
                            <p class="degree-title">Master of Science in Computer Information Systems</p>
                        </div>
                    </div>
                </div>

            </main>
            <footer>
                <p>Karen Cardona-Sanchez</p>
                <p>Copyright 2025</p>
                <p>Created for BU MET Course CS 601</p>
            </footer>
        </div>


    )
}