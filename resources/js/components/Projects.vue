<template>
  <section id="projects" data-aos="fade-up" data-aos-duration="1000">

    <h2>My latest work</h2>

    <p>
      Here are some screenshots of my latest projects.
      You can slide left and right, see the project structure,
      visit the project or check out the code on GitHub.
    </p>

    <div class="wrapper">

      <div class="carousel-wrapper">
        <div
          id="carousel-projects"
          class="carousel slide"
          data-ride="carousel"
          data-interval="false"
        >
          <div class="carousel-inner">
            <div
              v-for="(project, index) in projects"
              :class="[index + 1 === activeIndex ? 'active' : '' , 'carousel-item']"
            >
              <img :src="`assets/img/projects/${project.folder}-${size}.png`">
              <button
                class="btn btn-primary"
                @click="moreInformation(project)"
              >
                Project information
                <i class="fas fa-arrow-right icon"></i>
              </button>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carousel-projects" role="button" data-slide="prev">
            <img src="assets/img/photoDirection_Left.svg">
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carousel-projects" role="button" data-slide="next">
            <img src="assets/img/photoDirection_Right.svg">
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div class="slider">

        <input
          v-for="(project, index) in projects"
          type="radio"
          name="slider"
          :id="`slide-${index + 1}`"
          class="slider__radio"
          :checked="index + 1 === activeIndex"
          @change="slideChange"
        >

        <div class="slider__holder">
          <label
            v-for="(project, index) in projects"
            :for="`slide-${index + 1}`"
            :class="`slider__item slider__item--${index + 1} ${index + 1 === activeIndex ? 'active' : ''} card`"
          >
            <div :id="`carousel-${index + 1}`" class="carousel slide" data-ride="carousel" data-interval="false">
              <div class="carousel-inner">
                <div v-for="n in 4" :class="[n === 1 ? 'active' : '' ,'carousel-item']">
                  <div :style="`background-image: url(assets/img/projects/${project.folder}-${size}.png)`"></div>
                </div>
              </div>
            </div>
            <div class="more-info" @click="moreInformation(project)">
              More information
              <i class="fas fa-arrow-right icon"></i>
            </div>
          </label>
        </div>

        <div class="bullets">
          <label
            v-for="(project, index) in projects"
            :for="`slide-${index + 1}`"
            :class="`bullets__item bullets__item--${index + 1}`">
          </label>
        </div>

      </div>

    </div>

  </section>
</template>

