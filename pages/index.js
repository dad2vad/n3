import { useRouter } from 'next/router';
import useSWR from 'swr';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}
//  /api/randomQuote?author=ow
export default function Index() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    `/api/Q${query.author ? '?author=' + query.author : ''}`,
    fetcher
  );
  // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`
  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';

  return (
    <main className="center">
      <div className="quote">{quote}</div>
      {author && <span className="author">- {author}</span>}

      <style jsx>{`
        main {
          width: 95%;
          max-width: 9000px;
          margin: 300px auto;
          text-align: top;
        }
        .quote {
          font-family: monospace;
          color: #e243de;
          font-size: 24px;
          padding-bottom: 10px;
        }
        .author {
          font-family: monospace;
          color: #559834;
          font-size: 24px;
        }
      `}</style>
        <div className="quote">{quote}</div>
      {author && <span className="author">- {author}</span>}

      <style jsx>{`
        main {
          width: 95%;
          max-width: 9000px;
          margin: 300px auto;
          text-align: top;
        }
        .quote {
          font-family: monospace;
          color: #e243de;
          font-size: 24px;
          padding-bottom: 10px;
        }
        .author {
          font-family: monospace;
          color: #559834;
          font-size: 24px;
        }
      `}</style>
        <div className="quote">{quote}</div>
      {author && <span className="author">- {author}</span>}

      <style jsx>{`
        main {
          width: 95%;
          max-width: 9000px;
          margin: 300px auto;
          text-align: top;
        }
        .quote {
          font-family: monospace;
          color: #e243de;
          font-size: 24px;
          padding-bottom: 10px;
        }
        .author {
          font-family: monospace;
          color: #559834;
          font-size: 24px;
        }
      `}</style>
        <div className="quote">{quote}</div>
      {author && <span className="author">- {author}</span>}

      <style jsx>{`
        main {
          width: 95%;
          max-width: 9000px;
          margin: 300px auto;
          text-align: top;
        }
        .quote {
          font-family: monospace;
          color: #e243de;
          font-size: 24px;
          padding-bottom: 10px;
        }
        .author {
          font-family: monospace;
          color: #559834;
          font-size: 24px;
        }
      `}</style>
        <div className="quote">{quote}</div>
      {author && <span className="author">- {author}</span>}

      <style jsx>{`
        main {
          width: 95%;
          max-width: 9000px;
          margin: 300px auto;
          text-align: top;
        }
        .quote {
          font-family: monospace;
          color: #e243de;
          font-size: 24px;
          padding-bottom: 10px;
        }
        .author {
          font-family: monospace;
          color: #559834;
          font-size: 24px;
        }
      `}</style>
        <div className="quote">{quote}</div>
      {author && <span className="author">- {author}</span>}

      <style jsx>{`
        main {
          width: 95%;
          max-width: 9000px;
          margin: 300px auto;
          text-align: top;
        }
        .quote {
          font-family: monospace;
          color: #e243de;
          font-size: 24px;
          padding-bottom: 10px;
        }
        .author {
          font-family: monospace;
          color: #559834;
          font-size: 24px;
        }
      `}</style>
    </main>
  );
}
