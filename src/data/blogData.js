const blogPosts = [
    {
    id: 1,
    image: "/assets/images/Score.png",
    title: "Improving Web Accessibility: A Small Effort with Big Impact",
    date: "March 12, 2025",
    content: `
      Today, I’m proud to share a certificate I earned after completing Jon Kuperman’s “Website Accessibility, v2” course on Frontend Masters.
      The course has less than 3 hours of video content, and while it took me a bit longer to work through it, it was still a relatively quick and manageable investment. I want to emphasize this point: it was NOT VERY TIME CONSUMING, which highlights how little effort we need to make a significant impact on people’s lives — yet, we often choose to focus on "more important" things.
      The first time I used a screen reader (which I didn’t even know was available on my machine) was a real eye-opener. I was shocked by how difficult and exhausting it was to navigate even a well-designed page…
      Now comes the self-praise part — don't judge me too harshly! 😂 I decided to test my portfolio with Lighthouse, and I was thrilled to see it scored 93 points. Afterward, I reviewed all the suggestions and insights, which helped me take it to the next level. Concepts like onkeyup, tabindex, role, and aria-label finally clicked and sunk into my long-term memory.
      I strongly believe that accessibility should be part of every bootcamp’s syllabus and taken very seriously.`,
  },
  {
    id: 2,
    image: "/assets/images/MigraCodeCert.png",
    title: "Taking a Moment to Celebrate: My Full Stack Bootcamp Journey",
    date: "March 23, 2025",
    content: `
      It's been a while since I graduated from the MigraCode Full Stack bootcamp, but only now have I had the time to reflect on the course and on some life lessons I've learned.
      One key realization is how important it is to properly celebrate achievements without immediately looking ahead, feeling unsatisfied, or frustrated by the work that still needs to be done. 
      It took me 9 months of dedicated effort, including early morning wakeups to make it to Saturday classes on time. I have to admit, it was never a burden because I was fortunate to be surrounded by an amazing group and supportive teachers! 
      With this post, I want to mark this important milestone and take a moment to feel happy and proud of how much I accomplished last year!`,
  },

];

const sortedBlogPosts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));


export default blogPosts;