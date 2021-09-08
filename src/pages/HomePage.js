import { Component } from 'react'
const emoji = require("emoji-dictionary");

class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      hobbies: [
        "Trying new restaurants and recipes",
        "Playing relaxing games like Animal Crossing or Pokemon",
        "Building mechanical keyboards",
        "Spending time with my dogs"
      ]
    }
  }

  render() {

    const { hobbies } = this.state;
    return (
      <div>
        <div className="text-7xl pl-10 pb-5">Hi, I'm Samantha! { emoji.getUnicode("wave") } </div>

        <div className="px-10 py-5 text-xl">
          I'm currently a fourth year computer science student at Carleton University and working part time as a software developer at Creative Layer!

          At the moment, I am mostly interested in full stack and mobile development.
        </div>

        <div className="px-10 py-5 text-xl">
          <div className="text-2xl">Outside of tech I enjoy:</div>
          <ul>
            { hobbies.map((value => {
              return <li>{ emoji.getUnicode("sunflower") + "\t" + value }</li>
            }))}
          </ul>
        </div>

        <div className="px-10 py-5 text-xl">
          If you have any questions or would just like to chat, feel free to <a href="mailto:chen.samantha05@gmail.com" target="_blank" rel="noreferrer" className="text-purple-500">reach out</a> to me!
        </div>
      </div>
    )
  }

}

export default HomePage
