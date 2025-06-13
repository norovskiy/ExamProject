import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components'
import Cards from './components/miniCards'
import More from './components/More'
import Comm from './components/comm'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div className='Box'>
				<header>
					<div className=''>
						<h2>Landguru</h2>
					</div>
					<div className='' style={{ display: 'flex', gap: '20px' }}>
						<p>Home</p>
						<p>WebSites</p>
						<p>Support</p>
						<p>Contact</p>
					</div>
					<button className='ButtonBa'>Get Started</button>
				</header>

				<div className='Boxes'>
					<div className='leftSide'>
						<h1>Experience your ultimate mobile application</h1>
						<p>
							Get your blood tests delivered at let home collect sample from the
							victory of the managments that supplies best design system
							guidelines ever.
						</p>
						<button className='Started'>Get started</button>
						<button className='Startedd'>▶Watch Video</button>
						<img src='/src/img/sponser.png' alt='' />
					</div>
					<img src='/src/img/mockup.png' alt='' style={{ width: '50%' }} />
				</div>
			</div>

			<div className='' style={{ color: 'black', marginTop: '50px' }}>
				<center>
					<p>Quality features</p>
					<h2>Meet exciting feature of app</h2>
				</center>
			</div>

			<div className='Cards'>
				<div
					className='Cardd'
					style={{ color: 'black', width: '230px', display: 'flex' }}
				>
					<center>
						<Card
							img='/src/img/icon (2).png'
							name='Vector Editing'
							desc='Get your blood tests delivered at home collect a sample from the your blood tests.'
						/>
					</center>
				</div>
				<div
					className='Cardd'
					style={{ color: 'black', width: '230px', display: 'flex' }}
				>
					<center>
						<Card
							img='/src/img/icon (3).png'
							name='Customize & Monitoring'
							desc='Get your blood tests delivered at home collect a sample from the your blood tests.'
						/>
					</center>
				</div>
				<div
					className='Cardd'
					style={{ color: 'black', width: '230px', display: 'flex' }}
				>
					<div>
						<Card
							img='/src/img/icon (4).png'
							name='Quality & short-period'
							desc='Get your blood tests delivered at home collect a sample from the your blood tests.'
						/>
					</div>
				</div>
			</div>

			<div className='obwiy'>
				<img
					src='/src/img/Group 8.png'
					alt=''
					style={{ width: '30%', marginLeft: '150px' }}
				/>
				<div className='Right' style={{ color: 'black' }}>
					<p>Core features</p>
					<h1>Smart Jackpots that you may love this anytime & anywhere</h1>
					<div
						className=''
						style={{ display: 'flex', alignItems: 'center', width: '400px' }}
					>
						<img src='/src/img/Group (7).png' alt='' />
						<div className='' style={{ color: 'black' }}>
							<h4>Smart Features</h4>
							<p>
								Get your blood tests delivered at let home collect sample from
								the victory of the managments. your blood tests.
							</p>
						</div>
					</div>
					<div
						className=''
						style={{ display: 'flex', alignItems: 'center', width: '400px' }}
					>
						<img src='/src/img/Group (8).png' alt='' />
						<div className='' style={{ color: 'black' }}>
							<h4>Smart Features</h4>
							<p>
								Get your blood tests delivered at let home collect sample from
								the victory of the managments. your blood tests.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='Minicards'>
				<Cards
					img='/src/img/icon (5).png'
					name='Smart Features'
					desc='Get your blood tests delivered at let home collect sample from the victory of the managments.'
				/>
				<Cards
					img='/src/img/icon (6).png'
					name='Fast Performance'
					desc='Get your blood tests delivered at let home collect sample from the victory of the managments.'
				/>
				<Cards
					img='/src/img/icon (7).png'
					name='Unlimited Content'
					desc='Get your blood tests delivered at let home collect sample from the victory of the managments.'
				/>
				<Cards
					img='/src/img/icon (8).png'
					name='Ultimate Customization'
					desc='Get your blood tests delivered at let home collect sample from the victory of the managments.'
				/>
				<Cards
					img='/src/img/icon (9).png'
					name='Boost Productivity'
					desc='Get your blood tests delivered at let home collect sample from the victory of the managments.'
				/>
				<Cards
					img='/src/img/icon (10).png'
					name='Customer Support'
					desc='Get your blood tests delivered at let home collect sample from the victory of the managments.'
				/>
			</div>

			<div className='Bolo' style={{ color: 'black' }}>
				<div className='LeftSide'>
					<p>Core features</p>
					<h1>Smart Jackpots that you may love this anytime & anywhere</h1>
					<p>
						Get your tests delivered at let home collect sample from the victory
						of the managments that supplies best design system guidelines ever.
						Get your tests delivered at let home collect sample.
					</p>
					<button
						className=''
						style={{
							backgroundColor: '#244784FF',
							color: 'white',
							border: 'none',
							padding: '10px 25px',
							borderRadius: '20px',
							marginTop: '10px',
						}}
					>
						Get Started
					</button>
				</div>
				<img src='/src/img/Group 8 (1).png' style={{ width: '60%' }} alt='' />
			</div>

			<div className='Siniy'>
				<center>
					<p>Whats the function</p>
					<h2>Let’s see how it works</h2>
				</center>
				<div className="" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
					<div className=''>
					<More
						img='/src/img/Group (9).png'
						name='Set disbursement
