import Layout from "../../../components/layout/Layout";
import DashboardTab from "./DashboardTab";

function Dashboard() {
  
return (
  <Layout>
      <section className="text-gray-600 body-font mt-10 mb-10">
          <DashboardTab/>
      </section>
  </Layout>
)
}

export default Dashboard