import "./App.scss";

function App() {
  return (
    <div>
      <div className="content">
        <div className="main-header-right">ATHLETS</div>
        <div className="section-right">
          <div className="sub-header">
            <div>
              <div className="number-text">01</div>
              <div className="number-underline" />
            </div>
            CONNECTION
          </div>
          <div className="desc">
            Connect with coaches directly, you can ping coaches to view profile.
          </div>
        </div>
        <div className="section-right second-color">
          <div className="sub-header">
            <div>
              <div className="number-text">02</div>
              <div className="number-underline" />
            </div>
            COLLABORATION
          </div>
          <div className="desc">
            Work with other student athletes to increase visability. When you
            share and like other players videos it will increase your visability
            as a player. This is the team work aspect to Surface 1.
          </div>
        </div>
        <div className="section-right third-color">
          <div className="sub-header">
            <div>
              <div className="number-text">03</div>
              <div className="number-underline white" />
            </div>
            GROWTH
          </div>
          <div className="desc">
            Resources and tools for you to get better as a student Athelte.
            Access to training classes, tutor sessions, etc
          </div>
        </div>
      </div>

      <div className="content">
        <div className="main-header-left">PLAYERS</div>
        <div className="section-left">
          <div className="sub-header">
            <div>
              <div className="number-text">01</div>
              <div className="number-underline" />
            </div>
            CONNECTION
          </div>
          <div className="desc">
            Connect with talented athlete directly, you can watch their skills
            through video showreels directly from Surface 1.
          </div>
        </div>
        <div className="section-left second-color">
          <div className="sub-header">
            <div>
              <div className="number-text">02</div>
              <div className="number-underline" />
            </div>
            COLLABORATION
          </div>
          <div className="desc">
            Work with recruiter to increase your chances of finding talented
            athlete.
          </div>
        </div>
        <div className="section-left bg-black">
          <div className="sub-header">
            <div>
              <div className="number-text text-white">03</div>
              <div className="number-underline " />
            </div>
            GROWTH
          </div>
          <div className="desc text-white">
            Save your time, recruit proper athlets for your team.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
