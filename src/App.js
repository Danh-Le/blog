import {
  PrismicRichText,
  useAllPrismicDocumentsByType,
  usePrismicDocumentByID,
} from "@prismicio/react";

const App = () => {
  const [documents] = useAllPrismicDocumentsByType("blog");
  console.log(document);
  return (
    <div>{document && <PrismicRichText field={document.data.blog} />}</div>
  );
};

// get post by id
// const [document, { state, error }] = usePrismicDocumentByID("");

export default App;
