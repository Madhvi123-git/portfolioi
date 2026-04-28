function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, #1e3c72, #2a5298)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      color: "white",
      fontFamily: "Arial"
    }}>

      <div className="card">
        <h1>Madhavi Singh</h1>
        <p>Noida, Uttar Pradesh</p>
        <p>+91-6205679116</p>
        <p>madhvimac12@gmail.com</p>
      </div>

      <div className="card">
        <h2>Career Objective</h2>
        <p>
          Enthusiastic B.Tech student in Computer Science (Data Science) with interest in full stack development and AI-based solutions.
        </p>
      </div>

      <div className="card">
        <h2>Technical Skills</h2>
        <p>Python • Java • Data Structures • OOP • Basics of React</p>
      </div>

      <div className="card">
        <h2>Projects</h2>

        <p><b>Sentiment Analysis App</b></p>
        <p>Analyzes text sentiment using basic NLP.</p>

        <br />

        <p><b>Happiness Dimensions Quiz</b></p>
        <a href="https://madhvi-git-dot.github.io/happiness-quiz-/" target="_blank">
          View Live Project
        </a>
      </div>

      <div className="card">
        <h2>Education</h2>
        <p>Class X - 74%</p>
        <p>Class XII - 78%</p>
      </div>

    </div>
  );
}

export default App;