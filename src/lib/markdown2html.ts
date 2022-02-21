import MarkdownIt from "markdown-it";

export const fn = () => {
  const markdownIt = new MarkdownIt({
    html: true,
    linkify: true,
    breaks: true,
    typographer: true,
  });
};
