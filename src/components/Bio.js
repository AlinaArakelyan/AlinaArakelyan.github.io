import React from 'react'
import Alina from "../Alina.jpg"


export default class Bio extends React.Component{

    render() {
        let Alina2 = Alina
        return (
            <div>
            <h2 className="App"> About Me </h2>
            <div className="bigCont" >
                {/* <h2 className="App"> About Me </h2> */}
                <img className="pic" alt="profile" src={Alina2}></img>
                <p class="Cont"> <div>Hi I'm Alina Arakelyan, a full stack web developer known for creative and productive problem solving, experienced in front and back end work with JavaScript, React, Redux, Ruby, Rails, and SQL.
                   <br></br> With a background in operations and healthcare administration, I know how to prioritize competing tasks under pressure, meet deadlines and deliver client driven products and services.
               </div><br></br>
                    <div>Personal: Beach and coffee enthusiast, lover of art, music, science and nature.
                  </div>
             <div><a className="App-link"href={"https://docs.google.com/document/d/1xeWRkfJNeTW5NYfmQdaMXgyWe8dWFF_ANNrIfT0S9mo/edit?usp=sharing"}>Resume</a></div>
            </p>
                </div>
                </div>
        )
    }
}