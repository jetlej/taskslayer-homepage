<template>
  <section class="get-started">
    <div class="container container-sm">
      <h1 class="page-title has-subtitle">Welcome to <b>Slash</b>.</h1>
      <p class="subtitle">Let's get you started...</p>

      <div class="download-buttons">
        <b>1</b>
        <div>
          <h3><b>1)</b> Download the desktop app</h3>
          <p>The full desktop experience</p>
          <div class="btn-container">
            <a
              data-platform="Mac"
              id="download-mac"
              class="btn btn-default btn-xl download"
              href="https://github.com/jetlej/slash-releases/releases/latest"
              target="_blank"
              >MacOS</a
            >
            <a
              data-platform="Windows"
              id="download-windows"
              class="btn btn-default btn-xl download"
              href="https://github.com/jetlej/slash-releases/releases/latest"
              >Windows</a
            >
            <!--<a data-platform="Linux" class="btn btn-default btn-xl download" href="/linux">Linux</a>-->
          </div>
        </div>
      </div>

      <div class="download-buttons">
        <b>2</b>
        <div>
          <h3><b>2)</b> Download the mobile app</h3>
          <p>
            Note: Desktop app required! Mobile app is only for adding/editing
            tasks on-the-go.
          </p>
          <div class="btn-container">
            <a
              class="download inline-block"
              data-platform="iOS"
              href="https://apps.apple.com/us/app/slash-list/id1471831108"
              target="_blank"
            >
              <img src="/images/app-store.png" />
            </a>
            <a
              class="download inline-block"
              data-platform="Android"
              href="https://play.google.com/store/apps/details?id=co.getslash"
              target="_blank"
            >
              <img src="/images/google-play.png" />
            </a>
          </div>
        </div>
      </div>

      <div class="download-buttons">
        <b>3</b>
        <div>
          <h3><b>3)</b> Vote for your most-wanted features</h3>
          <p>Follow, vote and comment on new features & bugs</p>
          <div class="btn-container">
            <a class="btn btn-default btn-xl" href="https://slash.nolt.io"
              >Upvote Features</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  async mounted() {
    $('.get-started > div > div, .page-title, .subtitle').each(function(i) {
      let offset = 500 + i * 1000
      setTimeout(() => {
        $(this).addClass('visible')
      }, offset)
    })
  },
  methods: {},
  computed: {},
  head() {
    return {
      title: 'Slash - Get Started',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A new breed of productivity app. Slice through your to-do lists by staying focused and in flow.'
        }
      ],
      bodyAttrs: {
        class: ['gray-bg']
      }
    }
  }
}
</script>

<style lang="scss"></style>
