import AppLayout from '../layout/AppLayout';
// Import Swiper React components
import React from 'react';

import '../../styles/pages/contact.css';

import linkedinImg from '../../images/linkedin.svg';
import gmailImg from '../../images/gmail.svg';

import { profileTeam } from '../data/profileTeam';

export default function Contact() {
  return (
    <AppLayout>
      <h2 className="titleSection">Our Team</h2>

      <div className="ourTeamProfile">
        {profileTeam.map((person) => {
          return (
            <div className="personalProfile" key={person.id}>
              <img src={person.img} className="personalImage" />
              <div className="personNamaNim">
                <p>{person.nama}</p>
                <p>{person.nim}</p>
              </div>
              <div className="socialMedia">
                <a href={person.linkedin}>
                  <img src={linkedinImg} className="socialMediaImg" />
                </a>
                <a href={`mailto:${person.gmail}`}>
                  <img src={gmailImg} className="socialMediaImg" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </AppLayout>
  );
}