Instructions'
						desc='Get your blood tests delivered at home collect a sample from the your blood tests.'
					/>
				</div>
				<div className=''>
					<More
						img='/src/img/Group (10).png'
						name='Assembly retrieves funds from your account'
						desc='Get your blood tests delivered at home collect a sample from the your blood tests.'
					/>
				</div>
				<div className=''>
					<More
						img='/src/img/Group (11).png'
						name='Assembly initiates disbursement'
						desc='Get your blood tests delivered at home collect a sample from the your blood tests.'
					/>
				</div>
				<div className=''>
					<More
						img='/src/img/Group (12).png'
						name='Customer receives funds payment'
						desc='Get your blood tests delivered at home collect a sample from the your blood tests.'
					/>
				</div>
				</div>
			</div>
			<div className="" style={{color:"black"}}>
				<center>
					<p>Testimunial</p>
					<h2>Meet Client Satisfaction</h2>
				</center>
				<div className="" style={{display:"flex", justifyContent:"space-between", width:"90%", margin:"auto"}}>
					<Comm star="⭐⭐⭐⭐⭐" uptex="Modern look & trending design" text="Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer." img="/src/img/Ellipse.png" name="Denny Hilguston" nick="@denny.hil"/>
					<Comm star="⭐⭐⭐⭐⭐" uptex="Modern look & trending design" text="Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer." img="/src/img/Ellipse.png" name="Denny Hilguston" nick="@denny.hil"/>
					<Comm star="⭐⭐⭐⭐⭐" uptex="Modern look & trending design" text="Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer." img="/src/img/Ellipse.png" name="Denny Hilguston" nick="@denny.hil"/>
				</div>
			</div>

			<div className="Secure" >
				<img src="/src/img/Group 4.png" alt="" style={{width:"50%"}} />
				<div className="Secure-rightSide">
						<p>Core features</p>
						<h1>Secure Payment Transaction System with #1 Ranking</h1>
						<p>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
						<button
						className=''
						style={{
							backgroundColor: '#244784FF',
							color: 'white',
							border: 'none',
							padding: '10px 25px',
							borderRadius: '20px',
							marginTop: '10px',
						}}
					>
						Get Started
					</button>
				</div>

			</div>

			<div className="pricing-container">
      <h4 className="pricing-subtitle">WHATS THE FUNCTION</h4>
      <h2 className="pricing-title">Let's see how it works</h2>
      <div className="plans-wrapper">
        {/* Free Plan */}
        <div className="plan-card free-plan">
          <h3 className="plan-name">Free Plan</h3>
          <p className="plan-desc">For small teams or office</p>
          <ul className="features-list">
            <li>✅ Ultimate access to all course, exercises and assessments</li>
            <li>✅ Free access for all kind of exercise corrections with downloads</li>
            <li>✅ Total assessment corrections with free download access system</li>
            <li className="disabled">❌ Unlimited download of courses on the mobile app contents</li>
            <li className="disabled">❌ Download and print courses and exercises in PDF</li>
          </ul>
          <button className="signup-button">Signup Now</button>
        </div>

        <div className="plan-card premium-plan">
          <div className="recommended-badge">Recommended</div>
          <h3 className="plan-name">Premium</h3>
          <p className="plan-desc">For startup enterprise</p>
          <p className="plan-price">
            Starting from <span className="price-highlight">49.99/mo</span>
          </p>
          <ul className="features-list">
            <li>✅ Ultimate access to all course, exercises and assessments</li>
            <li>✅ Free access for all kind of exercise corrections with downloads</li>
            <li>✅ Total assessment corrections with free download access system</li>
            <li>✅ Unlimited download of courses on the mobile app contents</li>
            <li>✅ Download and print courses and exercises in PDF</li>
          </ul>
          <button className="signup-button dark">Signup Now</button>
        </div>
      </div>
    </div>
			

			<div className="faq-section">
      <p className="faq-subtitle">FREQUENT QUESTION</p>
      <h2 className="faq-title">Do you have any question</h2>

      <div className="faq-item">
        <span className="faq-icon">➕</span>
        <p>How to contact with riders emergency ?</p>
      </div>

      <div className="faq-item">
        <span className="faq-icon">➕</span>
        <p>App installation failed, how to update system information?</p>
      </div>

      <div className="faq-item active">
        <span className="faq-icon">🟢</span>
        <div>
          <p>Website reponse taking time, how to improve?</p>
          <p className="faq-answer">
            Get your blood tests delivered at the home collect a sample from management news. 
            Get your blood tests delivered at the home collect a sample from management news. 
            Get your blood tests delivered at the home collect a sample from management news. 
            Get your blood tests delivered at the home.
          </p>
        </div>
      </div>

      <div className="faq-item">
        <span className="faq-icon">➕</span>
        <p>New update fixed all bug and issues</p>
      </div>
    </div>

	  <footer className="footer">
      <div className="footer-column">
        <h4>About Us</h4>
        <ul>
          <li>Support Center</li>
          <li>Customer Support</li>
          <li>About Us</li>
          <li>Copyright</li>
          <li>Popular Campaign</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Our Information</h4>
        <ul>
          <li>Return Policy</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Site Map</li>
          <li>Store Hours</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>My Account</h4>
        <ul>
          <li>Press inquiries</li>
          <li>Social media</li>
          <li>directories</li>
          <li>Images & B-roll</li>
          <li>Permissions</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Policy</h4>
        <ul>
          <li>Application security</li>
          <li>Software principles</li>
          <li>Unwanted software policy</li>
          <li>Responsible supply chain</li>
        </ul>
      </div>
    </footer>
		</>
	)
}

export default App
