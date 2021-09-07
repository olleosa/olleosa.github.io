import { Component } from 'react'
import ExperienceComponent from '../components/ExperienceComponent'

class ExperiencePage extends Component {
  constructor() {
    super()
    this.state = {
      experiences: [
        {
          jobTitle: "Software Developer",
          company: "Magnet Forensics",
          date: "May 2021 - Aug 2021",
          skills: [ "C#", ".NET Applications" ],
          points: [
            "Utilized C# to add new features to AXIOM, a .NET Application based on the emergence of new applications and updates to applications and operating systems.",
            "Worked in an agile environment and resolved customer reported bugs promptly and reliably to ensure users are able to access necessary forensic data for their cases, increasing customer satisfaction."
          ]
        },
        {
          jobTitle: "Software Developer",
          company: "Creative Layer",
          date: "May 2020 - Aug 2020, Jan 2021 - Apr 2021",
          skills: ["Vue.js", "TypeScript", "GraphQL", "REST API", "Node.js"],
          points: [
            "Utilized Vue.js 3 and TypeScript to create visually appealing client-facing components",
            "Examined the feasibility of potential products using AWS Sagemaker, S3 Buckets, as well as an internal tool and relayed the results to upper management",
            "Prototyped a Shopify application using Node.js that uses GraphQL queries, which will be used as a reference for future Shopify applications created by Creative Layer",
          ]
        },
        {
          jobTitle: "Product Developer",
          company: "Mitel",
          date: "Sept 2020 - Dec 2020",
          skills: ["Angular", "TypeScript", "Protractor"],
          points: [
            "Implemented WAI-ARIA concepts into an internal chat system to allow for improved accessibility for those who are visually impaired and/or require keyboard navigation using Angular and TypeScript",
            "Designed and polished new and existing end to end (E2E) tests using Protractor to ensure programs are running as intended"
          ]
        },
        {
          jobTitle: "Teaching Assistant",
          company: "Carleton University",
          date: "Jan 2020 - Apr 2020",
          skills: ["Python"],
          points: [
            "Improved students' understanding of Python and core programming concepts during labs and office hours",
            "Ensured that assignments and tests were corrected with great attention to detail and in a timely manner so students are able to review and improve their understanding of concepts taught in the course"
          ],
        },
      ]
    }
  }
  
  render() {
    const { experiences } = this.state;
    return (
      <div className="">

        <div className="text-7xl pl-10 pb-5">work experience</div>
        <div className="flex flex-col items-center space-y-3 text-xl">
          { experiences.map(( exp => {
            return <ExperienceComponent 
            jobTitle={ exp.jobTitle }
            company={ exp.company }
            date= { exp.date }
            skills={ exp.skills }
            points={ exp.points }
            /> 
          }))}
          </div>
      </div>
    )
  }
}

export default ExperiencePage;
