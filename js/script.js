const GM='https://mail.google.com/mail/?view=cm&fs=1&to=naveenjeyachandran21@gmail.com&su=Hello%20Naveen';
const OUT={
help:['Commands: whoami, skills, experience, bounty, projects, education, links, contact, clear'],
whoami:['Naveen J, Security Analyst I at Photon, Chennai.','Web, API, mobile and AI application security testing for enterprise clients.'],
skills:['Testing   : Web, API and mobile pentesting, AI/LLM security','Standards : OWASP Top 10, SAST, DAST, SCA','Tools     : Burp Suite, MobSF, Frida, Snyk, Postman, Garak, PyRIT, Promptfoo','Code      : Python, Java, C++, HTML/CSS/JS'],
experience:['Security Analyst I, Photon (2025 - present)','- Web, API and mobile security testing for enterprise clients','- Scans, validation, defect tickets, retesting, developer support','- Frida scripts for root detection and SSL pinning bypass','- AI/LLM testing with Garak, PyRIT and Promptfoo'],
bounty:['Financial services platform : IDOR, session management, horizontal privilege escalation [fixed]','Consumer technology platform  : OTP flooding in the WhatsApp OTP flow [reported]'],
projects:['Poultry automation using IoT (2025)','Detecting diabetes (2024)'],
education:['Bachelor of Computer Science and Engineering, Paavai Engineering College, CGPA 8.48 (2021-2025)']};
const out=document.getElementById('out'),inp=document.getElementById('cmd');
function line(t,cls){const d=document.createElement('div');if(cls)d.className=cls;d.textContent=t;out.appendChild(d);return d}
function run(c){
const x=c.trim().toLowerCase();if(!x)return;
line('$ '+c,'c');
if(x==='clear'){out.textContent='';return}
if(x==='links'){[['GitHub','https://github.com/J-Naveen'],['Medium','https://medium.com/@naveenjeyachandran21']].forEach(([n,u])=>{const a=document.createElement('a');a.href=u;a.target='_blank';a.rel='noopener';a.textContent=n+': '+u;const e=document.createElement('div');e.appendChild(a);out.appendChild(e)})}
else if(x==='contact'){const a=document.createElement('a');a.href=GM;a.target='_blank';a.rel='noopener';a.textContent='naveenjeyachandran21@gmail.com (opens Gmail)';const e=document.createElement('div');e.appendChild(a);out.appendChild(e)}
else if(OUT[x])OUT[x].forEach(t=>line(t,x==='help'?'m':''));
else if(x.startsWith('sudo'))line('Nice try. Permission denied.','m');
else line('command not found: '+x+'. Type help.','m');
out.scrollTop=out.scrollHeight}
inp.addEventListener('keydown',e=>{if(e.key==='Enter'){run(inp.value);inp.value=''}});
document.querySelectorAll('.quick button').forEach(b=>b.addEventListener('click',()=>run(b.dataset.c)));
(function intro(){const s='whoami',d=line('$ ','c');let i=0;const t=setInterval(()=>{d.textContent='$ '+s.slice(0,++i);if(i===s.length){clearInterval(t);OUT.whoami.forEach(x=>line(x));line("Type 'help' to see commands.",'m')}},110)})();
const words=['web pentesting','API security','mobile pentesting','AI/LLM security','bug bounty'],rot=document.getElementById('rot');let wi=0;
setInterval(()=>{rot.style.opacity=0;setTimeout(()=>{wi=(wi+1)%words.length;rot.textContent=words[wi];rot.style.opacity=1},300)},2200);
const pg=document.getElementById('pg');
addEventListener('scroll',()=>{const m=document.documentElement.scrollHeight-innerHeight;pg.style.transform='scaleX('+(m>0?scrollY/m:0)+')'},{passive:true});
document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.card');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')}});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
