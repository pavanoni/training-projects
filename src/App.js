import { BrowserRouter } from "react-router-dom";
import { GridComponent } from "./components/grid/grid.component";
import { AppRouter } from "./app.router";
import { Menucomponent } from "./components/menu/menu.component";
import { AdminLayout } from "./components/admin/layout/admin-layout/admin-layout.component";

function App (){
  return(
    <div>
    <BrowserRouter>
      <Menucomponent></Menucomponent>
      {/* <AdminLayout></AdminLayout> */}
      <AppRouter></AppRouter>
    </BrowserRouter>
    </div>
  )
}
export default App;



