import {useState} from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import Button from "../../components/Button";
import FormDialog from "./FormDialog";


const Index = ({transactions}) => {
  const [formDialogOpen, setFormDialogOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Transactions</h1>
          <p className="text-base text-zinc-500">
            View all your transactions here.
          </p>
        </div>
        <div>
          <Button size="sm" onClick={() => setFormDialogOpen(true)}>Record Transaction</Button>
        </div>
      </div>
    </div>
  )
}

Index.layout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default Index;