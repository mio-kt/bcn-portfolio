"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight, BookOpen, Building2, Gamepad2, Github, GraduationCap,
  Headphones, Mail, MapPin, Menu, MessageCircle, Moon, Music2, Sparkles,
  Users, X
} from "lucide-react";

const nav = [["Home","home"],["Giới thiệu","about"],["Sở thích","hobbies"],["Kỹ năng","skills"],["Dự án","projects"],["Liên hệ","contact"]];
const hobbies = [[BookOpen,"Đọc truyện"],[Headphones,"Nghe nhạc"],[MessageCircle,"Hóng truyện"],[Gamepad2,"Chơi game"]];
const skills = ["Tìm hiểu & nắm bắt thông tin","Làm việc nhóm","Giao tiếp cơ bản","Khả năng thích nghi","Chịu áp lực"];

function CosmicAvatar() {
  return <div className="cosmic-avatar" aria-label="Ảnh đại diện cosmic">
    <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
    <span className="star star-a">✦</span><span className="star star-b">✦</span>
    <div className="avatar-scene">
      <div className="moon-hat"/>
      <div className="character"><div className="hair"/><div className="face"><i/><i/></div><div className="hood"/></div>
      <div className="ground"/>
    </div>
    <div className="avatar-moon">◐</div>
  </div>
}

export default function Portfolio() {
  const [open,setOpen]=useState(false);
  const [music,setMusic]=useState(false);
  const [scrolled,setScrolled]=useState(false);

  useEffect(()=>{
    const f=()=>setScrolled(window.scrollY>30);
    window.addEventListener("scroll",f); f();
    return()=>window.removeEventListener("scroll",f);
  },[]);

  return <main>
    <nav className={`nav ${scrolled?"nav-scrolled":""}`}>
      <a href="#home" className="brand"><span>✦</span> KT <b>PORTFOLIO</b></a>
      <button className="music" onClick={()=>setMusic(!music)}><Music2 size={18}/>{music?"Đang phát":"Nhạc nền"}<i className={music?"playing":""}/></button>
      <div className={`nav-links ${open?"mobile-open":""}`}>{nav.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{label}</a>)}</div>
      <button className="theme" aria-label="Chế độ tối"><Moon size={20}/></button>
      <button className="menu" onClick={()=>setOpen(!open)} aria-label="Mở menu">{open?<X/>:<Menu/>}</button>
    </nav>

    <section id="home" className="hero section">
      <div className="stars"/><div className="nebula n1"/><div className="nebula n2"/><div className="planet planet-a"/><div className="planet planet-b"/>
      <div className="hero-avatar reveal"><CosmicAvatar/></div>
      <div className="hero-copy reveal delay-1">
        <div className="currently"><Sparkles size={15}/> CURRENTLY <Sparkles size={15}/></div>
        <h1>Lê Thanh Tuấn Kiệt</h1>
        <h2>Tân sinh viên <span>•</span> IUH</h2>
        <div className="meta"><span><GraduationCap/> Lớp DHTH22A</span><span><Building2/> Đại học Công Nghiệp TP.HCM</span></div>
        <div className="divider"/>
        <blockquote>“Mình muốn dùng quãng đường đại học để hiểu bản thân hơn, học những điều mới và tìm ra nơi mình thật sự thuộc về.”</blockquote>
      </div>
      <a href="#about" className="scroll"><span/> CUỘN ĐỂ KHÁM PHÁ</a>
    </section>

    <section className="quick section reveal">
      <div><GraduationCap/><b>Tân sinh viên</b><span>2022 - nay</span></div>
      <div><Building2/><b>Đại học</b><span>Công Nghiệp TP.HCM</span></div>
      <div><Users/><b>Lớp</b><span>DHTH22A</span></div>
      <div><MapPin/><b>Địa điểm</b><span>TP. Hồ Chí Minh</span></div>
    </section>

    <section id="about" className="content section">
      <div className="section-title"><span>01 / GIỚI THIỆU</span><h2>Xin chào, mình là <em>Kiệt.</em></h2></div>
      <div className="about-grid">
        <div><p className="lead">Xin chào mọi người, mình tên: Lê Thanh Tuấn Kiệt, là tân sinh viên của trường Đại học Công Nghiệp TP HCM, mình học lớp DHTH22A.</p>
        <p>Mình là một người khá thân thiện và thẳng thắn nhưng đôi khi hay hướng nội. Đây là portfolio của mình, mục đích để mọi người có thể hiểu hơn về con người mình và hỗ trợ mình nhiều hơn trong quãng đường sắp tới.</p></div>
        <div className="quote"><Sparkles/><p>Học những điều mới.<br/><em>Hiểu bản thân hơn.</em><br/>Tìm nơi mình thuộc về.</p></div>
      </div>
    </section>

    <section id="hobbies" className="content section">
      <div className="section-title"><span>02 / SỞ THÍCH</span><h2>Những điều mình <em>thích.</em></h2></div>
      <div className="hobby-grid">{hobbies.map(([Icon,text])=><div className="glass-card" key={text}><Icon/><h3>{text}</h3><span>MY INTEREST</span></div>)}</div>
    </section>

    <section id="skills" className="content section">
      <div className="section-title"><span>03 / KỸ NĂNG</span><h2>Đang học, đang <em>tiến bộ.</em></h2></div>
      <div className="skill-list">{skills.map((s,i)=><div className="skill" key={s}><b>0{i+1}</b><span>{s}</span><div><i style={{width:`${72+i*4}%`}}/></div></div>)}</div>
    </section>

    <section id="projects" className="content section">
      <div className="section-title"><span>04 / DỰ ÁN</span><h2>Hành trình <em>phía trước.</em></h2></div>
      <div className="empty-project"><Sparkles/><h3>Chưa có project GitHub</h3><p>Hiện tại mình đang tập trung học hỏi và xây dựng những project đầu tiên. Những sản phẩm đầu tiên sẽ sớm xuất hiện tại đây.</p><a href="https://github.com/mio-kt" target="_blank" rel="noreferrer">XEM GITHUB <ArrowUpRight/></a></div>
    </section>

    <section id="contact" className="contact section">
      <div className="contact-box"><div><span>05 / LIÊN HỆ</span><h2>Cùng mình viết tiếp<br/><em>chặng đường này.</em></h2></div>
      <a className="email" href="mailto:kietlethanhtuan@gmail.com"><Mail/> kietlethanhtuan@gmail.com <ArrowUpRight/></a></div>
      <footer><span>© 2026 Lê Thanh Tuấn Kiệt</span><a href="https://github.com/mio-kt" target="_blank" rel="noreferrer"><Github/> mio-kt</a><span>Made with ✦ curiosity</span></footer>
    </section>
  </main>
}
