import { render } from "react-dom";

import {BrowserRouter,Routes,Route} from "react-router-dom";
// import your route components too

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInSide/>}>
        <Route index element={<Home />} />
        <Route path="Drawer " element={<Drawer />}>
          <Route path="SignUpSide" element={<SignUpSide />} />
          <Route path="FixedSizeGrid" element={<FixedSizeGrid />} />
          <Route index element={<Projectlist />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);