export const Story = gql`fragment Story on Story {
  id
  title
  stories {
      id
      body
      title
      button_link
      button_title
      image {
          medium
          medium_webp
          small
          small_webp
          src
      }
  }
  image {
    tiny,
    tiny_webp,
    xs,
    xs_webp
  }
}`;
