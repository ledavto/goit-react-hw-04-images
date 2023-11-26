export const Button = ({ onLoadMore }) => {
  return (
    <footer className="loadMoreBar">
      <button type="button" className="button" onClick={onLoadMore}>
        <span className="button-label">Load more</span>
      </button>
    </footer>
  );
};
