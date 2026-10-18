import './App.css'
import emailjs from '@emailjs/browser';

function App() {
  return (
    <div className="portfolio">

      <nav className="navbar">
        <a href="#home" className="logo">My Portfolio</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-text">
         
          <h1>
            Hi, I'm <span>Theint Thinzar Lwin</span>
          </h1>

          <h2>Aspiring Junior Web Developer</h2>

          <p className="description">
            I enjoy transforming creative ideas into meaningful digital experiences.
             Welcome to my portfolio, where you can explore my projects, skills, and journey in web development.
          </p>

          <a href="#about" className="main-button">
            More About Me
          </a>
        </div>

        <div className="hero-decoration">
          <div className="circle">
            <img src="1.jpg" alt="My Profile" />
          </div>
          <p>Learning & Growing</p>
        </div>
      </section>

      <section id="about" className="about section">
  <div className="dot dot-one"></div>
  <div className="dot dot-two"></div>
  <div className="dot dot-three"></div>
  <div className="dot dot-four"></div>

  <div className="about-container">
    <div className="about-image">
      <div className="about-image-frame">
        <div className="about-image-inner">
          <img src="me.jpg" alt="Theint Thinzar Lwin" />
        </div>
      </div>
      <div className="about-orbit"></div>
    </div>

    <div className="about-section">
       <p className="small-title">GET TO KNOW ME</p>
      <h2>About Me</h2>
      <p>
       I am a Computer Science student with a growing interest in front-end development and website design. I enjoy solving problems, experimenting with new ideas, and creating websites that are both attractive and easy to use. 
       My goal is to grow as a developer and contribute to real-world projects
      </p>

      <div className="about-stats">
        <div className="about-stat">
          <h3>05+</h3>
          <p>Technical Skills</p>
        </div>

        <div className="about-stat">
          <h3>03</h3>
          <p>Academic Projects</p>
        </div>

        <div className="about-stat">
          <h3>N4</h3>
          <p>Japanese Level</p>
        </div>
      </div>

      <a href="#contact" className="about-button">
        ✉ Contact Me
      </a>
    </div>
  </div>
</section>

      

      <section id="skills" className="skills section">
        <p className="small-title">WHAT I AM LEARNING</p>
        <h2>My Skills</h2>

        <div className="skill-list">
          <div className="skill-card">
            <span>01</span>
            <h3>Technical Skills</h3>
            <ul>
              <li>React</li>
              <li>Javascript</li>
              <li>C++,PHP && C#</li>
              <li>MySQL</li>
              <li>HTML && CSS</li>
            </ul>
          </div>

          <div className="skill-card">
            <span>02</span>
            <h3>Language Skills</h3>
             <ul>
              <li>Burmese</li>
              <li>English</li>
              <li>Janpanese(N4)</li>
              
            </ul>
            
          </div>

          <div className="skill-card">
            <span>03</span>
            <h3>Soft Skills</h3>
            <ul>
              <li>Excellent communication and teamwork skills</li>
              <li>Time management and professionl workplace discipline</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="projects section">
        <p className="small-title">MY Academic Projects</p>
        <h2>Projects</h2>
       
        <div className="project-card">
          <div className="project-header">
            <h3>Pre-School Enrollment System</h3>   
          </div>
          <p className="project-desc">
            Developed a Pre-school Enrollment System using PHP and MySQL to simplify 
            the student enrollment process and efficiently manage student information.

          </p>

          <div className="tech-tags">
            <span>PHP</span>
            <span>MySQL</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>

          <div className="key-contributions">
            <h4>Key Contributions</h4>
            <ul>
              <li>Designed a user-friendly interface for the enrollment system.</li>
              <li>Created enrollment forms to collect student information.</li>
              <li>Implemented database operations for efficient student record management.</li>
            </ul>
          </div>
        </div>

   
        <div className="project-card">
          <div className="project-header">
            <h3>Secure Online Voting System</h3>
          </div>
          <p className="project-desc">
            A web application designed to support voter registration, authentication, and online election workflows.
          </p>
          <div className="tech-tags">
            <span>Java</span>
            <span>JSP</span>
            <span>Servlet</span>
            <span>JavaScript</span>
            <span>MySQL</span>
          </div>

          <div className="key-contributions">
            <h4>Key Contributions</h4>
            <ul>
              <li>Designed and developed an online voting system.</li>
              <li>Implemented voter registration and authentication.</li>
              <li>Developed one-vote-per-voter validation.</li>
              <li>Managed candidate and election information.</li>
              <li>Applied access control to protect voting data and secured voting data through MySQL access controls.</li>
            </ul>
          </div>

            <div className="project-images-scroll">
            <img src="Picture1.png" alt="none" />
            <img src="Picture2.png" alt="none" />
            <img src="Picture3.png" alt="none" />
            <img src="Picture4.png" alt="none" />
            <img src="Picture5.png" alt="none" />
            <img src="Picture6.png" alt="none" />
            <img src="Picture7.png" alt="none" />
            <img src="Picture8.png" alt="none" />
            <img src="Picture9.png" alt="none" />
            <img src="Picture10.png" alt="none"/>

          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h3>Coffee&Cake Shop Management System</h3>
          </div>
          <p className="project-desc">
           The system provides a user-friendly interface for customers to explore available products.
          </p>
          <div className="tech-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>MySQL</span>
          </div>

          <div className="key-contributions">
            <h4>Key Contributions</h4>
            <ul>
              <li>Designed an attractive and user-friendly interface for the coffee and cake shop.</li>
              <li>Created product displays for coffee, cakes, and other available items.</li>
              <li>mplemented JavaScript to enhance website interactivity.</li>
              <li>Used MySQL to store and manage product information.</li>
              
            </ul>
          </div>

            <div className="project-images-scroll">
            <img src="coffee1.jpg" alt="none" />
            <img src="coffee2.jpg" alt="none" />
            <img src="coffee3.jpg" alt="none" />
            <img src="coffee4.jpg" alt="none" />
            <img src="coffee5.jpg" alt="none" />
            <img src="coffee6.jpg" alt="none" />
            <img src="coffee7.jpg" alt="none" />
            <img src="coffee8.jpg" alt="none" />
          </div>
        </div>
      </section>

      <section id="contact" className="contact section">
         <p className="small-title">LET'S CONNECT</p>
        <h2>Contact Me</h2>
  <div className="contact-container">
    <div className="contact-info">
      <h3>Get in Touch</h3>

      <div className="contact-item">
        <span className="contact-icon">☎</span>
        <div>
          <h4>Phone</h4>
          <a href="tel:+959448524178">
            +95 9448524178
            
          </a>
        </div>
      </div>

      <div className="contact-item">
        <span className="contact-icon">✉</span>
        <div>
          <h4>Email</h4>
          <a href="mailto:your-email@example.com">
            theintthinzarlwin21191@gmail.com
          </a>
        </div>
      </div>

      <div className="contact-item">
        <span className="contact-icon">📍</span>
        <div>
          <h4>Location</h4>
          <p>Myanmar,Mandalay</p>
        </div>
      </div>
    </div>

    <form
      className="contact-form"
      onSubmit={async (e) => {
        e.preventDefault();
        const form=e.currentTarget;

        try{
          await emailjs.sendForm(
            'service_n0sa88c',
            'template_urtl98i',
            form,
            {
              publicKey: 'WYjcpmqgQBD81-rPU',
            }
          );

          alert('Message sent successfully!');
          form.reset();
        }
        catch(error){
          console.error('Email error:', error);
          alert('Message failed to send.Please try again.');

        }
    
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
      />

      <button type="submit">Send Message</button>
    </form>
  </div>
</section>

      <footer>
        <p>© 2026 Theint Thinzar Lwin</p>
        <p>Turning Ideas into Reality ✨</p>
      </footer>

    </div>
  )
}

export default App