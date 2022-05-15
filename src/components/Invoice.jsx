import { useParams,
         useNavigate,
         useLocation,
} from "react-router-dom";
import { getInvoice, deleteInvoice } from "./utils/data";

export default function Invoice() {
    let navigate = useNavigate();  // to navigate to certain page
    let location = useLocation(); // for current location object

    let params = useParams(); // for parameters we defined in the url
    let invoice = getInvoice(parseInt(params.invoiceId, 10));

    return (
        <main style={{ padding: "1rem" }}>
        <h2>Total Due: {invoice.amount}</h2>
        <p>
            {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
        <p>
            <button
            onClick={() => {
                deleteInvoice(invoice.number);
                // console.log(location)
                navigate("/invoices" + location.search);
            }}
            >
            Delete
            </button>
        </p>

        </main>
    );
  }