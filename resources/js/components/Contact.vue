<template>
  <section id="contact">
    <div class="wrapper" data-aos="fade-up" data-aos-duration="500">

      <h2>Contact Me</h2>

      <p>
        You can contact me for whatever work you need, it is my pleasure to
        serve God's other children.
      </p>

      <h3 @click="copyEmail">markowebdeveloper@gmail.com</h3>

      <div class="social-links">
        <a href="https://www.linkedin.com/in/marko-ilic-973101167/" target="_blank">
          <i class="fab fa-linkedin icon"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=1525792985" target="_blank">
          <i class="fab fa-facebook-square icon"></i>
        </a>
        <a href="https://twitter.com/MareKersme" target="_blank">
          <i class="fab fa-twitter-square icon"></i>
        </a>
        <a href="https://www.instagram.com/markopolo247/" target="_blank">
          <i class="fab fa-instagram-square icon"></i>
        </a>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  methods: {
    copyEmail(e) {
      if (document.selection) { // IE
        var range = document.body.createTextRange()
        range.moveToElementText(e.target)
        range.select()
      } else if (window.getSelection) {
        var range = document.createRange()
        range.selectNode(e.target)
        window.getSelection().removeAllRanges()
        window.getSelection().addRange(range)
      }
      document.execCommand('copy')
      $(e.target).tooltip({
        placement: 'top',
        title: 'Email copied',
        trigger: 'manual'
      })
      $(e.target).tooltip('show')
      setTimeout(() => { $(e.target).tooltip('hide') }, 2000)
    }
  }
}
</script>