<script>
export default {
  mounted() {
    if (screen.width > 767)
      (new Hammer($('#projects')[0])).on('swipe', e => {
        this.swipeSlider(e.direction === 2 ? true : false)
      })
  },
  data() {
    return {
      activeIndex: 2,
      projects: [
        {
          title: 'Ringer',
          type: 'Chat application',
          backend: {
            technologies: 'PHP, Apache, Linux',
            frameworks: 'Laravel',
            database: 'MySQL'
          },
          frontend: {
            technologies: 'HTML, CSS, JS',
            frameworks: 'Vue.js'
          },
          apis: 'Cloudinary, Pusher',
          folder: 'ringer',
          github: 'https://github.com/DleiaDev/ringer',
          link: 'https://ringer.dev/login'
        },
        {
          title: 'ArtEmpire',
          type: 'Social network',
          backend: {
            technologies: 'PHP, Apache, Linux',
            frameworks: 'Laravel',
            database: 'MySQL'
          },
          frontend: {
            technologies: 'HTML, CSS, JS',
            frameworks: 'Vue.js'
          },
          apis: 'Cloudinary, Pusher, Algolia',
          folder: 'artempire',
          github: 'https://github.com/DleiaDev/artempire',
          link: 'https://artempire.dev/login'
        },
        {
          title: 'Musicfy',
          type: 'Music player',
          backend: {
            technologies: 'PHP, Apache, Linux'
          },
          frontend: {
            technologies: 'HTML, CSS, JS',
            frameworks: 'Vue.js'
          },
          apis: 'Spotify',
          folder: 'musicfy',
          github: 'https://github.com/DleiaDev/musicfy',
          link: 'https://musicfy.dev'
        },
        {
          title: 'Solplay Booking',
          type: 'Hotel booking engine',
          backend: {
            technologies: 'PHP, Apache, Linux,',
            cms: 'WordPress',
            database: 'MySQL'
          },
          frontend: {
            technologies: 'HTML, CSS, JS'
          },
          apis: 'OmniBees, SIBS, utrust',
          folder: 'solplay',
          github: false,
          link: 'https://reservas.solplay.pt',
        },
        {
          title: 'Home Handling',
          type: 'Online store',
          backend: {
            technologies: 'Shopify default',
            cms: 'Shopify',
            database: 'Shopify default'
          },
          frontend: {
            technologies: 'HTML, CSS, JS'
          },
          folder: 'home-handling',
          github: false,
          link: 'https://homehandling.com'
        }
      ]
    }
  },
  computed: {
    size() {
      var screenWidth = screen.width
      var size = 1
      if (screenWidth <= 576) size = 2
      return size
    }
  },
  methods: {
    swipeSlider(direction) {
      var lastNextIndex = this.projects.length + 1
      var checkedInput = $('.slider__radio:checked')
      var checkedInputID = checkedInput.attr('id')
      var checkedInputIndex = parseInt(checkedInputID.charAt(checkedInputID.length - 1))
      var nextIndex = checkedInputIndex
      nextIndex = direction ? nextIndex + 1 : nextIndex - 1
      nextIndex = nextIndex < 0 || nextIndex === 0 ? 1 : nextIndex
      if (nextIndex === checkedInputIndex || nextIndex === lastNextIndex) return
      $(`.bullets__item--${nextIndex}`).click()
    },
    slideChange(e) {
      var slideIndex = parseInt(e.target.id.charAt(e.target.id.length - 1))
      $('.slider__item .more-info').css('display', 'none')
      $(`.slider__item--${slideIndex} .more-info`).css('display', 'block')
    },
    moreInformation(project) {
      var github = '';
      if (project.github)
        github = `
        <a href="${project.github}" target="_blank">
          GitHub
          <i class="fab fa-github icon"></i>
        </a>`;

      var html = `
      <div class="info">
        <h3>${project.title}</h3>
        <p>${project.type}</p>
      </div>
      <div class="tech">
        <div class="bt">
          <div class="flex">
            <div class="dot"></div>
            <div>Backend technologies</div>
          </div>
          <div class="text">${project.backend.technologies}</div>
        </div>
        <div class="bf">
          <div class="flex">
            <div class="dot"></div>
            <div>Backend frameworks</div>
          </div>
          <div class="text">${project.backend.frameworks ? project.backend.frameworks : 'None'}</div>
        </div>
        <div class="db">
          <div class="flex">
            <div class="dot"></div>
            <div>Database</div>
          </div>
          <div class="text">${project.backend.database ? project.backend.database : 'None'}</div>
        </div>
        <div class="cms">
          <div class="flex">
            <div class="dot"></div>
            <div>CMS</div>
          </div>
          <div class="text">${project.backend.cms ? project.backend.cms : 'None'}</div>
        </div>
        <div class="ft">
          <div class="flex">
            <div class="dot"></div>
            <div>Frontend technologies</div>
          </div>
          <div class="text">${project.frontend.technologies}</div>
        </div>
        <div class="ff">
          <div class="flex">
            <div class="dot"></div>
            <div>Frontend frameworks</div>
          </div>
          <div class="text">${project.frontend.frameworks ? project.frontend.frameworks : 'None'}</div>
        </div>
        <div class="apis">
          <div class="flex">
            <div class="dot"></div>
            <div>Third party APIs</div>
          </div>
          <div class="text">${project.apis ? project.apis : 'None'}</div>
        </div>
      </div>
      <div class="buttons">
        <a href="${project.link}" target="_blank">
          Visit Website
          <i class="fas fa-arrow-right icon"></i>
        </a>
        ${github}
      </div>`;

      $('#more-info-modal .modal-body').html(html)
      $('#more-info-modal').modal('toggle')
    }
  }
}
</script>
