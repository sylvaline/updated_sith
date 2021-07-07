import React from 'react'
import bg from '../assets/image/office_img1.jpg'

function AboutUser() {
	return (
		<>
        <div className="about_user">
		<div className="about_user_inner">
			<div className="about_user_left">
			
			<div className="image">
			<img src={bg} alt="" />	
			</div>
			<div className="skills column">
				<h3>My Skills</h3>
				<ul id="skill-list">
					<li>Web Development</li>
					<li>Design process</li>
					<li>Teamwork</li>						
					<li>Analytical skills</li>
				</ul>
			</div>
			</div>
			<div className="about_user_right">
			<div className="intro column">
				<h2>Introduction</h2>
				<p>
					I am a 58 year old finnish web developer with science and art background. I love to spend my free time renovating my home, playing and going on long walks with my dog. I love scifi and fantasy literature and
					series. 
				</p>
			</div>
			
			<div className="main-text">
				<h3>More About Me</h3>
				<p>
					I have studied chemistry but have always been interested in web development. I was 10 years old when I made my first web page with HTML and CSS. While I was studying in the university I took computer science  as my minor subject and was introduced to programming. During my studies I was an active member in student associations and became responsible for all kinds of tasks and projects including being a web master. That and my previous interest in web development created a spark to turn my hobby into a career. I took my first steps towards my new career in January 2017.
				</p>
				<p>
					I'm highly energetic and motivated person and I love to work as a member or a leader of a team. I especially enjoy working with changing projects and taking them forward with rapid pace but high precision. I am talkative and sociable but also known for getting "in the zone" while concentrating on detailed work like programming or designing.
				</p>
			</div>
			</div>
		</div>
		</div>
        </>
	)
}

export default AboutUser
