import React from 'react'
import './style.css'

function App() {
    return (
        <div>
            <div className='nav'>
                <p>KALLYAS</p>
                <ul className='navUl'>
                    <li>Browse Topic</li>
                    <li>How It Works</li>
                    <li>FAQ</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className='heading'>
                <h3 >
                    Premium services from premium agency
                </h3>
                <div>
                    <p className='head_p'>These cases are perfectly simple and easy to distinguish, In a free hour, when our power of choice is untrammelied and when nothing prevents our being able to do what we like best,every pleasure is to be welcomed and every pain avoided.</p>
                </div>

                <input type="text" className='head_input' />
            </div>
            <div className='monthly_growth'>
                <h3 className='monthly_growth_head'>+3.251%</h3>
                <p className='monthly_growth_p'>
                    Percentage of monthly growth of the comapny
                </p>
            </div>
            <div className='growth_rate' >
                <h3>92%</h3>
                <p>Growth rate of companies</p>
            </div>
            <div className='main'>
                <div>
                    <h1 style={{ marginBottom: '0px' }}>What can we do </h1>
                    <h1 style={{ marginTop: '0px' }}>for you?</h1>
                </div>

                <button style={{ height: '40px', borderRadius: '20px' }}>Learn More</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <p style={{ marginBottom: '0px' }}>We speak to emotions and multiply conversations, reach and profit- </p>
                    <p style={{ marginTop: '0px' }}>we help your dream take flight.</p>
                </div>
                <div>
                    <p style={{ marginBottom: '0px' }}>Our offer covers a wide range of service which will help you capture </p>
                    <p style={{ marginTop: '0px' }}>the attention and the heart of your audience</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ height: '200px', width: '200px', border: '2px solid black', borderRadius: '10px', backgroundColor: '#000066', color: 'wheat' }}>
                    <h4>SEO</h4>
                </div>
                <div style={{ height: '200px', width: '200px', border: '2px solid black', borderRadius: '10px', backgroundColor: '#ffb3ec', color: 'white' }}>
                    <h4>DESIGN</h4>
                </div>
                <div style={{ height: '200px', width: '200px', border: '2px solid black', borderRadius: '10px', backgroundColor: 'black', color: 'wheat' }}>
                    <h4>PROGRAMMING</h4>
                </div>
                <div style={{ height: '200px', width: '200px', border: '2px solid black', borderRadius: '10px', backgroundColor: '#00ccff', color: 'wheat' }}>
                    <h4>DEVELOPMENT</h4>
                </div>
            </div>
            <div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '20px' }}>
                    <h1 style={{ marginBottom: '0px' }}>Take a look at some </h1>
                    <h1 style={{ marginTop: '0px' }}> <span style={{ color: 'red' }}>premium</span> projects.</h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }} >
                    <div style={{ height: '200px', width: '200px', border: '2px solid black', borderRadius: '10px', backgroundColor: 'rgb(0 255 226)', color: 'wheat' }}></div>
                    <div style={{ height: '200px', width: '200px', border: '2px solid black', borderRadius: '10px', backgroundColor: '#ffc34d', color: 'wheat' }}></div>
                    <div style={{ height: '200px', width: '200px', border: '2px solid black', borderRadius: '10px', backgroundColor: '#9999ff', color: 'wheat' }}></div>
                    <div style={{ height: '200px', width: '200px', border: '2px solid black', borderRadius: '10px', backgroundColor: '#99ff66', color: 'wheat' }}></div>
                    <div style={{ height: '200px', width: '200px', border: '2px solid black', borderRadius: '10px', backgroundColor: '#bfbfbf', color: 'wheat' }}></div>
                </div>
            </div>


            <div style={{ display: 'flex', justifyContent: "space-around", alignItems: 'center', border: '2px solid black' }}>
                <div>
                    <span style={{ fontSize: "2em", marginBottom: '0', marginTop: "10px" }}>A team with</span>
                    <span style={{ fontSize: "2em", margin: '0' }}>creativity and</span>
                    <span style={{ fontSize: "2em", margin: '0' }}>an <span style={{ color: 'red' }}> advanced</span></span>
                    <span style={{ fontSize: "2em", marginTop: '0', marginBottom: "10px" }}>imagination.</span>
                    <span style={{ fontSize: "1em" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quidem pariatur praesentium dolores ea iure in quo culpa voluptatum rem?</span>
                    <span style={{ fontSize: "1em" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quidem pariatur praesentium dolores ea iure in quo culpa voluptatum rem?</span>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                        <div style={{ height: "120px", width: "80px", backgroundColor: "#FE5F55" }}></div>
                        <div style={{ height: "60px", width: "180px", backgroundColor: "#EEF5DB" }}></div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                        <div style={{ height: "80px", width: "80px", backgroundColor: "#7A9E9F" }}></div>
                        <div style={{ height: "100px", width: "200px", backgroundColor: "#B8D8D8" }}></div>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: 'end', width: '100%' }}>
                <div style={{ backgroundColor: 'pink', height: '150px', width: '500px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: "center" }}>
                    <h2>Everything your business needs</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quos quasi numquam ducimus officia dolor repudiandae dolorum amet, veniam quo.</p>
                </div>
            </div>
            <div style={{ width: '100%' }}>
                <div style={{ height: '150px', width: '500px' }}>
                    <h2>Digital solution and transformation</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptates provident a fugit alias commodi ipsa, nesciunt quas? Eos, sed?</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h3>You want to grow We're here to help</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <h5>Get in touch with us.</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus non similique suscipit explicabo. Accusantium, tenetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus non similique suscipit explicabo. Accusantium, tenetur.</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h3>Phone</h3>
                            <p>123456789</p>
                            <p>123456789</p>
                        </div>
                        <div>
                            <h3>Mail</h3>
                            <p>xyz@gmail.com</p>
                            <p>xyz@gmail.com</p>
                        </div>
                        <div>
                            <h3>Location</h3>
                            <p>wall st. NYC 36. 97415,4c</p>
                        </div>
                    </div>
                </div>
                <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <input type="text" placeholder='Your name' />
                    <input type="email" placeholder='Email address ' />
                    <input type="text" placeholder='Subject' />
                    <input type="text" placeholder='Message' />
                    <button>send Message</button>
                </form>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: 'pink' }}>
                <h2>Let's do this!</h2>
                <p>Let's get to work on a common project!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellat est quae nulla maxime commodi iure deserunt possimus tempora eveniet.</p>
                <button>Write To Us!</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'pink' }}>
                <h4>KALLYAS</h4>
                <ul>
                    <li>Browse Topics</li>
                    <li>How It Works</li>
                    <li>FAQ</li>
                    <li>Support</li>
                </ul>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Linkdin</li>
                    <li>Twitter</li>
                </ul>
                <div>
                    <h5>wall,NYC 36, 97415,4c</h5>
                    <h5>+513 7622;+215 821112</h5>
                    <p>info@comapny.com</p>
                    <p>support@help.com</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'pink' }}>
                <h4>All right recomanded 2021 copyright</h4>
            </div>
        </div >
    )
}
export default App