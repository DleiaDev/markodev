<template>
  <div>

    <navbar></navbar>

    <showcase></showcase>

    <projects></projects>

    <skills></skills>

    <contact></contact>

    <!-- Modal -->
    <div class="modal fade" id="more-info-modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            Hello
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Showcase from './components/Showcase.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'

export default {
  components: {
    Navbar,
    Showcase,
    Projects,
    Skills,
    Contact
  }
}
</script>
