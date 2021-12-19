import { useState } from "react";
import type { LoaderFunction, MetaFunction } from "remix";
import { json, useLoaderData } from "remix";
import paceParty from "../assets/paceparty.png";
import wanted from "../assets/wanted.png";

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: IndexData = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://remix.run/docs",
      },
      {
        name: "React Router Docs",
        url: "https://reactrouter.com/docs",
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d",
      },
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions",
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading",
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries",
      },
    ],
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Pace Party 2021",
    description: "Welcome to the party!",
  };
};

export function PaceParty() {
  const [loaded, setLoaded] = useState(false);
  console.log("loaded:", loaded);

  return (
    <>
      <div>
        <img
          style={{
            display: "block",
            marginTop: "5%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src={paceParty}
        ></img>
      </div>
      <div
        className="welcome"
        style={{ textAlign: "center", fontSize: "13vw" }}
      >
        Welcome
      </div>
      <div
        className="welcome"
        style={{ textAlign: "center", marginTop: "-2rem" }}
      >
        <img
          style={{ width: "50%", marginTop: "10%" }}
          src={wanted}
          onLoad={() => setLoaded(true)}
        ></img>
        <p>
          <span style={{ color: "red" }}>Date:</span> <br></br>Saturday, January
          1{" "}
        </p>
        <p>
          <span style={{ color: "red" }}>Time:</span> <br></br> 5:00 P.M.{" "}
        </p>
        <p>
          <span style={{ color: "red" }}>Place:</span> <br></br>
          <a href="https://maps.google.com/?q=4300+UT-32+Oakley+UT+84055">
            <a href="https://maps.apple.com/maps?q=4300+UT-32+Oakley+UT+84055">
              {" "}
              Gravestone Saloon
            </a>
          </a>
        </p>
      </div>
    </>
  );
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return <PaceParty />;
}
