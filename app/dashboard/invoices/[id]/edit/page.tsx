import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import EditInvoiceForm from "@/app/ui/invoices/edit-form";
import { notFound } from "next/navigation";

export default async function Page(props: {params: Promise<{id: string}>}) {
    const {id} = await props.params;
    
    const [invoice, customers] = await Promise.all( [
        fetchInvoiceById(id),
        fetchCustomers()
    ])

    if(!invoice) notFound();

    return <EditInvoiceForm invoice={invoice} customers={customers} />
}