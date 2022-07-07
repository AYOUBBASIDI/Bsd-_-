<template>
<body >
<!-- <nav>
    <div class="container--nav">
        <div class="container--nav--logo">
            <a >Ayoub Basidi</a>
        </div>
        <div class="container--nav--menu">
            <div class="menu--content">
                <a>Home</a>
            </div>
            <div class="menu--content">
                <a>About</a>
            </div>
            <div class="menu--content">
                <a>Skills</a>
            </div>
            <div class="menu--content">
                <a>Projects</a>
            </div>
            <div class="menu--content">
                <a>Contact</a>
            </div>
        </div>
        <div class="container--nav--more">
            <a>more</a>
        </div>
    </div>

</nav> -->


    <img class="home" src="../assets/des.png">
    <img class="descktop" src="../assets/home.png">
    
    
    

<!-- folders in desktop-->
    <div class="allfolder" >
        <div class="part" v-on:click="about = !about, projects = false, contact = false, skills = false">
        <img class="folder"  src="../assets/folder.gif">
        <p>About me</p>
        </div>

        <div class="part" v-on:click="about = false, projects = !projects, contact = false, skills = false">
        <img class="folder" src="../assets/folder.gif">
        <p>Projects</p>
        </div>

        <div class="part" v-on:click="about = false, projects = false, contact = !contact, skills = false">
        <img class="folder" src="../assets/folder.gif">
        <p>Contact</p>
        </div>

        <div class="part" v-on:click="about = false, projects = false, contact = false, skills = !skills">
        <img class="folder" src="../assets/folder.gif">
        <p>Skills</p>
        </div>
    </div>
<!-- folders in desktop end-->



<!------first--- folder-open-here -->

    <div id="about" class="folder-open" :class="{ fadein: about }">
        <img src="../assets/about.png">
        <div class="folder-content">
            <div class="folder-in-folder" v-on:click="readme = !readme">
            <img class="readme" src="../assets/readme.png">
            <p>Read Me</p>
            </div>
        </div>
    </div>

    <div id="projects" class="folder-open" :class="{ fadein: projects }">
        <img src="../assets/projects.png">
    </div>

    <div id="contact" class="folder-open" :class="{ fadein: contact }">
        <img src="../assets/contact.png">
    </div>

    <div id="skills" class="folder-open" :class="{ fadein: skills }">
        <img src="../assets/skills.png">
    </div>
<!------end--- folder-open-here -->



<!-- read me file for about me -->
<div id="file-readme" class="file-readme"  :class="{ block: readme , fadein:readme }">
<img src="../assets/read.png">
<div class="readme--content">
   
</div>
</div>
<!-- read me file for about me end -->

 <vue-typer text='Hello World! I was registered globally!'></vue-typer>


<!-- login page -->
    <img id="login" class="login" :class="{ fadeout: login , display:login }" src="../assets/login.png">
    <div v-on:click="login = !login" class="btn-hidden" :class="{display: login}"></div>
</body>
</template>
<!-- login page end -->
<script>
export default {
  name: 'HomePage',
  
  data() {
    return {
      about: false,
      skills: false,
      projects: false,
      contact: false,
      login:false,
      readme:false,
    };
  },


    methods: {
        readmeFile(){
            let readme = document.getElementById("file-readme");
            readme.style.display = "block";
            readme.classList.toggle("fadein");
            let i = 0;
            let txt = 'Lorem ipsum dummy text blabla.';
            let speed = 50;
            this.typeWriter(i,txt,speed);
            console.log("success");
        },

        typeWriter(i,txt,speed){
            console.log("success");
            if (i < txt.length) {
                document.getElementById("aboutme").innerHTML += txt.charAt(i);
                i++;
                setTimeout(this.typeWriter, speed);
            }
        }
    }

  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
    color:white;
    margin:0;
}
.container--nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10%;
    border-bottom: solid 1px #434343;
    position: sticky;
}
.container--nav--logo{
    font-size:18px;
    font-weight:bold;
}
.container--nav--menu{
    display: flex;
    justify-content: space-between;
    width: 45%;
}
.menu--content{
    display: inline-block;
    padding: 8px 18px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
}

.folder{
    width: 30px;
}

.home{
    width: 74%;
    height: 503px;
    position: absolute;
    top: 7%;
    left: 13%;
}
.login,.descktop{
    width: 57.6%;
    height: 426px;
    position: absolute;
    top: 12%;
    left: 21.2%;
    border-radius: 2px;
}

.btn-hidden{
    background: white;
    width: 72px;
    height: 21px;
    position: absolute;
    top: 49.7%;
    left: 47.2%;
    opacity: 0;
    cursor: pointer;
    border-radius: 5px;
}
.btn-hidden:hover{
    opacity: 0.2;
}

.fadeout{
  opacity: 0;
  transition: opacity 0.2s linear;
}
.part{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 5px;
    border-radius: 5px;
    cursor:pointer;
}
.part p{
    margin-top: 1%;
    font-size: 12px;
}
.allfolder{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 270px;
    position: absolute;
    top: 14%;
    left: 22%;
}
.part:hover{
    background: rgb(255 255 255 / 0.3);
}

.folder-open img{
    width:100%;
    border-radius: 7px;
}
.folder-open {
    opacity: 0;
    transition: opacity 0.2s linear;
    position: absolute;
    width: 50%;
    top: 20%;
    left: 28%;
}

/* .folder-content{
    position:relative;
} */
.folder-in-folder{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 35%;
    left: 22%;
    border-radius: 4px;
    z-index: 1;
    cursor: pointer;
}
.folder-in-folder:hover {
    background: rgb(255 255 255 / 0.3);
}
.readme{
    width: 40% !important;
}
.folder-in-folder p{
    font-size: 7px;
    margin-top: 3%;
}
.file-readme img{
    width: 100%;
    border-radius: 3px;
}
.file-readme{
    z-index:2;
    display:none;
    opacity: 0;
    transition: opacity 0.2s linear;
    position: absolute; 
    top: 13%; 
    left: 21.7%; 
    width: 56.6%;
}

.fadein{
    opacity:1;
}
.display{
    display: none;
}
.block{
    display: block;
}
</style>