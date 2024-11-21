import ArticleImage from "./ArticleImage";
export default function ArticlesItem({ article }) {
  return (
    <div className="bg-black h-full relative flex justify-center">
      <ArticleImage
        src={article.imageUrl}
        fallbackSrc={article.sourceIcon}
        alt="No Image Found"
      />

      <button
        onClick={() => readArticleHandler(article.id)}
        className="rounded-full absolute top-4 right-4 bg-white p-2 shadow-md"
      >
        <img className="h-6 w-6 z-10 " src="/icons/audio-lines.svg" />
      </button>
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent h-1/2 flex items-end">
        <p className=" font-bold px-4 py-8 text-4xl text-white font-bangers tracking-wider">
          {article.title}
        </p>
      </div>
    </div>
  );
}
