export const Story = gql`fragment Story on Story {
  id
  title
  image {
    tiny,
    tiny_webp,
    xs,
    xs_webp
  }
}`;
