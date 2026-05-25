import NavBar from "../components/NavBar";

export default function Home() {

    const quickLinks = ['Doctrine', 'About', 'Sermons', 'Calendar', 'Photos', 'The Message' ];

  return (
    <div>
      <NavBar />
        
        {/* Hero Section */}
      <main className="home">
        <section className="hero-video">
          { /* <video autoPlay muted loop playsInline>
            <source src="/church-video.mp4" type="video/mp4" />
          </video> */}
         

        <div className="overlay">
            <h1>Eagles Temple</h1>
            <p>End time message</p>
        </div>

        <div className="hero-buttons">
          <button>Learn More</button>
          <button>Watch Service</button>
        </div>
        </section>
        
        <section className="quick-links">
            {quickLinks.map((item, index) => (
                <div className="card" key={index}>
                    <h3>{item}</h3>
                </div>
            ))}

        </section>

       

      </main>
    </div>
  );
}
