import { advisory,executive,core } from './team-members.js';

function initTeam(){
  let advisoryHTML = '';
  advisory.forEach((member) => {
    advisoryHTML += `
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
            ${member.socialMedia && member.socialMedia.linkedIn ? `<a href="${member.socialMedia.linkedIn}" target="_blank"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>` : ''}
            ${member.socialMedia && member.socialMedia.gitHub ? `<a href="${member.socialMedia.gitHub}"><i class="fa-brands fa-github" aria-hidden="true"></i></a>` : ''}
            ${member.socialMedia && member.socialMedia.instagram ? `<a href="${member.socialMedia.instagram}" target="_blank"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>` : ''}
          </div>
        </div>
      </div>
    </div>`;
  });
  
  let executiveHTML = '';
  executive.forEach((member) => {
    executiveHTML += `
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
            ${member.socialMedia && member.socialMedia.linkedIn ? `<a href="${member.socialMedia.linkedIn}" target="_blank"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>` : ''}
            ${member.socialMedia && member.socialMedia.gitHub ? `<a href="${member.socialMedia.gitHub}"><i class="fa-brands fa-github" aria-hidden="true"></i></a>` : ''}
            ${member.socialMedia && member.socialMedia.instagram ? `<a href="${member.socialMedia.instagram}" target="_blank"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>` : ''}
          </div>
        </div>
      </div>
    </div>`;
  });

  let coreHTML = '';
  core.forEach((member) => {
    coreHTML += `
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
            ${member.socialMedia && member.socialMedia.linkedIn ? `<a href="${member.socialMedia.linkedIn}" target="_blank"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>` : ''}
            ${member.socialMedia && member.socialMedia.gitHub ? `<a href="${member.socialMedia.gitHub}"><i class="fa-brands fa-github" aria-hidden="true"></i></a>` : ''}
            ${member.socialMedia && member.socialMedia.instagram ? `<a href="${member.socialMedia.instagram}" target="_blank"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>` : ''}
          </div>
        </div>
      </div>
    </div>`;
  });
  
  document.querySelector('.js-advisory').innerHTML = advisoryHTML;
  document.querySelector('.js-executive').innerHTML = executiveHTML;
  document.querySelector('.js-core').innerHTML = coreHTML;
}

initTeam();
