import logo from "./logo.svg";
import "./App.css";

const WHITE=['a','s','d','f','j','k','k'];
const BLACK=['r','t','y','u','i'];
let keys=document.querySelectorAll('.key');
let blackKeys=document.querySelectorAll('.key.black');
let whiteKeys=document.querySelectorAll('.key.white');
// eventlistener for mouse click
keys.forEach(key =>{
key.addEventListener('click',()=>playMusic(key));
});
//eventlistener for key press using keydown
document.addEventListener('keydown',e=>{
let key=e.key;
let whiteKeyIndex=WHITE.indexOf(key);
let blackKeyIndex=BLACK.indexOf(key);
if(whiteKeyIndex>-1) playMusic(whiteKeys[whiteKeyIndex]);
if(blackKeyIndex>-1) playMusic(blackKeys[blackKeyIndex])
});
// this function will play audio
function playMusic(key){
    const audio=document.getElementById(key.dataset.note);
    audio.currentTime=0;
    audio.play();
}

function about() {
  // let notes0 = "C";
  // let notes1 = "C#";
  // let notes2 = "D";
  // let notes3 = "D#";
  // let notes4 = "E";
  // let notes5 = "F";
  // let notes6 = "F#";
  // let notes7 = "G";
  // let notes8 = "G#";
  // let notes9 = "A";
  // let notes10 = "A#";
  // let notes11 = "B";
  const scale = [
    "C ",
    "C# ",
    "D ",
    "D# ",
    "E ",
    "F ",
    "F# ",
    "G ",
    "G# ",
    "A ",
    "A# ",
    "B ",
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            chordnepal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  about
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <body>
        <h1>🚀🚀</h1>
        <div class="container">
          {/* white and black keys  */}
          <div data-note="C" class="key white black">
            <h3>C</h3>
          </div>
          <div data-note="O" class="key white black">
            <h3>O</h3>
          </div>
           {/* white keys */}
        <div data-note="D" class="key white" ><h3>D</h3></div> 
          {/* <!-- white and black keys */}
          <div data-note="E" class="key white black">
            <h3>E</h3>
          </div>
          <div data-note="S" class="key white black">
            <h3>S</h3>
          </div>
          <div data-note="P" class="key white black">
            <h3>P</h3>
          </div>
          {/* <!-- white keys --> */}
          <div data-note="E1" class="key white">
            <h3>E</h3>
          </div>
          {/* <!-- white and black keys --> */}
          <div data-note="E" class="key white black">
            <h3>E</h3>
          </div>
          <div data-note="D" class="key white black">
            <h3>D</h3>
          </div>
          {/* <!-- white keys --> */}
          <div data-note="Y" class="key white">
          
            <h3>Y</h3>
          </div>
        </div>
        {/* <!-- Audio files --> */}
        <audio id="C" src="music/tune0.mp3"></audio>
        <audio id="O" src="music/tune (1).mp3"></audio>
        <audio id="D" src="music/tune (2).mp3"></audio>
        <audio id="E" src="music/tune (3).mp3"></audio>
        <audio id="S" src="music/tune (4).mp3"></audio>
        <audio id="P" src="music/tune (5).mp3"></audio>
        <audio id="E1" src="music/tune (4).mp3"></audio>
        <audio id="E" src="music/tune (3).mp3"></audio>
        <audio id="D" src="music/tune (2).mp3"></audio>
        <audio id="Y" src="music/tune (1).mp3"></audio>
        <script src="script.js"></script>
      </body>
      <div>
        <>
        <spam>
       
        
        </spam>
          <spam
            className="btn-group"
            role="group"
            aria-label="Basic checkbox toggle button group"
          >
            <input
              type="checkbox"
              className="btn-check"
              id="btncheck1"
              autocomplete="off"
            />
            <label className="btn btn-outline-primary" htmlfor="btncheck1">
              Checkbox 1
            </label>

            <input
              type="checkbox"
              className="btn-check"
              id="btncheck2"
              autocomplete="off"
            />
            <label className="btn btn-outline-primary" htmlfor="btncheck2">
              Checkbox 2
            </label>
          </spam>
        </>

        {/* <h1>
          cromatic scale ={" "}
          {notes0 +
            " " +
            notes1 +
            " " +
            notes2 +
            " " +
            notes3 +
            " " +
            notes4 +
            " " +
            notes5 +
            " " +
            notes6 +
            " " +
            notes7 +
            " " +
            notes8 +
            " " +
            notes9 +
            " " +
            notes10 +
            " " +
            notes11}
        </h1> */}
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">tonic</th>
            <th scope="col">supertonic</th>
            <th scope="col">mediant</th>
            <th scope="col">subdominant</th>
            <th scope="col">dominant</th>
            <th scope="col">submediant</th>
            <th scope="col">leading tone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>C</td>
            <td>D</td>
            <td>E</td>
            <td>F</td>
            <td>G</td>
            <td>A</td>
            <td>B</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default about;
