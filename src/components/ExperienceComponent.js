import { Component } from 'react';
const emoji = require("emoji-dictionary");

class ExperienceComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
    }

    this.toggleExperience = this.toggleExperience.bind(this)
  }

  render () {
    return (
      <div className="p-5 w-11/12 border flex flex-col shadow hover:border-black" onClick={ this.toggleExperience }>

        <div className="flex flex-row">
          <div className="w-full"><b>{ this.props.jobTitle }</b> // { this.props.company }</div>
          <div className="w-full text-right text-gray-400 text-sm">{ this.props.date }</div>
        </div>

        <div className="flex flex-row">
          { this.props.skills.map((value => {
            return <div className="mr-1 px-2 bg-indigo-200 text-sm">{ value }</div>
          }))}
        </div>
        
        { this.state.opened &&
          <div className="pt-5">
            <ul>
              { this.props.points.map((value => {
                return <li className="text-base">{ emoji.getUnicode("sunflower") + "\t" + value }</li>
              }))}
            </ul>
          </div>
        }

      </div>
    )
  }

  toggleExperience() {
    this.setState({ opened: !this.state.opened })
  }
}

export default ExperienceComponent;
