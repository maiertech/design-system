const posts = [
  {
    date: "July 4, 2018",
    title: "Aliquet maecenas leo odio condimentum id luctus nec molestie",
    excerpt:
      "<p>Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.</p>",
    author: "Abigail Lyptratt",
    image: {
      alt: "Black dimensions on green background.",
      src: "https://dummyimage.com/900x600.jpg/3cd8c3/000000"
    },
    href: "#"
  },
  {
    date: "June 12, 2018",
    title: "Pretium iaculis justo in hac habitasse platea",
    excerpt:
      "<p>Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.</p>",
    author: "Lon Kamena",
    image: {
      alt: "Black dimensions on fuchsia background.",
      src: "https://dummyimage.com/900x600.jpg/e019cd/000000"
    },
    href: "#"
  },
  {
    date: "May 31, 2018",
    title: "Vestibulum proin eu mi nulla ac enim in tempor turpis",
    excerpt:
      "<p>Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.</p>",
    author: "Orin Sissons",
    image: {
      alt: "Balck dimensions on light green background.",
      src: "https://dummyimage.com/900x600.jpg/4af41f/000000"
    },
    href: "#"
  },
  {
    date: "May 15, 2018",
    title:
      "Vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat",
    excerpt:
      "<p>Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.</p>",
    author: "Knox Simes",
    image: {
      alt: "Black dimensions on blue background.",
      src: "https://dummyimage.com/900x600.jpg/58d2ef/000000"
    },
    href: "#"
  },
  {
    date: "May 2, 2018",
    title: "Primis in faucibus orci luctus est",
    excerpt:
      "<p>Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.</p>",
    author: "Adelaida Hurndall",
    image: {
      alt: "White dimensions on red background.",
      src: "https://dummyimage.com/900x600.jpg/cc0000/ffffff"
    },
    href: "#"
  },
  {
    date: "April 20, 2018",
    title: "Suscipit ligula in lacus curabitur at ipsum",
    excerpt:
      "<p>Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.</p>",
    author: "Jeff Holsall",
    image: {
      alt: "White dimensions on brown background.",
      src: "https://dummyimage.com/900x600.jpg/562414/ffffff"
    },
    href: "#"
  },
  {
    date: "April 5, 2018",
    title: "Orci eget orci vehicula condimentum curabitur in",
    excerpt:
      "<p>Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.</p>",
    author: "Cchaddie Bordes",
    image: {
      alt: "Balck dimensions on weird yellow background.",
      src: "https://dummyimage.com/900x600.jpg/aea71d/000000"
    },
    href: "#"
  },
  {
    date: "March 14, 2018",
    title: "Quam pede lobortis ligula sit",
    excerpt:
      "<p>Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.</p>",
    author: "Ruthi Kunat",
    image: {
      alt: "White dimensions on turquoise background.",
      src: "https://dummyimage.com/900x600.jpg/0a919e/ffffff"
    },
    href: "#"
  },
  {
    date: "February 28, 2018",
    title:
      "Diam cras pellentesque volutpat dui maecenas tristique est et tempus",
    excerpt:
      "<p>Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.</p>",
    author: "Deanna Effnert",
    image: {
      alt: "White dimensions on blue background.",
      src: "https://dummyimage.com/900x600.jpg/0343ef/ffffff"
    },
    href: "#"
  },
  {
    date: "February 13, 2018",
    title: "Metus sapien ut nunc vestibulum ante",
    excerpt:
      "<p>Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.</p>",
    author: "Carr Missenden",
    image: {
      alt: "White dimensions on pale purple background.",
      src: "https://dummyimage.com/900x600.jpg/89648e/ffffff"
    },
    href: "#"
  }
];

export default posts;
