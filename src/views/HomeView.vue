<template>
  <div class="home">
    
    <div id="row1">
      <div class="profileimg divs">
      
        <img src="../assets/resume_pic.png" alt="resume">
        <p><strong>Dinesh Kumar Reddy Tikkam</strong></p>
        <p><strong>#FULL WEB STACK DEVELOPER</strong></p>
        <h3><strong>#youtuber</strong></h3>
    </div>
    <div class="divs">
      <div id="SKILLS">
        <div id="skilstitle">
          <h4>SKILLS</h4>
        </div>
        <div id="CodingLanguages" class="SKILLSLIST">
          <h5>Coding Languages:</h5>
          <div class="codinglanguageslist">
            <p>Java,sql, HTML, CSS, Python.</p>
          </div>
          <div class="Libraries SKILLSLIST">
            <h5>Libraries:</h5>
            <p>React JS , VUE JS</p>
          </div>
          <div class="cdci SKILLSLIST">
          <h5>CI/CD:</h5>
          <div class="cdcilist">
            <p>GIT</p>
          </div>
          <div class="OTHERSKILS SKILLSLIST">
            <h5>OTHERSKILS</h5>
            <p>Pro photo editing, pro in ppt creating,
              Web Hosting,WordPress Install,
              Graphics and Design,</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="divs">
      <div class="CareerSummary">
        <div>
          <h4 class="projectslist">Career Summary</h4>
        </div>
        <div class="project">
          <div><h4 class="projectslist">PROJECTS</h4></div>
          <div><p><strong>Intelligent Attendance System face recognition</strong></p></div>
          <div><p><strong>Developed a movie website &darr;</strong></p></div>
          <div><p>Link - http://jiorockers.unaux.com/</p></div>
        </div>
      </div>
    </div>
    </div>
    <div id="row2">
      <div class="divs">
        <div class="reachme">
          <h4 class="left">How to reach me:</h4>
          <p class="left"><strong>Home:</strong></p>
          <p class="left">KADAPA,INDIA</p>
          <p class="left"><strong>Cell:</strong></p>
          <p class="left">+91 8125975057</p>
          <p class="left"><strong>Email:</strong></p>
          <p class="left" id="Email"><strong>dineshkumarreddy001@gmail.com</strong></p>
          <p class="left"><strong>Linkedin:</strong></p>
          <p class="left" id="linkedin"><strong>https://www.linkedin.com/in/dineshkumarreddy001/</strong></p>
          <p class="left"><strong>Adress:</strong></p>
          <p class="left" id="Adress"><strong>1/17, katuguthapalli (v andpost), sambapalli (m), kadapa(district)</strong></p>
        </div>
      </div>
      <div class="divs">
        <div class="EDUCATION">
          <h4>EDUCATION</h4>
          <div class="college name">
            <p><strong>Kalasalingam academy of
              research and
              education
              </strong></p>
              <p> B.Tech
                . -Computer Science Engineering</p>
                <ul>
                  <li>Enrolled since 2019 to present</li>
                  <li>Taking up specialization courses in Artificial Intelligence and Machine Learning</li>
                </ul>
                <div class="Intermediate">
                  <h4><strong>Intermediate</strong></h4>
                  <p>Narayana Junior College
                    at Renigunta, Andhra Pradesh
                    517520</p>
                </div>
          </div>
        </div>
      </div>
      <div class="divs">
        <div class="Workexperience">
          <h4>Work experience</h4>
          <ul>
            <li>joined in vxceed on august 2022</li>
            <li>I had taught Front End development (HTML, CSS, python,java) for college students</li>
            <li><strong>Now I am successfully running YouTube channel on tech and student needs</strong></li>
          </ul>
        </div>
      </div>
    </div>
    <div id="row3">
      <div class="divs" id="INTERESTS">
        <div class="INTERESTS">
          <h4>INTERESTS</h4>
          <p>programming,</p>
          <p>Artificial intelligence,</p>
          <p>web technology,</p>
           <p>reading and learning.</p>
           
        </div>
      </div>
      <div>
        <div class="divs" id="ORGANIZATIONS">
          <div class="ORGANIZATIONS">
            <h4>ORGANIZATIONS</h4>
            <p>NSS</p>
          </div>
        </div>
        <div class="divs" id="CERTIFICATES">
          <div class="CERTIFICATES">
            <h4>CERTIFICATES</h4>
            <p class="courselist">Coursera,</p>
            <p class="courselist">EDX,</p>
            <p class="courselist">Solo learn,</p>
            <p class="courselist">codedamn</p>
          </div>
        </div>
      </div>
      <div class="divs" id="LANGUAGES">
        <div class="LANGUAGES">
          <h4>LANGUAGES</h4>
          <p>English</p>
          <p>Telugu</p>
          <p>Hindi</p>
        </div>
      </div>
    </div>



    
    
    
  </div>
</template>

<script>




export default {
  name: 'HomeView',
  components: {

}
}
</script>


<style>
.home{
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  width: 99%;
  height: auto;
  margin: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  }
  .divs{
    width: 270px;
    height: 380px;
    background-color: white;
    margin: 10px;
    margin-top: 30px;
    border-radius: 14px;
    padding: 5px;
    box-shadow: 3px 4px 10px 4px rgb(2 11 44);
  }

.divs:hover{
  width: 270px;
  height: 380px;
  margin: 10px;
  background-color: #a2eefc;
  font-weight: 500;
}

.profileimg>img{
  margin: 5px;
  width: 85%;
}
.profileimg>h3{
  font-size: 20px;
  margin-top: 8px;
  display: flex;
}

#skilstitle{
  font-size: 28px;
  display: flex;
}

.SKILLSLIST>h5{
  display: flex;
}

.projectslist{
  display: flex;
}

#linkedin,#Email,#Adress{
  font-size: 10px;
}

.left{
  display: flex;
  margin-bottom: 10px;
}
#INTERESTS{
  height: 262px;
  background: white;
}

#ORGANIZATIONS{
  height: 100px;
  background: white;
}

#CERTIFICATES{
  height: 150px;
  background: white;
}


#LANGUAGES{
  height: 260px;
  background: white;
  
  
}

#row1{
  height: 400px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
}
#row2{
  height: 400px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
}
#row3{
  height: 400px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
}

.courselist{
  margin: 0px;
}

</style>