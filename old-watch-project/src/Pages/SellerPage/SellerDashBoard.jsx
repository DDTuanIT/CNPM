import { Header } from "./Header";
import { PageHeader } from "./PageHeader";
import './SellerDashBoard.css'
import { StatusGrid } from "./StatusGrid";
import { TabContainer } from "./TabContainer";
import {Footer} from '../Footer/Footer'
export function SellerDashBoard() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
					<PageHeader />

          <StatusGrid />

          <TabContainer />
        </div>
      </main>
      <Footer />
    </>
  );
}
