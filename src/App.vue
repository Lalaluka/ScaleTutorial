<template>
  <scale-tooltip content="Tooltip" placement="bottom">
    <scale-button @click="clickEvent">Scale Button</scale-button>
  </scale-tooltip>
  <scale-button @click="openModal" variant="secondary">Scale Button Secondary</scale-button>
  <scale-button styles=".button{background-color: green !important}">Scale Button Green color</scale-button>
  <scale-tooltip placement="bottom">
    <img src="https://picsum.photos/id/237/200/300" slot="content" />
    <scale-button id="button">Scale Button</scale-button>
  </scale-tooltip>
  <scale-modal :opened="modalOpened" @scaleClose="closeModal" heading="Modal Dialog">
    <p>Hello. Here is your Modal :)</p>
    <scale-button slot="action" variant="secondary" @click="closeModal">
      Cancel
    </scale-button>
  </scale-modal>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      modalOpened: false
    }
  },
  methods: {
    clickEvent() {
      alert('Clicked')
    },
    openModal() {
      this.modalOpened = true
    },
    closeModal() {
      this.modalOpened = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#button {
  --background-primary: green;
}

html {
  --scl-color-primary: orange !important;
}
</style>
