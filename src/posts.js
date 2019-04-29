const posts = [
  {
    title: "Aliquet maecenas leo odio condimentum id luctus nec molestie",
    author: "Abigail Lyptratt",
    date: "July 4, 2018",
    lead:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    href: "/2018/07/04/slug",
    image: {
      alt: "Spaceman.",
      src: "https://source.unsplash.com/dBaz0xhCkPY/900x600"
    }
  },
  {
    title: "Pretium iaculis justo in hac habitasse platea",
    author: "Lon Kamena",
    date: "June 12, 2018",
    lead:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    href: "/2018/06/12/slug",
    image: {
      alt: "Parking.",
      src: "https://source.unsplash.com/EI32DgwN450/900x600"
    }
  },
  {
    title: "Vestibulum proin eu mi nulla ac enim in tempor turpis",
    author: "Orin Sissons",
    date: "May 31, 2018",
    lead:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    href: "/2018/05/31/slug",
    image: {
      alt: "Tea.",
      src: "https://source.unsplash.com/ulPd2UCwZYk/900x600"
    }
  },
  {
    title:
      "Vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat",
    author: "Knox Simes",
    date: "May 15, 2018",
    lead:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    href: "/2018/05/15/slug",
    image: {
      alt: "Structure.",
      src: "https://source.unsplash.com/AU1rKyKPJco/900x600"
    }
  },
  {
    title: "Primis in faucibus orci luctus est",
    author: "Adelaida Hurndall",
    date: "May 2, 2018",
    lead:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    href: "/2018/05/02/slug",
    image: {
      alt: "Tiger.",
      src: "https://source.unsplash.com/Yju1DCmp39I/900x600"
    }
  },
  {
    title: "Suscipit ligula in lacus curabitur at ipsum",
    author: "Jeff Holsall",
    date: "April 20, 2018",
    lead:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    href: "/2018/04/20/slug",
    image: {
      alt: "Code.",
      src: "https://source.unsplash.com/466ENaLuhLY/900x600"
    }
  },
  {
    title: "Orci eget orci vehicula condimentum curabitur in",
    date: "April 5, 2018",
    author: "Chaddie Bordes",
    lead:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    href: "/2018/04/05/slug",
    image: {
      alt: "Apples.",
      src: "https://source.unsplash.com/dpVJtfywdX4/900x600"
    }
  },
  {
    title: "Quam pede lobortis ligula sit",
    author: "Ruthi Kunat",
    date: "March 14, 2018",
    lead:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    href: "/2018/03/14/slug",
    image: {
      alt: "Colors.",
      src: "https://source.unsplash.com/8UeQgz9Wazw/900x600"
    }
  },
  {
    title:
      "Diam cras pellentesque volutpat dui maecenas tristique est et tempus",
    author: "Deanna Effnert",
    date: "February 28, 2018",
    lead:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    href: "/2018/02/28/slug",
    image: {
      alt: "Road.",
      src: "https://source.unsplash.com/bciXX0xjcwc/900x600"
    }
  },
  {
    title: "Metus sapien ut nunc vestibulum ante",
    author: "Carr Missenden",
    date: "February 13, 2018",
    lead:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    href: "/2018/02/13/slug",
    image: {
      alt: "Architecture.",
      src: "https://source.unsplash.com/FK0RhfEeY0w/900x600"
    }
  }
];

export default posts;
