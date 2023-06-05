import "./styles.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

const style = {
  border: "1px solid black",
  margin: 12,
  padding: 8
};

export default function App() {
  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  const fetchData = () => {
    if (dataSource.length < 200) {
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({ length: 20 })));
      }, 500);
    } else {
      setHasMore(false);
    }
  };
  return (
    <div className="App">
      <InfiniteScroll
        dataLength={dataSource.length}
        hasMore={hasMore}
        next={fetchData}
        loader={<p>...Loading</p>}
        endMessage={<p>You all set</p>}
        height={500}
      >
        {dataSource.map((item, index) => {
          return <div style={style}>This is a {index + 1}</div>;
        })}
      </InfiniteScroll>
    </div>
  );
}
