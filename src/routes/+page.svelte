<script lang="ts">
    
    import slickScroll from "slickscrolljs";
    import { onMount } from "svelte";
    import {
      imgPromises,
      loadPageResolve,
      slickScrollInstance,
      workItemsFetch,
      siteDataFetch,
    } from "$lib/store";
    import { devMsg, fetchJsonData } from "$lib/utils";
    import HomeSection from "$lib/sections/home.svelte";
    import WorkSection from "$lib/sections/work.svelte";
    import AboutSection from "$lib/sections/about.svelte";
    import NavComponent from "$lib/components/nav.svelte";
    import Footer from "$lib/components/footer.svelte";
    import CursorDot from "$lib/components/cursor-dot.svelte";
  
    let scrollContainer: HTMLElement, navBar: HTMLElement;
  
    onMount(async () => {
      try {
        const workData = await fetchJsonData("/data/work-data.json");
        workItemsFetch.set(workData);
  
        const siteData = await fetchJsonData("/data/data.json");
        siteDataFetch.set(siteData);
  
        await Promise.all($imgPromises); // Wait for all images to load successfully
  
        loadPageResolve(); // Resolve loadPagePromise
        devMsg();
  
        // Resolve slickScroll promise and pass momentumScroll's value
        $slickScrollInstance = new (slickScroll as any)({
          root: scrollContainer,
          easing: "easeOutCirc",
          duration: 1500,
          fixedOffsets: [navBar],
        });
  
        // Enable scrolling
        scrollContainer.style.overflowX = "hidden";
        scrollContainer.style.overflowY = "auto";
      } catch (error) {
        console.error("Error during page load:", error);
        loadPageResolve();
      }
    });
  </script>
  
  <CursorDot />
  
  <div id="scroll-frame" bind:this={scrollContainer}>
    <div id="nav-bar" bind:this={navBar}>
      <NavComponent scrollContainer={scrollContainer} />
    </div>
    <HomeSection />
    <WorkSection />
    <AboutSection />
    <Footer />
  </div>


<style lang="sass">

@import "../lib/consts"

:global(canvas)
	position: absolute
	top: 0
	left: 0
	z-index: -1
	
:global(body)
	background-color: #fdfefe
	overflow: hidden
	color: #212f3c
	margin: 0
	padding: 0
	-moz-osx-font-smoothing: grayscale
	-webkit-font-smoothing: antialiased
	font-family: "Questrial", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif

:global(*)
	margin: 0
	padding: 0
	-moz-osx-font-smoothing: grayscale
	-webkit-font-smoothing: antialiased

#scroll-frame
	top: 0
	left: 0
	width: 100%
	height: 100vh
	position: relative
	overflow: hidden auto

#nav-bar
	position: fixed
	//top: 10vh
	z-index: 100
	background-color: rgba(255, 255, 255, 0.7)  
	backdrop-filter: blur(10px)  
	border-bottom: 1px solid rgba(255, 255, 255, 0.2)  
	transition: background-color 0.3s ease, backdrop-filter 0.3s ease


</style>