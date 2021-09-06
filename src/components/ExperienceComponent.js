import { Component } from 'react';

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
      <div className="p-5 w-11/12 border flex flex-col shadow hover:border-purple-600" onClick={ this.toggleExperience }>
        <div className="flex flex-row">
          <div className="w-full"><b>{ this.props.jobTitle }</b>, { this.props.company }</div>
          <div className="w-full text-right">{ this.props.date }</div>
        </div>
        <div>
          { this.props.skills.map((value => {
            return <div>{ value }</div>
          }))}
        </div>
        
        { this.state.opened &&
          <div>
            <ul>
              { this.props.points.map((value => {
                return <li>{ value }</li>
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
