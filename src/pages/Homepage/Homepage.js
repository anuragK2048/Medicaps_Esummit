import React, { useEffect, useRef, useState } from "react";
import "./Homepage.css";
import inspire_logo from "../../assets/images/Motto/inspire-logo.svg";
import innovate_logo from "../../assets/images/Motto/innovate-dna-eco.svg";
import impact_logo from "../../assets/images/Motto/impact-logo.svg";
import { RxExternalLink } from "react-icons/rx";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const ParticleBackground = ({ children }) => {
  const canvasRef = useRef(null);
  const options = {
    particleColor: "rgba(254,244,201)",
    lineColor: "rgba(81,255,116)",
    particleAmount: 30,
    defaultRadius: 0.5,
    variantRadius: 1,
    defaultSpeed: 1,
    variantSpeed: 1,
    linkRadius: 300,
  };

  class Particle {
    constructor(w, h, ctx) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.color = options.particleColor;
      this.radius =
        options.defaultRadius + Math.random() * options.variantRadius;
      this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
      this.directionAngle = Math.floor(Math.random() * 360);
      this.vector = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed,
      };
      this.ctx = ctx;
      this.w = w;
      this.h = h;
    }

    update() {
      this.border();
      this.x += this.vector.x;
      this.y += this.vector.y;
    }

    border() {
      if (this.x >= this.w || this.x <= 0) {
        this.vector.x *= -1;
      }
      if (this.y >= this.h || this.y <= 0) {
        this.vector.y *= -1;
      }
      if (this.x > this.w) this.x = this.w;
      if (this.y > this.h) this.y = this.h;
      if (this.x < 0) this.x = 0;
      if (this.y < 0) this.y = 0;
    }

    draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      this.ctx.closePath();
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    const rgb = options.lineColor.match(/\d+/g);

    const resizeReset = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initialiseElements = () => {
      particles = [];
      for (let i = 0; i < options.particleAmount; i++) {
        particles.push(new Particle(canvas.width, canvas.height, ctx));
      }
    };

    const drawScene = () => {
      // Draw lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = 0; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[j].x - particles[i].x, 2) +
              Math.pow(particles[j].y - particles[i].y, 2)
          );
          const opacity = 1 - distance / options.linkRadius;

          if (opacity > 0) {
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.closePath();
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawScene();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    resizeReset();
    initialiseElements();
    animate();

    // Handle window resize
    const handleResize = () => {
      resizeReset();
      initialiseElements();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [Particle, options.lineColor, options.linkRadius, options.particleAmount]);

  const containerStyle = {
    position: "relative",
    width: "100%",
    minHeight: "900px",
    background: "black",
    isolation: "isolate", // Creates a new stacking context
  };

  const canvasStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "900px",
    zIndex: 1,
    pointerEvents: "none",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    minHeight: "900px",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      {/* Canvas Layer */}
      <div style={canvasStyle}>
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "900px",
            display: "block",
          }}
        />
      </div>

      {/* Content Layer */}
      <div style={contentStyle}>{children}</div>
    </div>
  );
};

