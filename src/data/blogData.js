const blogPosts = [
  {
    id: 1,
    image: "/assets/images/MigraCodeCert.png",
    title: "Taking a Moment to Celebrate: My Full Stack Bootcamp Journey",
    date: "March 23, 2025",
    content: `
      It's been a while since I graduated from the MigraCode Full Stack bootcamp, but only now have I had the time to reflect on the course and on some life lessons I've learned.
      One key realization is how important it is to properly celebrate achievements without immediately looking ahead, feeling unsatisfied, or frustrated by the work that still needs to be done. 
      It took me 9 months of dedicated effort, including early morning wakeups to make it to Saturday classes on time. I have to admit, it was never a burden because I was fortunate to be surrounded by an amazing group and supportive teachers! 
      With this post, I want to mark this important milestone and take a moment to feel happy and proud of how much I accomplished last year!`,
  },
  {
    id: 2,
    image: "/assets/images/modern-seo.png",
    title: "Not So Modern, But Still SEO: Obtaining Frontend Masters' Certificate on the Topic",
    date: "April 7, 2025",
    content: `
      Dear friends, I want to share a little win with you — I’ve completed the SEO course from Frontend Masters and received my certificate! 🎉
      Even though the course dates back to 2017, most of the knowledge is still surprisingly relevant and valuable today. In fact, going through it felt a bit like stepping into a time machine. It was fascinating to see how certain approaches have evolved — and how others, like AMPs, have faded away.
      What makes me happy is seeing how SEO is also shifting toward a more accessible web. The rules are getting simpler: create good content, make it accessible, and your visibility improves. Or to put it plainly:
      "Be nice and helpful, and people will like you." 😊 I’ve already incorporated some of the insights into my portfolio website, and I’ll definitely keep digging into newer resources to stay up-to-date and make it even better.`,
  },

];

const sortedBlogPosts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));


export default blogPosts;