import React, { useContext, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import { ModeContext } from "../Context/ModeContext";
import Footer from "./Footer";

const Home = () => {
  const { name, surname } = useContext(UserContext);
  const { mode, setMode } = useContext(ModeContext);

  useEffect(() => {
    if (mode === "dark") {
      document.body.className = "dark";
    } else {
      document.body.className = "light";
    }
    console.log("mode deyisdirildi");
  }, [mode]);

  return (
    <div>
      <button
        onClick={() => {
          mode === "dark" ? setMode("light") : setMode("dark");
        }}
      >
        {mode === "dark" ? "🌞" : "🌛"}
      </button>
      <h1>
        {name} {surname}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit quam
        veritatis similique saepe accusantium officiis ipsam neque aliquam!
        Ipsam aut necessitatibus eaque asperiores accusantium totam optio
        ratione eveniet cupiditate. Voluptates ipsum, explicabo quis iusto quasi
        expedita ducimus vero, sequi rerum omnis excepturi accusamus adipisci?
        Velit, ipsam molestias dolor molestiae accusantium perferendis ratione
        maiores dignissimos maxime placeat aspernatur accusamus. Nesciunt.
      </p>

      <Footer />
    </div>
  );
};

export default Home;
