<script>
  import Navbar from './components/Navbar.svelte'
  import Hero from './components/Hero.svelte'
  import About from './components/About.svelte'
  import Projects from './components/Projects.svelte'
  import Contact from './components/Contact.svelte'
  import Footer from './components/Footer.svelte'
</script>

<main>
  <Navbar />
  <Hero />
  <About />
  <Projects />
  <Contact />
  <Footer />
</main>

<style>
  main {
    min-height: 100vh;
  }
</style>