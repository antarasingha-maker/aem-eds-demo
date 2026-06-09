export default function decorate(block) {
  console.log("article-feature loaded");
  const data = {};

  [...block.children].forEach((row) => {
    const key = row.children[0]?.textContent?.trim();
    const value = row.children[1];

    if (key) {
      data[key] = value;
    }
  });

  const wrapper = document.createElement("div");
  wrapper.className = "article-feature-wrapper";

  const content = document.createElement("div");
  content.className = "article-feature-content";

  const imageContainer = document.createElement("div");
  imageContainer.className = "article-feature-image";

  // Category
  const category = document.createElement("div");
  category.className = "article-feature-category";
  category.append(...data.Category.childNodes);

  // Title
  const title = document.createElement("div");
  title.className = "article-feature-title";
  title.append(...data.Title.childNodes);

  // Meta Row
  const meta = document.createElement("div");
  meta.className = "article-feature-meta";

  const date = document.createElement("span");
  date.className = "article-feature-date";
  date.textContent = data.Date.textContent.trim();

  const author = document.createElement("span");
  author.className = "article-feature-author";
  author.append(...data.Author.childNodes);

  meta.append(date, author);

  // Description
  const description = document.createElement("div");
  description.className = "article-feature-description";
  description.textContent = data.Description.textContent.trim();

  // CTA
  const cta = document.createElement("a");
  cta.className = "article-feature-cta";
  cta.href = "#";
  cta.textContent = "READ MORE";

  content.append(category, title, meta, description, cta);

  // Image
  const img = data.Image?.querySelector("picture,img");

  if (img) {
    imageContainer.append(img.cloneNode(true));
  }

  wrapper.append(content, imageContainer);

  block.textContent = "";
  block.append(wrapper);
}
