/* eslint-disable camelcase */
import React from 'react';
import './App.css';

const TYPES = {
  JR_SWE: 'jr_swe',
  SR_SWE: 'sr_swe',
  JR_SRE: 'jr_sre',
};

const RESUME_TYPE = TYPES.JR_SWE;
let filterCompany = null;
if (RESUME_TYPE === TYPES.JR_SWE) {
  filterCompany = ['General Motors', 'Online Amiga'];
}

const CONSTANTS = {
  name: 'Shawn Sanchez',
  email: 'shawnit@live.com',
  phone: '623-850-4565',
  github_short_uri: 'github.com/quincysoul',

  professional_experience: {
    title: 'Professional Experience',
    job_list: [
      {
        job_title: 'Software Development Engineer',
        company: 'Godaddy',
        start_date: '03/05/2021',
        end_date: '03/25/2022',
        bullets: [
          'Created react.js dashboards to enable datacenters to make decisions on power and rack usage.',
          'Updated frontend/backend of server drive wiping and health app to enable datacenters to efficiently monitor and destroy drives.',
          'Brought reusable components and hooks to enable developer experience and productivity.',
        ],
        skill_buttons: [
          'React',
          'JavaScript',
          'Python',
          'Github',
          'Servicenow',
          'Pytest',
          'Jenkins',
        ],
      },
      {
        job_title: 'Full-Stack Software Engineer',
        company: 'American Express',
        start_date: '10/25/2019',
        end_date: '03/02/2021',
        bullets: [
          'Worked with React to build corporate card features such as Membership Rewards points.',
          'Developed REST API endpoints in Java and Spring to provide card microservices such as balances, transactions, and MR points.',
          'Owned and implemented cache-busting solution in Java and CMS that reduced customer frustration and calls by 50/month, and simplified code deployment.',
          'Setup Jenkins build pipelines, and upgraded Maven dependencies to reduce vulnerabilities across 20 repositories.',
          'Upgraded Angular from 5 to 7 along with unit test corrections, enabling improvements on customer and development sides.',
        ],
        skill_buttons: [
          'React', 'JavaScript', 'Java 8', 'Spring', 'TDD', 'Jest', 'Maven', 'Python',
        ],
      },
      {
        job_title: 'Systems Engineer',
        job_title_alt: 'VMWare Operations Engineer',
        company: 'General Motors',
        start_date: '07/14/2014',
        end_date: '04/28/2019',
        bullets: [
          'Owned and developed PowerShell hardware validation unit testing to check settings and production functionality of over 300 servers.',
          'Using Powershell scripting and cross-team collaboration, added hard drives to 10,000 servers which were validated by OS and VRA typing.'],
        skill_buttons: [
          'Python',
          'BASH',
          'Powershell',
          'ITIL',
          'Validation',
        ],
      },
      {
        job_title: 'Web Developer',
        company: 'Online Amiga',
        start_date: '02/11/2014',
        end_date: '04/09/2014',
        bullets: [
          'Designed responsive, mobile-friendly layouts for AZ businesses.',
          'Ran performance testing and deployed to AWS.',
        ],
        skill_buttons: [
          'JavaScript',
          'HTML',
          'CSS',
          'Mobile Design',
        ],
      },
    ],
  },
  applications: [
    {
      title: 'Doge Meme Generator',
      short_uri: 'doge.openode.dev',
      bullets: [
        'Ability to store, share, and vote on memes, online by storage in PostgreSQL database and REST API in node.js',
        'Deployed site using Docker, ElephantSQL (PostgreSQL host), and node host. Set up SQL migrations.',
      ],
      skill_buttons: [
        'node.js',
        'JavaScript',
        'Express',
        'PostgreSQL',
        'SQL',
      ],
    },
  ],
  education: [
    'B.S. in Computer Information Systems - Arizona State University',
    'Certificate in React and node.js - Galvanize',
  ],
  interests: [
    'After work I like to attend AZ meetups for coding groups. Some of my frequent groups are: React AZ, Hackernest, HackerX. I also like to play free poker in AZ tournaments.',
  ],

};
function App() {
  return (
    <div className="customized-resume">
      <h1>{CONSTANTS.name}</h1>
      <table>
        <thead>
          <tr>
            <th>{CONSTANTS.email}</th>
            <th>{CONSTANTS.phone}</th>
            <th>
              <a href={`https://${CONSTANTS.github_short_uri}`} target="_blank" className="customLink" rel="noreferrer">
                {CONSTANTS.github_short_uri}
              </a>
            </th>
            <th>U.S. citizen</th>
          </tr>
        </thead>
      </table>
      <h2>{CONSTANTS.professional_experience.title}</h2>
      {CONSTANTS.professional_experience.job_list
        .filter((pred) => !filterCompany.includes(pred.company))
        .map((job) => {
          const {
            job_title, job_title_alt, company, start_date, end_date, bullets, skill_buttons,
          } = job;
          return (
            <>
              <h3>
                {job_title}
                {' '}
                -
                {' '}
                {company}
              </h3>
              <h4>
                {start_date}
                {' '}
                -
                {' '}
                {end_date}
              </h4>
              <ul>
                {bullets.map((point) => <li>{point}</li>)}
              </ul>
              {skill_buttons.map((skill) => (
                <a href="#" className="button6">{skill}</a>
              ))}
              <hr />
            </>
          );
        })}
      {CONSTANTS.applications ? <h2>Applications</h2> : <div>hi</div>}
      {CONSTANTS.applications.map((app) => {
        const {
          bullets, skill_buttons, title, short_uri,
        } = app;
        return (
          <>
            <h3>{title}</h3>
            <a href={`https://${short_uri}`} target="_blank" className="customLink" rel="noreferrer">
              {short_uri}
            </a>
            <ul>
              {bullets.map((point) => <li>{point}</li>)}
            </ul>
            {skill_buttons.map((skill) => (
              <a href="#" className="button6">{skill}</a>
            ))}
            <hr />
          </>
        );
      })}
      {CONSTANTS.education.length > 0 ? (
        <>
          <h2>Education</h2>
          <ul>
            {CONSTANTS.education.map((school) => (
              <li>
                <h4>{school}</h4>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {CONSTANTS.interests.length > 0 ? (
        <>
          <h2>Interests</h2>
          <ul>
            {CONSTANTS.interests.map((interest) => (
              <p>
                {interest}
              </p>
            ))}
          </ul>
        </>
      ) : null}

    </div>
  );
}

export default App;
