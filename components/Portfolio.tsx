 "use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Rocket,
  Sparkles,
  X,
} from "lucide-react";

const skills = [
  { name: "HTML", level: "90%", icon: "</>" },
  { name: "CSS", level: "88%", icon: "#"},
  { name: "JavaScript", level: "82%", icon: "JS" },
  { name: "TypeScript", level: "76%", icon: "TS" },
  { name: "React", level: "80%", icon: "⚛" },
  { name: "Tailwind", level: "86%", icon: "≋" },
];

const projects = [
  {
    number: "01",
    title: "Creative Portfolio",
    description: "Portfolio cá nhân với giao diện dark, neon purple và animation mượt.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "#",
  },
  {
    number: "02",
    title: "Study Planner",
    description: "Ứng dụng giúp học sinh quản lý bài tập, mục tiêu và tiến độ học tập.",
    tags: ["React", "UI/UX", "LocalStorage"],
    href: "#",
  },
  {
    number: "03",
    title: "AI Idea Lab",
    description: "Không gian thử nghiệm các ý tưởng web nhỏ với AI hỗ trợ quá trình xây dựng.",
    tags: ["AI", "React", "API"],
    href: "#",
  },
];

function Avatar() {
  return (
    <div className="avatar-wrap" aria-label="Avatar placeholder">
      <div className="avatar-glow" />
      <div className="avatar">
        <div className="hair" />
        <div className="face">
          <div className="ear left" />
          <div className="ear right" />
          <div className="glasses">
            <span />
            <i />
            <span />
          </div>
          <div className="eyes"><b /><b /></div>
          <div className="nose" />
          <div className="smile" />
        </div>
        <div className="hoodie">
          <div className="hoodie-string left" />
          <div className="hoodie-string right" />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <main>
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={close}>
          <span className="brand-mark">✦</span>
          <span>YOUR<span>NAME</span></span>
        </a>

        <div className={`nav-links ${open ? "mobile-open" : ""}`}>
          {["HOME", "ABOUT", "PROJECTS", "SKILLS", "CONTACT"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>
          ))}
        </div>

        <a className="nav-cta" href="#contact" onClick={close}>LET&apos;S TALK <ArrowUpRight size={16}/></a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-noise" />
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <div className="hero-copy reveal">
          <div className="eyebrow"><span /> CREATIVE DEVELOPER <span /></div>
          <p className="mini-title">HI, I&apos;M</p>
          <h1>YOUR<br/><em>NAME.</em></h1>
          <p className="hero-desc">
            I build <strong>digital experiences</strong> that are useful,
            expressive and made to stand out.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">VIEW MY WORK <ArrowUpRight size={18}/></a>
            <a className="button ghost" href="#about">ABOUT ME <ArrowDown size={18}/></a>
          </div>
        </div>

        <div className="hero-art reveal delay-1">
          <div className="floating-label label-top"><Sparkles size={15}/> AI × CREATIVITY</div>
          <div className="avatar-card">
            <Avatar />
            <div className="avatar-caption">
              <span>AVAILABLE TO CREATE</span>
              <strong>web &amp; digital things.</strong>
            </div>
          </div>
          <div className="code-card">
            <span>01</span><span>const</span> <b>idea</b> = <i>&quot;build it&quot;</i>;
          </div>
          <div className="purple-ring" />
        </div>

        <div className="scroll-cue"><span /> SCROLL TO EXPLORE</div>
      </section>

      <section id="about" className="section about">
        <div className="section-head reveal">
          <p className="kicker">01 / ABOUT</p>
          <h2>Turning ideas into<br/><em>things you can use.</em></h2>
        </div>
        <div className="about-grid">
          <div className="about-copy reveal">
            <p className="lead">
              Mình là một bạn trẻ yêu thích công nghệ, thiết kế và việc biến
              những ý tưởng nhỏ thành sản phẩm thật.
            </p>
            <p>
              Mình thích học bằng cách làm: bắt đầu từ một ý tưởng, phác thảo
              giao diện, viết code, sửa lỗi và cuối cùng deploy sản phẩm lên
              internet.
            </p>
            <div className="about-facts">
              <div><span>FOCUS</span><strong>Web Development</strong></div>
              <div><span>INTEREST</span><strong>AI + UI/UX</strong></div>
              <div><span>APPROACH</span><strong>Learn by building</strong></div>
            </div>
          </div>
          <div className="quote-card reveal delay-1">
            <Rocket size={30}/>
            <p>&quot;AI là trợ thủ.<br/><em>Sản phẩm cuối cùng<br/>là của bạn.</em>&quot;</p>
            <span>— BCN PORTFOLIO CHALLENGE</span>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="section-head split reveal">
          <div>
            <p className="kicker">02 / PROJECTS</p>
            <h2>Selected <em>work.</em></h2>
          </div>
          <p className="section-note">Một vài sản phẩm mình đã xây dựng<br/>và đang tiếp tục phát triển.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.number}>
              <div className="project-visual">
                <div className="mock-window">
                  <div className="window-bar"><i/><i/><i/></div>
                  <div className="mock-lines">
                    <span className="long" /><span /><span className="short" />
                  </div>
                  <div className="mock-box" />
                </div>
                <span className="project-number">{project.number}</span>
              </div>
              <div className="project-info">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <a href={project.href} className="round-arrow" aria-label={`Open ${project.title}`}><ArrowUpRight /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="section-head reveal">
          <p className="kicker">03 / SKILLS</p>
          <h2>Tools I <em>use.</em></h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div className="skill-card reveal" style={{ animationDelay: `${i * 70}ms` }} key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-meta"><span>{skill.name}</span><small>{skill.level}</small></div>
              <div className="progress"><span style={{ width: skill.level }} /></div>
            </div>
          ))}
        </div>
        <div className="tool-strip reveal">
          <span><Code2 size={18}/> CODE</span>
          <span><Sparkles size={18}/> AI ASSISTED</span>
          <span><BriefcaseBusiness size={18}/> BUILD</span>
          <span><Rocket size={18}/> DEPLOY</span>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="contact-box reveal">
          <div>
            <p className="kicker">04 / CONTACT</p>
            <h2>Have an idea?<br/><em>Let&apos;s build it.</em></h2>
            <p className="contact-text">Nếu bạn muốn xem code, trao đổi ý tưởng hoặc góp ý cho portfolio này, hãy kết nối với mình.</p>
          </div>
          <a className="button primary big" href="mailto:hello@example.com">SAY HELLO <Mail size={19}/></a>
        </div>
        <footer>
          <span>© 2026 YOUR NAME</span>
          <div className="socials">
            <a href="#" aria-label="GitHub"><Github size={18}/></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={18}/></a>
            <a href="#" aria-label="Instagram"><Instagram size={18}/></a>
          </div>
          <span>BUILT WITH CURIOSITY + AI</span>
        </footer>
      </section>
    </main>
  );
}