//Counter JS
const AnimatedCounter = () => {
  const [eventsCount, setEventsCount] = useState(0);
  const [participantsCount, setParticipantsCount] = useState(0);
  const [entrepreneursCount, setEntrepreneursCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const observer = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          startCounting();
          observer.current.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.current.observe(counterRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const startCounting = () => {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const eventsTarget = 40;
    const participantsTarget = 5000;
    const entrepreneursTarget = 150;

    let step = 0;

    const timer = setInterval(() => {
      step++;
      setEventsCount(Math.round((eventsTarget / steps) * step));
      setParticipantsCount(Math.round((participantsTarget / steps) * step));
      setEntrepreneursCount(Math.round((entrepreneursTarget / steps) * step));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  return (
    <div className="stat-counters">
      {/* <div className="stat-model"></div> */}
      <div
        className={`animated-counter ${isVisible ? "visible" : ""}`}
        ref={counterRef}
      >
        <div className="counter-item">
          <div className="icon events-icon"></div>
          <h3>{eventsCount}+</h3>
          <p>EVENTS ORGANISED</p>
        </div>
        <div className="counter-item">
          <div className="icon participants-icon"></div>
          <h3>{participantsCount}+</h3>
          <p>TOTAL PARTICIPANTS</p>
        </div>
        <div className="counter-item">
          <div className="icon entrepreneurs-icon"></div>
          <h3>{entrepreneursCount}+</h3>
          <p>ENTREPRENEURS SUPPORTED</p>
        </div>
      </div>
    </div>
  );
};

//Masonry
const IMAGE_PATHS = {
  BG1: require("../../assets/images/Masonry/BG1.jpg"),
  BG2: require("../../assets/images/Masonry/BG2.jpg"),
  BG3: require("../../assets/images/Masonry/BG3.jpg"),
  BG4: require("../../assets/images/Masonry/BG4.jpg"),
  BG5: require("../../assets/images/Masonry/BG5.jpg"),
  BG6: require("../../assets/images/Masonry/BG6.jpg"),
  BG7: require("../../assets/images/Masonry/BG7.jpg"),
  BG8: require("../../assets/images/Masonry/BG8.jpg"),
};

function MasonryHover() {
  const containerRefs = useRef([]);
  const moduleRefs = useRef([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimer = useRef(null);
  const isMobile = useRef(window.innerWidth <= 700);

  useEffect(() => {
    const currentRef = containerRefs.current;
    // Handle window resize
    const handleResize = () => {
      isMobile.current = window.innerWidth <= 700;
    };

    // Handle scroll events
    const handleScroll = () => {
      if (isMobile.current) {
        setIsScrolling(true);

        // Clear the existing timer
        if (scrollTimer.current) {
          clearTimeout(scrollTimer.current);
        }

        // Set a new timer
        scrollTimer.current = setTimeout(() => {
          setIsScrolling(false);
        }, 150); // Adjust this value to control how long after scrolling stops before showing the module again
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    if (typeof gsap !== "undefined") {
      let activeModule;

      containerRefs.current.forEach((container, index) => {
        const module = moduleRefs.current[index];

        gsap.set(module, {
          yPercent: -50,
          xPercent: -50,
          position: "fixed",
          top: 0,
          left: 0,
          opacity: 0,
          visibility: "hidden",
          pointerEvents: "none",
          zIndex: 9,
        });

        let setX, setY;

        const align = (e) => {
          if (!isScrolling || !isMobile.current) {
            setX(e.clientX);
            setY(e.clientY);
          }
        };

        const startFollow = () => document.addEventListener("mousemove", align);
        const stopFollow = () =>
          document.removeEventListener("mousemove", align);

        const fade = gsap.to(module, {
          autoAlpha: 1,
          ease: "none",
          paused: true,
          onReverseComplete: stopFollow,
        });

        container.addEventListener("mouseenter", (e) => {
          if (!isScrolling || !isMobile.current) {
            fade.play();
            startFollow();
            if (activeModule) {
              gsap.set(module, {
                x: gsap.getProperty(activeModule, "x"),
                y: gsap.getProperty(activeModule, "y"),
              });
            }
            activeModule = module;
            setX = gsap.quickTo(module, "x", { duration: 0.6, ease: "power3" });
            setY = gsap.quickTo(module, "y", { duration: 0.6, ease: "power3" });
            align(e);
          }
        });

        container.addEventListener("mouseleave", () => fade.reverse());
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
      }
      currentRef.forEach((container) => {
        // container.removeEventListener("mouseenter", () => {});
        // container.removeEventListener("mouseleave", () => {});
      });
      document.removeEventListener("mousemove", () => {});
    };
  }, [isScrolling]);

  // Image data array
  const images = [
    {
      className: "img-1",
      image: IMAGE_PATHS.BG1,
      title: "Open Mic",
      description:
        "The Open Mic organized by Entrepreneurship Cell provides a dynamic platform for budding entrepreneurs to share their innovative ideas, showcase talents, and inspire peers. This event fosters creativity and confidence, enabling participants to voice their entrepreneurial journey. By encouraging networking and idea exchange, Open Mic reinforces the E-Cell's commitment to nurturing the next generation of leaders and innovators within a supportive and collaborative environment.",
    },
    {
      className: "img-2",
      image: IMAGE_PATHS.BG2,
      title: "Speaker Sessions",
      description:
        "Speaker Sessions, one of our most impactful initiatives, connects successful entrepreneurs with ambitious students through carefully curated interactive discussions. Drawing industry leaders from diverse sectors, these sessions have become a cornerstone of entrepreneurial learning on campus. Business veterans share their journeys, industry insights, and practical wisdom, helping students understand real-world challenges. The consistently growing attendance and positive feedback reflect the program's remarkable success in nurturing future entrepreneurs.",
    },
    {
      className: "img-3",
      image: IMAGE_PATHS.BG3,
      title: "E-Summit",
      description:
        "E-Summit stands as one of the most impactful events in the history of our E-Cell, recognized as one of the top entrepreneurship events hosted by any university in MP. The event was designed to inspire students to share their innovative ideas and gain valuable insights from seasoned professionals. By learning from the experiences of industry experts, participants were encouraged to apply these lessons, fueling their growth and entrepreneurial success.",
    },
    {
      className: "img-4",
      image: IMAGE_PATHS.BG4,
      title: "Startup Showcase",
      description:
        "Startup Showcase is a platform where young innovators present their ventures and ideas to a diverse audience of investors, industry experts, and peers. This event provides a unique opportunity for budding entrepreneurs to gain valuable feedback, attract potential investors, and build networks that can accelerate their growth. STARTUP SHOWCASE promotes entrepreneurial excellence by celebrating innovation and inspiring the next wave of startup leaders.",
    },
    {
      className: "img-5",
      image: IMAGE_PATHS.BG5,
      title: "One Dollar Venture",
      description:
        "One Dollar Venture consisted of several size-of-4 teams. The teams were supposed to ideate and implement a business plan with a maximum capital of INR 100. After a span of 3 days, they presented their business plan along with their final earnings. The team with maximum profit, adequate proof, and sustainable business plan was awarded. The final earning of the winning team was of INR 4200, which was an outcome of creating, selling websites and animated advertisement videos to local business owners.",
    },
    {
      className: "img-6",
      image: IMAGE_PATHS.BG6,
      title: "Saarthi",
      description:
        "Saarthi is an inspiring speaker session where influential leaders from various fields share their empowering journeys. Participants get the opportunity to dive into topics like Entrepreneurship, Finance, Banking, and more, gaining valuable insights from industry experts. This session is designed to motivate and equip aspiring entrepreneurs with practical knowledge and real-world experiences, helping them navigate their own career paths and entrepreneurial ventures with confidence.",
    },
    {
      className: "img-7",
      image: IMAGE_PATHS.BG7,
      title: "Fire Side Chat",
      description:
        "Fireside Chat is an intimate and engaging event where seasoned entrepreneurs share their personal journeys, offering deep insights into the world of entrepreneurship. Through candid conversations, participants gain valuable knowledge about the challenges faced, lessons learned, and key strategies for achieving success. This event provides a unique opportunity to explore the realities of entrepreneurship, inspiring future leaders to navigate their own paths with confidence and resilience.",
    },
    {
      className: "img-8",
      image: IMAGE_PATHS.BG8,
      title: "Shark Tank",
      description:
        "Shark Tank is an exciting competition where aspiring entrepreneurs pitch their innovative business ideas to a panel of investors, or 'sharks', seeking funding and mentorship. Participants showcase their products or services, demonstrating the potential for growth and impact. This high-stakes event offers real-world experience in securing investment, while also providing valuable feedback and networking opportunities. Shark Tank fosters entrepreneurial drive, helping turn visionary ideas into successful ventures.",
    },
  ];

  return (
    <div className="wrapper2">
      {images.map((image, index) => (
        <div
          key={index}
          ref={(el) => (containerRefs.current[index] = el)}
          className={image.className}
        >
          <div className="initiative-display-container">
            <h1 className="initiative-display-title">{image.title}</h1>
          </div>
          <div
            ref={(el) => (moduleRefs.current[index] = el)}
            style={{
              opacity: isScrolling && isMobile.current ? 0 : undefined,
              transition: "opacity 0.3s ease",
            }}
          >
            <ImageModule
              imagePath={image.image}
              className={image.className}
              initiativeTitle={image.title}
              initiativeDescription={image.description}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ImageModule({ imagePath, initiativeTitle, initiativeDescription }) {
  return (
    <div className="hover-module">
      {/* Background image is passed via inline style */}
      <div
        className="hover-module-background"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ), url(${imagePath})`,
        }}
      ></div>

      <div className="hover-module-content">
        <h1>{initiativeTitle}</h1>
        <p>{initiativeDescription}</p>
      </div>
    </div>
  );
}

function Homepage() {
  const navigate = useNavigate();
  function onClick() {
    navigate("/esummit");
  }
  return (
    <div className="wrapper">
      <div className="hero-section">
        <ParticleBackground>
          <div className="hero-section-heading">
            <h1>Entrepreneurship Cell</h1>
            <h2 className="college">Medi-Caps University</h2>
            <div className="hero-taglines">
              <h2 className="effect-tagline">INNOVATE | INSPIRE | IMPACT</h2>
            </div>
            <button className="custom-button" onClick={onClick}>
              E-Summit 24'{" "}
              <RxExternalLink
                style={{ scale: "1", position: "relative", top: "3px" }}
              />
            </button>
          </div>
        </ParticleBackground>
      </div>
      <div className="about-us">
        {/* <div className="about-us-bg"></div> */}
        <div className="about-us-main">
          <h2 className="about-us-heading">About Us</h2>
          <p className="about-us-content">
            E-Cell was first established under the Centre of Entrepreneurship
            Development in the year 2008 & then it gained reputation as an
            individual club in the year 2018. Our vision is to develop, enhance
            and carve out the inner entrepreneurial potentials of students by
            providing them with opportunities. E-cell's mission is to train
            students to face industrial challenges. We also help students
            discover their potential, implement their ideas, innovate and grow
            and learn everyday to gain the skills which are going to help them a
            lifetime.
          </p>
        </div>
      </div>
      <div className="our-motto">
        <h2 className="our-motto-heading">Our Motto</h2>
        <div className="motto-container">
          <div className="moto-1 motto-show">
            <div className="motto-image">
              <img src={innovate_logo} alt="Description of the image"></img>
            </div>
            <div className="motto-box">
              <h3 className="motto-heading">INNOVATE</h3>
              <p className="motto-content">
                Innovation is the key to transforming ideas into reality.
                Students are encouraged to experiment, refine their concepts,
                and develop groundbreaking solutions that propel them toward
                entrepreneurial success
              </p>
            </div>
          </div>
          <div className="moto-2 motto-show">
            <div className="motto-image">
              <img src={inspire_logo} alt="Description of the image"></img>
            </div>
            <div className="motto-box">
              <h3 className="motto-heading">INSPIRE</h3>
              <p className="motto-content">
                By witnessing the success of peers and learning from industry
                leaders, students get inspired to push their boundaries and
                chase new challenges, leading to a cycle of creativity and
                innovation within the E-cell
              </p>
            </div>
          </div>
          <div className="moto-3 motto-show">
            <div className="motto-image">
              <img src={impact_logo} alt="Description of the image"></img>
            </div>
            <div className="motto-box">
              <h3 className="motto-heading">IMPACT</h3>
              <p className="motto-content">
                When innovation meets execution, real change happens. Students
                are empowered to create meaningful impact by turning their ideas
                into ventures that contribute to society and inspire future
                innovators
              </p>
            </div>
          </div>
        </div>
      </div>
      <AnimatedCounter />
      <div className="initiatives">
        <div className="initiatives-title">Initiatives</div>
        <div className="initiatives-masonry">
          <MasonryHover />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
