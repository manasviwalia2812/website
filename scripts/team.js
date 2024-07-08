import {team} from './team-members.js'

let teamHTML = '';

team.forEach((member) => {
  teamHTML += `
  <div class="container">
    <div class="card">
      <div class="content">
        <div class="imgBox">
          <img src="${member.image}" alt="">
        </div>
        <div class="contentBox">
          <p class="name">${member.name}</p>
          <p class="post">${member.post}</p>
        </div>
        <div class="social-media">
          ${member.socialMedia.linkedIn ? `<a href="${member.socialMedia.linkedIn}" target="_blank"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>` : ''}
          ${member.socialMedia.gitHub ? `<a href="${member.socialMedia.gitHub}"><i class="fa-brands fa-github" aria-hidden="true"></i></a>` : ''}
        </div>
      </div>
    </div>
  </div>`;
});


console.log(teamHTML);

document.querySelector('.js-advisory').innerHTML = teamHTML;