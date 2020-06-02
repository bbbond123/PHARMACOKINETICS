import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchposts } from "../store/actions/postAction";
import BarChart from "../components/BarChart";

export default function Home() {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchposts());
  }, []);

  return (
    <div className="container">
      <ul>
        {posts.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <div id="chart">
        <BarChart />
      </div>
    </div>
  );
}
